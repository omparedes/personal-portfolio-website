import type { Locale } from "@/content/schema"

export const homePath = "/"
export const projectsPath = "/projects"
export const aboutPath = "/about"
export const contactPath = "/contact"
export const localeHeader = "x-portfolio-locale"
export const themeHeader = "x-portfolio-theme"

export type PortfolioSearch = Record<string, string | string[] | undefined>
export type Theme = "light" | "dark"
export type Preferences = { locale: Locale; theme: Theme }

export function portfolioLocale(lang: unknown): Locale {
  return lang === "en" ? "en" : "es"
}

export function portfolioTheme(theme: unknown): Theme {
  return theme === "light" ? "light" : "dark"
}

export function preferences(query: PortfolioSearch): Preferences {
  return { locale: portfolioLocale(query.lang), theme: portfolioTheme(query.theme) }
}

export function portfolioHref(path: string, { locale, theme }: Preferences, extra: Record<string, string> = {}) {
  const query = new URLSearchParams({ lang: locale, theme })
  for (const [key, value] of Object.entries(extra)) {
    if (value) query.set(key, value)
  }
  return `${path}?${query}`
}
