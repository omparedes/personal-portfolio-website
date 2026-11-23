import { Github, Mail } from "lucide-react"
import { contactEmail, contactEmailLink, githubProfile } from "@/lib/public-links"
import { portfolioContent } from "../_content"
import { labels } from "../_labels"
import { contactPath, type Preferences } from "../_routes"
import { PortfolioShell } from "../_shell"
import { CopyEmail } from "./_copy-email"
import { contactLabels } from "./_labels"
import s from "./contact.module.css"

export function ContactPageContent({ preferences }: { preferences: Preferences }) {
  const { locale } = preferences
  const { name } = portfolioContent(locale)
  const t = contactLabels[locale]
  return <PortfolioShell preferences={preferences} name={name} path={contactPath}>
    <article className={s.page}>
      <header className={s.intro}>
        <p className={s.kicker}>{labels[locale].contact}</p>
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
      </header>
      <div className={s.layout}>
        <section className={s.directPanel}>
          <Mail size={24} aria-hidden="true"/>
          <h2>{t.direct}</h2>
          <a className={s.address} href={contactEmailLink}>{contactEmail}</a>
          <p>{t.emailHint}</p>
          <CopyEmail locale={locale}/>
        </section>
        <div className={s.sidebar}>
          <section className={s.panel}><Github size={22} aria-hidden="true"/><h2>{t.profiles}</h2>
            <a className={s.link} href={githubProfile}>GitHub</a>
          </section>
        </div>
      </div>
      <section className={s.privacy} aria-labelledby="privacy-title">
        <h2 id="privacy-title">{t.privacy}</h2>
        <p>{t.privacyUse}</p><p>{t.privacyRetention}</p>
      </section>
    </article>
  </PortfolioShell>
}
