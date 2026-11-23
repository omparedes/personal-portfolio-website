import Image from "next/image"
import { ArrowUpRight, BookOpen, Code2, Github, GraduationCap, Mail } from "lucide-react"
import { contactEmailLink, githubProfile, requestResumeLink } from "@/lib/public-links"
import type { ResumeLanguage } from "@/lib/resume-review"
import { portfolioContent, type PortfolioProject } from "../_content"
import { labels } from "../_labels"
import { aboutPath, portfolioHref, projectsPath, type Preferences } from "../_routes"
import { PortfolioShell } from "../_shell"
import { Timeline } from "../_timeline"
import { specialtyByTechnology } from "../projects/_filters"
import { aboutLabels } from "./_labels"
import { ResumePanel } from "./_resume"
import s from "./about.module.css"

const groups = ["frontend", "server", "data", "cloud", "ai", "engineering"] as const

function groupSkills(projects: PortfolioProject[]) {
  return groups.map(group => {
    const technologies = new Map<string, { name: string; uses: { project: PortfolioProject; basis: "code" | "documentation" }[] }>()
    for (const project of projects) {
      for (const technology of project.technologies) {
        const matches = group === "engineering" ? technology.id === "technology.typescript" : specialtyByTechnology[technology.id]?.includes(group)
        if (!matches) continue
        const entry = technologies.get(technology.id) ?? { name: technology.name, uses: [] }
        entry.uses.push({ project, basis: technology.basis })
        technologies.set(technology.id, entry)
      }
    }
    return { group, technologies: [...technologies.values()] }
  }).filter(group => group.technologies.length > 0)
}

export function About({ preferences, resumeDocuments }: {
  preferences: Preferences
  resumeDocuments: readonly ResumeLanguage[]
}) {
  const { locale } = preferences
  const t = aboutLabels[locale]
  const shared = labels[locale]
  const { name, objective, overview, biography, projects, events, education, credentials } = portfolioContent(locale)
  const skills = groupSkills(projects)
  const issuers = [...new Set(credentials.map(credential => credential.issuer))]
  const date = new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" })
  const sections = [
    ["career", t.history, events.length], ["skills", t.skills, skills.length], ["education", t.academic, education.length],
    ["credentials", t.certificates, credentials.length], ["resume", t.resume, resumeDocuments.length], ["contact", t.contact, true],
  ] as const

  return <PortfolioShell preferences={preferences} name={name} path={aboutPath}>
    <article className={s.about}>
      <header className={s.hero}>
        <div className={s.intro}>
          <p className={s.kicker}>{shared.about}</p>
          <h1>{name}</h1>
          {objective && <p className={s.role}>{objective}</p>}
          {overview && <p>{overview}</p>}
          {biography && <p className={s.biography}>{biography}</p>}
          <div className={s.heroLinks}>
            <a href={portfolioHref(projectsPath, preferences)}>{shared.explore}</a>
            <a href={contactEmailLink}>{t.email}</a>
          </div>
        </div>
        <figure className={s.portrait}>
          <Image src="/profile-photo.jpg" width={704} height={704} sizes="(max-width: 688px) min(88vw, 336px), 416px"
            alt={`${t.portrait} ${name}`} loading="eager" fetchPriority="high"/>
        </figure>
      </header>
      <nav className={s.index} aria-label={t.index}>
        {sections.filter(([, , shown]) => shown).map(([id, title]) => <a key={id} href={`#${id}`}>{title}</a>)}
      </nav>
      {events.length > 0 && <section className={s.story} id="career" aria-labelledby="story-title">
        <div className={s.sectionIntro}>
          <BookOpen size={24} aria-hidden="true"/>
          <h2 id="story-title">{t.history}</h2>
          <p>{t.historyIntro}</p>
        </div>
        <Timeline events={events} preferences={preferences} linkToDetails/>
      </section>}
      {skills.length > 0 && <section className={s.section} id="skills" aria-labelledby="skills-title">
        <div className={s.sectionIntro}>
          <Code2 size={24} aria-hidden="true"/>
          <h2 id="skills-title">{t.skills}</h2>
          <p>{t.skillsIntro}</p>
        </div>
        <div className={s.skillGrid}>{skills.map(({ group, technologies }) => <section key={group} className={s.panel}>
          <h3>{t[group]}</h3>
          <dl>{technologies.map(({ name, uses }) => <div key={name}>
            <dt>{name}</dt>
            <dd>{uses.map(({ project, basis }) => <a key={`${project.id}-${basis}`} href={portfolioHref(`${projectsPath}/${project.slug}`, preferences)}>
              {project.name}{basis === "documentation" && <small> · {shared.documented}</small>}
            </a>)}</dd>
          </div>)}</dl>
        </section>)}</div>
      </section>}
      {education.length > 0 && <section className={s.section} id="education" aria-labelledby="education-title">
        <div className={s.sectionIntro}><GraduationCap size={24} aria-hidden="true"/><h2 id="education-title">{t.academic}</h2></div>
        {education.map(program => <div className={s.education} key={program.id}>
          <span className={s.kicker}>{program.acronym}</span>
          <div><h3>{program.degree}</h3><p>{program.institution}</p></div>
          <div><strong>{t[program.status]}</strong>{program.stage && <p>{program.stage}</p>}{program.modality && <p>{program.modality}</p>}</div>
        </div>)}
      </section>}
      {credentials.length > 0 && <section className={s.section} id="credentials" aria-labelledby="credentials-title">
        <div className={s.sectionIntro}><p className={s.kicker}>{t.learning}</p><h2 id="credentials-title">{t.certificates}</h2></div>
        <div className={s.credentialGrid}>{issuers.map(issuer => <section className={s.issuer} key={issuer}>
          <h3>{issuer}</h3>
          <ul>{credentials.filter(credential => credential.issuer === issuer).map(item => <li key={item.id}>
            <a href={item.url} aria-label={`${t.verify} · ${item.title}`}>
              <span lang="en">{item.title}</span><ArrowUpRight size={16} aria-hidden="true"/>
            </a>
            <p>{item.topic} · {item.platform}</p>
            {item.completedOn && <p>{t.completed} <time dateTime={item.completedOn}>{date.format(new Date(item.completedOn))}</time></p>}
          </li>)}</ul>
        </section>)}</div>
      </section>}
      <div className={s.closing}>
        {resumeDocuments.length > 0 && <ResumePanel locale={locale} documents={resumeDocuments}/>}
        <section id="contact" className={s.panel} aria-labelledby="contact-title">
          <Mail size={22} aria-hidden="true"/><h2 id="contact-title">{t.contact}</h2>
          <div className={s.panelActions}>
            <a href={contactEmailLink}>{t.email}</a>
            {resumeDocuments.length === 0 && <a href={requestResumeLink}>{t.requestResume}</a>}
            <a href={githubProfile}><Github size={16} aria-hidden="true"/>GitHub</a>
          </div>
        </section>
      </div>
    </article>
  </PortfolioShell>
}
