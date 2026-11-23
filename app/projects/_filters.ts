import type { PortfolioProject } from "../_content"
import type { PortfolioSearch } from "../_routes"

type Specialty = "frontend" | "server" | "data" | "cloud" | "ai"

// Map approved technology relations to navigational topics, not proficiency claims.
export const specialtyByTechnology: Partial<Record<string, readonly Specialty[]>> = {
  "technology.angular": ["frontend"],
  "technology.supabase": ["server", "data"],
  "technology.postgresql": ["data"],
  "technology.cloudflare-pages": ["cloud"],
  "technology.yolo": ["ai"],
}

const text = (value: PortfolioSearch[string]) => typeof value === "string" ? value.trim().slice(0, 100) : ""
const normalize = (value: string) => value.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase()

export function filterProjects(projects: PortfolioProject[], params: PortfolioSearch) {
  const entries = projects.map(project => ({
    project,
    specialties: new Set(project.technologies.flatMap(tech => specialtyByTechnology[tech.id] ?? [])),
    search: normalize([project.fullName, ...project.technologies.map(tech => tech.name)].join(" ")),
  }))
  const specialties = [...new Set(entries.flatMap(entry => [...entry.specialties]))]
  const technologies = [...new Map(projects.flatMap(project =>
    project.technologies.map(tech => [tech.id, tech.name] as const)))].sort((a, b) => a[1].localeCompare(b[1]))
  const types = [...new Set(projects.map(project => project.classification))]
  const specialty = specialties.find(option => option === text(params.specialty))
  const technology = technologies.find(([id]) => id === text(params.technology))?.[0]
  const type = types.find(option => option === text(params.type))
  const query = { q: text(params.q), specialty: specialty ?? "", technology: technology ?? "", type: type ?? "" }
  const words = normalize(query.q).split(/\s+/).filter(Boolean)
  const matches = entries.filter(({ project, specialties, search }) =>
    (!specialty || specialties.has(specialty)) &&
    (!technology || project.technologies.some(tech => tech.id === technology)) &&
    (!type || project.classification === type) &&
    words.every(word => search.includes(word))
  ).map(({ project }) => project)
  return { specialties, technologies, types, query, matches }
}
