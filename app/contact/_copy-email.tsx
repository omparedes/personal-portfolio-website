"use client"

import { useState, useSyncExternalStore } from "react"
import type { Locale } from "@/content/schema"
import { contactEmail } from "@/lib/public-links"
import { contactLabels } from "./_labels"
import s from "./contact.module.css"

const subscribe = () => () => {}
const canCopy = () => typeof navigator.clipboard?.writeText === "function"
const serverSnapshot = () => false

export function CopyEmail({ locale }: { locale: Locale }) {
  const available = useSyncExternalStore(subscribe, canCopy, serverSnapshot)
  const [result, setResult] = useState<"copied" | "copyFailed" | null>(null)
  const t = contactLabels[locale]

  async function copyEmail() {
    setResult(null)
    try {
      await navigator.clipboard.writeText(contactEmail)
      setResult("copied")
    } catch {
      setResult("copyFailed")
    }
  }

  if (!available) return null

  return <div className={s.copy}>
    <button type="button" onClick={copyEmail}>{t.copy}</button>
    <span role="status">{result && t[result]}</span>
  </div>
}
