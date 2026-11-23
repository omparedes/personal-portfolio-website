import type { Locale } from "@/content/schema"
import dashboard from "../../_assets/dashboard-demo.webp"
import payment from "../../_assets/registro-pagos-demo.webp"
import report from "../../_assets/reporte-contable-demo.webp"
import dashboardThumbnail from "../../_assets/dashboard-demo-480.webp"
import paymentThumbnail from "../../_assets/registro-pagos-demo-480.webp"
import reportThumbnail from "../../_assets/reporte-contable-demo-480.webp"
import { labels } from "../../_labels"
import { caseLabels } from "./_case-labels"
import type { GalleryImage } from "./_gallery"

export function demoImages(locale: Locale): GalleryImage[] {
  const t = labels[locale]
  const copy = caseLabels[locale]
  return [
    { full: dashboard, thumbnail: dashboardThumbnail, title: t.dashboard, alt: t.dashboardAlt, caption: copy.dashboardCaption },
    { full: payment, thumbnail: paymentThumbnail, title: copy.payments, alt: copy.paymentsAlt, caption: copy.paymentsCaption },
    { full: report, thumbnail: reportThumbnail, title: t.report, alt: t.reportAlt, caption: copy.reportCaption },
  ]
}
