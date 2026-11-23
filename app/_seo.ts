import "server-only"
import type { Metadata } from "next"
import type { Locale } from "@/content/schema"
import { portfolioContent } from "./_content"

export const siteOrigin = new URL("https://portafolio-plum-xi-81.vercel.app")

export function isIndexableDeployment() {
  return process.env.NODE_ENV === "production" &&
    process.env.VERCEL === "1" &&
    process.env.VERCEL_ENV === "production" &&
    process.env.VERCEL_TARGET_ENV === "production"
}

export function canonicalUrl(path: string, locale: Locale) {
  const url = new URL(path, siteOrigin)
  if (locale === "en") url.searchParams.set("lang", "en")
  return url.href
}

export function pageMetadata(path: string, locale: Locale, title: string, description?: string): Metadata {
  const { name } = portfolioContent(locale)
  const fullTitle = name ? `${title} | ${name}` : title
  const canonical = canonicalUrl(path, locale)
  const spanish = canonicalUrl(path, "es")
  return {
    title: fullTitle,
    description,
    alternates: {
      canonical,
      languages: { es: spanish, en: canonicalUrl(path, "en"), "x-default": spanish },
    },
    openGraph: {
      type: "website",
      title: fullTitle,
      description,
      url: canonical,
      siteName: name,
      locale: locale === "es" ? "es_PE" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_PE",
      images: [{ url: "/profile-photo.jpg", width: 704, height: 704, alt: name }],
    },
    twitter: { card: "summary", title: fullTitle, description },
  }
}
