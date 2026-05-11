/**
 * Assigns Tue/Thu publish dates to all unpublished articles at 2/week cadence.
 * Run once: node scripts/schedule-articles.mjs
 * Articles with future dates won't appear until the site is redeployed on/after that date.
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const CONTENT_DIR = path.join(__dirname, '..', 'content', 'writing')

function nextPublishDates(startDate, count) {
  const dates = []
  const d = new Date(startDate)
  while (dates.length < count) {
    const dow = d.getDay() // 0=Sun, 2=Tue, 4=Thu
    if (dow === 2 || dow === 4) dates.push(new Date(d))
    d.setDate(d.getDate() + 1)
  }
  return dates
}

function toDateStr(d) {
  return d.toISOString().split('T')[0]
}

const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.mdx') && !f.startsWith('_'))
const unpublished = []

for (const file of files) {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf-8')
  if (/^published:\s*false/m.test(raw)) {
    unpublished.push({ file, raw })
  }
}

unpublished.sort((a, b) => a.file.localeCompare(b.file))
console.log(`Found ${unpublished.length} unpublished articles. Scheduling at 2/week...`)

// Start from next Tuesday
const start = new Date()
start.setDate(start.getDate() + 1)
while (start.getDay() !== 2) start.setDate(start.getDate() + 1)

const dates = nextPublishDates(start, unpublished.length)

for (let i = 0; i < unpublished.length; i++) {
  const { file, raw } = unpublished[i]
  const dateStr = toDateStr(dates[i])
  let updated = raw
    .replace(/^published:\s*false/m, 'published: true')
    .replace(/^date:\s*['"]?[\d-]+['"]?/m, `date: '${dateStr}'`)
  fs.writeFileSync(path.join(CONTENT_DIR, file), updated, 'utf-8')
  console.log(`  ✓ ${file} → ${dateStr}`)
}

console.log(`\nDone. Deploy to go live: npm run deploy`)
console.log(`Set up weekly Cloudflare Pages deploy hook for automated drip.`)
