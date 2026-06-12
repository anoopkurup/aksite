import { ImageResponse } from 'next/og';
import { getBlogPostBySlug, getAllBlogSlugs } from '@/lib/blog';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';
export const alt = 'Blog post by Anoop Kurup';

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export default function BlogOpenGraphImage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  const title = post?.frontmatter.title ?? 'Blog';
  // Long titles need a smaller size to fit the canvas
  const fontSize = title.length > 70 ? 52 : title.length > 45 ? 60 : 70;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#172554',
          padding: '72px 96px',
          fontFamily: 'Georgia, "Times New Roman", serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              width: 88,
              height: 8,
              background: '#f97316',
              marginBottom: 44,
            }}
          />
          <div
            style={{
              fontSize,
              color: '#ffffff',
              fontWeight: 700,
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          <div style={{ fontSize: 30, color: '#93c5fd' }}>Anoop Kurup</div>
          <div style={{ fontSize: 30, color: '#60a5fa' }}>anoopkurup.com/blog</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
