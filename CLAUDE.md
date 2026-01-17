# Anoop Kurup Website - Ultra-Minimalist Business Clarity Architect

## Project Overview
Professional website for Anoop Kurup, Business Clarity Architect, helping expert-founders build systematic growth beyond referrals. Built with Next.js and featuring an ultra-minimalist design aesthetic inspired by Apple and Swiss design principles.

**Positioning**: Business Clarity Architect
**Tagline**: "Your growth isn't broken. Your clarity is."
**Framework**: The Clarity Stack™ (Strategy → Positioning → Conversion)

## Current Status
✅ **Ultra-minimalist redesign complete** (January 2025)
- Homepage with symptom-based entry points and Clarity Stack visualization
- Three service pages: Diagnose, Build, Partner
- Redesigned About, Blog, and Contact pages
- Simplified header/footer with minimal aesthetic
- Design system updated to ultra-minimalist principles

## Tech Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS (custom ultra-minimalist design tokens)
- **Content**: MDX for blog posts
- **Typography**: Cormorant Garamond (serif) + Inter (sans-serif)
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Version Control**: Git/GitHub

## Target Audience
**Primary**: Expert-founders of services businesses
- 10+ years of experience, 5+ years in business
- Stuck in referral dependence
- Marketing hasn't worked consistently
- Based in India (though work is location-independent)

**Services**: Consultants, agencies, trainers, professional services firms

