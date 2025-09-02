# Anoop Kurup Website Redevelopment

## Project Overview
Redeveloping https://anoopkurup.netlify.app/ using modern Next.js stack with MDX-based blog functionality. The current site focuses on professional services marketing with the tagline "Clarity. Strategy. Systems." targeting professional service firms looking to scale beyond referrals.

## Tech Stack
- **Framework**: Next.js 14/15 with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **Content**: MDX for blog posts and pages
- **Deployment**: Vercel (migrating from Netlify)
- **Version Control**: Git

## Current Site Analysis
- Clean, professional design
- Focus on B2B professional services marketing
- Target audience: Marketing agencies, law firms, consulting practices (10-50 employees)
- Value proposition: Systematic approaches beyond referrals
- Results-focused messaging (40-60% lead increase, 25-35% close rate improvement)

## Project Structure
```
anoopkurup-nextjs/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   ├── services/
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   └── contact/
├── components/
│   ├── ui/ (shadcn components)
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── BlogCard.tsx
├── content/
│   ├── blog/
│   └── pages/
├── lib/
│   ├── mdx.ts
│   └── utils.ts
├── public/
│   ├── images/
│   └── icons/
└── package.json
```

## Key Features to Implement

### 1. Homepage
- Hero section with "Clarity. Strategy. Systems." tagline
- Target audience section (Professional Service Firms)
- Value proposition and results
- Featured blog posts
- Contact CTA

### 2. About Page
- Personal story and expertise
- Professional background
- Approach and methodology

### 3. Services Page
- Service offerings for professional firms
- Case studies and results
- Process overview

### 4. Blog System
- MDX-based blog posts
- Categories and tags
- SEO optimization
- Reading time estimation
- Related posts

### 5. Contact Page
- Contact form
- Professional contact information
- Social links

## Design Requirements

### Visual Style
- Clean, professional aesthetic
- B2B-focused design language
- Trust-building elements
- Results and data emphasis
- Mobile-responsive

### Color Scheme
- Professional color palette
- Consistent with current branding
- High contrast for readability

### Typography
- Professional, readable fonts
- Clear hierarchy
- Optimized for business content

## MDX Blog Structure

### Frontmatter Template
```yaml
---
title: "Blog Post Title"
description: "SEO description"
date: "2024-01-15"
category: "Strategy"
tags: ["marketing", "professional-services", "lead-generation"]
featured: true
author: "Anoop Kurup"
readingTime: "5 min read"
---
```

### Blog Categories
- Strategy
- Lead Generation  
- Professional Services Marketing
- Business Development
- Thought Leadership

## SEO & Performance
- Meta tags optimization
- Open Graph tags
- Structured data
- Image optimization
- Core Web Vitals optimization
- Sitemap generation

## Development Phases

### Phase 1: Foundation
1. Next.js project setup with App Router
2. Tailwind CSS and shadcn/ui configuration
3. Basic layout components (Header, Footer)
4. MDX configuration and content structure

### Phase 2: Core Pages
1. Homepage with hero and key sections
2. About page
3. Services page
4. Basic blog listing and post pages

### Phase 3: Blog System
1. Complete MDX blog functionality
2. Categories and tags system
3. Search functionality
4. Related posts

### Phase 4: Optimization
1. SEO implementation
2. Performance optimization
3. Contact form integration
4. Analytics setup

## Content Migration
- Review and update existing content
- Maintain SEO rankings
- Improve content structure for MDX
- Add new blog posts for launch

## Technical Considerations

### Dependencies
```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "tailwindcss": "^3.0.0",
  "@next/mdx": "^14.0.0",
  "gray-matter": "^4.0.3",
  "rehype-highlight": "^6.0.0",
  "remark-gfm": "^3.0.1",
  "lucide-react": "^0.263.1"
}
```

### Environment Variables
```
NEXT_PUBLIC_SITE_URL=https://anoopkurup.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Deployment Strategy
- Migrate from Netlify to Vercel
- Set up custom domain
- Configure automatic deployments from Git
- Set up redirects from old URLs

## Success Metrics
- Page load speed improvement
- Mobile performance score
- SEO ranking maintenance/improvement
- Blog engagement metrics
- Contact form conversion rates

## Next Steps
1. Initialize Next.js project with the specified stack
2. Set up basic project structure
3. Implement core layout components
4. Create homepage with hero section
5. Set up MDX blog system
6. Migrate existing content
7. Deploy to Vercel and configure domain

## Claude Code Integration
This project will leverage Claude Code for:
- Component development and styling
- MDX configuration and optimization
- Performance improvements
- SEO implementation
- Bug fixes and feature additions

---

**Project Goal**: Create a modern, fast, and SEO-optimized professional website that effectively showcases expertise in professional services marketing while providing a robust blogging platform for thought leadership content.