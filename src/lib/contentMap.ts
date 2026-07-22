// ============================================================================
// SEO content map — the single source of truth for the SEO build.
//
// Drives: per-page metadata, JSON-LD schema selection, breadcrumbs, internal
// linking (up-links + sibling cross-links), sitemap inclusion, and the publish
// drip. The `status` field is the gate: ONLY `status: 'live'` pages render
// index,follow and appear in the sitemap. Everything else is noindex and is
// excluded from the sitemap — that is how we build many pages but flip few live.
//
// See SEO/claude-SEO-instructions.md (§3, §6) and SEO/seo-build-checklist.md.
//
// Conventions for this site (decided 2026-06-26):
//   - Primary CTA sitewide is ALWAYS the Sales Scorecard. The `clearLetter`
//     only *themes* a page's CLEAR handoff copy; it never introduces a
//     competing CTA. (CLAUDE.md: exactly one primary CTA.)
//   - Pillar lives at /client-acquisition-system; everything else under /blog.
// ============================================================================

export type PageType = 'pillar' | 'subpillar' | 'spoke' | 'vertical';

export type ClearLetter = 'C' | 'L' | 'E' | 'A' | 'R';

export type SchemaType =
  | 'BlogPosting'
  | 'Article'
  | 'BreadcrumbList'
  | 'FAQPage'
  | 'Service'
  | 'Person';

export type PublishWave = 1 | 2 | 3 | 4;

// status gates indexability — only 'live' renders index,follow + appears in sitemap
export type PageStatus = 'scaffold' | 'brief' | 'authored' | 'approved' | 'live';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PageBrief {
  /** The angle / thesis — what makes this page worth reading, in one line. */
  angle: string;
  /** H2/H3 outline the body should follow. */
  outline: string[];
  /** The CLEAR handoff line (themed to clearLetter, but CTA = Scorecard). */
  handoffLine: string;
  /** FAQ questions (answers drafted at authoring time → FAQPage schema). */
  faqs?: FaqItem[];
}

export interface Page {
  /** Last URL segment; unique across the map. */
  slug: string;
  url: string;
  type: PageType;
  /** <title> + H1 source (keep <60 chars for <title>). */
  title: string;
  /** Meta description (<155 chars). */
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  clearLetter?: ClearLetter;
  /** Slug to link UP to (pillar / subpillar). Undefined for the top hub. */
  parent?: string;
  /** Slugs to cross-link as siblings. */
  siblings?: string[];
  schema: SchemaType[];
  publishWave: PublishWave;
  status: PageStatus;
  brief?: PageBrief;
}

const PILLAR = 'client-acquisition-system';

// ============================================================================
// The 27 SEO pages. All seeded as `scaffold` — nothing is live until its wave
// is active AND its body content is approved (Policy B: drafted → reviewed).
// ============================================================================

