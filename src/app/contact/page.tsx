import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";
import PageTemplate from "@/components/PageTemplate";
import SocialIcon from "@/components/SocialIcon";
import ContentSections from "@/components/ContentSections";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Anoop Kurup - Marketing Strategy Discussion",
  description: "Get in touch to discuss how we can work together on your marketing strategy and lead generation system. Schedule a consultation today.",
};

export default function ContactPage() {
  const contentData = getContentPage('contact');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  const { frontmatter } = contentData;

  // Social media links configuration
  const socialLinks = [
    { platform: "linkedin" as const, href: "https://linkedin.com/in/anoopkurup" },
    { platform: "instagram" as const, href: "https://instagram.com/anoopkurup" },
    { platform: "whatsapp" as const, href: "https://chat.whatsapp.com/Lefk372OfrkAGT3QiTWuqp" },
  ];

  return (
    <PageTemplate 
      title={frontmatter.title}
      subtitle={frontmatter.description}
      heroBackground="gradient"
      heroIcon="handshake"
    >
      {/* Contact Information Section */}
      <section className="py-20 px-6 bg-solarized-base02">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Ready to transform your marketing systems? I'd love to discuss how we can work together to drive your business growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Email Card */}
            <div className="bg-solarized-base03 rounded-lg p-8">
              <div className="text-center">
                <div className="bg-solarized-magenta text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Email Me Directly</h3>
                <p className="text-white/80 mb-6">
                  The fastest way to reach me for project discussions and consultations.
                </p>
                <a
                  href="mailto:mail@anoopkurup.com"
                  className="inline-flex items-center justify-center bg-solarized-base02 hover:bg-solarized-cyan text-white px-8 py-4 rounded-lg text-lg font-semibold"
                >
                  mail@anoopkurup.com
                </a>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-solarized-base03 rounded-lg p-8">
              <div className="text-center">
                <div className="bg-solarized-magenta text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.433-2.057 4.178-1.194.768-2.814.873-4.617.873-1.848 0-3.482-.105-4.676-.873-1.161-.745-1.888-2.32-2.057-4.178-.156-1.716-.156-3.604 0-5.32C4.33 4.687 5.057 3.112 6.218 2.367 7.412 1.599 9.046 1.494 10.894 1.494c1.803 0 3.423.105 4.617.873 1.161.745 1.888 2.32 2.057 4.178.156 1.716.156 3.604 0 5.32z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Connect on Social</h3>
                <p className="text-white/80 mb-6">
                  Follow my content and insights across professional networks.
                </p>
                
                {/* Social Icons Grid */}
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((link) => (
                    <div key={link.platform} className="flex flex-col items-center">
                      <div className="bg-solarized-base02 p-6 rounded-lg mb-3">
                        <SocialIcon
                          platform={link.platform}
                          href={link.href}
                          size={56}
                          className="bg-transparent hover:bg-transparent"
                        />
                      </div>
                      <span className="text-sm font-medium text-white/80 capitalize">
                        {link.platform}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <div className="bg-solarized-base03 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-white/80 mb-6">
                Let's schedule a consultation to discuss your marketing challenges and explore solutions.
              </p>
              <a
                href="https://tidycal.com/anoopmkurup/consulting-marketing-leadgen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-solarized-base02 hover:bg-solarized-cyan text-white px-8 py-4 rounded-lg text-lg font-semibold"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Original Content Sections */}
      {frontmatter.sections && (
        <ContentSections sections={frontmatter.sections} />
      )}

      {/* Call to Action Section */}
      {frontmatter.cta && (
        <section className="py-16 px-6 bg-gradient-to-br from-solarized-base03 to-solarized-base02">
          <div className="max-w-4xl mx-auto text-center text-white">
            {frontmatter.cta.title && (
              <h2 className="text-3xl font-bold mb-6">{frontmatter.cta.title}</h2>
            )}
            {frontmatter.cta.subtitle && (
              <p className="text-xl text-blue-100 mb-8">
                {frontmatter.cta.subtitle}
              </p>
            )}
            {frontmatter.cta.button && (
              <Button asChild size="lg" className="bg-solarized-magenta text-black hover:bg-[#F47B78] px-8 py-4 rounded-lg font-bold text-lg">
                <Link href={frontmatter.cta.button.url || '/contact'} className="flex items-center">
                  {frontmatter.cta.button.text || 'Get Started'}
                  <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 5 7 7-7 7"/>
                    <path d="M5 12h14"/>
                  </svg>
                </Link>
              </Button>
            )}
          </div>
        </section>
      )}
    </PageTemplate>
  );
}