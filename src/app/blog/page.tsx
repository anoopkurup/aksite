import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import BlogIndex from "@/components/BlogIndex";

export const metadata: Metadata = pageMetadata({
  title: "Blog | Marketing for B2B Services Firms",
  description:
    "Practical writing on marketing for B2B services firms: positioning, packaging an offer, generating leads, and building a weekly rhythm that holds.",
  path: "/blog",
});

export default function BlogPage() {
  return <BlogIndex />;
}
