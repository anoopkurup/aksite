import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogCategories } from "@/lib/blog";
import BlogIndex, { categorySlug } from "@/components/BlogIndex";

// Static category routes: keeps /blog and every category on the CDN (a ?category=
// query param would force the index to server-render on every request) and gives
// each category its own indexable URL.
export function generateStaticParams() {
  return getBlogCategories().map((c) => ({ category: categorySlug(c) }));
}

function resolve(slug: string) {
  return getBlogCategories().find((c) => categorySlug(c) === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const name = resolve(category);
  if (!name) return {};
  return {
    title: `${name} — Blog`,
    description: `Writing on ${name.toLowerCase()} for B2B services businesses.`,
    alternates: { canonical: `/blog/category/${category}` },
  };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const name = resolve(category);
  if (!name) notFound();
  return <BlogIndex activeCategory={name} />;
}
