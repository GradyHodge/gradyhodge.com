// src/components/sections/WritingPreview.tsx
import Link from 'next/link'
import { getArticles } from '@/lib/articles'

export function WritingPreview() {
  const articles = getArticles()
    .filter(a => !a.slug.startsWith('_'))
    .slice(0, 3)

  return (
    <section id="writing" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-4">
          Writing
        </div>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-slate-100">Latest Articles</h2>
          <Link
            href="/writing"
            className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            All articles →
          </Link>
        </div>
        {articles.length === 0 ? (
          <p className="text-slate-500">Articles coming soon.</p>
        ) : (
          <div className="space-y-4">
            {articles.map(article => (
              <Link
                key={article.slug}
                href={`/writing/${article.slug}`}
                className="block group border border-slate-800 hover:border-slate-600 rounded-xl p-6 bg-slate-900/40 hover:bg-slate-900/80 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-base font-semibold text-slate-100 group-hover:text-white transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <span className="shrink-0 text-xs text-slate-600 font-mono pt-0.5">
                    {article.date}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{article.description}</p>
                <span className="inline-block mt-3 text-xs font-semibold text-indigo-400/70 bg-indigo-400/10 border border-indigo-400/20 rounded-full px-2.5 py-0.5">
                  {article.pillar}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
