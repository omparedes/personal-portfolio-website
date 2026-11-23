import { githubProfile } from "@/lib/public-links"
import { portfolioContent } from "../_content"
import { labels } from "../_labels"
import { aboutPath, preferences } from "../_routes"
import { canonicalUrl, pageMetadata, siteOrigin } from "../_seo"
import { About } from "./_about"

export async function generateMetadata({ searchParams }: PageProps<"/about">) {
  const { locale } = preferences(await searchParams)
  const { objective } = portfolioContent(locale)
  return pageMetadata(aboutPath, locale, labels[locale].about, objective)
}

export default async function AboutPage({ searchParams }: PageProps<"/about">) {
  const selected = preferences(await searchParams)
  const { name } = portfolioContent(selected.locale)
  const profile = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: canonicalUrl(aboutPath, selected.locale),
    inLanguage: selected.locale,
    mainEntity: {
      "@type": "Person",
      name,
      sameAs: [githubProfile],
      image: new URL("/profile-photo.jpg", siteOrigin).href,
    },
  }
  return <>
    {name && <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify(profile).replace(/</g, "\u003c"),
    }}/>}
    <About preferences={selected}/>
  </>
}
