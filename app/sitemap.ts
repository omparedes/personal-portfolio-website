import type { MetadataRoute } from "next"
import { portfolioContent } from "./_content"
import { aboutPath, contactPath, homePath, projectsPath } from "./_routes"
import { canonicalUrl } from "./_seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const { projects } = portfolioContent("es")
  const paths = [homePath, projectsPath, ...projects.map(project => `${projectsPath}/${project.slug}`), aboutPath, contactPath]
  return paths.flatMap(path => {
    const es = canonicalUrl(path, "es")
    const en = canonicalUrl(path, "en")
    const alternates = { languages: { es, en, "x-default": es } }
    return [{ url: es, alternates }, { url: en, alternates }]
  })
}
