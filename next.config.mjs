/** @type {import('next').NextConfig} */
const nextConfig = {
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
      // NEW SITE STRUCTURE REDIRECTS (Jan 2026)
      // Business Clarity Architect positioning
      // ===========================================

      // Services section redirects
      {
        source: '/services',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services/content-growth',
        destination: '/build',
        permanent: true,
      },
      {
        source: '/services/lead-generation',
        destination: '/build',
        permanent: true,
      },
      {
        source: '/services/marketing-operations',
        destination: '/partner',
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
        destination: '/build',
        permanent: true,
      },
      {
        source: '/solutions/leads',
        destination: '/build',
        permanent: true,
      },
      {
        source: '/solutions/complete-system',
        destination: '/partner',
        permanent: true,
      },

      // Workshops section redirects
      {
        source: '/workshops',
        destination: '/build',
        permanent: true,
      },
      {
        source: '/workshops/100-day-lead-generation-sprint',
        destination: '/build',
        permanent: true,
      },
      {
        source: '/workshops/linkedin-sales-activation',
        destination: '/build',
        permanent: true,
      },

      // Resources section redirects
      {
        source: '/resources/webinars',
        destination: '/videos',
        permanent: true,
      },
      {
        source: '/resources/webinars/:slug',
        destination: '/videos',
        permanent: true,
      },
      {
        source: '/resources',
        destination: '/videos',
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
        destination: '/build',
        permanent: true,
      },
      {
        source: '/linkedin-marketing',
        destination: '/build',
        permanent: true,
      },
      {
        source: '/linkedin-thoughtleadership',
        destination: '/build',
        permanent: true,
      },
      {
        source: '/content-factory-creators-membership',
        destination: '/build',
        permanent: true,
      },
      {
        source: '/find-your-tg',
        destination: '/diagnose',
        permanent: true,
      },

      // Archived workshops redirects
      {
        source: '/workshops/ai-lead-machine',
        destination: '/build',
        permanent: true,
      },
      {
        source: '/workshops/100-days-sprint',
        destination: '/build',
        permanent: true,
      },

      // Archived workflows redirects
      {
        source: '/workflows',
        destination: '/build',
        permanent: true,
      },
      {
        source: '/workflows/ai-lead-machine',
        destination: '/build',
        permanent: true,
      },
      {
        source: '/workflows/linkedin-post-creator',
        destination: '/build',
        permanent: true,
      },
      {
        source: '/workflows/blog-article-writer',
        destination: '/build',
        permanent: true,
      },
      {
        source: '/ai-workflows',
        destination: '/build',
        permanent: true,
      },

      // Archived ebooks redirect to videos (resources)
      {
        source: '/ebooks',
        destination: '/videos',
        permanent: true,
      },
      {
        source: '/resources/ebooks',
        destination: '/videos',
        permanent: true,
      },

      // Consulting page redirect
      {
        source: '/consulting',
        destination: '/diagnose',
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