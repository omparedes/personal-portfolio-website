import Image from "next/image"
import { Focus, Maximize2 } from "lucide-react"
import dashboard from "./_assets/dashboard-demo.webp"
import report from "./_assets/reporte-contable-demo.webp"
import type { Labels } from "./_labels"
import s from "./preview.module.css"

export function DemoPlate({ name, hero = false, t }: { name: string; hero?: boolean; t: Labels }) {
  const source = hero ? dashboard : report
  const title = hero ? t.dashboard : t.report
  return <figure className={hero ? s.heroPlate : s.reportPlate}>
    <div className={s.plot}>
      <div className={s.registration} aria-hidden="true" />
      <div className={s.plateLabel}><span className={s.signal} />{hero ? t.featured : t.report}</div>
      <a className={s.screen} href={source.src} aria-label={`${t.showImage} · ${name} · ${title}`}>
        <Image src={source} alt={hero ? t.dashboardAlt : t.reportAlt}
          sizes="(max-width: 704px) 67vw, (max-width: 1536px) 34vw, 520px"
          loading={hero ? "eager" : "lazy"} fetchPriority={hero ? "high" : undefined} />
      </a>
      <div className={s.plotMark} aria-hidden="true"><Focus size={17} /></div>
    </div>
    <figcaption className={s.caption}>
      <span><b>{hero ? name : title}</b><small>{t.sample}</small></span>
      <a href={source.src} aria-label={`${t.showImage} · ${title}`} title={t.showImage}><Maximize2 size={17}/></a>
    </figcaption>
  </figure>
}

// Axonometric parking plan. Repeated bays are illustrative geometry, not detection results.
export function ParkingStudy({ label }: { label: string }) {
  const bays = Array.from({ length: 6 }, (_, i) => i)
  return <figure className={s.parking}>
    <svg viewBox="0 0 540 235" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id="parking-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="#94aed8" opacity=".14" />
        </pattern>
        <linearGradient id="pavement" x2="1" y2="1" gradientUnits="objectBoundingBox">
          <stop stopColor="#334f78"/><stop offset="1" stopColor="#152842"/>
        </linearGradient>
      </defs>
      <rect width="540" height="235" fill="#111f36"/><rect width="540" height="235" fill="url(#parking-grid)"/>
      <g transform="matrix(.98 -.27 .65 .66 42 97)">
        <rect x="0" y="9" width="338" height="175" rx="7" fill="#0e172c" stroke="#516989"/>
        <rect width="338" height="175" rx="7" fill="url(#pavement)" stroke="#9db5d4"/>
        <path d="M12 86H326" stroke="#aec1df" strokeDasharray="14 10" />
        {bays.map(i => <g key={i} transform={`translate(${18+i*51} 0)`}>
          <path d="M0 64V13H44V64M0 110v51h44v-51" stroke="#adc3df" fill="none" strokeWidth="1.6"/>
          {[0, 2, 3, 5].includes(i) && <g transform={`translate(8 ${i % 2 ? 111 : 16})`}>
            <rect width="28" height="46" rx="8" fill="#459ca4" stroke="#9affec" strokeWidth="2"/>
            <path d="M4 11l2-5h16l2 5-2 3H6zM5 33h18v4H5z" fill="#174555"/>
          </g>}
        </g>)}
      </g>
    </svg>
    <figcaption className={s.illustrationLabel}>{label}</figcaption>
  </figure>
}
