// src/app/human/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Human 3.0 — Gray Hodge',
  description: 'Build your Human 3.0 stack — TELOS, FRAME, SIGNAL, and Personal AI Infrastructure. Work with Gray Hodge to become a self-directed, AI-augmented professional.',
}

const tiers = [
  {
    name: 'DIY',
    tag: 'Free',
    description: 'Read the articles. Use the frameworks. Build your TELOS file yourself.',
    items: [
      '30+ articles on AI engineering, eudaimonia leadership, and career architecture',
      'Open TELOS framework',
      'TELOS → FRAME → SIGNAL methodology',
      'Zero cost',
    ],
    cta: 'Start Reading',
    href: '/writing',
    highlight: false,
  },
  {
    name: 'Done-With-You',
    tag: '$2,500–$5,000',
    description: 'We build your TELOS and PAI setup together in guided sessions.',
    items: [
      'Full TELOS buildout (missions, goals, NIDs, beliefs, challenges)',
      'FRAME layer — beliefs, mental models, problems you solve',
      'Personal AI Infrastructure setup',
      '3–5 working sessions',
      'You own everything',
    ],
    cta: 'Let\'s Talk',
    href: 'https://galvanizedesigns.com',
    highlight: true,
  },
  {
    name: 'Done-For-You',
    tag: '$10,000–$25,000',
    description: 'Full Human 3.0 stack — built, configured, and deployed for you.',
    items: [
      'Everything in Done-With-You',
      'SIGNAL v1 — your public identity API and presence layer',
      'PAI trained on your TELOS and FRAME',
      'Personal brand architecture',
      'Content strategy and first 10 articles',
      'Ongoing support',
    ],
    cta: 'Apply',
    href: 'https://galvanizedesigns.com',
    highlight: false,
  },
]

export default function HumanPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      {/* Header */}
      <div className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-4">
        Human 3.0
      </div>
      <h1 className="text-4xl font-bold text-slate-100 mb-4 leading-tight">
        Build Your Human 3.0 Stack
      </h1>
      <p className="text-slate-400 text-lg mb-4 max-w-2xl">
        TELOS. FRAME. SIGNAL. PAI. A personal AI infrastructure that makes you more capable,
        more purposeful, and more resilient — before the disruption finds you.
      </p>
      <p className="text-slate-500 mb-12 max-w-2xl">
        Most people interact with AI as a search engine. They get generic answers and start
        from zero every session. The Human 3.0 stack changes that. Your AI knows who you are,
        what you&apos;re building, and where you&apos;ve been. Every session compounds.
      </p>

      {/* Stack diagram */}
      <div className="mb-14 border border-slate-800 rounded-xl p-6 bg-slate-900/40">
        <div className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-5">The Stack</div>
        <div className="space-y-3">
          {[
            { name: 'TELOS', desc: 'Your life OS — missions, goals, values, identity. Private. The truth.' },
            { name: 'FRAME', desc: 'Your worldview — beliefs, mental models, problems you solve. AI-readable.' },
            { name: 'SIGNAL', desc: 'Your public layer — what the world receives. Humans and AI both understand you.' },
            { name: 'PAI', desc: 'Your personal AI — trained on TELOS + FRAME. Every session compounds.' },
          ].map((layer, i) => (
            <div key={layer.name} className="flex items-start gap-4">
              <div className="flex items-center gap-2 w-20 shrink-0">
                <span className="text-xs text-slate-600 font-mono">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm font-bold text-indigo-400">{layer.name}</span>
              </div>
              <span className="text-sm text-slate-400 leading-relaxed">{layer.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tiers */}
      <div className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-6">How To Work With Me</div>
      <div className="grid gap-6 md:grid-cols-3 mb-16">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-xl border p-6 flex flex-col ${
              tier.highlight
                ? 'border-indigo-500 bg-indigo-950/30'
                : 'border-slate-800 bg-slate-900/30'
            }`}
          >
            {tier.highlight && (
              <div className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-3">Most Popular</div>
            )}
            <div className="text-lg font-bold text-slate-100 mb-1">{tier.name}</div>
            <div className={`text-sm font-semibold mb-3 ${tier.highlight ? 'text-indigo-400' : 'text-slate-500'}`}>
              {tier.tag}
            </div>
            <p className="text-sm text-slate-400 mb-5 leading-relaxed">{tier.description}</p>
            <ul className="space-y-2 mb-6 flex-1">
              {tier.items.map((item) => (
                <li key={item} className="text-sm text-slate-400 flex items-start gap-2">
                  <span className="text-indigo-400 mt-0.5 shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              target={tier.href.startsWith('http') ? '_blank' : undefined}
              rel={tier.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`text-center py-2.5 rounded text-sm font-semibold transition-colors ${
                tier.highlight
                  ? 'bg-indigo-500 hover:bg-indigo-600 text-white'
                  : 'border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white'
              }`}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>

      {/* API signal callout */}
      <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/20">
        <div className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-3">SIGNAL API</div>
        <p className="text-sm text-slate-400 mb-3">
          This site has a public identity API. You (or your AI) can query exactly who I am,
          what I believe, what I solve, and how to engage me.
        </p>
        <code className="text-xs text-indigo-300 font-mono bg-slate-900 px-3 py-2 rounded block">
          GET https://gradyhodge.com/api/signal
        </code>
      </div>
    </div>
  )
}
