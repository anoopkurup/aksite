import ContentPage from "@/components/ContentPage";
import { getContentPage } from "@/lib/content";

export default function BlogArticleWriterPage() {
  const contentData = getContentPage('workflows/blog-article-writer');
  
  if (!contentData) {
    return <div>Content not found</div>;
  }

  return <ContentPage contentData={contentData} heroBackground="white" />;
}