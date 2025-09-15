# Anoop Kurup Professional Website

A modern, fast, and SEO-optimized professional website showcasing expertise in professional services marketing. Built with Next.js 14 and featuring a robust MDX-based content management system with systematic lead generation focus.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Content Management**: MDX-based content system for pages and case studies
- **Professional Focus**: B2B professional services marketing with "Clarity. Strategy. Systems." approach
- **100-Day Lead Generation Sprint**: Comprehensive workshop program for systematic lead generation
- **Component Library**: shadcn/ui components for consistent, professional design
- **SEO Optimized**: Built for search engine visibility and performance
- **Responsive Design**: Mobile-first, professional aesthetic
- **Case Studies**: Detailed industry-specific case studies and success stories

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **Content**: MDX for pages, case studies, and dynamic content
- **Language**: TypeScript
- **Icons**: Lucide React icons with custom LineIcon component
- **Deployment**: Vercel-ready
- **Version Control**: Git

## 📁 Project Structure

```
aksite-nextjs/
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── about/               # About page
│   │   ├── blog/                # Blog system (posts/[slug])
│   │   ├── case-studies/        # Industry-specific case studies
│   │   ├── workshops/           # 100-Day Sprint workshop
│   │   ├── contact/             # Contact page
│   │   └── thank-you/           # Thank you page
│   ├── components/              # Reusable React components
│   │   ├── ui/                  # shadcn/ui components
│   │   ├── ContentSections.tsx  # Dynamic content renderer
│   │   ├── ContentPage.tsx      # Page wrapper component
│   │   ├── Header.tsx           # Site navigation
│   │   ├── Footer.tsx           # Site footer
│   │   └── LineIcon.tsx         # Custom icon component
│   ├── content/                 # MDX content files
│   │   ├── blog/                # Blog posts
│   │   ├── case-studies/        # Industry case studies
│   │   ├── ai-solutions/        # AI solutions content
│   │   └── *.md                 # Page content files
│   └── lib/                     # Utility functions
│       ├── content.ts           # Content loading utilities
│       ├── markdown.ts          # MDX processing
│       └── utils.ts             # General utilities
├── public/                      # Static assets
├── components.json              # shadcn/ui configuration
└── CLAUDE.md                   # Project documentation
```

## 🎯 Target Audience & Services

Professional service firms (10-50 employees) including:
- Marketing agencies seeking systematic lead generation
- Law firms looking to scale beyond referrals
- Consulting practices wanting predictable client flow
- IT services companies needing structured marketing
- Financial advisors building systematic outreach
- Tech consultants scaling their practice

## 🏆 100-Day Lead Generation Sprint

Flagship workshop program offering:
- **Goal**: 5+ qualified leads per month
- **Structure**: 30 minutes daily + weekly 1-on-1 strategy sessions
- **Duration**: 100 days of systematic execution
- **Investment Options**:
  - One-time payment: ₹39,600 (Save ₹5,400)
  - 3 installments: ₹15,000 each
- **Guarantee**: Results guaranteed or additional 60 days free

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/anoopkurup/aksite.git
   cd aksite-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Management

The site uses MDX for flexible content management. Content files are stored in `src/content/` with structured frontmatter:

```yaml
---
title: "Page Title"
description: "SEO description"
sections:
  - type: "hero"
    title: "Main Heading"
    description: "Subtitle text"
  - type: "grid"
    header:
      title: "Section Title"
    items:
      - title: "Item 1"
        description: "Item description"
---
```

### Supported Section Types
- `hero` - Landing page heroes with CTA buttons
- `content` - Rich text content with markdown
- `grid` - Multi-column layouts for services/features
- `stats` - Number-focused statistics sections
- `checklist` - Bulleted feature lists
- `timeline` - Process or step-by-step sections
- `highlight` - Call-to-action sections with buttons
- `guarantee` - Trust-building guarantee sections

## 🎨 Design Philosophy

- **Professional B2B Aesthetic**: Clean, trustworthy design language
- **Results-Focused Messaging**: Emphasis on data and measurable outcomes
- **Systematic Approach**: "Clarity. Strategy. Systems." brand positioning
- **High Contrast**: Accessible color schemes and readable typography
- **Mobile-First**: Responsive design optimized for all devices
- **Component-Based**: Consistent UI patterns using shadcn/ui

## 📈 Value Proposition

Systematic approaches for professional services marketing that deliver:
- **40-60% lead increase** through proven frameworks
- **25-35% close rate improvement** via better qualification
- **Predictable monthly lead flow** replacing feast-or-famine cycles
- **Scalable marketing systems** that work without constant oversight

## 🛠️ Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 🚀 Deployment

Optimized for Vercel deployment:

1. Connect GitHub repository to Vercel
2. Configure custom domain (anoopkurup.com)
3. Automatic deployment on push to master branch
4. Environment variables configured in Vercel dashboard

## 📊 SEO & Performance

- **Core Web Vitals**: Optimized for speed and user experience
- **Meta Tags**: Comprehensive SEO metadata
- **Structured Data**: Rich snippets for better search results
- **Image Optimization**: Next.js automatic image optimization
- **Static Generation**: Pre-rendered pages for fast loading

## 📄 License

This project is proprietary and confidential.

## 🤝 Contact

**Anoop Kurup**
Professional Services Marketing Strategist
Specializing in systematic lead generation for professional service firms

- Website: [anoopkurup.com](https://anoopkurup.com)
- Focus: Helping professional services scale beyond referrals

---

*Built with ❤️ using Next.js, TypeScript, and modern web technologies*