## Project Structure
```
aksite-nextjs/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Homepage with Clarity Stack
│   │   ├── about/                # Personal story + professional background
│   │   ├── diagnose/             # Clarity Diagnosis Session
│   │   ├── build/                # Clarity Sprint (Strategy/Positioning/Conversion)
│   │   ├── partner/              # Ongoing Advisory
│   │   ├── framework/            # Clarity Stack framework page
│   │   ├── videos/               # Video content
│   │   ├── blog/                 # MDX blog system
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── contact/              # Contact with qualification criteria
│   │   └── (sample)/sample/      # Original sample homepage preserved
│   ├── components/
│   │   ├── ui/                   # shadcn components (if needed)
│   │   ├── Header.tsx            # Minimal nav with Services dropdown
│   │   └── Footer.tsx            # Clean 2-column footer
│   └── lib/
│       ├── blog.ts               # Blog utilities
│       └── markdown.ts           # MDX processing
├── content/
│   └── blog/                     # MDX blog posts
├── public/
│   └── images/
├── sitecopydocs/                 # Copy and planning documents
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
    900: '#0F172A',  // Headlines, primary text
  },
  slate: {
    50: '#F8FAFC',   // Subtle backgrounds
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
- **Section spacing**: 8rem (128px) between sections
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
**Clarity Diagnosis Session** - 60-minute diagnostic
- Pre-session intake
- Video call Clarity Stack audit
- Written diagnosis + recommendations
- 7 days follow-up access
- Booking: TidyCal integration

### 2. Build
**Clarity Sprint** - 4-8 week intensive work
Three sprint types:
- **Strategy Sprint**: Where to play, ICP definition
- **Positioning Sprint**: Narrative, messaging, POV
- **Conversion Sprint**: Offer architecture, lead magnets

### 3. Partner
**Ongoing Advisory** - Monthly retainer
- Monthly strategy sessions
- Async support between calls
- Quarterly planning reviews
- 3-month minimum commitment

## The Clarity Stack™ Framework

Three-layer diagnostic and implementation framework:

```
┌─────────────────────────────┐
│   CONVERSION LAYER          │  ← Lead magnets, offer architecture
├─────────────────────────────┤
│   POSITIONING LAYER         │  ← Narrative, messaging, POV
├─────────────────────────────┤
│   STRATEGY LAYER            │  ← ICP, problem focus, where to play
└─────────────────────────────┘
```

**Core Belief**: "Your problem isn't tactics. It's clarity. Most marketing fails because the foundation is broken."

## Homepage Structure

### Current Design (Symptom-Based Entry)
1. **Hero**: "Your growth isn't broken. Your clarity is."
2. **Symptom Cards** (4): Entry points for common problems
   - "Clients compare me to cheaper competitors" → Positioning
   - "I get leads but they don't convert" → Conversion
   - "Marketing feels random and inconsistent" → Strategy
   - "I'm invisible in my market" → Positioning + Conversion
3. **Clarity Stack**: Visual framework explanation
4. **Three Service Tiers**: Diagnose → Build → Partner
5. **Case Studies**: Results-focused proof
6. **FAQ**: "Foundations, not funnels" messaging
7. **Final CTA**: Book Clarity Diagnosis Session

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
- Positioning
- Lead Generation
- Business Development
- Thought Leadership

### Design
- Minimalist listing with grayscale image cards
- Category filter (navy-900 active, white inactive)
- Clean individual post pages with comprehensive prose styling
- Author bio + CTA at bottom

## Contact Page

### Structure
1. **Hero**: "Let's talk about what's actually broken"
2. **Primary CTA**: Book Diagnosis Session (with TidyCal link)
3. **Alternative Contact**: Email + LinkedIn
4. **Qualification Section**: "This is for you if..." / "This is not for you if..."
5. **Location**: Bangalore, IST timezone note
6. **Final CTA**: Emphasis on "No pitch. No pressure. Just clarity."

## Navigation

### Header (Desktop)
About | Services ▼ | Framework | Videos | Blog | Contact | [Book Diagnosis]

**Services Dropdown**:
- Diagnose (Clarity Diagnosis Session)
- Build (Clarity Sprint)
- Partner (Ongoing Advisory)

### Footer
Simple 2-column:
- Left: Name + "Business Clarity Architect"
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
- Meta tags with Business Clarity Architect positioning
- Open Graph tags
- Image optimization (WebP)
- Core Web Vitals optimization
- Reading time estimation
- Sitemap generation

## Development Guidelines

### Making Changes
1. **Read first**: Always read files before editing
2. **Design consistency**: Follow ultra-minimalist patterns
3. **Typography**: Serif for headlines, sans for body
4. **Colors**: navy-900, slate-500/600, cta-500 only
5. **Spacing**: Use py-section (8rem), py-content (4rem)
6. **CTAs**: Underline-style with border-bottom
7. **Images**: Implement grayscale class

### Testing
- Run `npm run dev` to test locally
- Check responsive design at all breakpoints
- Verify Services dropdown hover behavior
- Test all CTAs and links

### Git Workflow
```bash
git add -A
git commit -m "Description

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
git push origin master
```

## Content Copy Documents

Located in `/sitecopydocs/`:
- `homepage_copy.docx` - Homepage content
- `service_pages_copy.docx` - Service page copy
- `about_page_copy.md` - About page content
- `website-page-mapping.md` - Site structure and redirects
- Clarity Stack SVG diagrams

## Deployment

### Vercel Setup
- Auto-deploy from GitHub (master branch)
- Custom domain: anoopkurup.com
- Environment variables as needed

### Redirects
See `/sitecopydocs/website-page-mapping.md` for 301 redirects from old URLs

## Success Metrics
- Page load speed (Core Web Vitals)
- Mobile performance score
- Diagnosis session bookings
- Email contact conversions
- Blog engagement (reading time, return visits)

## Brand Voice

### Tone
- Direct, honest, no-nonsense
- "Foundations, not funnels"
- "Clarity before tactics"
- "This is for you if..." clear qualification

### Copy Patterns
- Short, declarative sentences
- Problem-first framing
- No marketing jargon
- Clear next steps
- Honest disqualification

### Examples
- ✅ "Your growth isn't broken. Your clarity is."
- ✅ "60 minutes to understand what's broken."
- ✅ "No pitch. No pressure. Just clarity."
- ❌ "Leverage our proven methodology"
- ❌ "Unlock exponential growth"

---

**Project Status**: Ultra-minimalist redesign complete (January 2025). Site ready for content updates and ongoing optimization.

**Live Site**: https://anoopkurup.com
**Dev Server**: `npm run dev` → http://localhost:3000
**GitHub**: https://github.com/anoopkurup/aksite.git
