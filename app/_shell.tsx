import type { ReactNode } from "react"
import { Globe2, Layers3, Moon, Sun } from "lucide-react"
import { labels } from "./_labels"
import { aboutPath, contactPath, homePath, portfolioHref, projectsPath, type Preferences } from "./_routes"
import s from "./preview.module.css"

type ShellProps = {
  preferences: Preferences
  name: string
  path: string
  query?: Record<string, string>
  catalogQuery?: Record<string, string>
  children: ReactNode
}

export function PortfolioShell({ preferences, name, path, query, catalogQuery, children }: ShellProps) {
  const { locale, theme } = preferences
  const t = labels[locale]
  const otherLocale = locale === "es" ? "en" : "es"
  const otherLanguage = otherLocale === "en" ? "English" : "Español"
  const names = name.split(" ")
  const signature = [names[0], names.length > 2 ? names.at(-2) : names[1]].filter(Boolean).join(" ")
  const home = portfolioHref(homePath, preferences)

  return <div className={s.preview} lang={locale} data-theme={theme}>
    <a className={s.skip} href="#content">{t.skip}</a>
    <header className={s.header}>
      <div className={s.headerInner}>
        <a className={s.brand} href={home} aria-current={path === homePath ? "page" : undefined} aria-label={`${signature} · ${t.start}`}>
          <span className={s.brandIcon}><Layers3 size={23} strokeWidth={2.4}/></span>{signature}
        </a>
        <nav className={s.nav} aria-label={t.nav}>
          <a href={portfolioHref(projectsPath, preferences, catalogQuery)} aria-current={path === projectsPath ? "page" : path.startsWith(`${projectsPath}/`) ? "location" : undefined}>{t.projects}</a>
          <a href={portfolioHref(aboutPath, preferences)} aria-current={path === aboutPath ? "page" : undefined}>{t.about}</a>
          <a href={portfolioHref(contactPath, preferences)} aria-current={path === contactPath ? "page" : undefined}>{t.contact}</a>
        </nav>
        <div className={s.controls}>
          <a href={portfolioHref(path, { ...preferences, locale: otherLocale }, query)} hrefLang={otherLocale}
            aria-label={`${t.switchLanguage}: ${otherLanguage}`} title={`${t.switchLanguage}: ${otherLanguage}`}>
            <Globe2 size={16}/>{otherLocale.toUpperCase()}
          </a>
          <a href={portfolioHref(path, { ...preferences, theme: theme === "light" ? "dark" : "light" }, query)}
            aria-label={theme === "light" ? t.dark : t.light} title={theme === "light" ? t.dark : t.light}>
            {theme === "light" ? <Moon size={18}/> : <Sun size={18}/>}
          </a>
        </div>
      </div>
    </header>
    <main id="content" tabIndex={-1} className={s.wrap}>{children}</main>
    <footer className={s.footer}>
      <div className={s.wrap}><span>{name}</span></div>
    </footer>
  </div>
}
