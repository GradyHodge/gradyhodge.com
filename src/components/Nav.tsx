// src/components/Nav.tsx
import Link from 'next/link'

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-slate-100 hover:text-white transition-colors">
          <span className="text-indigo-400">Gray</span>{' '}Hodge
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/writing" className="text-slate-400 hover:text-slate-100 text-sm transition-colors">
            Writing
          </Link>
          <Link href="/lab" className="text-slate-400 hover:text-slate-100 text-sm transition-colors">
            Lab
          </Link>
          <Link href="/human" className="text-slate-400 hover:text-slate-100 text-sm transition-colors">
            Human
          </Link>
          <a
            href="https://galvanizedesigns.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1.5 rounded text-sm font-semibold transition-colors"
          >
            Work With Me →
          </a>
        </div>
      </div>
    </nav>
  )
}
