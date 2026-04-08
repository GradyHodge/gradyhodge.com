'use client'

import { useState } from 'react'

const WORDS = [
  { word: 'Accelerate', tip: 'Learn at an accelerated rate' },
  { word: 'Expand', tip: 'Expand my mind to its fullest capacity' },
  { word: 'Become', tip: 'Become my best self' },
  { word: 'Accomplish', tip: 'Accomplish all the Lord will have me do' },
]

export function MottoSubtitle() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="flex flex-wrap gap-x-2 gap-y-1 mb-6">
      {WORDS.map((item, i) => (
        <span key={item.word} className="relative inline-block">
          <span
            className="text-2xl font-semibold text-slate-100 cursor-default hover:text-indigo-400 transition-colors duration-200"
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            {item.word}{i < WORDS.length - 1 ? ',' : ''}
          </span>
          {active === i && (
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[220px] bg-slate-800 border border-slate-600 text-slate-300 text-sm px-3 py-1.5 rounded-lg shadow-lg text-center pointer-events-none z-10">
              {item.tip}
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-600" />
            </span>
          )}
        </span>
      ))}
    </div>
  )
}
