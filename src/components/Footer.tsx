import Link from "next/link";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Social media links configuration
  const socialLinks = [
    { platform: "linkedin" as const, href: "https://linkedin.com/in/anoopkurup" },
    { platform: "youtube" as const, href: "https://youtube.com/@anoopkurup" },
    { platform: "instagram" as const, href: "https://instagram.com/anoopkurup" },
    { platform: "spotify" as const, href: "https://open.spotify.com/show/7lnAk0uJ73hwr7AVN93nv3" },
    { platform: "whatsapp" as const, href: "https://chat.whatsapp.com/Lefk372OfrkAGT3QiTWuqp" },
  ];

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Consulting", href: "/consulting" },
        { name: "Workshops", href: "/workshops" },
        { name: "AI Solutions", href: "/ai-solutions" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Free Resources", href: "/resources" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ];

  return (
    <footer className="bg-navy-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
              Anoop Kurup
            </Link>
            <p className="text-blue-100 text-sm leading-6 max-w-xs mb-6">
              Helping professional service and tech-enabled businesses create clear, consistent, 
              and cost-effective marketing systems.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <SocialIcon
                  key={link.platform}
                  platform={link.platform}
                  href={link.href}
                  size={32}
                  className="transition-transform hover:scale-110"
                />
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-blue-100 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-blue-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-blue-100">
              © {currentYear} Anoop Kurup. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-6 text-sm">
                <Link
                  href="/privacy-policy"
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-and-conditions"
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  Terms and Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}