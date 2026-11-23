import { projection } from "./projection.generated.ts"
import type { PublicProjection } from "./projection-types.ts"
import type { Locale } from "./schema.ts"

const publicCatalog: PublicProjection = projection

export function publicView(locale: Locale) {
  const facts = publicCatalog.facts.map(({ id, data, text }) => ({
    id, data, ...(text ? { text: text[locale] } : {}),
  }))
  return { locale, facts }
}

export function publicProjectCase(locale: Locale, projectId: string) {
  return publicView(locale).facts.flatMap(({ id, data, text }) => {
    if ((data.kind !== "participation" && data.kind !== "project-detail") || data.projectId !== projectId || !text) return []
    const sources = publicCatalog.sources[id] ?? []
    if (data.kind === "participation") return [{ id, area: "participation" as const, text, flow: undefined, sources }]
    return [{ id, area: data.area, text, flow: data.flow?.map(node => node[locale]), sources }]
  })
}
