"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  const services = [
    { name: "Diagnose", href: "/diagnose", description: "Clarity Diagnosis Session" },
    { name: "Build", href: "/build", description: "Clarity Sprint" },
    { name: "Partner", href: "/partner", description: "Ongoing Advisory" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isServicesActive = services.some(service => pathname.startsWith(service.href));

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-xl text-navy-900 tracking-tight hover:text-slate-600 transition-colors"
          >
            Anoop Kurup
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className={`font-sans text-sm transition-colors ${
                isActive("/about")
                  ? "text-navy-900"
                  : "text-slate-600 hover:text-navy-900"
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`font-sans text-sm transition-colors flex items-center gap-1 ${
                  isServicesActive
                    ? "text-navy-900"
                    : "text-slate-600 hover:text-navy-900"
                }`}
              >
                Services
                <ChevronDown className="w-3 h-3" />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-72 bg-white border border-slate-100 shadow-lg">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-6 py-4 border-b border-slate-50 last:border-b-0 hover:bg-slate-50 transition-colors"
                      >
                        <p className="font-sans text-sm font-medium text-navy-900 mb-1">
                          {service.name}
                        </p>
                        <p className="font-sans text-xs text-slate-500">
                          {service.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/framework"
              className={`font-sans text-sm transition-colors ${
                isActive("/framework")
                  ? "text-navy-900"
                  : "text-slate-600 hover:text-navy-900"
              }`}
            >
              Framework
            </Link>

            <Link
              href="/videos"
              className={`font-sans text-sm transition-colors ${
                isActive("/videos")
                  ? "text-navy-900"
                  : "text-slate-600 hover:text-navy-900"
              }`}
            >
              Videos
            </Link>

            <Link
              href="/blog"
              className={`font-sans text-sm transition-colors ${
                isActive("/blog")
                  ? "text-navy-900"
                  : "text-slate-600 hover:text-navy-900"
              }`}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className={`font-sans text-sm transition-colors ${
                isActive("/contact")
                  ? "text-navy-900"
                  : "text-slate-600 hover:text-navy-900"
              }`}
            >
              Contact
            </Link>

            {/* Book Diagnosis CTA */}
            <Link
              href="/diagnose"
              className="font-sans text-sm bg-cta-500 text-white px-4 py-2 rounded hover:bg-cta-600 transition-colors"
            >
              Book Diagnosis
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-navy-900 hover:text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/about"
                className={`font-sans text-sm transition-colors ${
                  isActive("/about")
                    ? "text-navy-900"
                    : "text-slate-600 hover:text-navy-900"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              {/* Mobile Services */}
              <div className="space-y-2">
                <p className="font-sans text-xs text-slate-400 uppercase tracking-wide">Services</p>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block pl-4 py-2 border-l-2 border-slate-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <p className="font-sans text-sm font-medium text-navy-900">{service.name}</p>
                    <p className="font-sans text-xs text-slate-500">{service.description}</p>
                  </Link>
                ))}
              </div>

              <Link
                href="/framework"
                className={`font-sans text-sm transition-colors ${
                  isActive("/framework")
                    ? "text-navy-900"
                    : "text-slate-600 hover:text-navy-900"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Framework
              </Link>

              <Link
                href="/videos"
                className={`font-sans text-sm transition-colors ${
                  isActive("/videos")
                    ? "text-navy-900"
                    : "text-slate-600 hover:text-navy-900"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Videos
              </Link>

              <Link
                href="/blog"
                className={`font-sans text-sm transition-colors ${
                  isActive("/blog")
                    ? "text-navy-900"
                    : "text-slate-600 hover:text-navy-900"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className={`font-sans text-sm transition-colors ${
                  isActive("/contact")
                    ? "text-navy-900"
                    : "text-slate-600 hover:text-navy-900"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <Link
                href="/diagnose"
                className="font-sans text-sm bg-cta-500 text-white px-4 py-2 rounded text-center hover:bg-cta-600 transition-colors mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Diagnosis
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
