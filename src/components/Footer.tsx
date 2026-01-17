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
            <p className="font-sans text-sm text-cta-600">Business Clarity Architect</p>
          </div>

          {/* Links Column */}
          <div className="flex items-center gap-8">
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

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-100">
          <p className="font-sans text-xs text-slate-400 text-center">
            © {currentYear} Anoop Kurup. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
