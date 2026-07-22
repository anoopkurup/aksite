"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { CTA_CLASSES } from "@/components/CTAButton";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "How I Fix Sales", href: "/clear" },
    { name: "Pipeline Reality Check", href: "/pipeline-reality-check" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Escape closes the menu — a keyboard user must be able to dismiss it without
  // tabbing through every link.
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" aria-label="Anoop Kurup, home" className="inline-flex items-center hover:opacity-80 transition-opacity">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.svg" alt="Anoop Kurup" className="h-10 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`font-sans text-sm whitespace-nowrap transition-colors ${isActive(link.href) ? "text-navy-900 font-medium border-b-2 border-navy-900" : "text-slate-600 hover:text-navy-900 border-b-2 border-transparent"}`}
              >
                {link.name}
              </Link>
            ))}

            <Link href="/scorecard" className={`${CTA_CLASSES} text-sm whitespace-nowrap px-4 py-2`}>
              Take the Sales Scorecard
            </Link>
          </nav>

          <button
            className="lg:hidden -mr-2 p-3 text-navy-900 hover:text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden py-4 border-t border-slate-100">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`font-sans text-sm py-1 transition-colors ${isActive(link.href) ? "text-navy-900 font-medium" : "text-slate-600 hover:text-navy-900"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/scorecard" className={`${CTA_CLASSES} text-sm px-4 py-3 mt-4 justify-center`} onClick={() => setIsMobileMenuOpen(false)}>Take the Sales Scorecard</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
