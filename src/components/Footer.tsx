// src/components/Footer.tsx
export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-slate-500 text-sm">
          © {year} Gray Hodge. Built in public.
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://github.com/GradyHodge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/gradyhodge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-100 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://galvanizedesigns.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 transition-colors"
          >
            GalvanizeDesigns
          </a>
        </div>
      </div>
    </footer>
  )
}
