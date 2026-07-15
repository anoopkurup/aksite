/**
 * The one prose treatment for every markdown body on the site — blog posts, case
 * studies, legal pages, SEO templates.
 *
 * This was copy-pasted into four files and had already drifted apart (blog had
 * code/pre rules, case studies had an hr rule, the others had neither). One
 * source, so a change to the reading experience lands everywhere at once.
 *
 * Links follow the sitewide rule: navy label + orange underline. `border-b-2`
 * matches the hand-written links in components; the orange is decoration, so the
 * navy label is what carries text contrast.
 */
export const PROSE = `prose prose-lg prose-slate max-w-none
  prose-headings:font-serif prose-headings:text-navy-900 prose-headings:font-normal
  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
  prose-p:font-sans prose-p:text-body prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
  prose-a:text-navy-900 prose-a:font-medium prose-a:no-underline prose-a:border-b-2 prose-a:border-cta-500 hover:prose-a:border-cta-400 prose-a:transition-colors
  prose-strong:text-navy-900 prose-strong:font-semibold
  prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
  prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
  prose-li:font-sans prose-li:text-body prose-li:text-slate-600 prose-li:mb-2
  prose-blockquote:border-l-4 prose-blockquote:border-navy-900 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-600
  prose-code:text-sm prose-code:bg-slate-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-navy-900
  prose-pre:bg-navy-950 prose-pre:text-slate-100 prose-pre:p-6 prose-pre:rounded
  prose-hr:border-slate-200 prose-hr:my-12
  prose-img:rounded prose-img:my-8`;
