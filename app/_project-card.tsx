import { Boxes, CircleDot, FlaskConical, FolderOpen, Github, Globe2 } from "lucide-react"
import type { PortfolioProject } from "./_content"
import { DemoPlate, ParkingStudy } from "./_artwork"
import { labels, type Labels } from "./_labels"
import { portfolioHref, projectsPath, type Preferences } from "./_routes"
import s from "./preview.module.css"

export function category(kind: PortfolioProject["classification"] | "education", t: Labels) {
  return kind === "professional" ? t.professional : t[kind]
}

export function Technologies({ project, t }: { project: PortfolioProject; t: Labels }) {
  if (!project.technologies.length) return null
  return <ul className={s.chips}>{project.technologies.map(tech => <li key={tech.id}>
    {tech.name}{project.classification === "research" && tech.basis === "documentation" && ` · ${t.documented}`}
  </li>)}</ul>
}

export function ProjectStatus({ project, t }: { project: PortfolioProject; t: Labels }) {
  return project.production && <span className={s.production}><CircleDot size={15}/>{t.production}</span>
}

export function ProjectMedia({ project, t }: { project: PortfolioProject; t: Labels }) {
  if (project.slug === "sigcoop" && project.demo) return <DemoPlate name={project.name} t={t}/>
  if (project.slug === "smartparking") return <ParkingStudy label={t.concept}/>
  return null
}

export function ProjectLinks({ project, t, detail }: {
  project: PortfolioProject; t: Labels; detail?: string
}) {
  return <div className={s.cardActions}>
    {detail && <a className={s.demoLink} href={detail} aria-label={`${t.details} · ${project.name}`}><FolderOpen/>{t.details}</a>}
    {project.demo && <a href={project.demo} aria-label={`${t.openDemo} · ${project.name}`}><Globe2/>{t.openDemo}</a>}
    <a href={project.repository} aria-label={`${t.code} · ${project.name}`}><Github/>{t.code}</a>
  </div>
}

export function ProjectCard({ project, preferences, heading: Heading = "h2", catalogQuery }: {
  project: PortfolioProject; preferences: Preferences; heading?: "h2" | "h3"; catalogQuery?: Record<string, string>
}) {
  const t = labels[preferences.locale]
  const Icon = project.classification === "research" ? FlaskConical : Boxes
  const detail = portfolioHref(`${projectsPath}/${project.slug}`, preferences, catalogQuery)
  return <article id={project.id} className={s.projectCard}>
    <ProjectMedia project={project} t={t}/>
    <div className={s.cardBody}>
      <div className={s.eyebrow}><Icon/>{category(project.classification, t)}</div>
      <Heading className={s.projectTitle}>{project.name}</Heading>
      {project.summary && <p>{project.summary}</p>}
      <ProjectStatus project={project} t={t}/>
      <Technologies project={project} t={t}/>
      <ProjectLinks project={project} t={t} detail={detail}/>
    </div>
  </article>
}
