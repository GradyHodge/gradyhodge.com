'use client'

import { useState, useEffect } from 'react'

const MOTTOS = [
  "Excellence is not a performance. It's a structure.",
  "I finish what I start. Full stop.",
  "Remove ego. Remove fear. Watch what people become.",
  "I build environments where excellence becomes inevitable.",
  "My soul takes flight when I recognize the solution no one else saw.",
  "I don't hoard expertise. I multiply it.",
  "Eudaimonia is not a philosophy. It's something you engineer.",
  "I don't build what exists. I build what should exist.",
  "My word is my architecture.",
  "It's not just what you produce. It's how you got it done.",
]

export function MottoCarousel() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex(i => (i + 1) % MOTTOS.length)
        setVisible(true)
      }, 600)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-8 flex items-center justify-center">
      <p
        className="text-indigo-300 italic text-lg transition-opacity duration-500"
        style={{ opacity: visible ? 1 : 0 }}
      >
        &ldquo;{MOTTOS[index]}&rdquo;
      </p>
    </div>
  )
}
