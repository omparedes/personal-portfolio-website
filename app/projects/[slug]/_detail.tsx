import { ChevronLeft, ChevronRight, FileCode2 } from "lucide-react"
import { notFound } from "next/navigation"
import { publicProjectCase } from "@/content/public-view"
import { portfolioContent } from "../../_content"
import { labels } from "../../_labels"
import { category, ProjectLinks, ProjectMedia, ProjectStatus, Technologies } from "../../_project-card"
import { portfolioHref, projectsPath, type Preferences, type PortfolioSearch } from "../../_routes"
import { PortfolioShell } from "../../_shell"
import preview from "../../preview.module.css"
import { filterProjects } from "../_filters"
import { caseLabels } from "./_case-labels"
import { caseImages } from "./_case-media"
import { Gallery } from "./_gallery"
import s from "./case.module.css"

const sectionOrder = ["context", "participation", "architecture", "feature", "decision", "challenge", "quality", "result", "limitation"] as const
type CaseEntry = ReturnType<typeof publicProjectCase>[number]
type CaseLabels = typeof caseLabels.es

function sourceList(entries: CaseEntry[]) {
  return [...new Map(entries.flatMap(entry => entry.sources.map(source => [source.href, source] as const))).values()]
}

function EvidenceLinks({ sources, label }: { sources: ReturnType<typeof sourceList>; label: string }) {
  if (!sources.length) return null
  return <ul className={s.sources} aria-label={label}>
    {sources.map(source => <li key={source.href}>
      <a href={source.href} title={source.path}><FileCode2 size={15} aria-hidden="true"/>{source.path.split("/").at(-1)}</a>
    </li>)}
  </ul>
}

function CaseSection({ area, entries, t }: { area: (typeof sectionOrder)[number]; entries: CaseEntry[]; t: CaseLabels }) {
  const heading = `case-${area}`
  return <section id={area} className={s.section} aria-labelledby={heading}>
    <h2 id={heading}>{t[area]}</h2>
    <div className={s.copy}>
      {entries.map(entry => <div key={entry.id}>
        {entry.flow && <ol className={s.flow} aria-label={t.flow}>
          {entry.flow.map((node, index) => <li key={index}><span>{node}</span>
            {index < (entry.flow?.length ?? 0) - 1 && <ChevronRight size={16} aria-hidden="true"/>}
          </li>)}
        </ol>}
        <p>{entry.text}</p>
      </div>)}
    </div>
    <EvidenceLinks sources={sourceList(entries)} label={t.evidence}/>
  </section>
}

export function ProjectDetail({ slug, preferences, params }: {
  slug: string; preferences: Preferences; params: PortfolioSearch
}) {
  const { locale } = preferences
  const t = labels[locale]
  const copy = caseLabels[locale]
  const { name, projects } = portfolioContent(locale)
  const project = projects.find(item => item.slug === slug)
  if (!project) notFound()

  const { query } = filterProjects(projects, params)
  const entries = publicProjectCase(locale, project.id)
  const sections = sectionOrder.map(area => ({ area, entries: entries.filter(entry => entry.area === area) }))
    .filter(section => section.entries.length)
  const sources = sourceList(entries)
  const gallery = caseImages(project, locale)
  const tech = project.technologies.length > 0

  return <PortfolioShell preferences={preferences} name={name} path={`${projectsPath}/${slug}`} query={query} catalogQuery={query}>
    <article className={s.case} aria-labelledby="detail-heading">
      <a className={preview.backLink} href={portfolioHref(projectsPath, preferences, query)}><ChevronLeft size={17}/>{t.backToProjects}</a>
      <header className={s.hero}>
        <div className={preview.pageIntro}>
          <p className={s.category}>{category(project.classification, t)}</p>
          <h1 id="detail-heading">{project.name}</h1>
          {project.summary && <p className={s.lead}>{project.summary}</p>}
          <ProjectStatus project={project} t={t}/>
          <ProjectLinks project={project} t={t}/>
        </div>
        <div className={preview.detailMedia}><ProjectMedia project={project} t={t}/></div>
      </header>
      <div className={s.body}>
        <aside>
          <nav className={s.index} aria-label={copy.contents}>
            <p>{copy.contents}</p>
            <ul>
              {sections.map(({ area }) => <li key={area}><a href={`#${area}`}>{copy[area]}</a></li>)}
              {tech && <li><a href="#technologies">{t.technologies}</a></li>}
              {gallery.length > 0 && <li><a href="#gallery">{copy.gallery}</a></li>}
              {sources.length > 0 && <li><a href="#sources">{copy.evidence}</a></li>}
            </ul>
          </nav>
        </aside>
        <div className={s.reading}>
          {sections.map(section => <CaseSection key={section.area} {...section} t={copy}/>)}
          {tech && <section id="technologies" className={s.section}>
            <h2>{t.technologies}</h2>
            <Technologies project={project} t={t}/>
          </section>}
          {gallery.length > 0 && <section id="gallery" className={s.section}>
            <h2>{copy.gallery}</h2>
            <Gallery images={gallery} t={copy}/>
          </section>}
          {sources.length > 0 && <section id="sources" className={s.section}>
            <h2>{copy.evidence}</h2>
            <EvidenceLinks sources={sources} label={copy.evidence}/>
          </section>}
        </div>
      </div>
    </article>
  </PortfolioShell>
}
