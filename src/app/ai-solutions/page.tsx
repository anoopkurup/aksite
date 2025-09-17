import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Marketing Solutions - Practical Tools for Professional Services",
  description: "AI tools that make marketing cheaper, faster, and consistent. Practical, proven solutions designed for professional services and tech-enabled businesses.",
};

export default function AISolutionsPage() {
  const contentData = getContentPage('ai-solutions');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="gradient" heroIcon="cpu" />;
}