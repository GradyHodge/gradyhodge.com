// src/components/sections/Connect.tsx
const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/GradyHodge',
    description: 'Code, builds, commit history',
    color: 'text-slate-300',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/gradyhodge',
    description: 'Professional network',
    color: 'text-blue-400',
  },
  {
    label: 'GalvanizeDesigns',
    href: 'https://galvanizedesigns.com',
    description: 'Work with me — AI strategy, development, consulting',
    color: 'text-orange-400',
  },
  {
    label: 'Email',
    href: 'mailto:gradywhodge@gmail.com',
    description: 'gradywhodge@gmail.com',
    color: 'text-indigo-400',
  },
]

export function Connect() {
  return (
    <section id="connect" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-xs font-bold tracking-widest text-indigo-400 uppercase mb-4">
          Connect
        </div>
        <h2 className="text-3xl font-bold text-slate-100 mb-10">Find Me</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="block group border border-slate-800 hover:border-slate-600 rounded-xl p-5 bg-slate-900/40 hover:bg-slate-900/80 transition-all"
            >
              <div className={`font-semibold mb-1 ${link.color} group-hover:opacity-80 transition-opacity`}>
                {link.label} →
              </div>
              <p className="text-slate-500 text-sm">{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
