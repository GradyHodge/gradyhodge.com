// src/app/writing/[slug]/page.tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getArticle, getArticles } from '@/lib/articles'

export function generateStaticParams() {
  return getArticles().map(a => ({ slug: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return {
    title: `${article.title} — Gray Hodge`,
    description: article.description,
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article || article.slug.startsWith('_')) notFound()

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-8">
        <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
          {article.pillar}
        </span>
        <h1 className="text-4xl font-bold text-slate-100 mt-3 mb-3 leading-tight">
          {article.title}
        </h1>
        <p className="text-slate-400 mb-2">{article.description}</p>
        <p className="text-xs text-slate-600 font-mono">{article.date}</p>
      </div>
      <div className="prose prose-invert prose-slate max-w-none
        prose-headings:text-slate-100 prose-headings:font-bold
        prose-p:text-slate-300 prose-p:leading-relaxed
        prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:text-indigo-300
        prose-strong:text-slate-100
        prose-code:text-indigo-300 prose-code:bg-slate-800 prose-code:rounded prose-code:px-1
        prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-700
        prose-blockquote:border-indigo-500 prose-blockquote:text-slate-400
        prose-hr:border-slate-800">
        <MDXRemote source={article.content} />
      </div>
      <div className="mt-16 pt-8 border-t border-slate-800">
        <p className="text-slate-400 text-sm leading-relaxed">
          <strong className="text-slate-200">Gray Hodge</strong> is a Fractional Chief AI Officer
          and full-stack engineer. He builds AI-powered platforms for small businesses and
          government contractors.{' '}
          <a
            href="https://galvanizedesigns.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 transition-colors"
          >
            Work with Gray &rarr;
          </a>
        </p>
      </div>
    </div>
  )
}
