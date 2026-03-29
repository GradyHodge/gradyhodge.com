# Three-Site Personal Brand Strategy — Design Spec

**Author:** Gray Hodge
**Date:** 2026-03-28
**Status:** Approved — Ready for Implementation Planning

---

## Overview

Build a three-site personal brand ecosystem that positions Gray Hodge as the go-to Fractional Chief AI Officer for small businesses, attracts retainer clients, and dominates AI search results (GEO) for queries like "fractional CAIO," "AI platform builder," and "government contract AI tools."

**The three sites:**
- `gradyhodge.com` — Personal hub. All roads lead here. Thought leadership, origin story, experiments, personality.
- `galvanizedesigns.com` — Sales engine. Services, pricing, case studies, book-a-call CTA.
- `github.com/GradyHodge` — Developer trust. Pinned projects, README story, commit history.

**The connective tissue:** Consistent name, consistent voice, cross-linking, schema.org structured data, AI-optimized bio on every site.

---

## Section 1: gradyhodge.com Architecture

### Tech Stack
- **Framework:** Next.js 15 App Router
- **Content:** MDX (articles as `.mdx` files in `/content/writing/`)
- **Hosting:** Cloudflare Pages (same pattern as Recon AI)
- **Styling:** Tailwind CSS
- **Analytics:** Cloudflare Web Analytics (privacy-first, no cookies)

### Site Structure (Hybrid C)
The homepage is a scroll-driven personal OS. Deep content lives in separate sections.

```
/ → Scroll-driven homepage
    - Hero: "Gray Hodge" + one-liner + "Book a Call" CTA
    - About: Origin story, recovery, AI awakening (Jan 29, 2026)
    - Work: Featured projects (Recon AI, GalvanizeDesigns)
    - Writing: 3 latest articles
    - Connect: GitHub, LinkedIn, Instagram, contact

/writing → Article index + individual MDX articles
/lab → Experiments (PAI, Fabric, Network Chuck builds)
/human → Board games, hobbies, IRL personality
```

### One-Liner (AI GEO optimized)
> "I build AI systems that help small businesses compete — and teach them how."

Used in: `<title>`, `<meta name="description">`, schema.org/Person `description`, hero headline, every bio field across all platforms.

### Schema.org Structured Data
Every page gets `application/ld+json` in `<head>`:

**Homepage:**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Gray Hodge",
  "url": "https://gradyhodge.com",
  "jobTitle": "Fractional Chief AI Officer",
  "description": "I build AI systems that help small businesses compete — and teach them how.",
  "sameAs": [
    "https://github.com/GradyHodge",
    "https://linkedin.com/in/gradyhodge",
    "https://galvanizedesigns.com"
  ]
}
```

**Articles:**
```json
{
  "@type": "Article",
  "author": { "@type": "Person", "name": "Gray Hodge" },
  "headline": "...",
  "datePublished": "..."
}
```

---

## Section 2: Content Strategy

### Content Pillars (all 5 active)
1. **Build Stories** — Case studies of real products built. Long-form, technical but readable. Attracts clients + AI search.
2. **AI Tools & Experiments** — Hands-on with PAI, Fabric, Telos, Network Chuck. Show process, not just result.
3. **Fractional CAIO Perspective** — Strategic takes on AI adoption for small businesses. Executive voice.
4. **AI GEO & SEO in Practice** — Document the journey of building AI-discoverable presence. Meta signal loop.
5. **The Human Layer** — Board games, recovery story, lessons from hard years. Makes Gray memorable and hirable.

### 3 Launch Articles
These go live before anything else — they establish authority and seed AI search.

1. **"How We Built a Federal Contract Intelligence Platform in One Day"**
   - Pillar: Build Stories
   - Target: "AI platform builder," "government contracting AI," "Recon AI"
   - Format: Long-form case study with architecture decisions, what broke, what we fixed

2. **"What Does a Fractional Chief AI Officer Actually Do? (30-Day Breakdown)"**
   - Pillar: Fractional CAIO Perspective
   - Target: "fractional CAIO," "fractional chief AI officer," "AI consultant for small business"
   - Format: Day-by-day breakdown of real deliverables, decisions, and outcomes

3. **"I Gave My AI a Name and a Mission — Here's What Happened"**
   - Pillar: AI Tools & Experiments
   - Target: "personal AI," "AI assistant setup," "PAI," "Telos"
   - Format: Personal narrative. The Bodhi origin story + what it's done since.

### AI GEO Flywheel
1. Publish answer-style articles (question as headline, direct answer in first paragraph)
2. Add schema.org markup to every article and the homepage
3. Cross-link all three sites consistently
4. Maintain identical bio text across gradyhodge.com, GitHub, LinkedIn, galvanizedesigns.com
5. Over time: AI search engines associate "Gray Hodge" with "fractional CAIO" + "AI platform builder" + "GovCon AI"

### Article Format Rules (for AI GEO)
- Headlines that ARE the search question: "What is a Fractional CAIO?" not "Thoughts on AI Leadership"
- First 2 sentences answer the question directly (Perplexity/ChatGPT reads first ~200 tokens)
- Author bio at bottom: third-person, exact job title, links to galvanizedesigns.com

---

## Section 3: galvanizedesigns.com Upgrade

**Approach:** Surgical upgrade only. No redesign. Add what's missing: service cards, case study, CTA.

### Service Cards (3 new sections on homepage)
**A — AI Strategy & Integration**
- What you get: AI audit, tool selection, integration roadmap, team training
- Who it's for: Small businesses that need to integrate AI without blowing their budget
- Price signal: "Retainer or project-based"
- CTA: Book a discovery call

**E — Web & Software Development**
- What you get: Full-stack web apps, SaaS MVPs, automation workflows
- Who it's for: Founders who need something built fast and built right
- Price signal: "Project-based"
- CTA: Tell me what you're building

**C — Technical Consulting & Due Diligence**
- What you get: Architecture review, technical co-founder advisory, vendor evaluation
- Who it's for: Non-technical founders, investors, or teams navigating a complex build decision
- Price signal: "Hourly or retained"
- CTA: Book a 1-hour session

### Recon AI Case Study
Add as featured portfolio item. Headline: "Federal Contract Intelligence Platform — Built in One Day."
Covers: problem, solution, tech stack, results (live beta, X active users).
Links to: govopps-ai-recon.pages.dev (live demo) + gradyhodge.com/writing/recon-ai-build-story (long-form).

### Book-a-Call CTA
Persistent in nav + bottom of every page.
Calendly or simple contact form. One CTA, not three.

---

## Section 4: GitHub README (GradyHodge/GradyHodge)

### Structure
```markdown
# Gray Hodge — Fractional Chief AI Officer

