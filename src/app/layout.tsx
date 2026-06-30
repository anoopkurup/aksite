import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { personSchema, organizationSchema, websiteSchema } from "@/lib/seo";

const GA_MEASUREMENT_ID = "G-0X2P577TSX";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.anoopkurup.com"),
  title: {
    default: "Anoop Kurup — I Fix Sales for Services Businesses",
    template: "%s | Anoop Kurup",
  },
  description:
    "Sales systems for founder-led services firms: one packaged offer, proven against real prospects, with a weekly motion that produces conversations. Start with the free Sales Scorecard.",
  openGraph: {
    type: "website",
    siteName: "Anoop Kurup",
    locale: "en_IN",
    url: "https://www.anoopkurup.com",
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
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        {/* Site-wide structured data: who Anoop is, the practice, the site. */}
        <JsonLd schema={[personSchema(), organizationSchema(), websiteSchema()]} />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}