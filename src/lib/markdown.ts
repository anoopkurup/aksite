import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm) // GitHub Flavored Markdown
    .use(remarkRehype) // Convert markdown to HTML
    .use(rehypeHighlight) // Syntax highlighting for code blocks
    .use(rehypeStringify) // Convert to string
    .process(markdown);
  
  return result.toString();
}

export function estimateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Convert basic markdown formatting to HTML for use in components
 * Currently supports: **bold** and *italic* text
 */
export function processInlineMarkdown(text: string): string {
  if (!text) return '';
  
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g, '<em>$1</em>')
    .replace(/\n/g, '<br />');
}