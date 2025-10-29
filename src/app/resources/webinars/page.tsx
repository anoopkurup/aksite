import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getUpcomingWebinars, getPastWebinars, getYouTubeThumbnail } from "@/lib/content";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Webinars - Marketing Systems, Lead Generation, AI Workflows",
  description: "Live and recorded webinars on marketing systems, lead generation, and AI-powered workflows. Learn proven strategies you can implement immediately.",
};

export default function WebinarsPage() {
  const upcomingWebinars = getUpcomingWebinars(); // Returns max 1 webinar
  const pastWebinars = getPastWebinars();

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <Link href="/resources" className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all">
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              All Resources
            </Link>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Marketing Webinars
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-4xl leading-relaxed">
            Live and recorded sessions on marketing systems, lead generation, and AI-powered workflows. Learn proven strategies you can implement immediately.
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Upcoming Webinar Section */}
      {upcomingWebinars.length > 0 ? (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Upcoming Live Webinar</h2>
              <p className="text-lg text-gray-700">Join us for our next live session with interactive Q&A.</p>
            </div>

            {upcomingWebinars.map((webinar) => (
              <div key={webinar.slug} className="bg-gradient-to-br from-navy-50 to-cta-50 rounded-lg p-8 md:p-12 border border-navy-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-4 py-2 bg-cta-500 text-white rounded-full text-sm font-semibold">
                    {webinar.frontmatter.format || 'Live Webinar'}
                  </span>
                  {webinar.frontmatter.date && (
                    <span className="text-gray-700 font-medium">
                      📅 {new Date(webinar.frontmatter.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                      {webinar.frontmatter.time && ` • ${webinar.frontmatter.time}`}
                    </span>
                  )}
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                  {webinar.frontmatter.title}
                </h3>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {webinar.frontmatter.description}
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-bold text-navy-900 mb-4">What You'll Learn:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {webinar.frontmatter.topics.map((topic, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    {webinar.frontmatter.duration}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-cta-500 hover:bg-cta-600 text-white font-bold flex-1">
                    <Link href={webinar.frontmatter.registration_url || '/#newsletter'}>
                      {webinar.frontmatter.date ? 'Register Now' : 'Notify Me When Available'}
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-navy-300 text-navy-900 hover:bg-navy-50">
                    <Link href={`/resources/webinars/${webinar.slug}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-navy-50 to-cta-50 rounded-lg p-8 md:p-12 border border-navy-200 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-cta-500 rounded-full mb-6">
                <svg className="w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="15" x="2" y="7" rx="2" ry="2"/>
                  <polyline points="17 2 12 7 7 2"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Next Webinar Coming Soon</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                We're scheduling our next live webinar series. Subscribe to be notified when registration opens.
              </p>
              <Button asChild size="lg" className="bg-cta-500 hover:bg-cta-600 text-white font-bold px-8">
                <Link href="/#newsletter">Get Notified</Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* On-Demand Library */}
      {pastWebinars.length > 0 ? (
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">On-Demand Library</h2>
              <p className="text-lg text-gray-700">Watch recorded webinars anytime. Full access with resources included.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {pastWebinars.map((webinar) => {
                const thumbnailUrl = getYouTubeThumbnail(webinar.frontmatter.video_url);

                return (
                  <Link
                    key={webinar.slug}
                    href={`/resources/webinars/${webinar.slug}`}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-navy-400 hover:shadow-lg transition-all group"
                  >
                    {/* Video Thumbnail */}
                    <div className="aspect-video bg-gradient-to-br from-navy-600 to-navy-800 relative overflow-hidden">
                      {thumbnailUrl ? (
                        <Image
                          src={thumbnailUrl}
                          alt={webinar.frontmatter.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : null}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all">
                          <svg className="w-8 h-8 text-white ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3"/>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded text-white text-sm font-medium">
                        {webinar.frontmatter.duration}
                      </div>
                    </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-cta-600 transition-colors">
                      {webinar.frontmatter.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {webinar.frontmatter.description}
                    </p>

                    {webinar.frontmatter.recorded_date && (
                      <div className="text-sm text-gray-500 mb-4">
                        Recorded on {new Date(webinar.frontmatter.recorded_date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                    )}

                    {webinar.frontmatter.topics && webinar.frontmatter.topics.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {webinar.frontmatter.topics.slice(0, 3).map((topic, index) => (
                            <span key={index} className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                              {topic}
                            </span>
                          ))}
                          {webinar.frontmatter.topics.length > 3 && (
                            <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                              +{webinar.frontmatter.topics.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <span className="text-cta-600 font-semibold group-hover:underline">
                        Watch Now →
                      </span>
                      {webinar.frontmatter.resources && webinar.frontmatter.resources.length > 0 && (
                        <span className="text-sm text-gray-500">
                          📎 {webinar.frontmatter.resources.length} resource{webinar.frontmatter.resources.length !== 1 ? 's' : ''}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600">
              Our on-demand library is growing. Check back soon for recorded webinars.
            </p>
          </div>
        </section>
      )}

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* What to Expect */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">What to Expect from Our Webinars</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Practical & Actionable",
                description: "No theory. Only frameworks and systems you can implement immediately.",
                icon: (
                  <svg className="w-10 h-10 text-cta-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                    <circle cx="12" cy="12" r="2"/>
                  </svg>
                )
              },
              {
                title: "Live Q&A Sessions",
                description: "Get your specific questions answered during live webinars.",
                icon: (
                  <svg className="w-10 h-10 text-cta-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    <path d="M8 10h.01"/>
                    <path d="M12 10h.01"/>
                    <path d="M16 10h.01"/>
                  </svg>
                )
              },
              {
                title: "Implementation Guides",
                description: "Every webinar includes worksheets, templates, and checklists.",
                icon: (
                  <svg className="w-10 h-10 text-cta-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <path d="M9 15l2 2 4-4"/>
                  </svg>
                )
              },
              {
                title: "On-Demand Access",
                description: "Watch recordings anytime. All registrants get lifetime access.",
                icon: (
                  <svg className="w-10 h-10 text-cta-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="w-12 h-12 bg-cta-50 rounded-lg flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
