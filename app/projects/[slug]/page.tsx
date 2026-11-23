import { portfolioContent } from "../../_content"
import { labels } from "../../_labels"
import { preferences, projectsPath } from "../../_routes"
import { pageMetadata } from "../../_seo"
import { ProjectDetail } from "./_detail"

export async function generateMetadata({ params, searchParams }: PageProps<"/projects/[slug]">) {
  const [{ slug }, query] = await Promise.all([params, searchParams])
  const { locale } = preferences(query)
  const project = portfolioContent(locale).projects.find(item => item.slug === slug)
  if (!project) return { title: labels[locale].pageNotFound }
  return pageMetadata(`${projectsPath}/${project.slug}`, locale, project.name, project.summary)
}

export default async function ProjectPage({ params, searchParams }: PageProps<"/projects/[slug]">) {
  const [{ slug }, query] = await Promise.all([params, searchParams])
  return <ProjectDetail slug={slug} preferences={preferences(query)} params={query}/>
}
