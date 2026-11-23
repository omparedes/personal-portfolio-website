import Image from "next/image"
import { FolderOpen, Github, Layers3, Mail } from "lucide-react"
import { githubProfile } from "@/lib/public-links"
import { portfolioContent } from "./_content"
import { DemoPlate } from "./_artwork"
import { labels } from "./_labels"
import { ProjectCard } from "./_project-card"
import { contactPath, homePath, portfolioHref, projectsPath, type Preferences } from "./_routes"
import { PortfolioShell } from "./_shell"
import { Timeline } from "./_timeline"
import s from "./preview.module.css"

export function PortfolioHome({ preferences }: { preferences: Preferences }) {
  const { locale } = preferences
  const { name, overview, objective, projects, events } = portfolioContent(locale)
  const primary = projects.find(p => p.id === "project.sigcoop")
  const t = labels[locale]
  return <PortfolioShell preferences={preferences} name={name} path={homePath}>
      <section className={s.hero} aria-labelledby="role">
        <div className={s.heroCopy}>
          <div className={s.byline}>
            <Image className={s.portrait} src="/profile-photo.jpg" width={80} height={80} sizes="(max-width: 1120px) 56px, (max-width: 1600px) 5vw, 80px" alt="" />
            <p>{name}</p>
          </div>
          <h1 id="role">{objective ? locale === "es" ? <>{t.developer}<br/>{t.focus}<br/><em>{t.backend}</em></> : <>{t.focus}<br/><em>{t.backend}</em><br/>{t.developer}</> : name}</h1>
          <p className={s.intro}>{overview}</p>
          <div className={s.heroActions}>
            <a className={s.primary} href={portfolioHref(projectsPath, preferences)}><FolderOpen/>{t.explore}</a>
            <a className={s.secondary} href={portfolioHref(contactPath, preferences)}><Mail/>{t.write}</a>
            <a className={s.social} href={githubProfile} aria-label="GitHub"><Github/></a>
          </div>
        </div>
        {primary?.demo && <DemoPlate name={primary.name} hero t={t}/>}
      </section>
      <section className={s.section} id="projects" aria-labelledby="project-heading">
        <div className={s.sectionHeading}><span className={s.sectionIcon}><FolderOpen/></span><h2 id="project-heading">{t.selected}</h2></div>
        <div className={s.projectGrid}>{projects.map(p =>
          <ProjectCard key={p.id} project={p} preferences={preferences} heading="h3"/>)}</div>
      </section>
      <section id="career" className={s.career} aria-labelledby="career-heading">
        <div><span className={s.sectionIcon}><Layers3/></span><h2 id="career-heading">{t.careerTitle}</h2><p>{t.careerIntro}</p></div>
        <Timeline events={events} preferences={preferences}/>
      </section>
  </PortfolioShell>
}
