import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import BlogIndex from "@/components/BlogIndex";

export const metadata: Metadata = pageMetadata({
  title: "Blog | Sales for B2B Services Firms",
  description:
    "Practical writing on sales for B2B services firms: packaging an offer, proving it against real prospects, and building a weekly rhythm that holds.",
  path: "/blog",
});

export default function BlogPage() {
  return <BlogIndex />;
}
