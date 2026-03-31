// src/app/sitemap.ts
import type { MetadataRoute } from 'next'
import { getArticles } from '@/lib/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getArticles().filter(a => !a.slug.startsWith('_'))

  const articleUrls = articles.map(a => ({
    url: `https://gradyhodge.com/writing/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://gradyhodge.com',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: 'https://gradyhodge.com/writing',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: 'https://gradyhodge.com/lab',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: 'https://gradyhodge.com/human',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    ...articleUrls,
  ]
}
