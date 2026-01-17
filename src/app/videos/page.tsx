import Link from "next/link";
import { ArrowRight, Play, Clock, FileText } from "lucide-react";
import { getUpcomingWebinars, getPastWebinars, getYouTubeThumbnail } from "@/lib/content";
import Image from "next/image";

export const metadata = {
  title: "Videos | Anoop Kurup",
  description: "Recorded sessions on building clarity, positioning, and conversion systems for professional service firms. Watch anytime.",
};

export default function VideosPage() {
  const upcomingWebinars = getUpcomingWebinars();
  const pastWebinars = getPastWebinars();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-8">
          <p className="font-sans text-sm text-cta-600 tracking-widest uppercase mb-6 font-medium">
            Videos
          </p>
          <h1 className="font-serif text-display-sm md:text-display text-navy-900 mb-6">
            Video Library
          </h1>
          <p className="font-sans text-body-lg text-slate-500 max-w-2xl mb-8 leading-relaxed">
            Recorded sessions and workshops on business clarity, positioning, and building
            conversion systems. Watch anytime.
          </p>
        </div>
      </section>

      {/* Upcoming Section */}
      {upcomingWebinars.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="font-serif text-title text-navy-900 mb-10">
              Upcoming Live Session
            </h2>
            {upcomingWebinars.map((webinar) => (
              <div key={webinar.slug} className="bg-white p-8 border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-sans text-xs text-white bg-cta-500 px-3 py-1 rounded-full uppercase tracking-wide font-medium">
                    {webinar.frontmatter.format || 'Live'}
                  </span>
                  {webinar.frontmatter.date && (
                    <span className="font-sans text-sm text-slate-600">
                      {new Date(webinar.frontmatter.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                      {webinar.frontmatter.time && ` at ${webinar.frontmatter.time}`}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-title text-navy-900 mb-4">
                  {webinar.frontmatter.title}
                </h3>
                <p className="font-sans text-body text-slate-500 mb-6 leading-relaxed">
                  {webinar.frontmatter.description}
                </p>
                <Link
                  href={webinar.frontmatter.registration_url || '/contact'}
                  className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 hover:text-navy-700 transition-colors duration-300"
                >
                  Register Now
                  <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Video Library */}
      {pastWebinars.length > 0 ? (
        <section className={`py-20 ${upcomingWebinars.length > 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="max-w-5xl mx-auto px-8">
            <h2 className="font-serif text-title text-navy-900 mb-4">
              On-Demand Library
            </h2>
            <p className="font-sans text-body text-slate-500 mb-12">
              Watch recorded sessions anytime. Each includes resources and implementation guides.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {pastWebinars.map((webinar) => {
                const thumbnailUrl = getYouTubeThumbnail(webinar.frontmatter.video_url);

                return (
                  <Link
                    key={webinar.slug}
                    href={`/resources/webinars/${webinar.slug}`}
                    className="group bg-white border border-slate-100 overflow-hidden hover:border-slate-200 transition-colors"
                  >
                    {/* Thumbnail */}
                    <div className="aspect-video bg-navy-900 relative overflow-hidden">
                      {thumbnailUrl && (
                        <Image
                          src={thumbnailUrl}
                          alt={webinar.frontmatter.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      )}
                      <div className="absolute inset-0 flex items-center justify-center bg-navy-900/40 group-hover:bg-navy-900/30 transition-colors">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Play className="w-7 h-7 text-white ml-1" fill="white" />
                        </div>
                      </div>
                      {webinar.frontmatter.duration && (
                        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-white text-xs font-medium flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {webinar.frontmatter.duration}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-serif text-lg text-navy-900 mb-2 group-hover:text-navy-700 transition-colors">
                        {webinar.frontmatter.title}
                      </h3>
                      <p className="font-sans text-sm text-slate-500 mb-4 line-clamp-2">
                        {webinar.frontmatter.description}
                      </p>

                      {webinar.frontmatter.recorded_date && (
                        <p className="font-sans text-xs text-slate-400 mb-4">
                          Recorded {new Date(webinar.frontmatter.recorded_date).toLocaleDateString('en-US', {
                            month: 'long',
                            year: 'numeric'
                          })}
                        </p>
                      )}

                      <div className="flex items-center justify-between">
                        <span className="font-sans text-sm text-cta-600 font-medium group-hover:text-cta-700 flex items-center gap-1">
                          Watch Now
                          <ArrowRight className="w-3 h-3" />
                        </span>
                        {webinar.frontmatter.resources && webinar.frontmatter.resources.length > 0 && (
                          <span className="font-sans text-xs text-slate-400 flex items-center gap-1">
                            <FileText className="w-3 h-3" />
                            {webinar.frontmatter.resources.length} resource{webinar.frontmatter.resources.length !== 1 ? 's' : ''}
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
        <section className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-8 text-center">
            <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="w-8 h-8 text-navy-700" />
            </div>
            <h2 className="font-serif text-title text-navy-900 mb-4">
              Video Library Coming Soon
            </h2>
            <p className="font-sans text-body text-slate-500 mb-8">
              We're building our video library. Subscribe to be notified when new content is available.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center font-sans text-body text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-600 transition-colors duration-300"
            >
              Get Notified
              <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
            </Link>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-title text-white mb-6">
            Want to go deeper?
          </h2>
          <p className="font-sans text-body text-navy-300 mb-10">
            Book a Clarity Diagnosis session to identify what's really holding your marketing back.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center font-sans text-body text-white border-b-2 border-cta-500 pb-1 hover:border-cta-400 transition-colors duration-300"
          >
            Book a Diagnosis Session
            <ArrowRight className="w-4 h-4 ml-2 text-cta-500" />
          </Link>
        </div>
      </section>
    </div>
  );
}
