// src/components/sections/Hero.tsx
import { MottoCarousel } from '@/components/MottoCarousel'

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[90vh] flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700 rounded-full px-4 py-1.5 text-slate-400 text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          The Eudaimonia Architect
        </div>
        <h1 className="text-6xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
          Gray Hodge
        </h1>
        <p className="text-lg text-indigo-400 font-medium mb-6 tracking-wide uppercase">
          AI Engineer · Fractional CAIO · Leadership Architect
        </p>
        <p className="text-xl md:text-2xl text-slate-300 mb-6 leading-relaxed max-w-2xl mx-auto">
          I build environments where excellence becomes inevitable —
          in AI systems and in the teams that run them.
        </p>
        <div className="mb-10">
          <MottoCarousel />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://galvanizedesigns.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors text-base"
          >
            Work With Me →
          </a>
          <a
            href="#writing"
            className="border border-slate-600 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-400 px-8 py-3.5 rounded-lg font-semibold transition-colors text-base"
          >
            Read My Writing
          </a>
        </div>
      </div>
    </section>
  )
}
