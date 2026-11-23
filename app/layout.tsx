import React from "react"
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { headers } from "next/headers"
import { localeHeader, portfolioLocale } from "./_routes"
import { siteOrigin } from "./_seo"
import './globals.css'

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "100 900",
  variable: "--font-inter",
})
const jetBrainsMono = localFont({
  src: "./fonts/jetbrains-mono-latin.woff2",
  weight: "100 800",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  metadataBase: siteOrigin,
  robots: { index: false, follow: false },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = portfolioLocale((await headers()).get(localeHeader))
  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${jetBrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
