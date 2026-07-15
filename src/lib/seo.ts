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
  email: 'mail@anoopkurup.com',
  telephone: '+91-90360-14008',
} as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  return `${SITE.baseUrl}${path.startsWith('/') ? '' : '/'}${path}`;
}

// ---------------------------------------------------------------------------
// Metadata for hand-written routes
// ---------------------------------------------------------------------------

/**
 * Canonical + Open Graph for a hand-written page, both derived from one `path`
 * so they cannot drift apart.
 *
 * Next merges metadata shallowly *per key*, and `openGraph` is one key: a route
 * that declares `openGraph` replaces the parent's object entirely rather than
 * merging into it. That cuts both ways, and the site had both bugs at once —
 * routes with no `openGraph` inherited layout.tsx's hardcoded homepage `url`
 * (so /clear and every case study announced themselves as the homepage), while
 * /blog/[slug] declared one and silently dropped siteName and locale. So this
 * always emits url + siteName + locale + type together; layout.tsx deliberately
 * no longer sets `url` at all, so there is nothing wrong left to inherit.
 *
 * `title`/`description` are intentionally left off `openGraph`: omitting them
 * lets Next fill og:title from the resolved <title>, which applies the
 * "%s | Anoop Kurup" template. Setting them here would bypass it.
 */
export function pageMetadata(input: {
  title: string;
  description: string;
  /** Route path, e.g. "/clear". Becomes both the canonical and og:url. */
  path: string;
  type?: 'website' | 'article';
  openGraph?: Metadata['openGraph'];
}): Metadata {
  const { title, description, path, type = 'website', openGraph } = input;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: SITE.name,
      locale: SITE.locale,
      ...openGraph,
    },
  };
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
    logo: absoluteUrl('/images/logo.svg'),
    image: absoluteUrl('/images/about/anoop-bw.webp'),
    email: SITE.email,
    telephone: SITE.telephone,
    // Bangalore only — there's no street address anywhere on the site and this is
    // a solo practice run from home, so locality + country is the honest extent of it.
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    priceRange: '₹₹',
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
  /** A fixed, publicly-quoted price — e.g. the PRC's flat 25000. */
  price?: number;
  /**
   * Use instead of `price` when the fee is quoted after a diagnosis, as CLEAR is.
   * Publishing a single `price` there would state a number the buyer isn't
   * actually offered; a min/max is the honest shape.
   */
  minPrice?: number;
  maxPrice?: number;
  serviceType?: string;
}): Json {
  const { name, description, url, price, minPrice, maxPrice, serviceType } = input;

  let offers: Json | undefined;
  if (price !== undefined) {
    offers = { '@type': 'Offer', price, priceCurrency: 'INR' };
  } else if (minPrice !== undefined && maxPrice !== undefined) {
    offers = {
      '@type': 'Offer',
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'INR',
        minPrice,
        maxPrice,
      },
    };
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: absoluteUrl(url),
    ...(serviceType ? { serviceType } : {}),
    provider: { '@type': 'Person', name: SITE.author, url: SITE.baseUrl },
    areaServed: 'Worldwide',
    ...(offers
      ? { offers: { ...offers, url: absoluteUrl(url), availability: 'https://schema.org/InStock' } }
      : {}),
  };
}

/** A list page (the blog index, a category) — gives crawlers the set, not just prose. */
export function collectionPageSchema(input: {
  name: string;
  description: string;
  url: string;
  items: { title: string; url: string }[];
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.url),
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: SITE.baseUrl },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: input.items.length,
      itemListElement: input.items.map((it, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: it.title,
        url: absoluteUrl(it.url),
      })),
    },
  };
}
