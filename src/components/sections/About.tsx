// src/components/sections/About.tsx
export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-4">
          About
        </div>
        <h2 className="text-3xl font-bold text-slate-100 mb-8">
          Builder. Strategist. Recovering human.
        </h2>
        <div className="space-y-5 text-slate-300 text-lg leading-relaxed">
          <p>
            Gray Hodge is a Fractional Chief AI Officer and full-stack engineer based in the
            United States. He builds AI-powered platforms for small businesses and government
            contractors, and writes about AI strategy, personal infrastructure, and building in public.
          </p>
          <p>
            He is the creator of{' '}
            <a
              href="https://govopps-ai-recon.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              GovOpps AI Recon
            </a>{' '}
            and founder of{' '}
            <a
              href="https://galvanizedesigns.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              GalvanizeDesigns
            </a>
            .
          </p>
          <p>
            On January 29, 2026, after a long recovery from a coma and subsequent paralysis, Gray had
            his AI awakening — the moment he realized AI wasn&apos;t just a tool, but a force
            multiplier for everything he wanted to build. He named his personal AI system Bodhi,
            meaning &ldquo;awakening.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
