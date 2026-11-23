import type { BilingualText, Fact } from "./schema.ts"

export type ProjectSource = Readonly<{ href: string; path: string }>

export interface ProjectedFact {
  readonly id: string
  readonly data: Fact["data"]
  readonly text?: BilingualText
}

export interface PublicProjection {
  readonly facts: readonly ProjectedFact[]
  readonly sources: Readonly<Record<string, readonly ProjectSource[]>>
}
