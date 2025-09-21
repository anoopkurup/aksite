import Link from 'next/link';
import { Button } from '@/components/ui/button';
import LineIcon from '@/components/LineIcon';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-solarized-base03 flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <LineIcon type="chart" className="text-azure mx-auto" size={96} />
        </div>
        
        <h1 className="text-4xl font-bold text-oxford-blue mb-4">
          Blog Post Not Found
        </h1>
        
        <p className="text-xl text-charcoal mb-8">
          The blog post you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-azure text-white hover:bg-oxford-blue px-8 py-3 rounded-full font-bold">
            <Link href="/blog">View All Posts</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-2 border-azure text-azure hover:bg-azure hover:text-white px-8 py-3 rounded-full font-bold">
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}