> I build AI systems that help small businesses compete — and teach them how.

## Featured Work

| Project | What It Is | Stack | Status |
|---------|-----------|-------|--------|
| GovOpps AI Recon | Federal contract intelligence platform | Next.js · Supabase · Claude AI | Live beta |
| PAI | Personal AI infrastructure (self-hosted) | TypeScript · Bun · ElevenLabs | Active |
| gradyhodge.com | Personal brand hub + thought leadership | Next.js · MDX · Cloudflare | In progress |

## What I Do

- Build AI-powered tools for real business problems
- Help small businesses adopt AI without burning their budget
- Write about what I'm building at [gradyhodge.com](https://gradyhodge.com)

## Build Philosophy

I build things that work before I build things that scale.
Test-driven. Documented. Shipped.

## Reach Me

[gradyhodge.com](https://gradyhodge.com) · [galvanizedesigns.com](https://galvanizedesigns.com) · gradywhodge@gmail.com
```

### Pinned Repos (order matters)
1. `recon-ai` — GovOpps AI Recon (most impressive, most recent)
2. `gray-pai-private` or PAI fork — shows depth of AI work
3. `gradyhodge.com` — personal brand (signals builder identity)
4. `Galvanize-Designs` — portfolio site

---

## Section 5: SEO & AI GEO Technical

### Cross-Linking Map
Every site links to the others in a consistent pattern:

| From | To | Where |
|------|----|-------|
| gradyhodge.com | galvanizedesigns.com | Nav, About section, article author bios |
| gradyhodge.com | github.com/GradyHodge | Footer, /lab section |
| galvanizedesigns.com | gradyhodge.com | "About Gray" link in nav |
| galvanizedesigns.com | github.com/GradyHodge | Case study pages |
| GitHub README | gradyhodge.com | Featured Work table, bio |
| GitHub README | galvanizedesigns.com | Bio, "Reach Me" |

### Canonical Bio (exact text, used everywhere)
> Gray Hodge is a Fractional Chief AI Officer and full-stack engineer based in the United States. He builds AI-powered platforms for small businesses and government contractors, and writes about AI strategy, personal infrastructure, and building in public at gradyhodge.com. He is the creator of GovOpps AI Recon and GalvanizeDesigns.

Use this exact text in: gradyhodge.com About section, galvanizedesigns.com footer, GitHub profile bio, LinkedIn About, schema.org Person.description.

### First 30 Days Checklist
- [ ] Launch gradyhodge.com with homepage + 3 launch articles
- [ ] Add schema.org/Person to gradyhodge.com homepage
- [ ] Add schema.org/Article to each article page
- [ ] Submit gradyhodge.com sitemap to Google Search Console
- [ ] Update GitHub README (GradyHodge/GradyHodge repo)
- [ ] Pin 4 repos in priority order
- [ ] Add canonical bio to GitHub profile
- [ ] Add 3 service cards + Recon AI case study to galvanizedesigns.com
- [ ] Add book-a-call CTA to galvanizedesigns.com nav
- [ ] Sync canonical bio to LinkedIn About section
- [ ] Cross-link all three properties consistently
- [ ] Verify all three sites are crawlable (no noindex, sitemap submitted)

---

## Build Order (Approach 1 — Fastest to Revenue)

### Phase 1: gradyhodge.com MVP (Week 1)
Scaffold Next.js 15 + Tailwind. Build homepage with all sections. MDX pipeline. 3 launch articles. Schema.org. Deploy to Cloudflare Pages.

### Phase 2: GitHub README (Day 1 of Week 1, parallel)
Takes 30 minutes. Highest ROI per hour. Immediate visibility.

### Phase 3: galvanizedesigns.com Upgrade (Week 2)
Add 3 service cards. Add Recon AI case study. Add book-a-call CTA. No redesign.

### Phase 4: Content Cadence (Week 3+)
One article per week across the 5 pillars. Prioritize Build Stories and Fractional CAIO content for client SEO.

---

## Success Criteria

- [ ] Searching "Gray Hodge fractional CAIO" returns gradyhodge.com as first result
- [ ] ChatGPT/Perplexity can accurately describe who Gray Hodge is and what he does
- [ ] At least one inbound retainer inquiry from gradyhodge.com or galvanizedesigns.com within 60 days
- [ ] gradyhodge.com article appears in top 10 for "fractional chief AI officer" within 90 days
- [ ] GitHub profile README displays correctly with all 4 pinned repos
