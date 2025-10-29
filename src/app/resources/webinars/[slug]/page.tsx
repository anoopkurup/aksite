import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getWebinarBySlug, getAllWebinarSlugs } from "@/lib/content";
import type { Metadata } from "next";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface WebinarPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllWebinarSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: WebinarPageProps): Promise<Metadata> {
  const webinar = getWebinarBySlug(params.slug);

  if (!webinar) {
    return {
      title: "Webinar Not Found",
    };
  }

  return {
    title: `${webinar.frontmatter.title} | Marketing Webinar`,
    description: webinar.frontmatter.description,
  };
}

export default function WebinarDetailPage({ params }: WebinarPageProps) {
  const webinar = getWebinarBySlug(params.slug);

  if (!webinar) {
    notFound();
  }

  const isUpcoming = !!webinar.frontmatter.date;
  const isPast = !!webinar.frontmatter.recorded_date;

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex items-center gap-4">
            <Link href="/resources/webinars" className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all">
              <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              All Webinars
            </Link>
            {isUpcoming && (
              <span className="inline-block px-4 py-2 bg-cta-500 rounded-full text-sm font-semibold">
                {webinar.frontmatter.format || 'Upcoming'}
              </span>
            )}
            {isPast && (
              <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
                On-Demand
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {webinar.frontmatter.title}
          </h1>

          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            {webinar.frontmatter.description}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 text-white/80">
            {isUpcoming && webinar.frontmatter.date && (
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <span>
                  {new Date(webinar.frontmatter.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                  {webinar.frontmatter.time && ` • ${webinar.frontmatter.time}`}
                </span>
              </div>
            )}
            {isPast && webinar.frontmatter.recorded_date && (
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <span>
                  Recorded {new Date(webinar.frontmatter.recorded_date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>{webinar.frontmatter.duration}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/* Video Section (for past webinars) */}
      {isPast && webinar.frontmatter.video_url && (
        <>
          <section id="video" className="py-12 px-6 bg-black scroll-mt-20">
            <div className="max-w-5xl mx-auto">
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <iframe
                  src={webinar.frontmatter.video_url}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={webinar.frontmatter.title}
                />
              </div>
            </div>
          </section>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </>
      )}

      {/* Main Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Column */}
            <div className="md:col-span-2">
              {/* Markdown Content */}
              <div className="prose prose-lg max-w-none mb-12">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {webinar.content}
                </ReactMarkdown>
              </div>

              {/* Topics Covered */}
              {webinar.frontmatter.topics && webinar.frontmatter.topics.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold text-navy-900 mb-6">Topics Covered</h2>
                  <div className="grid gap-3">
                    {webinar.frontmatter.topics.map((topic, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                        <span className="text-gray-700 text-lg">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Downloadable Resources */}
              {webinar.frontmatter.resources && webinar.frontmatter.resources.length > 0 && (
                <div className="bg-navy-50 rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-navy-900 mb-6">Downloadable Resources</h2>
                  <div className="space-y-3">
                    {webinar.frontmatter.resources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.url}
                        className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-navy-400 hover:shadow-md transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-cta-100 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-cta-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                              <polyline points="14 2 14 8 20 8"/>
                              <line x1="12" y1="18" x2="12" y2="12"/>
                              <line x1="9" y1="15" x2="15" y2="15"/>
                            </svg>
                          </div>
                          <span className="font-semibold text-navy-900 group-hover:text-cta-600">
                            {resource.title}
                          </span>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-cta-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                          <polyline points="7 10 12 15 17 10"/>
                          <line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* CTA Card */}
                <div className="bg-gradient-to-br from-navy-50 to-cta-50 rounded-lg p-6 border border-navy-200">
                  <h3 className="text-xl font-bold text-navy-900 mb-4">
                    {isUpcoming ? 'Register for This Webinar' : 'Watch Recording'}
                  </h3>

                  {isUpcoming && (
                    <>
                      <p className="text-gray-700 mb-6">
                        Secure your spot for this live webinar with Q&A.
                      </p>
                      <Button asChild size="lg" className="w-full bg-cta-500 hover:bg-cta-600 text-white font-bold">
                        <Link href={webinar.frontmatter.registration_url || '/#newsletter'}>
                          {webinar.frontmatter.date ? 'Register Now' : 'Notify Me'}
                        </Link>
                      </Button>
                    </>
                  )}

                  {isPast && !webinar.frontmatter.video_url && (
                    <>
                      <p className="text-gray-700 mb-6">
                        Recording coming soon. Get notified when it's available.
                      </p>
                      <Button asChild size="lg" className="w-full bg-cta-500 hover:bg-cta-600 text-white font-bold">
                        <Link href="/#newsletter">
                          Notify Me
                        </Link>
                      </Button>
                    </>
                  )}

                  {isPast && webinar.frontmatter.video_url && (
                    <>
                      <p className="text-gray-700 mb-6">
                        Watch anytime. Lifetime access included.
                      </p>
                      <Button asChild size="lg" className="w-full bg-cta-500 hover:bg-cta-600 text-white font-bold">
                        <a href="#video">
                          Watch Now
                        </a>
                      </Button>
                    </>
                  )}
                </div>

                {/* Webinar Details */}
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-bold text-navy-900 mb-4">Webinar Details</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      <div>
                        <div className="font-semibold text-navy-900">Duration</div>
                        <div className="text-gray-600">{webinar.frontmatter.duration}</div>
                      </div>
                    </div>
                    {webinar.frontmatter.format && (
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect width="20" height="15" x="2" y="7" rx="2" ry="2"/>
                          <polyline points="17 2 12 7 7 2"/>
                        </svg>
                        <div>
                          <div className="font-semibold text-navy-900">Format</div>
                          <div className="text-gray-600">{webinar.frontmatter.format}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Browse More */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-navy-900 mb-4">More Webinars</h4>
                  <Link href="/resources/webinars" className="text-cta-600 hover:text-cta-700 font-semibold flex items-center gap-2">
                    Browse All Webinars
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m12 5 7 7-7 7"/>
                      <path d="M5 12h14"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
