import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Elevationchangedoc Solutions - Smarter Lead Scoring, Faster Sales Results",
  description:
    "Transform your sales pipeline with our proprietary iLMS (Lead Management System). Automate lead scoring, accelerate conversions, and maximize revenue with intelligent insights.",
  keywords: "lead management, sales pipeline, lead scoring, iLMS, B2B sales tools, CRM, sales automation",
  authors: [{ name: "Elevationchangedoc Solutions" }],
  openGraph: {
    title: "Elevationchangedoc Solutions - Intelligent Lead Management",
    description: "Smarter Lead Scoring, Faster Sales Results with our proprietary iLMS platform",
    url: "https://elevationchangedoc.com",
    siteName: "Elevationchangedoc Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevationchangedoc Solutions - Intelligent Lead Management",
    description: "Smarter Lead Scoring, Faster Sales Results with our proprietary iLMS platform",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Elevationchangedoc Solutions",
              description: "Intelligent lead management solutions for modern sales teams",
              url: "https://elevationchangedoc.com",
              logo: "https://elevationchangedoc.com/logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Austin",
                addressRegion: "TX",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-0123",
                contactType: "customer service",
              },
              sameAs: ["https://linkedin.com/company/elevationchangedoc", "https://twitter.com/elevationchangedoc"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
