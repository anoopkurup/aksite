import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import BlogIndex from "@/components/BlogIndex";

export const metadata: Metadata = pageMetadata({
  title: "Writing | Growth Problems of B2B Service Firms in India",
  description:
    "Writing on the four growth problems of B2B service firms in India: getting clients beyond referrals, positioning and pricing, scaling beyond the founder, and AI.",
  path: "/blog",
});

export default function BlogPage() {
  return <BlogIndex />;
}
