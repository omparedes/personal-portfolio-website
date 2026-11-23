import { headers } from "next/headers"
import { portfolioContent } from "./_content"
import { labels } from "./_labels"
import { homePath, localeHeader, portfolioHref, portfolioLocale, portfolioTheme, themeHeader } from "./_routes"
import { PortfolioShell } from "./_shell"
import s from "./preview.module.css"

export default async function NotFound() {
  const request = await headers()
  const locale = portfolioLocale(request.get(localeHeader))
  const selected = { locale, theme: portfolioTheme(request.get(themeHeader)) }
  const { name } = portfolioContent(selected.locale)
  const t = labels[locale]
  return <PortfolioShell preferences={selected} name={name} path="">
    <section className={s.catalog}>
      <div className={s.pageIntro}>
        <h1>{t.pageNotFound}</h1>
        <a className={s.backLink} href={portfolioHref(homePath, selected)}>
          {t.backHome}
        </a>
      </div>
    </section>
  </PortfolioShell>
}
