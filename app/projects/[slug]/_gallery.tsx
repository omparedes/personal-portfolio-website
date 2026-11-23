"use client"

import { useId, useRef, useState, type MouseEvent } from "react"
import Image, { type StaticImageData } from "next/image"
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react"
import type { caseLabels } from "./_case-labels"
import s from "./case.module.css"

export type GalleryImage = {
  full: StaticImageData
  thumbnail: StaticImageData
  title: string
  alt: string
  caption: string
}

type GalleryLabels = Pick<typeof caseLabels.es, "gallery" | "inventory" | "enlarge" | "close" | "prev" | "next" | "image" | "fullImage">

export function Gallery({ images, t }: { images: GalleryImage[]; t: GalleryLabels }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const title = useId()
  const [selected, setSelected] = useState<number | null>(null)
  const active = selected === null ? undefined : images[selected]

  function open(event: MouseEvent<HTMLAnchorElement>, index: number) {
    const modal = dialog.current
    if (!modal || typeof modal.showModal !== "function" || event.metaKey || event.ctrlKey ||
      event.shiftKey || event.altKey || event.defaultPrevented) return
    event.preventDefault()
    event.currentTarget.focus()
    setSelected(index)
    modal.showModal()
  }

  function move(amount: number) {
    setSelected(index => index === null ? null : (index + amount + images.length) % images.length)
  }

  return <>
    <p>{t.inventory}</p>
    <ul className={s.thumbnails}>
      {images.map((image, index) => <li key={image.full.src}>
        <figure>
          <a href={image.full.src} aria-label={`${t.enlarge} · ${image.title}`} onClick={event => open(event, index)}>
            <Image src={image.thumbnail} alt={image.alt} loading="lazy" unoptimized/>
            <Maximize2 size={18} aria-hidden="true"/>
          </a>
          <figcaption><strong>{image.title}</strong><span>{image.caption}</span></figcaption>
        </figure>
      </li>)}
    </ul>
    <dialog className={s.dialog} ref={dialog} aria-labelledby={title}
      onClose={event => {
        if (!event.currentTarget.open) setSelected(null)
      }}
      onKeyDown={event => {
        if (images.length < 2 || event.altKey || event.ctrlKey || event.metaKey) return
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault()
          move(event.key === "ArrowLeft" ? -1 : 1)
        }
      }}>
      <header>
        <h3 id={title}>{t.gallery}</h3>
        <form method="dialog"><button autoFocus aria-label={t.close} title={t.close}><X size={22}/></button></form>
      </header>
      {active && <figure>
        <Image src={active.full} alt={active.alt} loading="eager" unoptimized/>
        <figcaption aria-live="polite">
          <strong>{t.image} {(selected ?? 0) + 1}/{images.length} · {active.title}</strong>
          <span>{active.caption}</span>
        </figcaption>
      </figure>}
      <footer>
        {images.length > 1 && <button type="button" onClick={() => move(-1)}><ChevronLeft size={19}/>{t.prev}</button>}
        {active && <a href={active.full.src}>{t.fullImage}</a>}
        {images.length > 1 && <button type="button" onClick={() => move(1)}>{t.next}<ChevronRight size={19}/></button>}
      </footer>
    </dialog>
  </>
}
