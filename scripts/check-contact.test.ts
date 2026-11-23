import assert from "node:assert/strict"
import { existsSync, readdirSync } from "node:fs"
import test from "node:test"
import { contactEmail, contactEmailLink, githubProfile, requestResumeLink } from "../lib/public-links.ts"

test("contact destinations retain their public protocols", () => {
  assert.match(contactEmail, /^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  const email = new URL(contactEmailLink)
  assert.equal(email.protocol, "mailto:")
  assert.equal(email.pathname, contactEmail)
  assert.equal(email.searchParams.get("subject"), "[PORTAFOLIO] Contacto desde mi sitio web")
  const resume = new URL(requestResumeLink)
  assert.equal(resume.protocol, "mailto:")
  assert.equal(resume.pathname, contactEmail)
  assert.equal(resume.searchParams.get("subject"), "[PORTAFOLIO] Solicitud de CV")
  assert.equal(new URL(githubProfile).origin, "https://github.com")
})

test("the candidate contains no contact API or submission entry point", () => {
  assert(readdirSync("app/contact").every(name => ["page.tsx", "_contact.tsx", "_copy-email.tsx", "_labels.ts", "contact.module.css"].includes(name)))
  assert(!existsSync("app/api") && !existsSync("app/design-preview") && !existsSync("lib/contact"))
})
