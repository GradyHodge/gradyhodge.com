// src/components/ArticleCard.tsx
import Link from 'next/link'
import type { ArticleMeta } from '@/lib/articles'

export function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <Link
      href={`/writing/${article.slug}`}
      className="block group border border-slate-800 hover:border-slate-600 rounded-xl p-6 bg-slate-900/40 hover:bg-slate-900/80 transition-all"
    >
      <div className="flex items-start justify-between gap-4 mb-2">
        <h2 className="text-lg font-semibold text-slate-100 group-hover:text-white transition-colors leading-snug">
          {article.title}
        </h2>
        <span className="shrink-0 text-xs text-slate-600 font-mono pt-0.5">{article.date}</span>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">{article.description}</p>
      <span className="inline-block text-xs font-semibold text-indigo-400/70 bg-indigo-400/10 border border-indigo-400/20 rounded-full px-2.5 py-0.5">
        {article.pillar}
      </span>
    </Link>
  )
}
