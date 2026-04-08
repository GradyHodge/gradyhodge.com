// src/lib/articles.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content/writing')

export interface ArticleMeta {
  slug: string
  title: string
  description: string
  date: string
  pillar: string
  published: boolean
}

export interface Article extends ArticleMeta {
  content: string
}

export function getArticle(slug: string): Article | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    pillar: data.pillar as string,
    published: data.published === true,
    content: content.trim(),
  }
}

export function getArticles(): Article[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.mdx'))
  return files
    .map(file => getArticle(file.replace('.mdx', '')))
    .filter((a): a is Article => a !== null && a.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
