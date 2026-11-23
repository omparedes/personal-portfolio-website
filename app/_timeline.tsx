import { Aperture, BookOpen, ChevronDown, Code2 } from "lucide-react"
import type { TimelinePeriod } from "@/content/schema"
import type { PortfolioEvent } from "./_content"
import { labels } from "./_labels"
import { category, Technologies } from "./_project-card"
import { portfolioHref, projectsPath, type Preferences } from "./_routes"
import s from "./preview.module.css"

function displayPeriod(period: TimelinePeriod, locale: Preferences["locale"]) {
  const t = labels[locale]
  if (period.kind === "undated") return t[period.stage]
  if (period.kind === "years") {
    const years = period.from === period.to ? String(period.from) : `${period.from}–${period.to}`
    return period.precision === "exact" ? years : `${t.approximate} ${years}`
  }
  const date = new Intl.DateTimeFormat(locale, { dateStyle: "medium", timeZone: "UTC" }).format(new Date(period.asOf))
  return t.nearlyYears.replace("{years}", String(period.years)).replace("{date}", date)
}

export function Timeline({ events, preferences, linkToDetails = false }: {
  events: PortfolioEvent[]; preferences: Preferences; linkToDetails?: boolean
}) {
  const t = labels[preferences.locale]
  return <ul className={s.events}>{events.map((event, index) => {
    const Icon = event.kind === "education" ? BookOpen : event.kind === "research" ? Aperture : Code2
    return <li key={event.id}>
      <span className={s.marker} aria-hidden="true"><Icon size={18}/></span>
      <details open={index === 0}>
        <summary>
          <span>
            <small>{event.kind === "experience" ? t.work : category(event.kind, t)} · {displayPeriod(event.period, preferences.locale)}</small>
            <b>{event.title}</b>
          </span>
          <ChevronDown size={19} aria-hidden="true"/>
        </summary>
        <div className={s.eventBody}>
          {event.body && <p>{event.body}</p>}
          {event.technologies.length > 0 && <ul className={s.chips}>
            {event.technologies.map(technology => <li key={technology.id}>{technology.name}</li>)}
          </ul>}
          {event.projects.map(project => <div key={project.id}>
            <Technologies project={project} t={t}/>
            <a href={linkToDetails ? portfolioHref(`${projectsPath}/${project.slug}`, preferences) : `#${project.id}`}>
              {t.goProject} · {project.name}
            </a>
          </div>)}
        </div>
      </details>
    </li>
  })}</ul>
}
