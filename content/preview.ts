import { publicView } from "./public-view.ts"

const locale = process.argv[2]
if (locale !== "es" && locale !== "en") {
  console.error("Usage: npm run content:preview -- es|en")
  process.exitCode = 1
} else {
  console.log(JSON.stringify(publicView(locale), null, 2))
}
