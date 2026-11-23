import assert from "node:assert/strict"
import { createHash } from "node:crypto"
import { readFile, readdir } from "node:fs/promises"
import path from "node:path"
import { contactEmailLink, requestResumeLink } from "../lib/public-links.ts"

const target = process.argv.slice(2).find(argument => !argument.startsWith("--"))
const base = new URL(target ?? "http://127.0.0.1:3218")
const publicOrigin = "https://portafolio-plum-xi-81.vercel.app"
const indexable = process.argv.includes("--indexable")
const localTarget = ["127.0.0.1", "localhost", "[::1]"].includes(base.hostname)
assert(
  localTarget || (indexable && base.origin === publicOrigin),
  "Use a local server or the approved production domain",
)
const locales = ["es", "en"] as const
const blocked = ["/design-preview", "challenges.cloudflare.com", "api.resend.com"]
const secretPattern = /-----BEGIN [A-Z ]*PRIVATE KEY-----|\b(?:ghp_[A-Za-z0-9]{30,}|re_[A-Za-z0-9]{24,})\b/

function scan(text: string, artifact: string) {
  for (const marker of blocked) {
    assert(!text.includes(marker) && !text.includes(JSON.stringify(marker).slice(1, -1)),
      `Non-public content matched in ${artifact}`)
  }
  assert(!secretPattern.test(text), `Credential pattern matched in ${artifact}`)
}

async function files(directory: string) {
  const entries = await readdir(directory, { recursive: true, withFileTypes: true })
  return entries.filter(entry => entry.isFile()).map(entry => path.join(entry.parentPath, entry.name))
}

async function hashes(filenames: string[]) {
  const digests = await Promise.all(filenames.map(async filename =>
    createHash("sha256").update(await readFile(filename)).digest("hex"),
  ))
  return digests.sort()
}

const projectSlugs = ["sigcoop", "smartparking", "pcmym", "melodycosmetics"]
const activeRoutes = ["/", "/projects", ...projectSlugs.map(slug => `/projects/${slug}`), "/about", "/contact"]
const approvedAssets = ["brand/op-claro.svg", "brand/op-oscuro.svg", "profile-photo.jpg"]
const expectedIcons = {
  "/apple-icon.png": { rel: "apple-touch-icon", type: /^image\/png/ },
  "/favicon.ico": { rel: "icon", type: /^image\/(?:x-icon|vnd\.microsoft\.icon)/ },
  "/icon.svg": { rel: "icon", type: /^image\/svg\+xml/ },
}

