// src/app/lab/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { getTentaclesBySeries } from '@/lib/lab'

export const metadata: Metadata = {
  title: 'The Lab — Gray Hodge',
  description: 'Journal of a mad scientist and his pet octopus. Two AI series: PAI Tentacles (TELOS, Bodhi, Open Brain) and OpenClaw Tentacles (cybersecurity experiments).',
}

const SERIES_META: Record<string, { emoji: string; color: string; tagColor: string; subtitle: string }> = {
  'PAI Tentacles': {
    emoji: '🐙',
    color: 'border-indigo-500/30 hover:border-indigo-400/60',
    tagColor: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
    subtitle: 'Building a Life OS, a personal AI, and a brain that actually remembers things.',
  },
  'OpenClaw Tentacles': {
    emoji: '🦀',
    color: 'border-cyan-500/30 hover:border-cyan-400/60',
    tagColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    subtitle: 'Cybersecurity experiments, AI claws, and things that might get me on a list.',
  },
}

export default function LabPage() {
  const bySeries = getTentaclesBySeries()

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-4">
        The Lab
      </div>
      <h1 className="text-4xl font-bold text-slate-100 mb-3">
        🧪 Journal of a Mad Scientist & His Pet Octopus
      </h1>
      <p className="text-slate-400 mb-2 text-lg">
        These aren&apos;t articles. They&apos;re <span className="text-indigo-400 font-semibold">Tentacles</span> — raw notes from the deep end of the experiment.
      </p>
      <p className="text-slate-600 text-sm italic mb-10">
        Warning: may contain dad jokes, accidental breakthroughs, and one very opinionated octopus.
      </p>

      <div className="font-mono text-xs text-indigo-400/30 mb-12 leading-tight select-none hidden md:block">
        <pre>{`    ___
   /   \\
  | · · |   "I have 8 arms and approximately
   \\ ^ /     7 of them are running AI agents."
    )|(
  _/ \\_`}</pre>
      </div>

      {Object.entries(SERIES_META).map(([seriesName, meta]) => {
        const tentacles = bySeries[seriesName] ?? []
        return (
          <div key={seriesName} className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{meta.emoji}</span>
              <h2 className="text-2xl font-bold text-slate-100">{seriesName}</h2>
            </div>
            <p className="text-slate-500 text-sm mb-6 ml-10">{meta.subtitle}</p>

            {tentacles.length === 0 ? (
              <div className="border border-dashed border-slate-800 rounded-xl p-8 text-center">
                <p className="text-slate-700 text-sm italic">Tentacles forming... check back soon. 🐙</p>
              </div>
            ) : (
              <div className="space-y-3">
                {tentacles.map(t => (
                  <Link
                    key={t.slug}
                    href={`/lab/${t.slug}`}
                    className={`block group border rounded-xl p-6 bg-slate-900/40 hover:bg-slate-900/80 transition-all ${meta.color}`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-600 font-mono text-xs shrink-0">
                          #{String(t.tentacle).padStart(2, '0')}
                        </span>
                        <h3 className="text-base font-semibold text-slate-100 group-hover:text-white transition-colors leading-snug">
                          {t.emoji && <span className="mr-2">{t.emoji}</span>}
                          {t.title}
                        </h3>
                      </div>
                      <span className="shrink-0 text-xs text-slate-600 font-mono pt-0.5">{t.date}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed ml-8">{t.description}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )
      })}

      <div className="border-t border-slate-800 pt-8 mt-4">
        <p className="text-slate-700 text-xs italic text-center">
          &ldquo;The lab is always open. The octopus never sleeps.&rdquo;
        </p>
      </div>
    </div>
  )
}
