// src/lib/lab.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content/lab')

export interface TentacleMeta {
  slug: string
  title: string
  description: string
  date: string
  series: string
  tentacle: number
  published: boolean
  emoji?: string
}

export interface Tentacle extends TentacleMeta {
  content: string
}

export function getTentacle(slug: string): Tentacle | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    series: data.series as string,
    tentacle: data.tentacle as number,
    published: data.published === true,
    emoji: data.emoji as string | undefined,
    content: content.trim(),
  }
}

export function getTentacles(): Tentacle[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.mdx'))
  return files
    .map(file => getTentacle(file.replace('.mdx', '')))
    .filter((t): t is Tentacle => t !== null && t.published)
    .sort((a, b) => a.tentacle - b.tentacle)
}

export function getTentaclesBySeries(): Record<string, Tentacle[]> {
  const all = getTentacles()
  return all.reduce<Record<string, Tentacle[]>>((acc, t) => {
    if (!acc[t.series]) acc[t.series] = []
    acc[t.series].push(t)
    return acc
  }, {})
}
