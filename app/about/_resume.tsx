import { FileText } from "lucide-react"
import type { Locale } from "@/content/schema"
import type { ResumeLanguage } from "@/lib/resume-review"
import { aboutLabels } from "./_labels"
import s from "./about.module.css"

const nativeNames = { es: "Español", en: "English" }

export function ResumePanel({ locale, documents }: {
  locale: Locale
  documents: readonly ResumeLanguage[]
}) {
  const t = aboutLabels[locale]
  return <section id="resume" className={s.panel} aria-labelledby="resume-title">
    <FileText size={22} aria-hidden="true"/>
    <h2 id="resume-title">{t.resume}</h2>
    <ul className={s.resumeList} role="list">
      {documents.map(language => <li key={language}>
        <h3><span lang={language}>{nativeNames[language]}</span> <small>· 2026</small></h3>
        <div className={s.panelActions}>
          <a href={`/cv-review/${language}`} hrefLang={language} type="application/pdf">{t.view} {t.resumeLanguages[language]}</a>
          <a href={`/cv-review/${language}?download=1`} hrefLang={language} type="application/pdf" download>{t.download} {t.resumeLanguages[language]}</a>
        </div>
      </li>)}
    </ul>
  </section>
}
