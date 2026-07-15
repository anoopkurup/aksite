import type { Metadata } from "next";
import { Inter, Newsreader, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JsonLd from "@/components/JsonLd";
import { personSchema, organizationSchema, websiteSchema } from "@/lib/seo";

const GA_MEASUREMENT_ID = "G-0X2P577TSX";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

// Display: Newsreader — clean editorial serif with conventional letterforms (no Fraunces flare).
// Only 400/normal: nothing on the site pairs font-serif with a weight class, and
// PROSE pins markdown headings to font-normal. Italic is unused too — .prose
// inherits font-sans from <body>, so blockquote italics render in Inter, and no
// markdown heading contains emphasis. Declaring the unused weights and styles cost
// five extra woff2 preloads competing with the LCP image on mobile.
// If you ever set `font-serif font-semibold`, add the weight back here first —
// otherwise the browser synthesises it and the letterforms smear.
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-serif',
  display: 'swap',
});

// Data/utility: IBM Plex Mono — every number, price, score, eyebrow and meter label
// (the instrument readout). 400 + 500; 600 was declared but never used.
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.anoopkurup.com"),
  title: {
    default: "Anoop Kurup — I Fix Sales for Services Businesses",
    template: "%s | Anoop Kurup",
  },
  description:
    "I fix sales for B2B services businesses: one packaged offer, proven against real prospects, and a weekly rhythm that produces conversations.",
  // No `url` here on purpose. Routes that don't declare their own `openGraph`
  // inherit this whole object, so a hardcoded url made every such page announce
  // itself as the homepage. Pages set it via pageMetadata() in lib/seo.ts.
  openGraph: {
    type: "website",
    siteName: "Anoop Kurup",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "Anoop Kurup — Blog" }],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* pb-12 clears the mobile sticky WhatsApp/Call bar so it never covers the footer. */}
      <body className={`${inter.variable} ${newsreader.variable} ${plexMono.variable} font-sans antialiased pb-12 md:pb-0`}>
        {/* Site-wide structured data: who Anoop is, the practice, the site. */}
        <JsonLd schema={[personSchema(), organizationSchema(), websiteSchema()]} />
        {/* lazyOnload, not afterInteractive: afterInteractive makes Next emit a
            <link rel="preload" as="script"> for gtag.js, so a 167KB analytics
            bundle (~55KB of it unused) competes for bandwidth with the actual page
            on a mobile connection. Nothing here is render-critical, and every
            trackEvent() call fires on user interaction, long after load. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="lazyOnload"
        />
        <Script id="ga4-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-navy-900 focus:px-4 focus:py-2 focus:font-sans focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}