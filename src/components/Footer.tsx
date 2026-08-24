import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand Column */}
          <div>
            <p className="font-serif text-lg text-navy-900 mb-2">Anoop Kurup</p>
            <p className="font-sans text-sm text-slate-500">Marketing consultant for B2B service firms in India · Bangalore</p>
          </div>

          {/* Links Column */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link
              href="/blog"
              className="font-sans text-sm text-slate-600 hover:text-navy-900 transition-colors"
            >
              Writing
            </Link>
            <Link
              href="/case-studies"
              className="font-sans text-sm text-slate-600 hover:text-navy-900 transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/pipeline-reality-check"
              className="font-sans text-sm text-slate-600 hover:text-navy-900 transition-colors"
            >
              Pipeline Reality Check
            </Link>
            <Link
              href="/workshops"
              className="font-sans text-sm text-slate-600 hover:text-navy-900 transition-colors"
            >
              Workshops
            </Link>
            <Link
              href="/contact"
              className="font-sans text-sm text-slate-600 hover:text-navy-900 transition-colors"
            >
              Contact
            </Link>
            <a
              href="https://www.linkedin.com/in/anoopkurup/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-slate-600 hover:text-navy-900 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright + legal. Privacy and Terms live here rather than in the links
            row above: they're obligations, not navigation. They must be reachable
            from every page; buyers look for them in the footer. Leaving them sitemap-only made them unreachable in the UI. */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-3">
          <p className="font-sans text-xs text-slate-500">
            © {currentYear} Anoop Kurup. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/legal/privacy-policy"
              className="font-sans text-xs text-slate-500 hover:text-navy-900 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/legal/terms-conditions"
              className="font-sans text-xs text-slate-500 hover:text-navy-900 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
