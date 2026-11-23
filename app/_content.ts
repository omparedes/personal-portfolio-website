import "server-only"
import { publicView } from "@/content/public-view"
import type { Locale, TimelinePeriod } from "@/content/schema"

export function portfolioContent(locale: Locale) {
  const { facts } = publicView(locale)
  const byId = new Map(facts.map(fact => [fact.id, fact]))
  const identity = facts.find(f => f.data.kind === "profile")?.data
  const education = facts.flatMap(({ id, data, text }) => {
    if (data.kind !== "education" || !text) return []
    const institution = byId.get(data.institutionId)?.data
    if (institution?.kind !== "institution") return []
    const modality = facts.find(f => f.data.kind === "education-modality" && f.data.educationId === id)?.data
    const stage = facts.find(f => f.data.kind === "academic-stage" && f.data.educationId === id)?.text
    return [{ id, degree: text, institution: institution.name, acronym: institution.acronym, status: data.status,
      modality: modality?.kind === "education-modality" ? modality.modality : undefined, stage }]
  })
  const projects = facts.flatMap(({ id, data }) => {
    if (data.kind !== "project") return []
    const related = facts.filter(f => "projectId" in f.data && f.data.projectId === id)
    const technologies = related.flatMap(({ data: usage }) => {
      if (usage.kind !== "technology-use") return []
      const technology = byId.get(usage.technologyId)?.data
      return technology?.kind === "technology"
        ? [{ id: usage.technologyId, name: technology.name, basis: usage.basis }]
        : []
    })
    const environments = related.flatMap(f => f.data.kind === "environment" ? [f.data.deployment] : [])
    const demo = environments.find(e => e.kind === "public-demo")
    return [{
      id, slug: id.slice("project.".length), name: data.name.split(" / ")[0],
      fullName: data.name, classification: data.classification, repository: data.repository,
      summary: related.find(f => f.data.kind === "project-detail" && f.data.area === "summary")?.text,
      contribution: related.find(f => f.data.kind === "participation")?.text,
      feature: related.find(f => f.data.kind === "project-detail" && f.data.area === "feature")?.text,
      demo: demo?.url, production: environments.some(e => e.kind === "production"), technologies,
    }]
  })
  type Event = {
    id: string
    title: string
    kind: "education" | "experience" | (typeof projects)[number]["classification"]
    body?: string
    period: TimelinePeriod
    projects: typeof projects
    technologies: { id: string; name: string }[]
  }
  const events = facts.flatMap<Event>(({ id, data, text }) => {
    if (data.kind !== "timeline" || !text) return []
    const subject = byId.get(data.subject.id)
    const project = projects.find(p => p.id === data.subject.id)
    const related = projects.filter(p => p.id === data.subject.id || data.relatedProjectIds?.includes(p.id))
    const base = { id, title: text, period: data.period, projects: related, technologies: [] }
    if (project) return [{ ...base, kind: project.classification, body: project.contribution ?? project.feature }]
    const program = education.find(item => item.id === data.subject.id)
    if (program) return [{ ...base, kind: "education", body: [program.degree, program.institution, program.stage].filter(Boolean).join(" · ") }]
    if (subject?.data.kind !== "trajectory") return []
    const technologies = (subject.data.technologyIds ?? []).flatMap(id => {
      const data = byId.get(id)?.data
      return data?.kind === "technology" ? [{ id, name: data.name }] : []
    })
    return [{ ...base, body: subject.text, kind: subject.data.category, technologies }]
  })
  const credentials = facts.flatMap(({ id, data, text }) =>
    data.kind === "credential" ? [{ ...data, id, topic: text }] : [])
  return {
    name: identity?.kind === "profile" ? identity.name : "",
    objective: byId.get("objective.software-development")?.text,
    biography: byId.get("experience.professional-background")?.text,
    overview: byId.get("experience.project-areas")?.text, projects, events, education, credentials,
  }
}

export type PortfolioProject = ReturnType<typeof portfolioContent>["projects"][number]
export type PortfolioEvent = ReturnType<typeof portfolioContent>["events"][number]
