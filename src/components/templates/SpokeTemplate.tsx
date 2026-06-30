// Spoke (article) template — a single-topic post that links up to the main
// pillar and cross-links siblings. Schema is typically BlogPosting +
// BreadcrumbList (+ FAQPage where the page has Q&A).
import SeoPageLayout, { type SeoPageLayoutProps } from './SeoPageLayout';

export default function SpokeTemplate(props: SeoPageLayoutProps) {
  return <SeoPageLayout {...props} />;
}
