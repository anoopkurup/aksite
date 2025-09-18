import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function DesignSystemPage() {
  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-[#1e3a8a]">Professional Services Design System</h1>
          <p className="text-xl text-[#374151] max-w-3xl mx-auto">
            A comprehensive flat design system optimized for professional service firms. Built with clean, modern aesthetics that support clarity, strategy, and systematic growth.
          </p>
        </div>

        <Separator />

        {/* Color Palette */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-[#1e3a8a]">Flat Design Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Primary Colors</h3>
              <p className="text-[#374151] mb-4">Core brand colors for CTAs and emphasis</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#f59e0b] rounded-lg"></div>
                  <span className="text-sm font-mono text-[#374151]">#f59e0b (Primary Orange)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#FFBF00] rounded-lg"></div>
                  <span className="text-sm font-mono text-[#374151]">#FFBF00 (Golden)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#1e3a8a] rounded-lg"></div>
                  <span className="text-sm font-mono text-[#374151]">#1e3a8a (Navy Blue)</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Text Colors</h3>
              <p className="text-[#374151] mb-4">Typography hierarchy for readability</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#1e3a8a] rounded-lg"></div>
                  <span className="text-sm font-mono text-[#374151]">#1e3a8a (Headings)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#374151] rounded-lg"></div>
                  <span className="text-sm font-mono text-[#374151]">#374151 (Body Text)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#6b7280] rounded-lg"></div>
                  <span className="text-sm font-mono text-[#374151]">#6b7280 (Muted Text)</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Backgrounds</h3>
              <p className="text-[#374151] mb-4">Clean backgrounds for content sections</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white border rounded-lg"></div>
                  <span className="text-sm font-mono text-[#374151]">#ffffff (White)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#fef7ed] rounded-lg"></div>
                  <span className="text-sm font-mono text-[#374151]">#fef7ed (Warm)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#f9fafb] rounded-lg"></div>
                  <span className="text-sm font-mono text-[#374151]">#f9fafb (Neutral)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Typography */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-[#1e3a8a]">Typography</h2>
          <div className="p-8 bg-white rounded-lg space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a8a]">Hero Title</h1>
              <p className="text-[#6b7280]">48-52px / font-bold - Main page headings</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-[#1e3a8a]">Section Title</h2>
              <p className="text-[#6b7280]">36px / font-bold - Section headings</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#1e3a8a]">Subsection Title</h3>
              <p className="text-[#6b7280]">24px / font-bold - Subsection headings</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-[#1e3a8a]">Component Title</h4>
              <p className="text-[#6b7280]">18px / font-semibold - Component headings</p>
            </div>
            <div className="space-y-4 border-t pt-4">
              <p className="text-xl text-[#374151]">Body Large - Perfect for lead paragraphs and hero subtitles that need emphasis and clarity.</p>
              <p className="text-base text-[#374151]">Body Regular - Standard body text for most content, ensuring excellent readability and professional presentation.</p>
              <p className="text-sm text-[#6b7280]">Body Small - Used for supporting text, captions, metadata, and secondary information.</p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Buttons */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-[#1e3a8a]">Flat Design Buttons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Primary Actions</h3>
              <p className="text-[#374151] mb-4">Main CTAs with flat design styling</p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-[#f59e0b] hover:bg-[#d97706] text-white rounded-lg">Get Started Today</Button>
                <Button size="lg" className="bg-[#f59e0b] hover:bg-[#d97706] text-white rounded-lg">Schedule Consultation</Button>
                <Button size="sm" className="bg-[#f59e0b] hover:bg-[#d97706] text-white rounded-lg">Learn More</Button>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Secondary Actions</h3>
              <p className="text-[#374151] mb-4">Supporting actions with navy styling</p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white rounded-lg">Download Guide</Button>
                <Button variant="outline" className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white rounded-lg">View Case Studies</Button>
                <Button variant="link" className="text-[#1e40af] hover:text-[#1e3a8a]">Contact Us</Button>
              </div>
            </div>
          </div>

          {/* Icon Circles Section */}
          <div className="p-6 bg-[#fef7ed] rounded-lg">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Icon Circles</h3>
            <p className="text-[#374151] mb-6">Flat design icon containers with golden backgrounds</p>
            <div className="flex gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mb-2">
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                    <circle cx="12" cy="12" r="2"/>
                  </svg>
                </div>
                <p className="text-sm text-[#6b7280]">Target Icon</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mb-2">
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18"/>
                    <path d="m19 9-5 5-4-4-3 3"/>
                  </svg>
                </div>
                <p className="text-sm text-[#6b7280]">Chart Icon</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mb-2">
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 7h-9"/>
                    <path d="M14 17H5"/>
                    <circle cx="17" cy="17" r="3"/>
                    <circle cx="7" cy="7" r="3"/>
                  </svg>
                </div>
                <p className="text-sm text-[#6b7280]">Users Icon</p>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Form Components */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-[#1e3a8a]">Form Components</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Contact Form</h3>
              <p className="text-[#374151] mb-6">Professional contact form for lead generation</p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-[#1e3a8a] font-medium">Company Name</Label>
                  <Input id="company" placeholder="Your Company Name" className="rounded-lg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#1e3a8a] font-medium">Email Address</Label>
                  <Input id="email" type="email" placeholder="you@company.com" className="rounded-lg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#1e3a8a] font-medium">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="rounded-lg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#1e3a8a] font-medium">How can we help?</Label>
                  <Textarea id="message" placeholder="Tell us about your goals and challenges..." className="rounded-lg" />
                </div>
                <Button className="w-full bg-[#f59e0b] hover:bg-[#d97706] text-white rounded-lg">Send Message</Button>
              </div>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Newsletter Signup</h3>
              <p className="text-[#374151] mb-6">Stay updated with our latest insights</p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="newsletter-email" className="text-[#1e3a8a] font-medium">Email Address</Label>
                  <Input id="newsletter-email" type="email" placeholder="your@email.com" className="rounded-lg" />
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="terms" className="rounded" />
                  <Label htmlFor="terms" className="text-sm text-[#374151]">
                    I agree to receive marketing communications
                  </Label>
                </div>
                <Button className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white rounded-lg">Subscribe to Newsletter</Button>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Service Cards */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-[#1e3a8a]">Service Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                    <circle cx="12" cy="12" r="2"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1e3a8a]">Strategy Development</h3>
                  <div className="bg-[#1e40af]/10 text-[#1e40af] px-2 py-1 rounded-full text-xs font-medium">Core Service</div>
                </div>
              </div>
              <p className="text-[#374151] mb-4">
                Develop comprehensive marketing strategies that drive measurable growth beyond referrals.
              </p>
              <Button variant="link" className="p-0 text-[#1e40af] hover:text-[#1e3a8a]">Learn More →</Button>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2"/>
                    <rect x="9" y="9" width="6" height="6"/>
                    <path d="m9 1 0 6"/>
                    <path d="m15 1 0 6"/>
                    <path d="m9 17 0 6"/>
                    <path d="m15 17 0 6"/>
                    <path d="m1 9 6 0"/>
                    <path d="m17 9 6 0"/>
                    <path d="m1 15 6 0"/>
                    <path d="m17 15 6 0"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1e3a8a]">Systems Implementation</h3>
                  <div className="bg-[#f59e0b]/10 text-[#f59e0b] px-2 py-1 rounded-full text-xs font-medium">Premium</div>
                </div>
              </div>
              <p className="text-[#374151] mb-4">
                Build scalable systems that consistently generate and convert high-quality leads.
              </p>
              <Button variant="link" className="p-0 text-[#1e40af] hover:text-[#1e3a8a]">Learn More →</Button>
            </div>

            <div className="p-6 bg-white rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-[#FFBF00] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21h6"/>
                    <path d="M12 17h.01"/>
                    <path d="M7 7a5 5 0 0 1 10 0c0 1.5-.8 2.8-2 3.7V17H9v-6.3C7.8 9.8 7 8.5 7 7z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1e3a8a]">Clarity Consulting</h3>
                  <div className="bg-[#10b981]/10 text-[#10b981] px-2 py-1 rounded-full text-xs font-medium">Popular</div>
                </div>
              </div>
              <p className="text-[#374151] mb-4">
                Gain crystal-clear direction on your marketing priorities and investment decisions.
              </p>
              <Button variant="link" className="p-0 text-[#1e40af] hover:text-[#1e3a8a]">Learn More →</Button>
            </div>
          </div>
        </section>

        <Separator />

        {/* FAQ Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-[#1e3a8a]">Frequently Asked Questions</h2>
          <div className="p-6 bg-white rounded-lg">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#1e3a8a] hover:text-[#1e40af]">How quickly can we expect to see results?</AccordionTrigger>
                <AccordionContent className="text-[#374151]">
                  Most professional service firms see initial improvements in lead quality within 30-60 days,
                  with significant growth (40-60% increase in qualified leads) typically achieved within 90-120 days
                  of implementing our systematic approach.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-[#1e3a8a] hover:text-[#1e40af]">What makes your approach different from other consultants?</AccordionTrigger>
                <AccordionContent className="text-[#374151]">
                  We focus on building systematic, scalable processes rather than relying on referrals alone.
                  Our methodology combines strategic clarity with practical implementation, ensuring sustainable
                  growth that doesn't depend on personal relationships.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-[#1e3a8a] hover:text-[#1e40af]">Do you work with firms of all sizes?</AccordionTrigger>
                <AccordionContent className="text-[#374151]">
                  We specialize in professional service firms with 10-50 employees who are ready to scale beyond
                  referrals. This includes law firms, consulting practices, marketing agencies, and other knowledge-based
                  service providers looking for systematic growth.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <Separator />

        {/* Results Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-[#1e3a8a]">Proven Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-[#1e3a8a] text-white text-center rounded-lg">
              <div className="text-4xl font-bold mb-2">40-60%</div>
              <div className="text-lg font-semibold text-blue-100 mb-2">Lead Increase</div>
              <div className="text-blue-200 text-sm">Average improvement in qualified leads within 120 days</div>
            </div>

            <div className="p-8 bg-[#1e3a8a] text-white text-center rounded-lg">
              <div className="text-4xl font-bold mb-2">25-35%</div>
              <div className="text-lg font-semibold text-blue-100 mb-2">Close Rate Improvement</div>
              <div className="text-blue-200 text-sm">Higher conversion rates through strategic positioning</div>
            </div>

            <div className="p-8 bg-[#1e3a8a] text-white text-center rounded-lg">
              <div className="text-4xl font-bold mb-2">90%</div>
              <div className="text-lg font-semibold text-blue-100 mb-2">Client Satisfaction</div>
              <div className="text-blue-200 text-sm">Of clients achieve their growth targets within 6 months</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}