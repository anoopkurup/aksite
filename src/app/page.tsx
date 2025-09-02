import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import LineIcon from "@/components/LineIcon";

export default function Home() {
  const credibilityItems = [
    { iconType: "chart", label: "Marketing Agencies" },
    { iconType: "scale", label: "Law Firms" },
    { iconType: "monitor", label: "IT Firms" },
    { iconType: "graduation", label: "Training Businesses" }
  ];

  const services = [
    {
      iconType: "handshake",
      title: "Consulting",
      description: "Strategic positioning and lead generation systems tailored for your business. Get clarity on your market position and build predictable revenue streams.",
      link: "/consulting",
      bgColor: "bg-azure"
    },
    {
      iconType: "graduation", 
      title: "Workshops",
      description: "Hands-on AI & Marketing Strategy workshops. Learn practical frameworks and tools to scale your business with confidence and consistency.",
      link: "/workshops",
      bgColor: "bg-gamboge"
    },
    {
      iconType: "cpu",
      title: "SaaS Tools", 
      description: "Simple automation tools for content creation and lead generation. Make your marketing cheaper, faster, and more consistent with AI-powered solutions.",
      link: "/ai-solutions",
      bgColor: "bg-oxford-blue"
    }
  ];

  const workshopFeatures = [
    { iconType: "cpu", title: "AI Integration", description: "Learn to leverage AI for content, lead scoring, and automation" },
    { iconType: "funnel", title: "Predictable Funnels", description: "Build systematic lead generation that works consistently" },
    { iconType: "handshake", title: "Hands-on Learning", description: "Practical exercises and real-world implementation" }
  ];

  const blogPosts = [
    {
      title: "5 AI Tools Every Service Business Needs",
      description: "Discover the essential AI tools that can transform your marketing efficiency and lead generation...",
      image: "/api/placeholder/300/200"
    },
    {
      title: "The Positioning Framework That Actually Works",
      description: "Step-by-step guide to positioning your service business for maximum market impact...",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Building Your First Lead Generation System",
      description: "From zero to consistent leads: a practical blueprint for service businesses...",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Content Strategy for B2B Services",
      description: "Create content that converts prospects into clients with this proven framework...",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-oxford-blue to-blue-900 text-white py-24 px-6 min-h-[700px] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Helping Professional Service Businesses Scale with{" "}
                <span className="text-gamboge">Marketing Strategy</span> & Lead Generation Systems
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Workshops, consulting, and SaaS solutions that make your marketing cheaper, faster, and consistent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-azure text-white hover:bg-blue-600 text-lg px-8 py-4 rounded-full font-semibold">
                  Subscribe to Newsletter
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-gamboge text-gamboge hover:bg-gamboge hover:text-oxford-blue text-lg px-8 py-4 rounded-full font-semibold">
                  Explore Workshops
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-azure/20 to-gamboge/20 rounded-2xl flex items-center justify-center">
                <LineIcon type="chart" className="text-gamboge" size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-16 px-6 bg-light-gray">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-oxford-blue mb-12">Trusted by Founders & Consultants</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {credibilityItems.map((item, index) => (
              <Card key={index} className="p-6 bg-white shadow-soft">
                <CardContent className="p-0 text-center">
                  <div className="mb-4 flex justify-center">
                    <LineIcon type={item.iconType} className="text-azure" size={48} />
                  </div>
                  <p className="font-semibold text-oxford-blue">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="p-8 bg-white shadow-soft inline-block">
            <CardContent className="p-0">
              <p className="text-lg text-charcoal mb-4">
                <LineIcon type="cpu" className="text-azure inline mr-2" size={24} />
                Co-host of <strong>Click, Brand & Beyond</strong> Podcast
              </p>
              <p className="text-sm text-gray-500">Speaking engagements on AI & Marketing Strategy</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-oxford-blue mb-4">How I Can Help You Grow</h2>
            <p className="text-xl text-charcoal max-w-3xl mx-auto">
              Three focused areas to transform your marketing from guesswork to predictable growth
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-border-gray">
                <CardContent className="p-0">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mb-6`}>
                    <LineIcon type={service.iconType} className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-oxford-blue mb-4">{service.title}</h3>
                  <p className="text-charcoal mb-6 leading-relaxed">{service.description}</p>
                  <Link href={service.link} className="text-azure font-semibold hover:text-blue-600 transition-colors">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Workshop Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-oxford-blue to-blue-900">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">AI & Lead Generation Strategy Workshop</h2>
          <p className="text-xl text-blue-100 mb-8">
            Transform your marketing approach with AI-powered strategies and proven frameworks
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {workshopFeatures.map((feature, index) => (
              <Card key={index} className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
                <CardContent className="p-0 text-center">
                  <div className="mb-4 flex justify-center">
                    <LineIcon type={feature.iconType} className="text-gamboge" size={48} />
                  </div>
                  <h4 className="font-semibold mb-2 text-white">{feature.title}</h4>
                  <p className="text-sm text-blue-100">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm mb-8 border border-white/20">
            <CardContent className="p-0">
              <p className="text-lg mb-2">Next Batch: <strong>March 15-17, 2024</strong></p>
              <p className="text-blue-100">3-day intensive workshop | Online & Interactive</p>
            </CardContent>
          </Card>
          <Button size="lg" className="bg-gamboge text-oxford-blue hover:bg-yellow-400 px-10 py-4 rounded-full font-bold text-lg">
            Register Now
          </Button>
        </div>
      </section>

      {/* Resources/Blog Section */}
      <section className="py-20 px-6 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-oxford-blue mb-4">Learn & Grow with Insights</h2>
            <p className="text-xl text-charcoal">
              Practical strategies and frameworks to scale your service business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-gradient-to-br from-azure/20 to-gamboge/20 flex items-center justify-center">
                  <LineIcon type="chart" className="text-azure" size={64} />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-oxford-blue mb-2">{post.title}</h3>
                  <p className="text-charcoal text-sm mb-4">{post.description}</p>
                  <Link href="#" className="text-azure font-semibold text-sm hover:text-blue-600">
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-oxford-blue mb-6">Meet Anoop Kurup</h2>
              <p className="text-xl text-charcoal mb-6 leading-relaxed">
                20+ years across strategy, consulting, and product management — now helping service businesses grow smarter.
              </p>
              <p className="text-charcoal mb-8 leading-relaxed">
                I believe marketing shouldn't feel like noise—it should create clarity, confidence, and conversations that lead to growth. My journey from corporate strategy to entrepreneurship has taught me that the best marketing systems are simple, systematic, and human-centered.
              </p>
              <Link href="/about" className="inline-flex items-center text-azure font-semibold text-lg hover:text-blue-600 transition-colors">
                Read My Full Story →
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-oxford-blue/20 to-azure/20 rounded-2xl shadow-lg flex items-center justify-center">
                <LineIcon type="target" className="text-gamboge" size={120} />
              </div>
              <Card className="absolute -bottom-6 -right-6 bg-gamboge p-4 rounded-xl shadow-lg">
                <CardContent className="p-0 text-center">
                  <div className="text-2xl font-bold text-oxford-blue">20+</div>
                  <div className="text-sm text-oxford-blue">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-gradient-to-br from-azure to-blue-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Get Weekly Insights on Positioning, Lead Generation, and Marketing Strategy</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 2,500+ service business owners who get practical, actionable insights every Tuesday.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-6 py-4 rounded-full text-oxford-blue text-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
              />
              <Button size="lg" className="bg-gamboge text-oxford-blue hover:bg-yellow-400 px-8 py-4 rounded-full font-bold text-lg whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            <p className="text-sm text-blue-100">
              <LineIcon type="shield" className="inline mr-2" size={16} />
              No spam. Practical, actionable insights only. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}