// src/app/lab/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getTentacle, getTentacles } from '@/lib/lab'

export function generateStaticParams() {
  return getTentacles().map(t => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const t = getTentacle(slug)
  if (!t) return {}
  return {
    title: `${t.title} — Gray Hodge Lab`,
    description: t.description,
  }
}

export default async function TentaclePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const t = getTentacle(slug)
  if (!t || !t.published) notFound()

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Link href="/lab" className="text-xs text-slate-600 hover:text-indigo-400 transition-colors font-mono">
            ← The Lab
          </Link>
          <span className="text-slate-700 text-xs">·</span>
          <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">{t.series}</span>
          <span className="text-slate-700 text-xs">·</span>
          <span className="text-xs text-slate-600 font-mono">Tentacle #{String(t.tentacle).padStart(2, '0')}</span>
        </div>
        <h1 className="text-4xl font-bold text-slate-100 mt-2 mb-3 leading-tight">
          {t.emoji && <span className="mr-3">{t.emoji}</span>}
          {t.title}
        </h1>
        <p className="text-slate-400 mb-2">{t.description}</p>
        <p className="text-xs text-slate-600 font-mono">{t.date}</p>
      </div>

      <div className="prose prose-invert prose-slate max-w-none
        prose-headings:text-slate-100 prose-headings:font-bold
        prose-p:text-slate-300 prose-p:leading-relaxed
        prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:text-indigo-300
        prose-strong:text-slate-100
        prose-code:text-cyan-300 prose-code:bg-slate-800 prose-code:rounded prose-code:px-1
        prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-700
        prose-blockquote:border-indigo-500 prose-blockquote:text-slate-400
        prose-hr:border-slate-800">
        <MDXRemote source={t.content} />
      </div>

      <div className="mt-16 pt-8 border-t border-slate-800">
        <p className="text-slate-600 text-xs italic text-center">
          🐙 &ldquo;The lab is always open. The octopus never sleeps.&rdquo;
        </p>
      </div>
    </div>
  )
}
