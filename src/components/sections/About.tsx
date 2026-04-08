// src/components/sections/About.tsx
export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-4">
          About
        </div>
        <h2 className="text-3xl font-bold text-slate-100 mb-8">
          AI Engineer. Organizational Architect. I finish what I start.
        </h2>
        <div className="space-y-5 text-slate-300 text-lg leading-relaxed">
          <p>
            I build AI systems that help small businesses compete — and the cultural conditions
            that make both people and technology perform at their ceiling. My work sits at the
            intersection of AI engineering, organizational leadership, and human development.
          </p>
          <p>
            Every problem I&apos;ve chosen to solve, I&apos;ve mastered. That&apos;s not
            bragging — it&apos;s strategy. I&apos;ve led 65-person engineering organizations,
            shipped four AI-powered products to production, and built personal AI infrastructure
            that operates as a genuine force multiplier. On zero infrastructure budget.
          </p>
          <p>
            I am the creator of{' '}
            <a
              href="https://govopps-ai-recon.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-cyan-400 transition-colors"
            >
              GovOpps AI Recon
            </a>{' '}
            and founder of{' '}
            <a
              href="https://galvanizedesigns.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-cyan-400 transition-colors"
            >
              GalvanizeDesigns
            </a>
            . My personal AI system is named Bodhi — meaning{' '}
            <span className="text-slate-100 italic">awakening</span>.
          </p>
          <p className="text-slate-400 italic border-l-2 border-indigo-500 pl-4">
            &ldquo;Remove ego. Remove fear. Watch what people become.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
