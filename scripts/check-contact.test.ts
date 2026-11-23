import assert from "node:assert/strict"
import { existsSync, readdirSync } from "node:fs"
import test from "node:test"
import { contactEmail, contactEmailLink, githubProfile } from "../lib/public-links.ts"

test("contact destinations retain their public protocols", () => {
  assert.match(contactEmail, /^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  assert.equal(contactEmailLink, "mailto:" + contactEmail)
  assert.equal(new URL(githubProfile).origin, "https://github.com")
})

test("the candidate contains no contact API or submission entry point", () => {
  assert(readdirSync("app/contact").every(name => ["page.tsx", "_contact.tsx", "_labels.ts", "contact.module.css"].includes(name)))
  assert(!existsSync("app/api") && !existsSync("app/design-preview") && !existsSync("lib/contact"))
})