function findIconLinks(html: string) {
  return (html.match(/<link\b[^>]*>/g) ?? []).flatMap(tag => {
    const rel = tag.match(/\brel="(icon|apple-touch-icon)"/)?.[1]
    const href = tag.match(/\bhref="([^"]+)"/)?.[1]
    return rel && href ? [{ rel, url: new URL(href, base) }] : []
  })
}
async function verify() {
  assert.deepEqual((await files("public")).map(filename => path.relative("public", filename).split(path.sep).join("/")).sort(), approvedAssets.sort())
  const buildPath = ".next"
  const media = await files(path.join(buildPath, "static", "media"))
  const approvedMedia = [...await files("app/_assets"), ...(await files("app/fonts")).filter(name => name.endsWith(".woff2"))]
  assert.deepEqual(await hashes(media), await hashes(approvedMedia), "Built media must match approved local assets")
  const manifests = ["server/app-paths-manifest.json", "app-path-routes-manifest.json", "routes-manifest.json"]
  for (const filename of manifests) {
    const manifest = await readFile(path.join(buildPath, filename), "utf8")
    scan(manifest, filename)
    assert(!manifest.includes("/contact/send") && !manifest.includes("/api/contact"))
  }
  const builds = (await files(path.join(buildPath, "static"))).filter(filename => /\.(?:js|css|json|map|html|rsc|txt)$/.test(filename))
  assert(builds.length > 0, "No build assets to audit")
  for (const filename of builds) scan(await readFile(filename, "utf8"), filename)
  for (const filename of await files(path.join(buildPath, "server"))) {
    if (/\.(?:js|html|rsc|json|meta|body)$/.test(filename)) scan(await readFile(filename, "utf8"), filename)
  }

  const checkedIcons = new Set<string>()
  for (const route of activeRoutes) for (const lang of locales) {
    const url = new URL(route, base)
    url.searchParams.set("lang", lang)
    const response = await fetch(url, { headers: { "x-portfolio-locale": lang === "en" ? "es" : "en" } })
    assert.equal(response.status, 200, String(url))
    const html = await response.text()
    scan(html, url.pathname)
    assert(html.includes(`<html lang="${lang}"`), String(url))
    assert(html.includes(indexable ? 'name="robots" content="index, follow"' : 'name="robots" content="noindex, nofollow"'))
    if (indexable) assert(!/noindex/i.test(response.headers.get("x-robots-tag") ?? ""))
    assert.match(html, /<title>[^<]+<\/title>/)
    assert.match(html, /name="description" content="[^"]+"/)
    assert.match(html, /property="og:title" content="[^"]+"/)
    assert.match(html, /property="og:description" content="[^"]+"/)
    assert(html.includes(`property="og:locale" content="${lang === "en" ? "en_US" : "es_PE"}"`))
    assert(html.includes(`property="og:image" content="${publicOrigin}/profile-photo.jpg"`))
    const spanish = publicOrigin + route
    const english = spanish + "?lang=en"
    const expectedCanonical = lang === "en" ? english : spanish
    const canonical = html.match(/<link\b(?=[^>]*\brel="canonical")[^>]*>/)?.[0].match(/\bhref="([^"]+)"/)?.[1]
    assert(canonical, String(url))
    assert.equal(new URL(canonical).href, expectedCanonical, String(url))
    const openGraphUrl = html.match(/property="og:url" content="([^"]+)"/)?.[1]
    assert(openGraphUrl, String(url))
    assert.equal(new URL(openGraphUrl).href, expectedCanonical)
    for (const [language, href] of [["es", spanish], ["en", english], ["x-default", spanish]]) {
      const alternate = html.match(new RegExp(`hrefLang="${language}" href="([^"]+)"`))?.[1]
      assert(alternate, `Missing alternate in ${url}`)
      assert.equal(new URL(alternate).href, href)
    }
    const iconLinks = findIconLinks(html)
    assert.deepEqual(iconLinks.map(({ url }) => url.pathname).sort(), Object.keys(expectedIcons).sort())
    for (const { rel, url: iconUrl } of iconLinks) {
      assert.equal(iconUrl.origin, base.origin)
      const icon = expectedIcons[iconUrl.pathname as keyof typeof expectedIcons]
      assert.equal(rel, icon.rel)
      if (checkedIcons.has(iconUrl.href)) continue
      const response = await fetch(iconUrl)
      assert.equal(response.status, 200)
      assert.match(response.headers.get("content-type") ?? "", icon.type)
      assert.deepEqual(Buffer.from(await response.arrayBuffer()), await readFile(path.join("app", iconUrl.pathname.slice(1))))
      checkedIcons.add(iconUrl.href)
    }
    if (route === "/contact") {
      assert(!html.includes("<form"))
      assert(html.includes(`href="${contactEmailLink}"`) && html.includes("https://github.com/omparedes"))
    }
    if (route === "/about") assert(html.includes(`href="${requestResumeLink}"`))
    if (route === "/projects" || route === "/") {
      assert.deepEqual(
        [...html.matchAll(/<article id="project\.([^"]+)"/g)].map(match => match[1]),
        projectSlugs,
      )
      for (const slug of projectSlugs) assert(html.includes(`href="/projects/${slug}?`))
    }
    assert(!html.includes('href="/cv-review/'), "Local résumé links must stay out of the public configuration")
    assert(!/href="[^"]+\.pdf(?:[?"#]|$)/i.test(html))
    const stream = await fetch(url, { headers: { RSC: "1" } })
    assert.equal(stream.status, 200)
    assert.match(stream.headers.get("content-type") ?? "", /text\/x-component/)
    scan(await stream.text(), `${url.pathname} RSC`)
  }

  for (const route of ["/design-preview", ...activeRoutes.slice(1).map(route => "/design-preview" + route),
    "/projects/unknown", "/profile-photo2.jpg", "/icon-light-32x32.png", "/icon-dark-32x32.png"]) {
    assert.equal((await fetch(new URL(route, base))).status, 404, route)
  }
  for (const route of ["/contact/send", "/design-preview/contact/send", "/api/contact"]) {
    assert.equal((await fetch(new URL(route, base))).status, 404, route)
    if (localTarget) {
      assert.equal((await fetch(new URL(route, base), { method: "POST", redirect: "error" })).status, 404, route)
    }
  }
  for (const language of locales) {
    const response = await fetch(new URL(`/cv-review/${language}`, base))
    assert.equal(response.status, 404, "Local résumés must be unavailable in the public configuration")
  }
  const missing = await fetch(new URL("/projects/unknown?lang=en&theme=light", base))
  assert.equal(missing.status, 404)
  const errorPage = await missing.text()
  assert(errorPage.includes('<html lang="en"') && errorPage.includes('data-theme="light"') && errorPage.includes("Page not found"))

  const sitemapResponse = await fetch(new URL("/sitemap.xml", base))
  assert.equal(sitemapResponse.status, 200)
  const sitemap = await sitemapResponse.text()
  scan(sitemap, "sitemap.xml")
  assert.equal((sitemap.match(/<loc>/g) ?? []).length, activeRoutes.length * locales.length)
  assert(!sitemap.includes("/contact/send"))
  assert(!sitemap.includes("/cv-review"))
  for (const route of activeRoutes) for (const lang of locales) {
    assert(sitemap.includes(`<loc>${publicOrigin}${route}${lang === "en" ? "?lang=en" : ""}</loc>`))
  }
  const robotsResponse = await fetch(new URL("/robots.txt", base))
  assert.equal(robotsResponse.status, 200)
  const robots = await robotsResponse.text()
  if (indexable) {
    assert.match(robots, /^Allow: \/$/m)
    assert.match(robots, /^Disallow: \/cv-review\/$/m)
    assert(!/^Disallow: \/$/m.test(robots))
    assert(robots.includes(`Sitemap: ${publicOrigin}/sitemap.xml`))
  } else {
    assert.match(robots, /^Disallow: \/$/m)
  }
  console.log(`Audited ${builds.length} static text assets, ${media.length} media files, manifests, public files, ${activeRoutes.length * locales.length} HTML responses and ${activeRoutes.length * locales.length} RSC responses.`)
}

verify().catch(error => {
  console.error(error)
  process.exitCode = 1
})
