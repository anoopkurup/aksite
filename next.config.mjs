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
  async redirects() {
    return [
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