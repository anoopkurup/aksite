# Anoop Kurup Website - Revenue Systems Architect

## Project Overview
Professional website for Anoop Kurup, Revenue Systems Architect, helping founder-led B2B service firms (₹2Cr–₹15Cr) install AI-Enabled Revenue Systems that generate clients without depending on the founder. Built with Next.js and featuring an ultra-minimalist design aesthetic inspired by Apple and Swiss design principles.

**Positioning**: Revenue Systems Architect
**Tagline**: "Revenue Systems Architect for Expert Founders. Beyond referral dependence."
**Framework**: The Revenue System Architecture™ (Calibration → Automation → Acceleration)

## Current Status
✅ **Revenue System Architecture repositioning complete** (February 2026)
- Homepage with symptom-based entry points, proof stats bar, Revenue System visualization, qualification section
- Three service pages: Diagnose (AI Readiness Audit), Build (Implementation Pilot), Partner (Ongoing Advisory)
- About, Blog, Videos, and Contact pages updated to new positioning
- YAML-driven content system for all major pages
- Ultra-minimalist design system unchanged

## Tech Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS (custom ultra-minimalist design tokens)
- **Content**: YAML files for page content; MDX for blog posts
- **Typography**: Cormorant Garamond (serif) + Inter (sans-serif)
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Version Control**: Git/GitHub

## Target Audience
**Primary**: Founder-led B2B service firms
- ₹2Cr–₹15Cr revenue, 10–50 employees
- Founder is still the only one closing deals
- Stuck in referral dependence
- Marketing hasn't worked consistently
- Based in India (work is remote)

**Types**: Consultants, agencies, trainers, professional services firms (NOT software/IT product companies)

## Project Structure
```
aksite-nextjs/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Homepage (YAML-driven)
│   │   ├── about/                # Personal story + professional background (YAML-driven)
│   │   ├── diagnose/             # AI Readiness Audit (YAML-driven)
│   │   ├── build/                # Implementation Pilot (YAML-driven)
│   │   ├── partner/              # Ongoing Advisory (YAML-driven)
│   │   ├── framework/            # Revenue System Architecture page (hardcoded TSX)
│   │   ├── videos/               # Video content (hardcoded TSX)
│   │   ├── blog/                 # MDX blog system
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── contact/              # Contact with qualification criteria (hardcoded TSX)
│   │   └── (sample)/sample/      # Original sample homepage preserved
│   ├── components/
│   │   ├── ui/                   # shadcn components (if needed)
│   │   ├── Header.tsx            # Minimal nav with Services dropdown
│   │   └── Footer.tsx            # Clean 2-column footer
│   └── lib/
│       ├── content.ts            # YAML loaders + TypeScript interfaces
│       ├── blog.ts               # Blog utilities
│       └── markdown.ts           # MDX processing
├── content/
│   ├── data/
│   │   └── clarity-stack.yaml   # Revenue System Architecture phases data
│   ├── pages/
│   │   ├── home.yaml            # Homepage content
│   │   ├── about.yaml           # About page content
│   │   └── services/
│   │       ├── diagnose.yaml    # AI Readiness Audit
│   │       ├── build.yaml       # Implementation Pilot
│   │       └── partner.yaml     # Ongoing Advisory
│   └── blog/                    # MDX blog posts
├── public/
│   └── images/
└── tailwind.config.ts            # Ultra-minimalist design tokens
```

## Design System - Ultra-Minimalist Aesthetic

### Philosophy
"More Apple than agency, more architect than marketer"
- Pure white backgrounds (no gradients)
- Generous negative space
- Dual typography for authority + clarity
- Subtle accents, no visual clutter
- Swiss tool aesthetic for business thinking

### Color Palette
```typescript
colors: {
  navy: {
    50:  '#EFF6FF',  // Light phase backgrounds
    500: '#3B82F6',  // Medium phase backgrounds
    900: '#1E3A8A',  // Dark phase backgrounds, headlines
  },
  slate: {
    50:  '#F8FAFC',  // Subtle section backgrounds
    100: '#F1F5F9',  // Section dividers
    500: '#64748B',  // Meta text
    600: '#475569',  // Body text
  },
  cta: {
    500: '#F97316',  // Orange accent (minimal use)
    600: '#EA580C',  // Hover states
  },
}
```

