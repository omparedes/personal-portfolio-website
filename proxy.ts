import { NextResponse, type NextRequest } from "next/server"
import { localeHeader, preferences, projectsPath, themeHeader } from "./app/_routes"

export async function proxy(request: NextRequest) {
  const headers = new Headers(request.headers)
  const { searchParams } = request.nextUrl
  const single = (key: string) => {
    const values = searchParams.getAll(key)
    return values.length === 1 ? values[0] : undefined
  }
  const { locale, theme } = preferences({ lang: single("lang"), theme: single("theme") })
  headers.set(localeHeader, locale)
  headers.set(themeHeader, theme)

  const prefix = `${projectsPath}/`
  if (request.nextUrl.pathname.startsWith(prefix)) {
    const { portfolioContent } = await import("./app/_content")
    const slug = request.nextUrl.pathname.slice(prefix.length)
    if (!portfolioContent(locale).projects.some(project => project.slug === slug)) {
      // Resolve the shared 404 directly so its HTML is visible without hydration.
      const destination = request.nextUrl.clone()
      destination.pathname = "/404"
      return NextResponse.rewrite(destination, { request: { headers } })
    }
  }
  return NextResponse.next({ request: { headers } })
}

export const config = {
  matcher: ["/projects/:path*", "/((?!_next/|.*\\.[^/]+$).*)"],
}
