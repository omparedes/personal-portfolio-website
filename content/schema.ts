export const locales = ["es", "en"] as const
export type Locale = (typeof locales)[number]
export type BilingualText = Readonly<Record<Locale, string>>

export const verificationStates = ["verified", "pending", "rejected"] as const
export const publicationPermissions = ["approved", "restricted", "pending"] as const
export type Verification = (typeof verificationStates)[number]
export type PublicationPermission = (typeof publicationPermissions)[number]

export const academicStatuses = ["student", "graduate", "degree-holder"] as const
export const projectClassifications = ["professional", "academic", "research", "personal"] as const
export const bases = ["code", "documentation"] as const
export const detailAreas = ["summary", "context", "participation", "architecture", "feature", "decision", "challenge", "quality", "result", "limitation"] as const
export const trajectoryBases = ["owner-statement", "code", "documentation", "credential"] as const
export const trajectoryCategories = ["education", "experience"] as const
export const timelineSubjectKinds = ["trajectory", "education", "project"] as const
export const undatedStages = ["historical", "recent", "current"] as const

export type TimelinePeriod =
  | { kind: "years"; from: number; to: number; precision: "approximate" | "exact" }
  | { kind: "relative"; years: number; precision: "nearly"; asOf: string }
  | { kind: "undated"; stage: (typeof undatedStages)[number] }

type StructuredFact =
  | { kind: "profile"; name: string }
  | { kind: "institution"; name: string; acronym: string }
  | { kind: "project"; name: string; classification: (typeof projectClassifications)[number]; repository: string }
  | { kind: "technology"; name: string }
  | {
      kind: "environment"
      projectId: string
      deployment:
        | { kind: "production"; basis: "documentation" }
        | { kind: "public-demo"; data: "synthetic"; url: string }
    }
  | { kind: "technology-use"; projectId: string; technologyId: string; basis: (typeof bases)[number]; version?: string }
  | { kind: "education-modality"; educationId: string; modality: string; basis: "owner-statement" }

type EditorialFact =
  | { kind: "objective"; profileId: string }
  | { kind: "experience-overview"; profileId: string; basis: "owner-statement" }
  | { kind: "education"; profileId: string; institutionId: string; status: (typeof academicStatuses)[number] }
  | { kind: "academic-stage"; educationId: string }
  | { kind: "credential"; profileId: string; title: string; issuer?: string; platform: string; url: string; completedOn?: string }
  | { kind: "participation"; profileId: string; projectId: string }
  | {
      kind: "project-detail"
      projectId: string
      area: (typeof detailAreas)[number]
      basis: (typeof bases)[number]
      flow?: readonly [BilingualText, BilingualText, ...BilingualText[]]
    }
  | {
      kind: "trajectory"
      profileId: string
      category: (typeof trajectoryCategories)[number]
      basis: (typeof trajectoryBases)[number]
      institutionId?: string
      technologyIds?: readonly string[]
    }
  | {
      kind: "timeline"
      subject: { kind: (typeof timelineSubjectKinds)[number]; id: string }
      order: number
      period: TimelinePeriod
      relatedProjectIds?: readonly string[]
    }

export type Fact = {
  readonly id: string
  readonly verification: Verification
  readonly publication: PublicationPermission
} & (
  | { readonly data: Readonly<StructuredFact>; readonly text?: never }
  | { readonly data: Readonly<EditorialFact>; readonly text: BilingualText }
)

export type EvidenceSource =
  | { readonly kind: "repository"; readonly projectId: string; readonly commit: string; readonly path: string }
  | { readonly kind: "web"; readonly url: string }
  | { readonly kind: "credential"; readonly url: string }
  | { readonly kind: "owner-statement"; readonly reference: string }

export interface Evidence {
  readonly id: string
  readonly source: EvidenceSource
  readonly checkedOn: string
  readonly scope: string
  readonly supports: readonly string[]
}

export interface Catalog {
  readonly facts: readonly Fact[]
  readonly evidence: readonly Evidence[]
}
