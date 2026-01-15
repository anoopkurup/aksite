import { getContentPage } from "@/lib/content";
import ContentPage from "@/components/ContentPage";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generate Consistent Leads - Marketing Solutions",
  description: "Build a predictable lead pipeline with systematic outreach. Choose Done-With-You sprint or Done-For-You lead generation system.",
};

export default function LeadsPage() {
  const contentData = getContentPage('solutions/leads');

  if (!contentData) {
    notFound();
  }

  return <ContentPage contentData={contentData} heroBackground="gradient" />;
}
