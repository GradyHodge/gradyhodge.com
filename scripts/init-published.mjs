#!/usr/bin/env node
// One-time setup: adds published: false to all articles.
// Run once: node scripts/init-published.mjs

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const CONTENT_DIR = path.join(__dirname, '..', 'content', 'writing')

const LAUNCH_NOW = [
  'the-five-types-of-safety-every-leader-must-create',
  'eudaimonia-is-not-a-buzzword',
  'the-zero-budget-ai-stack',
  'how-i-built-govops-ai-recon',
]

const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.mdx') && !f.startsWith('_'))

for (const file of files) {
  const slug = file.replace('.mdx', '')
  const filePath = path.join(CONTENT_DIR, file)
  let content = fs.readFileSync(filePath, 'utf-8')

  // Skip if already has published field
  if (/^published:/m.test(content)) {
    console.log(`SKIP (already has published): ${slug}`)
    continue
  }

  const isLaunch = LAUNCH_NOW.includes(slug)
  const publishedLine = `published: ${isLaunch}\n`

  // Insert after the opening ---
  content = content.replace(/^---\n/, `---\n${publishedLine}`)
  fs.writeFileSync(filePath, content)
  console.log(`SET published: ${isLaunch}  →  ${slug}`)
}

console.log('\nDone. Launch articles are published: true, all others: false.')
