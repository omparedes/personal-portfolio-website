import { FileText } from "lucide-react"
import type { Locale } from "@/content/schema"
import { aboutLabels } from "./_labels"
import s from "./about.module.css"

type ResumeDocument = {
  locale: Locale
  file: `/${string}.pdf`
  version?: string
}

export function ResumePanel({ locale, documents = [] }: {
  locale: Locale
  documents?: readonly ResumeDocument[]
}) {
  const t = aboutLabels[locale]
  return <section id="resume" className={s.panel} aria-labelledby="resume-title">
    <FileText size={22} aria-hidden="true"/>
    <h2 id="resume-title">{t.resume}</h2>
    {documents.length === 0 ? <p>{t.resumePending}</p> : <ul>
      {documents.map(({ locale: language, file, version }) => <li key={language}>
        <b lang={language}>{language === "es" ? "Español" : "English"}</b>
        {version && <span> · {version}</span>}
        <div className={s.panelActions}>
          <a href={file} type="application/pdf">{t.view} · {language.toUpperCase()}</a>
          <a href={file} download>{t.download} · {language.toUpperCase()}</a>
        </div>
      </li>)}
    </ul>}
  </section>
}
