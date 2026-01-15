import { getContentPage } from "@/lib/content";
import ContentPage from "@/components/ContentPage";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead Generation System - Marketing Services",
  description: "Done-for-you lead generation with systematic research, personalized outreach, and CRM tracking. Generate 10-20 qualified conversations every month.",
};

export default function LeadGenerationPage() {
  const contentData = getContentPage('services/lead-generation');

  if (!contentData) {
    notFound();
  }

  return <ContentPage contentData={contentData} heroBackground="gradient" />;
}
