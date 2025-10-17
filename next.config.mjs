/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
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

      // Workshop and service redirects (old URLs)
      {
        source: '/lead-generation-strategy-workshop',
        destination: '/solutions/leads',
        permanent: true,
      },
      {
        source: '/linkedin-marketing',
        destination: '/solutions/visibility',
        permanent: true,
      },
      {
        source: '/linkedin-thoughtleadership',
        destination: '/solutions/visibility',
        permanent: true,
      },
      {
        source: '/content-factory-creators-membership',
        destination: '/solutions/visibility',
        permanent: true,
      },
      {
        source: '/find-your-tg',
        destination: '/solutions',
        permanent: true,
      },

      // New redirects from old structure to outcome-based structure
      // Only redirect overview pages, keep detail pages accessible
      {
        source: '/services',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/workshops',
        destination: '/solutions',
        permanent: true,
      },

      // Archived workshops redirects
      {
        source: '/workshops/ai-lead-machine',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/workshops/100-days-sprint',
        destination: '/solutions/leads',
        permanent: true,
      },

      // Archived workflows redirects
      {
        source: '/workflows',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/workflows/ai-lead-machine',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/workflows/linkedin-post-creator',
        destination: '/solutions/visibility',
        permanent: true,
      },
      {
        source: '/workflows/blog-article-writer',
        destination: '/solutions/visibility',
        permanent: true,
      },
      {
        source: '/ai-workflows',
        destination: '/solutions',
        permanent: true,
      },

      // Archived ebooks redirect
      {
        source: '/ebooks',
        destination: '/blog',
        permanent: true,
      },

      // Consulting page redirect
      {
        source: '/consulting',
        destination: '/solutions',
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
      {
        source: '/wp-sitemap:path*.xml',
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
        source: '/wp-:path*',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;