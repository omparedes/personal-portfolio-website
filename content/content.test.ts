import assert from "node:assert/strict"
import test from "node:test"
import { projection } from "./projection.generated.ts"
import { publicProjectCase, publicView } from "./public-view.ts"

test("both locales expose identical fact IDs and structured data", () => {
  const stable = (locale: "es" | "en") => publicView(locale).facts.map(({ id, data }) => ({ id, data }))
  assert.deepEqual(stable("es"), stable("en"))
  const ids = stable("es").map(({ id }) => id)
  assert.equal(new Set(ids).size, ids.length)
})

test("localized text and flow labels are present in both locales", () => {
  for (const fact of projection.facts) {
    if ("text" in fact) assert(fact.text.es.trim() && fact.text.en.trim())
    if (fact.data.kind !== "project-detail" || !("flow" in fact.data)) continue
    for (const node of fact.data.flow) assert(node.es.trim() && node.en.trim())
  }
})

test("only the approved project selection and credential inventory ship in the review", () => {
  const facts = publicView("es").facts
  assert.deepEqual(facts.filter(fact => fact.data.kind === "project").map(fact => fact.id).sort(), [
    "project.sigcoop", "project.smartparking",
  ])
  const credentials = facts.flatMap(({ data }) => data.kind === "credential" ? [data] : [])
  assert.equal(credentials.length, 9)
  assert(credentials.every(({ issuer, url, completedOn }) => issuer && url.startsWith("https://") && completedOn))
})

test("case citation keys identify facts and expose only links and paths", () => {
  const facts = new Map(publicView("es").facts.map(fact => [fact.id, fact]))
  for (const [id, sources] of Object.entries(projection.sources)) {
    const fact = facts.get(id)
    assert(fact && (fact.data.kind === "participation" || fact.data.kind === "project-detail"))
    for (const source of sources) {
      assert.deepEqual(Object.keys(source).sort(), ["href", "path"])
      assert.match(source.href, /^https:\/\/github\.com\/[^/]+\/[^/]+\/blob\/[0-9a-f]{40}\/.+/)
    }
  }
})

test("case sources, order and architecture are stable across locales", () => {
  for (const project of ["project.sigcoop", "project.smartparking"]) {
    const es = publicProjectCase("es", project)
    const en = publicProjectCase("en", project)
    const shape = (entries: typeof es) => entries.map(({ id, area, flow, sources }) => ({ id, area, steps: flow?.length, sources }))
    assert(es.length > 0 && es.some(entry => entry.area === "architecture" && entry.flow?.length === 4))
    assert.deepEqual(shape(es), shape(en))
  }
})

test("editorial provenance metadata is outside the projection", () => {
  assert.deepEqual(Object.keys(projection).sort(), ["facts", "sources"])
  for (const fact of projection.facts) {
    assert.deepEqual(Object.keys(fact).sort(), "text" in fact ? ["data", "id", "text"] : ["data", "id"])
  }
})
