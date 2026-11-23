import { labels } from "../_labels"
import { preferences, projectsPath } from "../_routes"
import { pageMetadata } from "../_seo"
import { ProjectCatalog } from "./_catalog"

export async function generateMetadata({ searchParams }: PageProps<"/projects">) {
  const { locale } = preferences(await searchParams)
  const t = labels[locale]
  return pageMetadata(projectsPath, locale, t.catalog, t.catalogIntro)
}

export default async function ProjectsPage({ searchParams }: PageProps<"/projects">) {
  const params = await searchParams
  return <ProjectCatalog preferences={preferences(params)} params={params}/>
}
