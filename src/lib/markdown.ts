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
 * Supports: **bold**, *italic*, and [link](url) text
 */
export function processInlineMarkdown(text: string): string {
  if (!text) return '';

  return text
    // Handle links first to avoid conflicts with other formatting
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#1e3a8a] hover:text-[#f59e0b] underline font-medium transition-colors">$1</a>')
    // Handle bold text with proper styling
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[#1e3a8a]">$1</strong>')
    // Handle italic text
    .replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g, '<em class="italic">$1</em>')
    // Convert line breaks
    .replace(/\n/g, '<br />');
}