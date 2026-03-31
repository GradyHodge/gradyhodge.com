// src/app/page.tsx
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Work } from '@/components/sections/Work'
import { WritingPreview } from '@/components/sections/WritingPreview'
import { Connect } from '@/components/sections/Connect'
import { PersonSchema } from '@/components/PersonSchema'

export default function HomePage() {
  return (
    <>
      <PersonSchema />
      <Hero />
      <About />
      <Work />
      <WritingPreview />
      <Connect />
    </>
  )
}
