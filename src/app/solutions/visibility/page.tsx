import { getContentPage } from "@/lib/content";
import ContentPage from "@/components/ContentPage";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Visibility & Authority - Marketing Solutions",
  description: "Stay top-of-mind and build credibility with systematic content marketing. Choose DIY LinkedIn activation or Done-For-You content growth system.",
};

export default function VisibilityPage() {
  const contentData = getContentPage('solutions/visibility');

  if (!contentData) {
    notFound();
  }

  return <ContentPage contentData={contentData} heroBackground="gradient" />;
}