### Typography
**Serif Headlines**: Cormorant Garamond
- Hero: 4.5rem (72px)
- Display: 3rem (48px)
- Title: 1.875rem (30px)

**Sans-Serif Body**: Inter
- Body-lg: 1.25rem (20px)
- Body: 1.125rem (18px)
- Small: 0.875rem (14px)

### Spacing
- **Section spacing**: 8rem (128px) between sections (`py-section`)
- **Content spacing**: 4rem (64px) within sections
- 8px grid system for consistent alignment

### Component Patterns
- **CTAs**: Underline-style (border-bottom) instead of filled buttons
- **Emphasis**: Border-left accents (4px)
- **Images**: Grayscale with color on hover
- **Shadows**: Minimal to none
- **Icons**: Simple, line-based (Lucide React)

## Service Structure

### 1. Diagnose (Entry Point)
**AI Readiness Audit** — 90-minute diagnostic — ₹25,000
- Pre-session intake and revenue flow mapping
- 90-minute video call audit across all three phases
- Written Roadmap: 3 Immediate Automations + Tool Stack + ROI Model
- 100% credited back if moving to Implementation Pilot
- Booking: TidyCal (https://tidycal.com/anoopmkurup/consulting-marketing-leadgen)

### 2. Build
**Implementation Pilot** — 6-week done-for-you — ₹1.5 Lakhs (₹25K audit credited back)
Three components:
- **Calibration (Week 1)**: Niche, offer sharpening, message design
- **The Hunter (Weeks 2–3)**: AI lead generation workflows, outreach sequences
- **The Architect (Weeks 4–6)**: Proposal automation, content systems, admin workflows

Key stats: Proposals 4.5 hours → 12 minutes | Win rate 15% → 35%

### 3. Partner
**Ongoing Advisory** — Monthly retainer — 3-month minimum
- 2 strategy sessions per month
- Async access between sessions
- Quarterly Revenue System review
- For founders who have done the foundational work and want sustained calibration

## The Revenue System Architecture™ Framework

Three-phase horizontal framework (Calibration → Automation → Acceleration):

```
┌─────────────────┐  →  ┌─────────────────┐  →  ┌─────────────────┐
│  CALIBRATION    │      │   AUTOMATION    │      │  ACCELERATION   │
│  "The Fuel"     │      │  "The Engine"   │      │  "The Freedom"  │
│  Phase 1/Week 1 │      │  Phase 2/Wk 2-4│      │  Phase 3/Wk 5+  │
│                 │      │                 │      │                 │
│ • Niche         │      │ • AI Lead Gen   │      │ • Predictable   │
│ • Offer         │      │ • Proposals     │      │   Pipeline      │
│ • Message       │      │ • Content       │      │ • Zero-Touch    │
└─────────────────┘      └─────────────────┘      └─────────────────┘
```

**Core Belief**: "Strategy without Systems is hallucination. Systems without Strategy is spam. We build both."
**Key Principle**: Calibration first. Automation second. Acceleration follows.

## Homepage Structure

### Current Sections (in order)
1. **Hero**: "Revenue Systems Architect for Expert Founders. Beyond referral dependence."
2. **Bridge**: "Why Clarity is No Longer Enough" — Calibrate/Automate/Accelerate steps
3. **Proof Stats Bar**: 4.5hrs→12min proposals | 15%→35% win rate | 60% deals after 5th follow-up
4. **Symptoms** (4 cards): Entry points mapped to Calibration/Automation phases
5. **Revenue System Architecture**: Horizontal 3-column visual
6. **Services** (3 cards): Diagnose, Build, Partner
7. **About**: Brief bio section
8. **Case Studies**: 3 anonymised cases with specific outcome metrics
9. **FAQ**: 6 questions including "How is Pilot different from hiring an agency?"
10. **Qualification**: "This is for you if..." / "This is not for you if..."
11. **Final CTA**: Book an AI Readiness Audit (navy-900 background)

## Blog System

### MDX Configuration
Location: `/content/blog/*.md`

### Frontmatter
```yaml
---
title: "Post Title"
description: "SEO description"
date: "2025-01-15"
category: "Strategy"
tags: ["positioning", "lead-generation"]
author: "Anoop Kurup"
read_time: "5 min read"
hero_image: "/images/blog/post-image.webp"
---
```

### Categories
- Strategy
- Calibration
- Automation
- Revenue Systems
- Business Development

## Contact Page

### Structure
1. **Hero**: "Let's talk about what's actually broken" — targets ₹2Cr–₹15Cr founders
2. **Primary CTA**: Book AI Readiness Audit (TidyCal link) — ₹25,000, 100% credit guarantee
3. **Alternative Contact**: Email + LinkedIn
4. **Qualification Section**: "This is for you if..." / "This is not for you if..."
5. **Location**: Bangalore, IST timezone note
6. **Final CTA**: "No pitch. No pressure. Just a clear plan."

## Navigation

### Header (Desktop)
About | Services ▼ | Framework | Videos | Blog | Contact | [Book an Audit]

**Services Dropdown**:
- Diagnose (AI Readiness Audit)
- Build (Implementation Pilot)
- Partner (Ongoing Advisory)

### Footer
Simple 2-column:
- Left: Name + "Revenue Systems Architect"
- Right: Contact | LinkedIn

## Key Design Principles

### 1. Ultra-Minimal
- No gradients, minimal shadows
- Pure white backgrounds
- Generous whitespace (py-section: 8rem)
- Simple grid layouts

### 2. Quiet Authority
- Serif headlines for gravitas
- Sans-serif body for clarity
- Underline CTAs (not filled buttons)
- Calm, precise tone

### 3. Professional Sophistication
- Grayscale images
- Border-left accents for emphasis
- Subtle hover states
- Clean typography hierarchy

### 4. Mobile-First Responsive
- Test at 375px (mobile), 768px (tablet), 1440px (desktop)
- Simplified mobile menu
- Stacked layouts on mobile

## SEO & Performance
- Meta tags with Revenue Systems Architect positioning
- Open Graph tags
- Image optimization (WebP)
- Core Web Vitals optimization
- Reading time estimation

## Development Guidelines

### Content Architecture
- **Most page content lives in YAML files** under `/content/pages/` and `/content/data/`
- **TypeScript interfaces** for all YAML structures are in `src/lib/content.ts`
- **Hardcoded TSX pages**: `framework/page.tsx`, `contact/page.tsx`, `blog/page.tsx`, `videos/page.tsx`
- When updating copy, edit the YAML file first; only edit TSX for hardcoded pages

### Making Changes
1. **Read first**: Always read files before editing
2. **Design consistency**: Follow ultra-minimalist patterns
3. **Typography**: Serif for headlines, sans for body
4. **Colors**: navy-900, slate-500/600, cta-500 only
5. **Spacing**: Use py-section (8rem), py-content (4rem)
6. **CTAs**: Underline-style with border-bottom
7. **Images**: Implement grayscale class
8. **New YAML fields**: Always add corresponding TypeScript interface in `content.ts`

### Testing
- Run `npm run dev` to test locally
- Check responsive design at all breakpoints
- Verify Services dropdown hover behavior
- Test all CTAs and links

### Git Workflow
```bash
git add [specific files]
git commit -m "Description

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
git push origin master
```

## Deployment

### Vercel Setup
- Auto-deploy from GitHub (master branch)
- Custom domain: anoopkurup.com

## Success Metrics
- AI Readiness Audit bookings (primary)
- Email contact conversions
- Blog engagement (reading time, return visits)
- Page load speed (Core Web Vitals)

## Brand Voice

### Tone
- Direct, honest, no-nonsense
- "Calibration before Automation"
- "Systems, not tactics"
- "This is for you if..." clear qualification

### Copy Patterns
- Short, declarative sentences
- Problem-first framing
- No marketing jargon
- Clear next steps
- Honest disqualification

### Examples
- ✅ "Revenue Systems Architect for Expert Founders."
- ✅ "90 minutes to map where your pipeline is leaking."
- ✅ "No pitch. No pressure. Just a clear plan."
- ✅ "Calibration first. Automation second. Acceleration follows."
- ❌ "Leverage our proven methodology"
- ❌ "Unlock exponential growth"
- ❌ "Your clarity is broken" (old positioning — do not use)
- ❌ "Clarity Stack", "Clarity Sprint", "Clarity Diagnosis Session" (old service names — do not use)

---

**Project Status**: Revenue System Architecture repositioning complete (February 2026).

**Live Site**: https://anoopkurup.com
**Dev Server**: `npm run dev` → http://localhost:3000
**GitHub**: https://github.com/anoopkurup/aksite.git
