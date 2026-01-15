import { getContentPage } from "@/lib/content";
import ContentPage from "@/components/ContentPage";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Growth System - Marketing Services",
  description: "Done-for-you content system with blogs, LinkedIn posts, and newsletters. Stay visible and build credibility without the time investment.",
};

export default function ContentGrowthPage() {
  const contentData = getContentPage('services/content-growth');

  if (!contentData) {
    notFound();
  }

  return <ContentPage contentData={contentData} heroBackground="gradient" />;
}
