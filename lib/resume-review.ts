import "server-only"
import { createHash } from "node:crypto"
import { readFile } from "node:fs/promises"
import { isAbsolute, join } from "node:path"

const documents = {
  es: {
    filename: "CV_Oscar_Paredes_Actualizado_2026.pdf",
    sha256: "98aa6bdbe60c7b4ab6905f87b602cc8488f4f2c8a9a5db2fc6da2935efd346fb",
  },
  en: {
    filename: "CV_Oscar_Paredes_Updated_2026_EN.pdf",
    sha256: "e252e0ade235053cf199688029d13ab705b815ea1202661297cd07f5a0d6a699",
  },
}

export type ResumeLanguage = keyof typeof documents

export async function readReviewResume(host: string | null, language: string) {
  const directory = process.env.PORTFOLIO_CV_REVIEW_DIR
  if (process.env.NODE_ENV !== "development" || process.env.VERCEL || process.env.VERCEL_ENV ||
      !directory || !isAbsolute(directory) ||
      !host || !/^(?:localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/i.test(host)) return
  if (language !== "es" && language !== "en") return

  const { filename, sha256 } = documents[language]
  const bytes = await readFile(join(directory, filename)).catch(() => undefined)
  if (!bytes || createHash("sha256").update(bytes).digest("hex") !== sha256) return
  return { filename, bytes }
}

export async function availableReviewResumes(host: string | null) {
  const languages = ["es", "en"] as const
  const available = await Promise.all(languages.map(language => readReviewResume(host, language)))
  return languages.filter((_, index) => available[index])
}
