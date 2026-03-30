// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Gray Hodge — Fractional Chief AI Officer',
  description: 'I build AI systems that help small businesses compete — and teach them how.',
  metadataBase: new URL('https://gradyhodge.com'),
  openGraph: {
    title: 'Gray Hodge — Fractional Chief AI Officer',
    description: 'I build AI systems that help small businesses compete — and teach them how.',
    url: 'https://gradyhodge.com',
    siteName: 'Gray Hodge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gray Hodge — Fractional Chief AI Officer',
    description: 'I build AI systems that help small businesses compete — and teach them how.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
