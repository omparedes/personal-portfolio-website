import { labels } from "../_labels"
import { contactPath, preferences } from "../_routes"
import { pageMetadata } from "../_seo"
import { ContactPageContent } from "./_contact"
import { contactLabels } from "./_labels"

export async function generateMetadata({ searchParams }: PageProps<"/contact">) {
  const { locale } = preferences(await searchParams)
  return pageMetadata(contactPath, locale, labels[locale].contact, contactLabels[locale].intro)
}

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  return <ContactPageContent preferences={preferences(await searchParams)}/>
}
