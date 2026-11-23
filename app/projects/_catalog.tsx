import { FolderOpen, Search, SlidersHorizontal } from "lucide-react"
import { portfolioContent } from "../_content"
import { labels } from "../_labels"
import { category, ProjectCard } from "../_project-card"
import { portfolioHref, projectsPath, type Preferences, type PortfolioSearch } from "../_routes"
import { PortfolioShell } from "../_shell"
import s from "../preview.module.css"
import { filterProjects } from "./_filters"

export function ProjectCatalog({ preferences, params }: { preferences: Preferences; params: PortfolioSearch }) {
  const t = labels[preferences.locale]
  const { name, projects } = portfolioContent(preferences.locale)
  const { specialties, technologies, types, query, matches } = filterProjects(projects, params)

  return <PortfolioShell preferences={preferences} name={name} path={projectsPath} query={query}>
    <section className={s.catalog} aria-labelledby="catalog-heading">
      <div className={s.pageIntro}>
        <span className={s.sectionIcon} aria-hidden="true"><FolderOpen/></span>
        <h1 id="catalog-heading">{t.catalog}</h1>
        <p>{t.catalogIntro}</p>
      </div>
      <form action={`${projectsPath}#results`} method="get" className={s.filterPanel} role="search" aria-label={t.search}>
        <input type="hidden" name="lang" value={preferences.locale}/>
        <input type="hidden" name="theme" value={preferences.theme}/>
        <label className={s.searchField}>{t.search}
          <span>
            <Search size={17} aria-hidden="true"/>
            <input type="search" name="q" defaultValue={query.q} placeholder={t.searchExample} maxLength={100}/>
          </span>
        </label>
        <div className={s.selects}>
          <label>{t.specialty}
            <select name="specialty" defaultValue={query.specialty}>
              <option value="">{t.any}</option>
              {specialties.map(id => <option key={id} value={id}>{t[id]}</option>)}
            </select>
          </label>
          <label>{t.technology}
            <select name="technology" defaultValue={query.technology}>
              <option value="">{t.any}</option>
              {technologies.map(([id, label]) => <option key={id} value={id}>{label}</option>)}
            </select>
          </label>
          <label>{t.projectType}
            <select name="type" defaultValue={query.type}>
              <option value="">{t.any}</option>
              {types.map(id => <option key={id} value={id}>{id === "professional" ? t.professionalType : category(id, t)}</option>)}
            </select>
          </label>
        </div>
        <div className={s.filterActions}>
          <button className={s.primary} type="submit"><SlidersHorizontal size={17}/>{t.filter}</button>
          <a href={portfolioHref(projectsPath, preferences)}>{t.clear}</a>
        </div>
      </form>
      <p id="results" className={s.resultCount} tabIndex={-1} role="status">{matches.length} {matches.length === 1 ? t.result : t.results}</p>
      {matches.length > 0
        ? <div className={s.catalogGrid}>{matches.map(project =>
            <ProjectCard key={project.id} project={project} preferences={preferences} catalogQuery={query}/>)}</div>
        : <div className={s.empty}>
            <h2>{t.noResults}</h2>
            <p>{t.noResultsHint}</p>
            <a className={s.backLink} href={portfolioHref(projectsPath, preferences)}>{t.clear}</a>
          </div>}
    </section>
  </PortfolioShell>
}
