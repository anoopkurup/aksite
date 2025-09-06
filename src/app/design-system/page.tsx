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
          <h1 className="text-4xl font-bold text-neutral-900">Professional Services Design System</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A comprehensive design system built with Shadcn/ui and Tailwind CSS, optimized for professional service firms seeking clarity, strategy, and systematic growth.
          </p>
        </div>

        <Separator />

        {/* Color Palette */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-neutral-900">Brand Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Primary Brand Colors</CardTitle>
                <CardDescription>Core brand identity colors for professional services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-600 rounded"></div>
                  <span className="text-sm font-mono">brand-600 (#2563eb)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-brand-950 rounded"></div>
                  <span className="text-sm font-mono">brand-950 (#0a2540)</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accent Colors</CardTitle>
                <CardDescription>Supporting colors for emphasis and highlights</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent-500 rounded"></div>
                  <span className="text-sm font-mono">accent-500 (#f59e0b)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-semantic-success rounded"></div>
                  <span className="text-sm font-mono">success (#10b981)</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Neutral Palette</CardTitle>
                <CardDescription>Text and background colors for professional presentation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-neutral-900 rounded"></div>
                  <span className="text-sm font-mono">neutral-900 (#111827)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-neutral-100 rounded border"></div>
                  <span className="text-sm font-mono">neutral-100 (#f4f4f5)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Typography */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-neutral-900">Typography</h2>
          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <h1 className="text-display-xl font-bold text-neutral-900">Display XL Heading</h1>
                <p className="text-neutral-600">4.5rem / -2% letter spacing</p>
              </div>
              <div className="space-y-2">
                <h2 className="text-display-lg font-bold text-neutral-900">Display Large Heading</h2>
                <p className="text-neutral-600">3.75rem / -2% letter spacing</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-display-md font-semibold text-neutral-900">Display Medium Heading</h3>
                <p className="text-neutral-600">3rem / -2% letter spacing</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-display-sm font-semibold text-neutral-900">Display Small Heading</h4>
                <p className="text-neutral-600">2.25rem / -1% letter spacing</p>
              </div>
              <div className="space-y-2">
                <p className="text-lg text-neutral-700">Body Large - Perfect for lead paragraphs and important content that needs emphasis.</p>
                <p className="text-base text-neutral-700">Body Regular - Standard body text for most content, ensuring excellent readability.</p>
                <p className="text-sm text-neutral-600">Body Small - Used for supporting text, captions, and secondary information.</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Buttons */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-neutral-900">Buttons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Primary Actions</CardTitle>
                <CardDescription>Main call-to-action buttons for key user actions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button>Get Started Today</Button>
                  <Button size="lg">Schedule Consultation</Button>
                  <Button size="sm">Learn More</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Secondary Actions</CardTitle>
                <CardDescription>Supporting actions and alternative pathways</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline">Download Guide</Button>
                  <Button variant="ghost">View Case Studies</Button>
                  <Button variant="link">Contact Us</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Form Components */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-neutral-900">Form Components</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>Professional contact form for lead generation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Your Company Name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="you@company.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea id="message" placeholder="Tell us about your goals and challenges..." />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Send Message</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Newsletter Signup</CardTitle>
                <CardDescription>Stay updated with our latest insights</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="newsletter-email">Email Address</Label>
                  <Input id="newsletter-email" type="email" placeholder="your@email.com" />
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="terms" className="rounded" />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to receive marketing communications
                  </Label>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Subscribe to Newsletter</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Service Cards */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-neutral-900">Service Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/api/placeholder/48/48" />
                    <AvatarFallback className="bg-brand-100 text-brand-700">ST</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Strategy Development</CardTitle>
                    <Badge variant="secondary">Core Service</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Develop comprehensive marketing strategies that drive measurable growth beyond referrals.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0">Learn More →</Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/api/placeholder/48/48" />
                    <AvatarFallback className="bg-accent-100 text-accent-700">SY</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Systems Implementation</CardTitle>
                    <Badge variant="secondary">Premium</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Build scalable systems that consistently generate and convert high-quality leads.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0">Learn More →</Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/api/placeholder/48/48" />
                    <AvatarFallback className="bg-semantic-success text-white">CL</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Clarity Consulting</CardTitle>
                    <Badge className="bg-semantic-success text-white">Popular</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Gain crystal-clear direction on your marketing priorities and investment decisions.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0">Learn More →</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <Separator />

        {/* FAQ Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-neutral-900">Frequently Asked Questions</h2>
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How quickly can we expect to see results?</AccordionTrigger>
                  <AccordionContent>
                    Most professional service firms see initial improvements in lead quality within 30-60 days, 
                    with significant growth (40-60% increase in qualified leads) typically achieved within 90-120 days 
                    of implementing our systematic approach.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What makes your approach different from other consultants?</AccordionTrigger>
                  <AccordionContent>
                    We focus on building systematic, scalable processes rather than relying on referrals alone. 
                    Our methodology combines strategic clarity with practical implementation, ensuring sustainable 
                    growth that doesn't depend on personal relationships.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Do you work with firms of all sizes?</AccordionTrigger>
                  <AccordionContent>
                    We specialize in professional service firms with 10-50 employees who are ready to scale beyond 
                    referrals. This includes law firms, consulting practices, marketing agencies, and other knowledge-based 
                    service providers looking for systematic growth.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Results Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-neutral-900">Proven Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-brand-600 mb-2">40-60%</div>
                <div className="text-lg font-semibold text-neutral-900 mb-2">Lead Increase</div>
                <div className="text-neutral-600">Average improvement in qualified leads within 120 days</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-accent-500 mb-2">25-35%</div>
                <div className="text-lg font-semibold text-neutral-900 mb-2">Close Rate Improvement</div>
                <div className="text-neutral-600">Higher conversion rates through strategic positioning</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-semantic-success mb-2">90%</div>
                <div className="text-lg font-semibold text-neutral-900 mb-2">Client Satisfaction</div>
                <div className="text-neutral-600">Of clients achieve their growth targets within 6 months</div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}