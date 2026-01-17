import Link from "next/link";

export default function SampleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Minimalist Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo - serif font with navy */}
            <Link href="/sample" className="font-serif text-xl text-navy-900 tracking-tight">
              Anoop Kurup
            </Link>

            {/* Navigation - minimal */}
            <nav className="hidden md:flex items-center space-x-10">
              {[
                { name: "About", href: "/about" },
                { name: "Approach", href: "/solutions" },
                { name: "Writing", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-sans text-sm text-slate-500 hover:text-navy-900 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden text-navy-700 p-2">
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main content with padding for fixed header */}
      <main className="pt-20">
        {children}
      </main>

      {/* Minimalist Footer */}
      <footer className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* Left - Name and tagline */}
            <div className="mb-8 md:mb-0">
              <p className="font-serif text-lg text-navy-900 mb-2">
                Anoop Kurup
              </p>
              <p className="font-sans text-sm text-cta-600">
                Business Clarity Architect
              </p>
            </div>

            {/* Right - Minimal links */}
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <Link
                href="/contact"
                className="font-sans text-sm text-slate-500 hover:text-navy-900 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="https://linkedin.com/in/anoopkurup"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-slate-500 hover:text-navy-900 transition-colors"
              >
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Copyright - very subtle */}
          <div className="mt-16 pt-8 border-t border-slate-50">
            <p className="font-sans text-xs text-slate-400">
              © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
