import type { Metadata } from "next";
import BlogIndex from "@/components/BlogIndex";

export const metadata: Metadata = {
  title: "Blog — Sales for B2B Services Firms",
  description:
    "Practical writing on sales for B2B services businesses: packaging an offer, proving it against real prospects, and building a weekly rhythm that produces conversations.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogIndex />;
}
