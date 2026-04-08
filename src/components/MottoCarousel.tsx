'use client'

import { useState, useEffect } from 'react'

const MOTTOS = [
  // Authority & Excellence
  "Excellence is not a performance. It's a structure.",
  "I don't set the bar high. I build the floor there.",
  "A quest for excellence is not ambition — it's a standard.",
  "I finish what I start. Full stop.",
  "The greatest competitive advantage is being the person who actually delivers.",
  "I don't aim for good enough. Good enough wasn't the goal.",
  "Every problem I've chosen to solve, I've mastered. That's not bragging — it's strategy.",
  "My word is my architecture.",
  "I show up for excellence the way other people show up for comfort.",
  "Tenacity isn't what you feel — it's what you do on the hard days.",
  // Creative Solutions
  "My soul takes flight when I recognize the solution no one else saw.",
  "Creative solutions aren't magic — they're the reward for thinking longer than everyone else quit.",
  "If there's a better way, I will find it. If there isn't one, I'll build it.",
  "The best solution is rarely the obvious one.",
  "I don't build what exists. I build what should exist.",
  "Creativity is a core value, not a talent. I practice it like a discipline.",
  "The unexpected answer to the expected problem — that's where I live.",
  "A creative solution delivered on time beats a perfect solution delivered late.",
  "Innovation isn't about having more ideas. It's about executing the right one.",
  "I've never met a problem I couldn't turn into a design opportunity.",
  // Eudaimonia & Safe Environments
  "I build environments where excellence becomes inevitable.",
  "Remove ego. Remove fear. Watch what people become.",
  "When people feel safe, they stop protecting themselves and start building.",
  "Eudaimonia is not a philosophy. It's something you engineer.",
  "The most productive thing a leader can do is make the room feel safe.",
  "Five types of safety: physical, emotional, financial, intellectual, social. I don't skip any of them.",
  "A team that trusts each other outperforms a team that fears each other every time.",
  "I don't manage performance. I manage the conditions that produce it.",
  "Be kind, be patient, be professional — and I'll represent you without hesitation.",
  "The best work of your life happens in environments where failure is data, not disaster.",
  // Leadership & SME Development
  "My job is to make myself unnecessary — by making everyone around me exceptional.",
  "I don't hoard expertise. I multiply it.",
  "The measure of my leadership is how many subject matter experts I created.",
  "I lift people into authority and give them the credit. That's not weakness — that's leverage.",
  "The team's ceiling rises when you stop being the smartest person in the room on purpose.",
  "Hire for heart over talent. Train for talent. Culture is the thing you can't teach.",
  "The best leaders I know don't take credit. They manufacture it and give it away.",
  "If you don't feel like what you're doing is preparing you for the next level — we need to talk today.",
  "I don't manage people. I invest in them.",
  "There are always two sides. Hear both before you respond — not react.",
  // Justice, Integrity & Conviction
  "It's not just what you produce. It's how you got it done.",
  "I bend arbitrary rules that only exist to harm people. I hold firm on principles.",
  "Just because everyone accepts it doesn't make it right.",
  "A just decision is rarely the popular one. Make it anyway.",
  "I speak first when no one else will.",
  "Silence in the face of injustice is a vote for it.",
  "Fair doesn't mean equal. It means everyone gets what they need to succeed.",
  "I've never regretted standing up for what's right. I've only regretted staying quiet.",
  "My integrity doesn't negotiate with convenience.",
  "The obstacle is the way. The crisis is the classroom. The problem is the purpose.",
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
