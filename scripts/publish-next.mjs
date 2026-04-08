#!/usr/bin/env node
// Flips the next 2 unpublished articles to published: true.
// Run by GitHub Actions cron 2x/week.
// Usage: node scripts/publish-next.mjs

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const CONTENT_DIR = path.join(__dirname, '..', 'content', 'writing')
const COUNT = parseInt(process.argv[2] || '1', 10)

const files = fs.readdirSync(CONTENT_DIR)
  .filter(f => f.endsWith('.mdx') && !f.startsWith('_'))
  .sort() // alphabetical = predictable order

let published = 0

for (const file of files) {
  if (published >= COUNT) break

  const filePath = path.join(CONTENT_DIR, file)
  const content = fs.readFileSync(filePath, 'utf-8')

  if (/^published: false/m.test(content)) {
    const updated = content.replace(/^published: false/m, 'published: true')
    fs.writeFileSync(filePath, updated)
    console.log(`Published: ${file.replace('.mdx', '')}`)
    published++
  }
}

if (published === 0) {
  console.log('No unpublished articles remaining.')
  process.exit(0)
}

console.log(`\nPublished ${published} article(s).`)
