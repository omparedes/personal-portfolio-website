import { portfolioContent } from "./_content"
import { PortfolioHome } from "./_portfolio"
import { homePath, preferences } from "./_routes"
import { pageMetadata } from "./_seo"

export async function generateMetadata({ searchParams }: PageProps<"/">) {
  const { locale } = preferences(await searchParams)
  const { objective, overview } = portfolioContent(locale)
  return pageMetadata(homePath, locale, locale === "en" ? "Full-stack and backend portfolio" : "Portafolio Full-Stack y backend", overview ?? objective)
}

export default async function HomePage({ searchParams }: PageProps<"/">) {
  return <PortfolioHome preferences={preferences(await searchParams)} />
}
