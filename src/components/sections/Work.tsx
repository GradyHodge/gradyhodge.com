// src/components/sections/Work.tsx
const projects = [
  {
    name: 'GovOpps AI Recon',
    description:
      'Federal contract intelligence platform. Discovers, scores, and tracks government contracting opportunities using Claude AI and SAM.gov.',
    href: 'https://govopps-ai-recon.pages.dev',
    stack: 'Next.js · Supabase · Claude AI',
    status: 'Live beta',
    statusClass: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  },
  {
    name: 'GalvanizeDesigns',
    description:
      'AI consulting and full-stack development studio for small businesses and government contractors who need to move fast.',
    href: 'https://galvanizedesigns.com',
    stack: 'Strategy · Development · Consulting',
    status: 'Active',
    statusClass: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
  },
]

export function Work() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-4">
          Work
        </div>
        <h2 className="text-3xl font-bold text-slate-100 mb-10">Featured Projects</h2>
        <div className="space-y-4">
          {projects.map(p => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block group border border-slate-800 hover:border-slate-600 rounded-xl p-6 bg-slate-900/40 hover:bg-slate-900/80 transition-all"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-lg font-semibold text-slate-100 group-hover:text-white transition-colors">
                  {p.name}
                </h3>
                <span
                  className={`shrink-0 text-xs font-semibold border rounded-full px-2.5 py-0.5 ${p.statusClass}`}
                >
                  {p.status}
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">{p.description}</p>
              <p className="text-xs text-slate-600 font-mono">{p.stack}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
