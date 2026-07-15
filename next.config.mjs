import path from 'path';
import { fileURLToPath } from 'url';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root: a stray lockfile elsewhere on the machine must not
  // change what Next traces into the build output
  outputFileTracingRoot: path.dirname(fileURLToPath(import.meta.url)),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/vi/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          // CSP. 'unsafe-inline'/'unsafe-eval' on script-src are required by Next's
          // hydration inline bootstrap and GA4; tightening those needs per-request
          // nonces, which would force every static page to render dynamically —
          // not worth trading the CDN for on a brochure site. The value here still
          // constrains where scripts, frames and connections may come from, which is
          // what matters with Razorpay checkout in the page.
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://checkout.razorpay.com https://*.googletagmanager.com https://*.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https://img.youtube.com https://*.google-analytics.com https://*.googletagmanager.com",
              "font-src 'self' data:",
              "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://api.razorpay.com https://lumberjack.razorpay.com https://formspree.io",
              "frame-src https://api.razorpay.com https://checkout.razorpay.com https://www.youtube.com https://www.youtube-nocookie.com",
              "form-action 'self' https://formspree.io",
              "base-uri 'self'",
              "object-src 'none'",
              "frame-ancestors 'self'",
            ].join('; '),
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // /index served a byte-identical copy of the homepage on a second URL.
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },

      // RSS: the feed lives at /feed.xml; /rss.xml is the conventional alias.
      {
        source: '/rss.xml',
        destination: '/feed.xml',
        permanent: true,
      },

      // ===========================================
      // REPOSITIONING REDIRECTS (Jun 2026)
      // "I fix sales for services businesses"
      // Funnel: Scorecard → Pipeline Reality Check → CLEAR
      // ===========================================

      // Retired offer pages → new funnel (point to FINAL destinations, no chains)
      {
        source: '/diagnose',
        destination: '/scorecard',
        permanent: true,
      },
      {
        source: '/build',
        destination: '/clear',
        permanent: true,
      },
      {
        source: '/partner',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/framework',
        destination: '/clear',
        permanent: true,
      },
      {
        source: '/postie',
        destination: '/scorecard',
        permanent: true,
      },
      // Podcast retired July 2026: the page was a stub — 9 episodes and 4 platform
      // links all pointing at "#", copy selling the retired Lead Machine Method,
      // and no internal links to it. /about carries the podcast mention.
      {
        source: '/podcast',
        destination: '/about',
        permanent: true,
      },

      // Case studies were published twice — once under /blog and once under
      // /case-studies — with identical titles and ~98% identical bodies, so Google
      // had to pick a winner per pair and equity split across both. /case-studies
      // is canonical: it's in the nav, and the URL says what the page is.
      // Deleting the blog copies also drops the "Case Studies" blog category,
      // which is intended — those stories have a home already.
      {
        source: '/blog/advertising-agency-one-sellable-offer',
        destination: '/case-studies/cs-01-advertising-agency',
        permanent: true,
      },
      {
        source: '/blog/video-studio-out-of-the-editing-rate-trap',
        destination: '/case-studies/cs-02-video-production',
        permanent: true,
      },
      {
        source: '/blog/creative-agency-breaking-feast-and-famine',
        destination: '/case-studies/cs-03-branding-agency',
        permanent: true,
      },
      {
        source: '/blog/corporate-trainer-speak-like-a-leader',
        destination: '/case-studies/cs-04-communications-trainer',
        permanent: true,
      },
      {
        source: '/blog/boutique-law-firm-productised-advisory',
        destination: '/case-studies/cs-05-boutique-law-firm',
        permanent: true,
      },
      {
        source: '/blog/consultant-family-business-succession-niche',
        destination: '/case-studies/cs-06-family-business-consultant',
        permanent: true,
      },
      {
        source: '/blog/branding-agency-niche-specialisation',
        destination: '/case-studies/cs-07-brand-agency-specialisation',
        permanent: true,
      },
      {
        source: '/blog/ad-agency-from-big-clients-to-many-small',
        destination: '/case-studies/cs-08-ad-creative-agency-sme-shift',
        permanent: true,
      },
      // The category route was generated from post frontmatter, so it vanished
      // with the posts above. Anything holding the old URL goes to the real thing.
      {
        source: '/blog/category/case-studies',
        destination: '/case-studies',
        permanent: true,
      },

      // Services section redirects
      {
        source: '/services',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services/content-growth',
        destination: '/clear',
        permanent: true,
      },
      {
        source: '/services/lead-generation',
        destination: '/clear',
        permanent: true,
      },
      {
        source: '/services/marketing-operations',
        destination: '/contact',
        permanent: true,
      },

      // Solutions section redirects
      {
        source: '/solutions',
        destination: '/',
        permanent: true,
      },
      {
        source: '/solutions/visibility',
        destination: '/clear',
        permanent: true,
      },
      {
        source: '/solutions/leads',
        destination: '/clear',
        permanent: true,
      },
      {
        source: '/solutions/complete-system',
        destination: '/contact',
        permanent: true,
      },

      // Workshops section redirects
      {
        source: '/workshops',
        destination: '/clear',
        permanent: true,
      },
      {
        source: '/workshops/100-day-lead-generation-sprint',
        destination: '/clear',
        permanent: true,
      },
      {
        source: '/workshops/linkedin-sales-activation',
        destination: '/clear',
        permanent: true,
      },

      // Resources section redirects (no /videos page — send to /blog)
      {
        source: '/resources/webinars',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/resources/webinars/:slug',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/resources',
        destination: '/blog',
        permanent: true,
      },
      // Catch-all for the rest of the retired /resources tree. Declared after the
      // explicit paths above so those keep their specific destinations.
      {
        source: '/resources/:path*',
        destination: '/blog',
        permanent: true,
      },

      // ===========================================
      // LEGACY REDIRECTS (preserved from old config)
      // ===========================================

      // Blog redirects
      {
        source: '/blog-2',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/category/blog',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/do-followers-on-social-media-translate-into-future-clients',
        destination: '/blog',
        permanent: true,
      },

      // Blog post URL structure redirects
      {
        source: '/blog/posts/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },

      // Workshop and service redirects (old URLs) - now point to new structure
      {
        source: '/lead-generation-strategy-workshop',
        destination: '/clear',
        permanent: true,
      },
      {
        source: '/linkedin-marketing',
        destination: '/clear',
        permanent: true,
      },
      {
        source: '/linkedin-thoughtleadership',
        destination: '/clear',
        permanent: true,
      },
      {
        source: '/content-factory-creators-membership',
        destination: '/clear',
        permanent: true,
      },
      {
        source: '/find-your-tg',
        destination: '/scorecard',
        permanent: true,
      },

      // Archived workshops redirects
      {
        source: '/workshops/ai-lead-machine',
        destination: '/clear',
        permanent: true,
      },
      {
        source: '/workshops/100-days-sprint',
        destination: '/clear',
        permanent: true,
      },

      // Archived workflows redirects
      {
        source: '/workflows',
        destination: '/clear',
        permanent: true,
      },
      {
        source: '/workflows/ai-lead-machine',
        destination: '/clear',
        permanent: true,
      },
      {
        source: '/workflows/linkedin-post-creator',
        destination: '/clear',
        permanent: true,
      },
      {
        source: '/workflows/blog-article-writer',
        destination: '/clear',
        permanent: true,
      },
      {
        source: '/ai-workflows',
        destination: '/clear',
        permanent: true,
      },

      // Archived ebooks redirect to blog
      {
        source: '/ebooks',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/resources/ebooks',
        destination: '/blog',
        permanent: true,
      },

      // Consulting page redirect
      {
        source: '/consulting',
        destination: '/scorecard',
        permanent: true,
      },

      // Legal pages
      {
        source: '/privacy-policy',
        destination: '/legal/privacy-policy',
        permanent: true,
      },
      {
        source: '/terms-and-conditions',
        destination: '/legal/terms-conditions',
        permanent: true,
      },
      {
        source: '/refund-return-policy',
        destination: '/legal/terms-conditions',
        permanent: true,
      },

      // Documentation redirects to blog
      {
        source: '/docs-category/:path*',
        destination: '/blog',
        permanent: true,
      },

      // Author pages redirect to about
      {
        source: '/author/:path*',
        destination: '/about',
        permanent: true,
      },

      // Thank you pages redirect to main thank you page
      {
        source: '/thank-you-for-subscribing',
        destination: '/thank-you',
        permanent: true,
      },
      {
        source: '/thank-you-linkedin',
        destination: '/thank-you',
        permanent: true,
      },
      {
        source: '/thank-you-membership-content-factory-creators',
        destination: '/thank-you',
        permanent: true,
      },
      {
        source: '/thank-you-getting-started-with-linkedin',
        destination: '/thank-you',
        permanent: true,
      },
      {
        source: '/thank-you-for-subscribing-to-the-newsletter',
        destination: '/thank-you',
        permanent: true,
      },
      {
        source: '/thank-you-lead-gen-workshop',
        destination: '/thank-you',
        permanent: true,
      },
      {
        source: '/thank-you-for-filling-the-form',
        destination: '/thank-you',
        permanent: true,
      },
      {
        source: '/thank-you-linkedin-thought-leadership',
        destination: '/thank-you',
        permanent: true,
      },

      // WordPress-specific redirects to home
      // (regex params instead of `wp-:path*` — Next 15 forbids repeating
      // params with an inline prefix/suffix)
      {
        source: '/:path(wp-sitemap.*\\.xml)',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/wp-content/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-admin/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:path(wp-.*)',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;