export const SEO_PAGES: Page[] = [
  // ---- WAVE 1 — core methodology ------------------------------------------
  {
    slug: 'stop-relying-on-referrals',
    url: '/blog/stop-relying-on-referrals',
    type: 'spoke',
    title: 'How to Stop Relying on Referrals for Clients',
    metaDescription:
      'Referrals feel free but leave your pipeline at the mercy of other people. Here is how B2B service firms build a system that produces clients on purpose.',
    primaryKeyword: 'stop relying on referrals',
    secondaryKeywords: [
      'referral dependency',
      'feast or famine consulting',
      'how to get clients beyond referrals',
    ],
    clearLetter: 'C',
    parent: PILLAR,
    siblings: ['founder-led-sales-trap'],
    schema: ['BlogPosting', 'BreadcrumbList', 'FAQPage'],
    publishWave: 1,
    status: 'scaffold',
    brief: {
      angle:
        'Referrals are a great source but a terrible system — the flagship piece that names the pain and points to the pillar.',
      outline: [
        'The feast-or-famine cycle every referral-dependent firm knows',
        'Why referrals feel free but cost you control of the pipeline',
        'The three things a referral has that you can rebuild deliberately (trust, timing, framing)',
        'What a client-acquisition system replaces referrals with (not instead of — on top of)',
        'A 30-day first step that does not require more luck',
      ],
      handoffLine:
        'Want to know how dependent your pipeline really is? Take the free Sales Scorecard.',
      faqs: [
        {
          question: 'Are referrals bad for a consulting business?',
          answer:
            'No. Referred clients are usually your best clients: pre-sold, trusting, and easy to start with. The problem is depending on them, because you control neither their timing nor their fit. Keep taking referrals; build a deliberate channel alongside them so a quiet month is an inconvenience, not a crisis.',
        },
        {
          question: 'How do I get clients without relying on referrals?',
          answer:
            'Build the parts a referral gives you for free: trust, timing, and framing. Package one clear offer, write a named list of organisations that fit it, publish something useful weekly, and reach out directly in small, researched batches. Two to three protected hours a week, sustained, is enough to start.',
        },
        {
          question: 'How long does it take to reduce referral dependency?',
          answer:
            'Expect the first non-referral conversations within a month of starting a weekly rhythm, and the first closed client within one to two quarters, since B2B service sales decide slowly. Meaningful independence, where referrals are a bonus rather than the whole pipeline, typically takes six to twelve months of consistency.',
        },
      ],
    },
  },
  {
    slug: PILLAR,
    url: `/${PILLAR}`,
    type: 'pillar',
    title: 'Client Acquisition System for Service Businesses',
    metaDescription:
      'A client acquisition system is the repeatable way B2B service firms win clients without depending on referrals. Here is how to build one.',
    primaryKeyword: 'client acquisition system',
    secondaryKeywords: [
      'predictable client acquisition',
      'how to get clients without referrals',
      'client acquisition strategy for service business',
    ],
    clearLetter: 'E',
    parent: undefined,
    siblings: [],
    schema: ['Article', 'BreadcrumbList', 'FAQPage'],
    publishWave: 1,
    status: 'scaffold',
    brief: {
      angle:
        'The hub: define the system end-to-end and link down to every spoke. 2,500+ words, the page everything points at.',
      outline: [
        'What a client acquisition system actually is (and is not)',
        'Why service firms stall: founder-led sales, referral dependency, no repeatable routine',
        'The five parts of the system (mapped to CLEAR: Clarify, Lead, Engage, Acquire, Retain)',
        'How the parts connect into a weekly routine',
        'Where most firms should start (link to the Scorecard)',
        'Deep links out to each spoke',
      ],
      handoffLine:
        'See which part of your system is weakest in three minutes. Take the free Sales Scorecard.',
      faqs: [
        {
          question: 'What is a client acquisition system?',
          answer:
            'It is the repeatable set of activities that takes your firm from stranger to paying client on purpose: one packaged offer, a deliberate flow of right-fit leads, proof and follow-up that build trust, a documented sales conversation, and machinery that turns delivered work into the next client. Written down, running weekly.',
        },
        {
          question: 'How is client acquisition different from lead generation?',
          answer:
            'Lead generation is one part of the machine: producing conversations with the right prospects. Getting clients is the whole journey, from the offer those leads are shown, through follow-up and the sales conversation, to renewals and introductions after delivery. More leads fix nothing if the other parts leak.',
        },
        {
          question: 'How much does it cost to build a client acquisition system?',
          answer:
            'Built yourself, the cost is mostly discipline: two to three protected hours a week for a couple of quarters, and almost no tooling. If you want it installed with an experienced hand, my CLEAR engagement runs ₹2.5 lakh over three months, month to month, priced after a paid diagnosis.',
        },
      ],
    },
  },
  {
    slug: 'lead-generation-for-service-business',
    url: '/blog/lead-generation-for-service-business',
    type: 'spoke',
    title: 'Lead Generation for Consultants & Service Firms',
    metaDescription:
      'Most lead-generation advice is built for SaaS, not consultants. Here is how B2B service firms generate qualified leads that actually convert.',
    primaryKeyword: 'lead generation for consultants',
    secondaryKeywords: [
      'lead generation for service business',
      'how to get consulting clients',
    ],
    clearLetter: 'E',
    parent: PILLAR,
    siblings: ['cold-outreach-for-consultants', 'founder-led-sales-trap'],
    schema: ['BlogPosting', 'BreadcrumbList'],
    publishWave: 1,
    status: 'scaffold',
    brief: {
      angle:
        'Lead gen for high-trust service sales is different from volume SaaS funnels — quality over quantity.',
      outline: [
        'Why SaaS lead-gen playbooks fail consultants',
        'The two leads that matter: warm-introduction-ready and problem-aware',
        'Channels that fit a founder’s time (not a marketing team’s budget)',
        'Qualifying out fast so you sell less but close more',
        'Connecting lead gen to the rest of the system',
      ],
      handoffLine:
        'Not sure your leads are the problem? The free Sales Scorecard shows you where the gap is.',
    },
  },
  {
    slug: 'founder-led-sales-trap',
    url: '/blog/founder-led-sales-trap',
    type: 'spoke',
    title: 'The Founder-Led Sales Trap (and How to Escape)',
    metaDescription:
      'When you are the only one who can close, growth stops the moment you get busy. Here is how to get out of founder-led sales without losing the magic.',
    primaryKeyword: 'founder-led sales',
    secondaryKeywords: [
      'getting out of founder-led sales',
      'sales for founders',
    ],
    clearLetter: 'C',
    parent: PILLAR,
    siblings: ['stop-relying-on-referrals', 'lead-generation-for-service-business'],
    schema: ['BlogPosting', 'BreadcrumbList'],
    publishWave: 1,
    status: 'scaffold',
    brief: {
      angle:
        'Founder-led sales is a feature early and a ceiling later — name the trap and the way out.',
      outline: [
        'Why founders close better than anyone (and why that becomes the problem)',
        'The three things locked inside the founder’s head',
        'Documenting the sale before delegating it',
        'The first sales routine you can hand off',
        'What stays the founder’s job forever',
      ],
      handoffLine:
        'Find out how much of your sale only you can do. Take the free Sales Scorecard.',
    },
  },
  {
    slug: 'how-to-productize-your-service',
    url: '/blog/how-to-productize-your-service',
    type: 'spoke',
    title: 'How to Productize Your Service (Step by Step)',
    metaDescription:
      'A productized service is easier to sell, price, and scale. Here is how to package what you do into one clear offer your firm can repeat.',
    primaryKeyword: 'how to productize a service',
    secondaryKeywords: ['productized service', 'productized consulting'],
    clearLetter: 'L',
    parent: PILLAR,
    siblings: ['value-based-pricing-for-consultants'],
    schema: ['BlogPosting', 'BreadcrumbList', 'FAQPage'],
    publishWave: 1,
    status: 'scaffold',
    brief: {
      angle:
        'Productizing is the lever that makes everything downstream (pricing, sales, scaling) easier.',
      outline: [
        'Why bespoke-everything keeps you stuck',
        'The anatomy of a productized offer (scope, outcome, price, timeline)',
        'Finding the one offer to lead with',
        'Naming and pricing it so it sells itself',
        'When to stay custom (and when not to)',
      ],
      handoffLine:
        'Is your offer clear enough to repeat? The free Sales Scorecard will tell you.',
      faqs: [
        {
          question: 'What is a productized service?',
          answer:
            'A service packaged like a product: a named engagement with a fixed scope, a defined outcome, a stated price, and a set timeline, all decided in advance and written on one page. Buyers can understand it, compare it, and say yes to it without a bespoke proposal cycle.',
        },
        {
          question: 'Can consulting really be productized?',
          answer:
            'Most of it, yes. Look at your delivery history: the engagements you have quietly run eight or ten times already have a repeatable shape, and that is what you package. Genuinely novel, high-stakes advisory work stays custom, and usually arrives through the packaged offer that made strangers trust you.',
        },
      ],
    },
  },

  // ---- WAVE 2 — complete the core + high-intent ---------------------------
  {
    slug: 'best-b2b-marketing-bangalore-wont-fix-offer',
    url: '/blog/best-b2b-marketing-bangalore-wont-fix-offer',
    type: 'spoke',
    title: 'The Best B2B Marketing in Bangalore Won’t Fix This',
    metaDescription:
      'Founders in Bangalore keep hiring better marketing to fix a pipeline problem marketing can’t solve. The real issue is usually the offer. Here is why.',
    primaryKeyword: 'best b2b marketing in bangalore',
    secondaryKeywords: [
      'b2b marketing agency bangalore',
      'b2b lead generation bangalore',
    ],
    clearLetter: 'L',
    parent: PILLAR,
    siblings: [],
    schema: ['BlogPosting', 'BreadcrumbList'],
    publishWave: 2,
    status: 'scaffold',
    brief: {
      angle:
        'The ONE local asset — intercept the “marketing agency Bangalore” query and reframe: better marketing can’t fix a broken offer. Do NOT compete as an agency.',
      outline: [
        'What founders search for when leads dry up',
        'Why “better marketing” rarely moves the needle',
        'The offer problem hiding behind the marketing problem',
        'How to tell which one you actually have',
        'Fixing the offer first (then marketing compounds)',
      ],
      handoffLine:
        'Marketing problem or offer problem? The free Sales Scorecard separates the two.',
    },
  },
  {
    slug: 'value-based-pricing-for-consultants',
    url: '/blog/value-based-pricing-for-consultants',
    type: 'spoke',
    title: 'Value-Based Pricing for Consultants: A Guide',
    metaDescription:
      'Charging by the hour caps your income and rewards being slow. Here is how founder-led consultants move to value-based pricing without scaring clients off.',
    primaryKeyword: 'value-based pricing for consultants',
    secondaryKeywords: [
      'how to price consulting services',
      'how to price a productized service',
    ],
    clearLetter: 'A',
    parent: PILLAR,
    siblings: ['how-to-productize-your-service', 'scale-beyond-the-founder'],
    schema: ['BlogPosting', 'BreadcrumbList', 'FAQPage'],
    publishWave: 2,
    status: 'scaffold',
    brief: {
      angle:
        'Price the outcome, not the hours — the pricing companion to productizing.',
      outline: [
        'Why hourly pricing punishes expertise',
        'What “value” means to a B2B buyer (and how to find it)',
        'Pricing a productized offer',
        'Handling the “why so expensive?” conversation',
        'Raising prices on existing clients',
      ],
      handoffLine:
        'Is pricing your weakest link? Find out in three minutes with the free Sales Scorecard.',
      faqs: [
        { question: 'What is value-based pricing?', answer: '' },
        { question: 'How do I move from hourly to value-based pricing?', answer: '' },
      ],
    },
  },
  {
    slug: 'scale-beyond-the-founder',
    url: '/blog/scale-beyond-the-founder',
    type: 'spoke',
    title: 'How to Scale a Consulting Business Beyond You',
    metaDescription:
      'Growth stalls when everything runs through the founder. Here is how to scale a consulting business by removing yourself from the parts that don’t need you.',
    primaryKeyword: 'how to scale a consulting business',
    secondaryKeywords: [
      'remove yourself from your business',
      'recurring revenue for consultants',
      'retainer model',
    ],
    clearLetter: 'R',
    parent: PILLAR,
    siblings: ['value-based-pricing-for-consultants'],
    schema: ['BlogPosting', 'BreadcrumbList'],
    publishWave: 2,
    status: 'scaffold',
    brief: {
      angle:
        'Scaling is subtraction — take the founder out of what doesn’t need them.',
      outline: [
        'The founder bottleneck, mapped',
        'What only the founder should do',
        'Systems, templates, and the first hire',
        'Recurring revenue and retainers as stability',
        'Scaling the system, not the hours',
      ],
      handoffLine:
        'See how dependent the business is on you. Take the free Sales Scorecard.',
    },
  },
  {
    slug: 'ai-for-client-acquisition',
    url: '/blog/ai-for-client-acquisition',
    type: 'spoke',
    title: 'AI for Client Acquisition: What Actually Works',
    metaDescription:
      'AI won’t replace your judgement, but it will remove the grunt work from client acquisition. Here is where it helps founder-led firms and where it doesn’t.',
    primaryKeyword: 'ai for client acquisition',
    secondaryKeywords: [
      'ai for b2b sales',
      'ai sales automation',
      'ai for consultants',
    ],
    clearLetter: 'E',
    parent: PILLAR,
    siblings: ['sales-system-for-small-service-business'],
    schema: ['BlogPosting', 'BreadcrumbList'],
    publishWave: 2,
    status: 'scaffold',
    brief: {
      angle:
        'The differentiator — practical AI in the acquisition system, not hype.',
      outline: [
        'Where AI genuinely saves a founder time',
        'Research, drafting, and qualification with AI',
        'What AI should never touch in a high-trust sale',
        'A simple AI-assisted weekly routine',
        'Tools vs. system — why the system still matters',
      ],
      handoffLine:
        'Before automating, see what to fix first. Take the free Sales Scorecard.',
    },
  },
  {
    slug: 'cold-outreach-for-consultants',
    url: '/blog/cold-outreach-for-consultants',
    type: 'spoke',
    title: 'Cold Outreach for Consultants That Doesn’t Suck',
    metaDescription:
      'Most cold outreach gets ignored because it leads with you, not the prospect’s problem. Here is how founder-led consultants do outreach that earns replies.',
    primaryKeyword: 'cold outreach for consultants',
    secondaryKeywords: [
      'cold email for consultants',
      'how to get clients on linkedin',
    ],
    clearLetter: 'E',
    parent: PILLAR,
    siblings: ['lead-generation-for-service-business'],
    schema: ['BlogPosting', 'BreadcrumbList'],
    publishWave: 2,
    status: 'scaffold',
    brief: {
      angle:
        'Outreach that leads with the prospect’s problem, not your credentials.',
      outline: [
        'Why most cold outreach fails',
        'Picking a list worth writing to',
        'The problem-first message structure',
        'LinkedIn vs. email for consultants',
        'Following up without being annoying',
      ],
      handoffLine:
        'Outreach only works if the offer lands. Check yours with the free Sales Scorecard.',
    },
  },
  {
    slug: 'sales-system-for-small-service-business',
    url: '/blog/sales-system-for-small-service-business',
    type: 'spoke',
    title: 'Build a Repeatable Sales Process (Service Firms)',
    metaDescription:
      'A repeatable sales process means you stop reinventing every deal. Here is how small service firms build one, with a CRM that fits the founder.',
    primaryKeyword: 'repeatable sales process',
    secondaryKeywords: [
      'sales process for service business',
      'CRM for consultants',
    ],
    clearLetter: 'E',
    parent: PILLAR,
    siblings: ['ai-for-client-acquisition'],
    schema: ['BlogPosting', 'BreadcrumbList'],
    publishWave: 2,
    status: 'scaffold',
    brief: {
      angle:
        'A sales process simple enough that a busy founder actually follows it.',
      outline: [
        'Why ad-hoc selling leaks deals',
        'The five stages every service sale moves through',
        'A CRM setup that takes minutes, not days',
        'The weekly review that keeps the pipeline honest',
        'Handing the process to someone else',
      ],
      handoffLine:
        'See how leaky your pipeline is right now. Take the free Sales Scorecard.',
    },
  },
  {
    slug: 'seo-for-consultants',
    url: '/blog/seo-for-consultants',
    type: 'spoke',
    title: 'SEO for Consultants: Rank Without a Big Team',
    metaDescription:
      'You don’t need a content factory to rank. Here is how founder-led consultants use focused SEO and thought leadership to get found by the right buyers.',
    primaryKeyword: 'seo for consultants',
    secondaryKeywords: [
      'thought leadership for consultants',
      'content marketing for consultants',
    ],
    clearLetter: 'E',
    parent: PILLAR,
    siblings: [],
    schema: ['BlogPosting', 'BreadcrumbList'],
    publishWave: 2,
    status: 'scaffold',
    brief: {
      angle:
        'Lowest-priority spoke — focused SEO for a solo expert, not a media operation.',
      outline: [
        'Why most consultant blogs go nowhere',
        'Writing for buyers, not for volume',
        'The pillar-and-spoke structure (meta: this very site)',
        'Turning expertise into rankable pages',
        'How long it really takes',
      ],
      handoffLine:
        'Traffic without a system doesn’t convert. Start with the free Sales Scorecard.',
    },
  },

  // ---- WAVE 3 — marketing & creative agency family ------------------------
  {
    slug: 'client-acquisition-for-marketing-agencies',
    url: '/client-acquisition-for-marketing-agencies',
    type: 'subpillar',
    title: 'Lead Generation for Marketing Agencies',
    metaDescription:
      'Marketing agencies are great at getting clients leads and bad at getting their own. Here is a client-acquisition system built for agency founders.',
    primaryKeyword: 'lead generation for marketing agencies',
    secondaryKeywords: [
      'client acquisition for agencies',
      'how agencies get clients',
    ],
    clearLetter: 'E',
    parent: PILLAR,
    siblings: [],
    schema: ['Article', 'BreadcrumbList', 'FAQPage'],
    publishWave: 3,
    status: 'scaffold',
    brief: {
      angle:
        'Sub-pillar hub for the agency family — proof-led (Origami / Manik). Links down to verticals 14–18.',
      outline: [
        'The cobbler’s-children problem for agencies',
        'Why agency sales is different from client delivery',
        'The system applied to agencies',
        'Proof: what worked for agency founders',
        'Links to each agency type',
      ],
      handoffLine:
        'See where your agency’s pipeline breaks. Take the free Sales Scorecard.',
    },
  },
  {
    slug: 'get-clients-for-digital-marketing-agency',
    url: '/blog/get-clients-for-digital-marketing-agency',
    type: 'vertical',
    title: 'How to Get Clients for a Digital Marketing Agency',
    metaDescription:
      'Stop selling deliverables and start selling outcomes. Here is how digital marketing agency founders build a steady pipeline of the right clients.',
    primaryKeyword: 'how to get clients for a digital marketing agency',
    secondaryKeywords: ['digital marketing agency clients', 'agency lead generation'],
    clearLetter: 'E',
    parent: 'client-acquisition-for-marketing-agencies',
    siblings: [
      'get-clients-for-branding-agency',
      'get-clients-for-web-design-agency',
      'get-clients-for-ad-agency',
      'get-clients-for-performance-marketing-agency',
    ],
    schema: ['BlogPosting', 'BreadcrumbList', 'Service'],
    publishWave: 3,
    status: 'scaffold',
    brief: {
      angle: 'Vertical: digital marketing agency, led with proof.',
      outline: [
        'What digital agency buyers actually want',
        'Positioning past the race to the bottom',
        'The offer that wins retainers',
        'A weekly acquisition routine for agency founders',
      ],
      handoffLine:
        'Find your agency’s weakest link. Take the free Sales Scorecard.',
    },
  },
  {
    slug: 'get-clients-for-branding-agency',
    url: '/blog/get-clients-for-branding-agency',
    type: 'vertical',
    title: 'How to Get Clients for a Branding Agency',
    metaDescription:
      'Branding agencies sell something hard to measure. Here is how to position, package, and pitch so the right clients see the value and say yes.',
    primaryKeyword: 'how to get clients for a branding agency',
    secondaryKeywords: ['branding agency clients', 'branding agency lead generation'],
    clearLetter: 'L',
    parent: 'client-acquisition-for-marketing-agencies',
    siblings: [
      'get-clients-for-digital-marketing-agency',
      'get-clients-for-web-design-agency',
      'get-clients-for-ad-agency',
      'get-clients-for-performance-marketing-agency',
    ],
    schema: ['BlogPosting', 'BreadcrumbList', 'Service'],
    publishWave: 3,
    status: 'scaffold',
    brief: {
      angle: 'Vertical: branding agency — selling the intangible.',
      outline: [
        'Why branding is a hard sell',
        'Making the value concrete',
        'Packaging brand work into a clear offer',
        'Finding buyers who already value brand',
      ],
      handoffLine:
        'See how clearly your value lands. Take the free Sales Scorecard.',
    },
  },
  {
    slug: 'get-clients-for-web-design-agency',
    url: '/blog/get-clients-for-web-design-agency',
    type: 'vertical',
    title: 'How to Get Clients for a Web Design Agency',
    metaDescription:
      'Web design is crowded and commoditised. Here is how design and dev studios escape price competition and build a pipeline of better-fit clients.',
    primaryKeyword: 'how to get clients for a web design agency',
    secondaryKeywords: ['web design agency clients', 'web design leads'],
    clearLetter: 'L',
    parent: 'client-acquisition-for-marketing-agencies',
    siblings: [
      'get-clients-for-digital-marketing-agency',
      'get-clients-for-branding-agency',
      'get-clients-for-ad-agency',
      'get-clients-for-performance-marketing-agency',
    ],
    schema: ['BlogPosting', 'BreadcrumbList', 'Service'],
    publishWave: 3,
    status: 'scaffold',
    brief: {
      angle: 'Vertical: web design / development studio — escaping commoditisation.',
      outline: [
        'Why web work gets price-shopped',
        'Productizing the build',
        'Selling outcomes (revenue, conversions) not pages',
        'Recurring revenue after launch',
      ],
      handoffLine:
        'Stop competing on price. See where to start with the free Sales Scorecard.',
    },
  },
  {
    slug: 'get-clients-for-ad-agency',
    url: '/blog/get-clients-for-ad-agency',
    type: 'vertical',
    title: 'How to Get Clients for an Ad Agency',
    metaDescription:
      'Ad agencies live and die by results, and so does their own pipeline. Here is how to win clients who stay past the first campaign.',
    primaryKeyword: 'how to get clients for an ad agency',
    secondaryKeywords: ['ad agency clients', 'advertising agency new business'],
    clearLetter: 'E',
    parent: 'client-acquisition-for-marketing-agencies',
    siblings: [
      'get-clients-for-digital-marketing-agency',
      'get-clients-for-branding-agency',
      'get-clients-for-web-design-agency',
      'get-clients-for-performance-marketing-agency',
    ],
    schema: ['BlogPosting', 'BreadcrumbList', 'Service'],
    publishWave: 3,
    status: 'scaffold',
    brief: {
      angle: 'Vertical: ad agency — retention as acquisition.',
      outline: [
        'Why ad clients churn',
        'Setting expectations that survive a bad month',
        'The new-business routine',
        'Building a referable reputation',
      ],
      handoffLine:
        'See what’s leaking clients. Take the free Sales Scorecard.',
    },
  },
  {
    slug: 'get-clients-for-performance-marketing-agency',
    url: '/blog/get-clients-for-performance-marketing-agency',
    type: 'vertical',
    title: 'How to Get Clients for a Performance Agency',
    metaDescription:
      'Performance marketing is measurable, which cuts both ways. Here is how performance agencies win clients and prove value without overpromising.',
    primaryKeyword: 'how to get clients for a performance marketing agency',
    secondaryKeywords: [
      'performance marketing agency clients',
      'performance agency lead generation',
    ],
    clearLetter: 'A',
    parent: 'client-acquisition-for-marketing-agencies',
    siblings: [
      'get-clients-for-digital-marketing-agency',
      'get-clients-for-branding-agency',
      'get-clients-for-web-design-agency',
      'get-clients-for-ad-agency',
    ],
    schema: ['BlogPosting', 'BreadcrumbList', 'Service'],
    publishWave: 3,
    status: 'scaffold',
    brief: {
      angle: 'Vertical: performance marketing agency — measurable value, honest promises.',
      outline: [
        'The overpromise trap',
        'Qualifying for accounts you can actually move',
        'Pricing on value, not ad spend',
        'The acquisition routine',
      ],
      handoffLine:
        'Find your weakest link. Take the free Sales Scorecard.',
    },
  },

  // ---- WAVE 4 — training & coaching ---------------------------------------
  {
    slug: 'client-acquisition-for-training-businesses',
    url: '/client-acquisition-for-training-businesses',
    type: 'subpillar',
    title: 'Corporate Training Lead Generation',
    metaDescription:
      'Training businesses run on relationships and word of mouth, until they don’t. Here is a client-acquisition system for corporate training firms.',
    primaryKeyword: 'corporate training lead generation',
    secondaryKeywords: [
      'client acquisition for trainers',
      'how training businesses get clients',
    ],
    clearLetter: 'E',
    parent: PILLAR,
    siblings: [],
    schema: ['Article', 'BreadcrumbList', 'FAQPage'],
    publishWave: 4,
    status: 'scaffold',
    brief: {
      angle: 'Sub-pillar hub for training & coaching. Links down to 20–22.',
      outline: [
        'Why training sales is relationship-heavy',
        'Building a pipeline beyond repeat L&D buyers',
        'The system applied to training',
        'Links to each training type',
      ],
      handoffLine:
        'See where your training pipeline breaks. Take the free Sales Scorecard.',
    },
  },
  {
    slug: 'get-clients-for-corporate-training',
    url: '/blog/get-clients-for-corporate-training',
    type: 'vertical',
    title: 'How to Get Corporate Training Clients',
    metaDescription:
      'Winning corporate training work means getting past procurement to the people with the problem. Here is how to build that pipeline deliberately.',
    primaryKeyword: 'how to get corporate training clients',
    secondaryKeywords: ['corporate training sales', 'L&D clients'],
    clearLetter: 'E',
    parent: 'client-acquisition-for-training-businesses',
    siblings: [
      'get-public-speaking-clients',
      'get-leadership-training-clients',
    ],
    schema: ['BlogPosting', 'BreadcrumbList', 'Service'],
    publishWave: 4,
    status: 'scaffold',
    brief: {
      angle: 'Vertical: corporate training — selling into L&D and the business.',
      outline: [
        'Who actually buys training (and who blocks it)',
        'Reaching the problem-owner, not just L&D',
        'Packaging programmes that get approved',
        'The acquisition routine',
      ],
      handoffLine:
        'Find your weakest link. Take the free Sales Scorecard.',
    },
  },
  {
    slug: 'get-public-speaking-clients',
    url: '/blog/get-public-speaking-clients',
    type: 'vertical',
    title: 'How to Get Public Speaking Clients (B2B)',
    metaDescription:
      'For B2B speakers and communication trainers, the gig is the marketing, provided you treat it as a system. Here is how to turn talks into a corporate pipeline.',
    primaryKeyword: 'how to get public speaking clients',
    secondaryKeywords: [
      'communication skills training clients',
      'how to get paid speaking gigs',
    ],
    clearLetter: 'L',
    parent: 'client-acquisition-for-training-businesses',
    siblings: [
      'get-clients-for-corporate-training',
      'get-leadership-training-clients',
    ],
    schema: ['BlogPosting', 'BreadcrumbList', 'Service'],
    publishWave: 4,
    status: 'scaffold',
    brief: {
      angle:
        'Vertical: communication skills / public speaking — anchor to B2B/corporate, NOT B2C motivational.',
      outline: [
        'Why B2B speaking is a different business from keynotes',
        'Turning a talk into a corporate engagement',
        'Packaging communication training',
        'The pipeline behind the stage',
      ],
      handoffLine:
        'See where your pipeline breaks. Take the free Sales Scorecard.',
    },
  },
  {
    slug: 'get-leadership-training-clients',
    url: '/blog/get-leadership-training-clients',
    type: 'vertical',
    title: 'How to Get Leadership Training Clients',
    metaDescription:
      'Leadership development is a crowded promise. Here is how to differentiate, package, and win corporate leadership-training clients on purpose.',
    primaryKeyword: 'how to get leadership training clients',
    secondaryKeywords: [
      'leadership development clients',
      'executive coaching clients',
    ],
    clearLetter: 'L',
    parent: 'client-acquisition-for-training-businesses',
    siblings: [
      'get-clients-for-corporate-training',
      'get-public-speaking-clients',
    ],
    schema: ['BlogPosting', 'BreadcrumbList', 'Service'],
    publishWave: 4,
    status: 'scaffold',
    brief: {
      angle: 'Vertical: leadership development — differentiating a crowded promise.',
      outline: [
        'Why “leadership training” all sounds the same',
        'Finding a sharper position',
        'Packaging a programme buyers trust',
        'The acquisition routine',
      ],
      handoffLine:
        'Find your weakest link. Take the free Sales Scorecard.',
    },
  },

  // ---- WAVE 4 — professional & advisory -----------------------------------
  {
    slug: 'client-acquisition-for-professional-services',
    url: '/client-acquisition-for-professional-services',
    type: 'subpillar',
    title: 'Client Acquisition for Professional Services',
    metaDescription:
      'Professional services sell expertise and trust, which makes marketing feel awkward. Here is a client-acquisition system built for advisory firms.',
    primaryKeyword: 'client acquisition for professional services',
    secondaryKeywords: [
      'lead generation for professional services',
      'how advisory firms get clients',
    ],
    clearLetter: 'E',
    parent: PILLAR,
    siblings: [],
    schema: ['Article', 'BreadcrumbList', 'FAQPage'],
    publishWave: 4,
    status: 'scaffold',
    brief: {
      angle: 'Sub-pillar hub for professional & advisory. Links down to 24–27.',
      outline: [
        'Why advisory sales feels awkward',
        'Trust-first acquisition',
        'The system applied to professional services',
        'Links to each advisory type',
      ],
      handoffLine:
        'See where your pipeline breaks. Take the free Sales Scorecard.',
    },
  },
  {
    slug: 'get-clients-for-ip-consulting-firm',
    url: '/blog/get-clients-for-ip-consulting-firm',
    type: 'vertical',
    title: 'How to Get Clients for an IP Consulting Firm',
    metaDescription:
      'IP and patent consulting is high-trust and niche. Drawing on years inside the field, here is how to build a steady client pipeline without chasing.',
    primaryKeyword: 'how to get clients for an IP consulting firm',
    secondaryKeywords: ['patent consulting clients', 'IP firm lead generation'],
    clearLetter: 'E',
    parent: 'client-acquisition-for-professional-services',
    siblings: [
      'get-clients-for-ai-consulting-firm',
      'get-clients-for-hr-consulting',
      'get-clients-for-ca-firm',
    ],
    schema: ['BlogPosting', 'BreadcrumbList', 'Service'],
    publishWave: 4,
    status: 'scaffold',
    brief: {
      angle:
        'Vertical: IP / patent consulting — Anoop’s own background, strongest authority page. Lead with first-hand credibility.',
      outline: [
        'What IP buyers actually evaluate',
        'Building trust before the need arises',
        'Packaging IP advisory clearly',
        'The acquisition routine in a niche field',
      ],
      handoffLine:
        'See where your pipeline breaks. Take the free Sales Scorecard.',
    },
  },
  {
    slug: 'get-clients-for-ai-consulting-firm',
    url: '/blog/get-clients-for-ai-consulting-firm',
    type: 'vertical',
    title: 'How to Get Clients for an AI Consulting Firm',
    metaDescription:
      'AI consulting is booming and noisy. Here is how to cut through the hype, prove real value, and build a pipeline of clients who are ready to act.',
    primaryKeyword: 'how to get clients for an AI consulting firm',
    secondaryKeywords: ['data consulting clients', 'AI consultancy lead generation'],
    clearLetter: 'E',
    parent: 'client-acquisition-for-professional-services',
    siblings: [
      'get-clients-for-ip-consulting-firm',
      'get-clients-for-hr-consulting',
      'get-clients-for-ca-firm',
    ],
    schema: ['BlogPosting', 'BreadcrumbList', 'Service'],
    publishWave: 4,
    status: 'scaffold',
    brief: {
      angle: 'Vertical: data / AI consulting — cutting through hype to real value.',
      outline: [
        'Why AI buyers are skeptical and overwhelmed',
        'Positioning past the hype',
        'Packaging an AI engagement that de-risks the buyer',
        'The acquisition routine',
      ],
      handoffLine:
        'Find your weakest link. Take the free Sales Scorecard.',
    },
  },
  {
    slug: 'get-clients-for-hr-consulting',
    url: '/blog/get-clients-for-hr-consulting',
    type: 'vertical',
    title: 'How to Get Clients for HR Consulting',
    metaDescription:
      'HR consulting buyers act when there’s pain. Here is how to position your firm so you’re the obvious call, and build a pipeline that isn’t all referrals.',
    primaryKeyword: 'how to get clients for HR consulting',
    secondaryKeywords: ['HR consultancy clients', 'HR consulting lead generation'],
    clearLetter: 'E',
    parent: 'client-acquisition-for-professional-services',
    siblings: [
      'get-clients-for-ip-consulting-firm',
      'get-clients-for-ai-consulting-firm',
      'get-clients-for-ca-firm',
    ],
    schema: ['BlogPosting', 'BreadcrumbList', 'Service'],
    publishWave: 4,
    status: 'scaffold',
    brief: {
      angle: 'Vertical: HR consulting — being the obvious call when pain hits.',
      outline: [
        'When companies actually buy HR help',
        'Staying top of mind before the crisis',
        'Packaging HR advisory',
        'The acquisition routine',
      ],
      handoffLine:
        'See where your pipeline breaks. Take the free Sales Scorecard.',
    },
  },
  {
    slug: 'get-clients-for-ca-firm',
    url: '/blog/get-clients-for-ca-firm',
    type: 'vertical',
    title: 'How to Get Clients for a CA Firm',
    metaDescription:
      'Accounting firms rely heavily on referrals and renewals. Here is how a CA firm can add a deliberate client-acquisition routine without feeling salesy.',
    primaryKeyword: 'how to get clients for a CA firm',
    secondaryKeywords: ['accounting firm clients', 'CA practice lead generation'],
    clearLetter: 'E',
    parent: 'client-acquisition-for-professional-services',
    siblings: [
      'get-clients-for-ip-consulting-firm',
      'get-clients-for-ai-consulting-firm',
      'get-clients-for-hr-consulting',
    ],
    schema: ['BlogPosting', 'BreadcrumbList', 'Service'],
    publishWave: 4,
    status: 'scaffold',
    brief: {
      angle:
        'Vertical: CA / accounting — lower priority (historically low conversion). Keep light until traction.',
      outline: [
        'Why accounting practices stay referral-bound',
        'Adding acquisition without feeling salesy',
        'Packaging advisory beyond compliance',
        'The acquisition routine',
      ],
      handoffLine:
        'See where your pipeline breaks. Take the free Sales Scorecard.',
    },
  },
];

