// src/app/lab/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lab — Gray Hodge',
  description: 'Experiments with PAI, Fabric, Network Chuck builds, and whatever I\'m tinkering with.',
}

export default function LabPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-4">
        Lab
      </div>
      <h1 className="text-4xl font-bold text-slate-100 mb-3">Experiments</h1>
      <p className="text-slate-400 mb-10">
        PAI builds, Fabric workflows, Network Chuck labs, and whatever I&apos;m breaking this week.
      </p>
      <div className="border border-dashed border-slate-700 rounded-xl p-12 text-center">
        <p className="text-slate-600 text-sm">Lab notes coming soon.</p>
      </div>
    </div>
  )
}
