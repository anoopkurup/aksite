"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "How I Fix Sales", href: "/clear" },
    { name: "Pipeline Reality Check", href: "/pipeline-reality-check" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="font-serif text-xl text-navy-900 tracking-tight hover:text-slate-600 transition-colors">
            Anoop Kurup
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-sm transition-colors ${isActive(link.href) ? "text-navy-900" : "text-slate-600 hover:text-navy-900"}`}
              >
                {link.name}
              </Link>
            ))}

            <Link href="/scorecard" className="font-sans text-sm bg-cta-500 text-white px-4 py-2 rounded hover:bg-cta-600 transition-colors">
              Take the Sales Scorecard
            </Link>
          </nav>

          <button className="md:hidden p-2 text-navy-900 hover:text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-sans text-sm transition-colors ${isActive(link.href) ? "text-navy-900" : "text-slate-600 hover:text-navy-900"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/scorecard" className="font-sans text-sm bg-cta-500 text-white px-4 py-2 rounded text-center hover:bg-cta-600 transition-colors mt-4" onClick={() => setIsMobileMenuOpen(false)}>Take the Sales Scorecard</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
