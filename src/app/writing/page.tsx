// src/app/writing/page.tsx
import type { Metadata } from 'next'
import { getArticles } from '@/lib/articles'
import { ArticleCard } from '@/components/ArticleCard'

export const metadata: Metadata = {
  title: 'Writing — Gray Hodge',
  description: 'Articles on AI strategy, building in public, fractional CAIO work, and the human layer.',
}

export default function WritingPage() {
  const articles = getArticles().filter(a => !a.slug.startsWith('_'))

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-4">
        Writing
      </div>
      <h1 className="text-4xl font-bold text-slate-100 mb-3">Articles</h1>
      <p className="text-slate-400 mb-10">
        AI strategy, build stories, fractional CAIO work, and everything in between.
      </p>
      {articles.length === 0 ? (
        <p className="text-slate-500">Articles coming soon.</p>
      ) : (
        <div className="space-y-4">
          {articles.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  )
}
