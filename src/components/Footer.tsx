// src/components/Footer.tsx
import { OctopusMark } from '@/components/OctopusMark'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-800 bg-[#0a0f1e] py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1.5">
          <div className="flex items-center gap-2 text-slate-400">
            <OctopusMark size={16} className="text-indigo-400" />
            <span className="text-sm font-semibold text-slate-300">Gray Hodge</span>
          </div>
          <p className="text-xs text-slate-600 italic">
            &ldquo;My word is my architecture.&rdquo;
          </p>
          <p className="text-slate-600 text-xs">© {year} · The Eudaimonia Architect</p>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://github.com/GradyHodge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/gradyhodge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://galvanizedesigns.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            GalvanizeDesigns
          </a>
        </div>
      </div>
    </footer>
  )
}
