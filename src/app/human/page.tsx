// src/app/human/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Human — Gray Hodge',
  description: 'Board games, recovery, lessons from hard years — the person behind the code.',
}

export default function HumanPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-4">
        Human
      </div>
      <h1 className="text-4xl font-bold text-slate-100 mb-3">The Human Layer</h1>
      <p className="text-slate-400 mb-10">
        Board games, recovery, lessons from hard years. The person behind the code.
      </p>
      <div className="border border-dashed border-slate-700 rounded-xl p-12 text-center">
        <p className="text-slate-600 text-sm">Stories coming soon.</p>
      </div>
    </div>
  )
}
