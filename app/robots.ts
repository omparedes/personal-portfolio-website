import type { MetadataRoute } from "next"
import { isIndexableDeployment, siteOrigin } from "./_seo"

export default function robots(): MetadataRoute.Robots {
  if (!isIndexableDeployment()) return { rules: { userAgent: "*", disallow: "/" } }

  return {
    rules: { userAgent: "*", allow: "/", disallow: "/cv-review/" },
    sitemap: new URL("/sitemap.xml", siteOrigin).href,
  }
}
