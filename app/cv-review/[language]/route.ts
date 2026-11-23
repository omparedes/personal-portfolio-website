import { readReviewResume } from "@/lib/resume-review"

export const dynamic = "force-dynamic"

export async function GET(request: Request, { params }: RouteContext<"/cv-review/[language]">) {
  const { language } = await params
  const document = await readReviewResume(request.headers.get("host"), language)
  const headers = new Headers({
    "Cache-Control": "private, no-store",
    "X-Robots-Tag": "noindex, nofollow, noarchive",
    "X-Content-Type-Options": "nosniff",
  })
  if (!document) return new Response(null, { status: 404, headers })

  const attachment = new URL(request.url).searchParams.get("download") === "1"
  headers.set("Content-Type", "application/pdf")
  headers.set("Content-Disposition", `${attachment ? "attachment" : "inline"}; filename="${document.filename}"`)
  return new Response(new Uint8Array(document.bytes), { headers })
}