// ============================================================================
// Lookup helpers — used by templates, sitemap, breadcrumbs, internal links,
// and the link-audit script.
// ============================================================================

export function getPageBySlug(slug: string): Page | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}

export function getLivePages(): Page[] {
  return SEO_PAGES.filter((p) => p.status === 'live');
}

export function isLive(slug: string): boolean {
  return getPageBySlug(slug)?.status === 'live';
}

/** Direct children (pages whose `parent` is this slug). */
export function getChildren(slug: string): Page[] {
  return SEO_PAGES.filter((p) => p.parent === slug);
}

/** Resolved sibling pages (from the `siblings` slug list). */
export function getSiblings(slug: string): Page[] {
  const page = getPageBySlug(slug);
  if (!page?.siblings) return [];
  return page.siblings
    .map((s) => getPageBySlug(s))
    .filter((p): p is Page => Boolean(p));
}

/** The parent → … → page chain, root first, for breadcrumbs. */
export function getAncestors(slug: string): Page[] {
  const chain: Page[] = [];
  let current = getPageBySlug(slug);
  const seen = new Set<string>();
  while (current?.parent && !seen.has(current.parent)) {
    seen.add(current.parent);
    const parent = getPageBySlug(current.parent);
    if (!parent) break;
    chain.unshift(parent);
    current = parent;
  }
  return chain;
}
