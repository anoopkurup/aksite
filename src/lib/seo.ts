// ============================================================================
// SEO helpers — site constants, JSON-LD schema builders, and a status-gated
// Next.js Metadata builder driven by the content map.
//
// The Metadata builder is the App-Router equivalent of an `SEOHead` component:
// each route's generateMetadata() calls buildPageMetadata(page) to get title,
// description, canonical, OG/Twitter, and — critically — robots directives that
// flip to `noindex` for any page whose status is not 'live'. That is the drip
// gate from SEO/claude-SEO-instructions.md §6.
// ============================================================================

import type { Metadata } from 'next';
import type { Page } from './contentMap';

export const SITE = {
  name: 'Anoop Kurup',
  baseUrl: 'https://www.anoopkurup.com',
  author: 'Anoop Kurup',
  authorRole: 'Sales-systems consultant for B2B services businesses',
  locale: 'en_IN',
  twitterCard: 'summary_large_image' as const,
  linkedin: 'https://www.linkedin.com/in/anoopkurup',
} as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return `${SITE.baseUrl}${path.startsWith('/') ? '' : '/'}${path}`;
}

// ---------------------------------------------------------------------------
// Metadata (status-gated)
// ---------------------------------------------------------------------------

/**
 * Build Next.js Metadata for a content-map page. Pages that are not yet `live`
 * render `noindex, nofollow` so they can be built and previewed without being
 * indexed prematurely.
 */
export function buildPageMetadata(page: Page): Metadata {
  const url = absoluteUrl(page.url);
  const live = page.status === 'live';

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical: url },
    robots: live
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url,
      type: page.type === 'pillar' || page.type === 'subpillar' ? 'website' : 'article',
      siteName: SITE.name,
      locale: SITE.locale,
    },
    twitter: {
      card: SITE.twitterCard,
      title: page.title,
      description: page.metaDescription,
    },
    keywords: [page.primaryKeyword, ...page.secondaryKeywords],
  };
}

// ---------------------------------------------------------------------------
// JSON-LD schema builders. Each returns a plain object; render with <JsonLd>.
// ---------------------------------------------------------------------------

type Json = Record<string, unknown>;

/** Anoop — the Person behind the site (E-E-A-T). */
export function personSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.author,
    url: SITE.baseUrl,
    jobTitle: 'Sales Systems Consultant',
    description: SITE.authorRole,
    sameAs: [SITE.linkedin],
  };
}

/** The practice — a ProfessionalService / Organization. */
export function organizationSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE.name,
    url: SITE.baseUrl,
    founder: { '@type': 'Person', name: SITE.author },
    areaServed: 'Worldwide',
    description:
      'Sales systems for B2B services firms: one packaged offer, proven against real prospects, with a weekly rhythm that produces conversations.',
    sameAs: [SITE.linkedin],
  };
}

export function websiteSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.baseUrl,
    inLanguage: 'en',
    publisher: { '@type': 'Person', name: SITE.author },
  };
}

export interface BlogPostingInput {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
}

export function blogPostingSchema(input: BlogPostingInput): Json {
  const url = absoluteUrl(input.url);
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.title,
    description: input.description,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    ...(input.image ? { image: absoluteUrl(input.image) } : {}),
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
    dateModified: input.dateModified || input.datePublished,
    author: { '@type': 'Person', name: SITE.author, url: SITE.baseUrl },
    // Solo practice in Anoop's own name: he is both author and publisher. Valid
    // per schema.org; Google dropped the Organization+logo requirement for Article.
    // The site's brand entity lives in the sitewide ProfessionalService (layout.tsx).
    publisher: { '@type': 'Person', name: SITE.author, url: SITE.baseUrl },
  };
}

/** Generic Article variant (used by pillar / sub-pillar hubs). */
export function articleSchema(input: BlogPostingInput): Json {
  return { ...blogPostingSchema(input), '@type': 'Article' };
}

export interface Crumb {
  name: string;
  url: string;
}

export function breadcrumbSchema(crumbs: Crumb[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.url),
    })),
  };
}

export interface Faq {
  question: string;
  answer: string;
}

export function faqPageSchema(faqs: Faq[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  url: string;
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.url),
    provider: { '@type': 'Person', name: SITE.author, url: SITE.baseUrl },
    areaServed: 'Worldwide',
  };
}
