// src/app/api/signal/route.ts
// Gray Hodge — SIGNAL layer
// Public identity API. Returns structured JSON representing who Gray is,
// what he believes, what he solves, and how to work with him.

import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

const signal = {
  version: '1.0',
  updated: '2026-04-08',
  identity: {
    name: 'Gray Hodge',
    title: 'The Eudaimonia Architect',
    subtitle: 'AI Engineer · Leadership Culture Architect · Compass Builder',
    url: 'https://gradyhodge.com',
    work: 'https://galvanizedesigns.com',
    github: 'https://github.com/GradyHodge',
    linkedin: 'https://linkedin.com/in/gradyhodge',
  },
  mission: 'Help leaders and professionals build their Compass stack — a personal AI infrastructure that makes them more capable, more purposeful, and more resilient as the world changes.',
  stack: {
    description: 'The TELOS → FRAME → SIGNAL architecture',
    layers: [
      {
        name: 'TELOS',
        purpose: 'Deep context file — who you are, your missions, goals, values, challenges',
        visibility: 'private',
      },
      {
        name: 'FRAME',
        purpose: 'Worldview layer — beliefs, mental models, frames, problems you solve — structured for AI reasoning',
        visibility: 'private',
      },
      {
        name: 'SIGNAL',
        purpose: 'Public identity layer — curated transmission of who you are and what you stand for',
        visibility: 'public',
      },
      {
        name: 'PAI',
        purpose: 'Personal AI Infrastructure — your AI companion trained on your TELOS and FRAME',
        visibility: 'personal',
      },
    ],
  },
  beliefs: [
    {
      id: 'B3',
      statement: 'Most knowledge workers are underprepared for what AI is about to do to their careers.',
      pillar: 'AI-Leadership',
    },
    {
      id: 'B4',
      statement: 'AI can augment humanity and bring out the best in us — it does not have to be a threat.',
      pillar: 'AI-Leadership',
    },
    {
      id: 'B5',
      statement: 'Eudaimonia is an engineerable outcome, not a philosophical aspiration.',
      pillar: 'Eudaimonia-Leadership',
    },
    {
      id: 'B8',
      statement: 'Safe teams produce better work. Safety is not softness — it is strategy.',
      pillar: 'Leadership',
    },
    {
      id: 'B10',
      statement: 'The obstacle is the way. Never let a good crisis go to waste.',
      pillar: 'Personal-Growth',
    },
  ],
  problems_i_solve: [
    {
      id: 'PS1',
      statement: "Knowledge workers don't know how to use AI — and they're running out of time to learn.",
      solution: 'Personal AI infrastructure stack: TELOS → FRAME → SIGNAL → PAI',
    },
    {
      id: 'PS2',
      statement: "Leaders don't know how to create conditions where their people actually flourish.",
      solution: 'Engineer eudaimonia — specific, observable, repeatable conditions for team flourishing.',
    },
    {
      id: 'PS3',
      statement: "High-performing individuals don't have a system for knowing who they are and where they're going.",
      solution: 'TELOS buildout — deep context file that makes purpose and identity legible to themselves and to AI.',
    },
    {
      id: 'PS5',
      statement: "Career rebuilders don't know how to reframe their story as an asset instead of a liability.",
      solution: 'Personal brand architecture — scar not wound, skill first, struggle as context.',
    },
  ],
  offer: {
    tiers: [
      {
        name: 'DIY',
        description: 'Articles, frameworks, and tools — build your Compass stack yourself',
        price: 'Free',
        url: 'https://gradyhodge.com/writing',
      },
      {
        name: 'Done-With-You',
        description: 'TELOS buildout + PAI setup for an individual — guided, collaborative',
        price: '$2,500–$5,000',
        url: 'https://gradyhodge.com/human',
      },
      {
        name: 'Done-For-You',
        description: 'Full Compass stack — TELOS, FRAME, SIGNAL, PAI — built and deployed for you',
        price: '$10,000–$25,000',
        url: 'https://gradyhodge.com/human',
      },
    ],
    contact: 'https://galvanizedesigns.com',
  },
  projects: [
    { name: 'GovOpps AI Recon', status: 'live', url: 'https://govopps-ai-recon.pages.dev' },
    { name: 'Prospectus', status: 'beta', description: 'AI-powered investor portal' },
    { name: 'Grounded In Stone', status: 'live', url: 'https://groundedinstone.pages.dev' },
    { name: 'Galvanize Designs', status: 'live', url: 'https://galvanizedesigns.com' },
  ],
}

export function GET() {
  return NextResponse.json(signal, {
    headers: {
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
