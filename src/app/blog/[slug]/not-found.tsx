import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-sans text-sm text-slate-500 uppercase tracking-wide mb-4">
          404
        </p>

        <h1 className="font-serif text-display text-navy-900 mb-4">
          Blog post not found
        </h1>

        <p className="font-sans text-body text-slate-600 mb-10">
          The post you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/blog"
            className="font-sans text-sm bg-cta-500 text-white px-6 py-3 rounded hover:bg-cta-600 transition-colors"
          >
            View all posts
          </Link>
          <Link
            href="/"
            className="inline-flex items-center font-sans text-sm text-navy-900 border-b-2 border-cta-500 pb-1 hover:border-cta-400 transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
