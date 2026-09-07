import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_PATH = path.join(process.cwd(), 'content');

export interface ContentPage {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    cta?: {
      title?: string;
      subtitle?: string;
      button?: {
        text?: string;
        url?: string;
      };
    };
    // Markdown pages carry free-form frontmatter; the typed keys above are the
    // ones the renderer actually reads.
    [key: string]: unknown;
  };
  content: string;
}

export function getContentPage(relativePath: string): ContentPage | null {
  try {
    const fullPath = path.join(CONTENT_PATH, `${relativePath}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const slug = path.basename(relativePath);
    
    return {
      slug,
      frontmatter: data as ContentPage['frontmatter'],
      content,
    };
  } catch (error) {
    console.error(`Error reading content file: ${relativePath}`, error);
    return null;
  }
}

// ============================================================================
// YAML Content System
// ============================================================================

import yaml from 'js-yaml';

// ============================================================================
// TypeScript Interfaces for YAML Content Structure
// ============================================================================

// Homepage Content — "Your sales problem is usually a marketing problem."
export interface HomePageContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
    body: string[];
    cta_text: string;
    cta_link: string;
    cta_note?: string;
  };
  argument: {
    section_title: string;
    paragraphs: string[];
  };
  how_i_fix_it: {
    section_title: string;
    link_text: string;
    link: string;
    stages: Array<{
      number: string;
      name: string;
      description: string;
    }>;
  };
  writing: {
    section_title: string;
    intro: string;
    link_text: string;
    link: string;
  };
  proof: {
    section_title: string;
    highlights: Array<{
      metric: string;
      caption: string;
      source: string;
    }>;
    items: Array<{
      type: string;
      before: string;
      what_we_did: string;
      result: string;
    }>;
  };
  qualification: {
    section_title: string;
    for_you: {
      heading: string;
      items: string[];
    };
    not_for_you: {
      heading: string;
      items: string[];
    };
  };
  final_cta: {
    title: string;
    body: string;
    cta_text: string;
    cta_link: string;
  };
}

// Contact Page Content
export interface ContactPageContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    tier_label: string;
    title: string;
    body: string[];
  };
  methods: {
    section_title: string;
    section_subtitle: string;
    items: Array<{
      icon: 'mail' | 'linkedin' | 'whatsapp';
      title: string;
      description: string;
      link_text: string;
      link_url: string;
    }>;
  };
  fit: {
    section_title: string;
    for_title: string;
    for_items: string[];
    not_for_title: string;
    not_for_items: string[];
  };
  location: {
    title: string;
    body: string[];
  };
  cta: {
    title: string;
    subtitle: string;
    button_text: string;
    button_url: string;
    secondary_text: string;
    secondary_link_text: string;
    secondary_link_url: string;
  };
}

// CLEAR Engagement Page Content
export interface ClearPageContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    tier_label: string;
    title: string;
    body: string[];
  };
  stages: {
    section_title: string;
    items: Array<{
      number: string;
      name: string;
      description: string;
    }>;
  };
  leave_with: {
    section_title: string;
    items: string[];
  };
  dont_promise: {
    section_title: string;
    body: string[];
  };
  pace: {
    section_title: string;
    body: string;
  };
  final_cta: {
    title: string;
    body: string;
    cta_text: string;
    cta_link: string;
    secondary_text: string;
    secondary_link_text: string;
    secondary_link: string;
  };
}

// Pipeline Reality Check Page Content
export interface PipelineRealityCheckContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    tier_label: string;
    title: string;
    subtitle: string;
    body: string[];
  };
  what_you_get: {
    section_title: string;
    items: string[];
  };
  terms: {
    headline: string;
    body: string;
  };
  faqs: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  final_cta: {
    title: string;
    body: string;
    cta_text: string;
    cta_link: string;
  };
}

// About Page Content — Simplified
export interface AboutPageContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    headline: string;
    body: string[];
  };
  pattern: {
    section_title: string;
    paragraphs: string[];
  };
  what_i_do: {
    section_title: string;
    items: Array<{
      label: string;
      description: string;
      link: string;
    }>;
  };
  podcast: {
    text: string;
  };
  final_cta: {
    title: string;
    body: string;
    cta_text: string;
    cta_link: string;
  };
}

// ============================================================================
// Postie Page Content (/postie)
// ============================================================================
export interface PostiePageContent {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    subhead: string;
    cta_text: string;
    cta_note: string;
  };
  problem: { title: string; body: string[] };
  agitate: { title: string; body: string[] };
  solution: { title: string; body: string[]; cta_text: string };
  how_it_works: {
    title: string;
    steps: Array<{ title: string; body: string }>;
  };
  what_you_get: {
    title: string;
    items: Array<{ title: string; body: string }>;
    cta_text: string;
  };
  why_not_ai: {
    title: string;
    intro: string;
    points: Array<{ title: string; body: string }>;
  };
  fit: {
    title: string;
    for_title: string;
    for_items: string[];
    not_for_title: string;
    not_for_items: string[];
  };
  plans: {
    title: string;
    items: Array<{ name: string; description: string }>;
    note: string;
  };
  faq: { title: string; items: Array<{ question: string; answer: string }> };
  final: {
    title: string;
    body: string;
    form_heading: string;
    form_note: string;
  };
}

// Workshops Page Content
export interface WorkshopsPageContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    tier_label: string;
    title: string;
    body: string[];
  };
  why: {
    section_title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  workshops: {
    section_title: string;
    items: Array<{
      name: string;
      duration: string;
      description: string;
      build: string[];
      best_for: string;
      note?: string;
    }>;
  };
  formats: {
    section_title: string;
    items: Array<{
      name: string;
      description: string;
    }>;
  };
  final_cta: {
    title: string;
    body: string;
    cta_text: string;
    cta_link: string;
  };
}

// ============================================================================
// Core YAML Loading Function
// ============================================================================

/**
 * Load and parse YAML content file
 * @param relativePath - Path relative to /content directory
 * @returns Parsed content
 */
function loadYamlContent<T>(relativePath: string): T {
  try {
    const contentDir = path.join(process.cwd(), 'content');
    const filePath = path.join(contentDir, relativePath);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return yaml.load(fileContents) as T;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`Error loading YAML content from ${relativePath}:`, errorMessage);
    throw new Error(`Failed to load content: ${relativePath}`);
  }
}

// ============================================================================
// Type-Safe Content Loaders
// ============================================================================

/**
 * Get homepage content
 */
export function getHomePageContent(): HomePageContent {
  return loadYamlContent<HomePageContent>('pages/home.yaml');
}

/**
 * Get CLEAR engagement page content
 */
export function getClearPageContent(): ClearPageContent {
  return loadYamlContent<ClearPageContent>('pages/clear.yaml');
}

/**
 * Get Pipeline Reality Check page content
 */
export function getPipelineRealityCheckContent(): PipelineRealityCheckContent {
  return loadYamlContent<PipelineRealityCheckContent>('pages/pipeline-reality-check.yaml');
}

/**
 * Get About page content
 */
export function getAboutPageContent(): AboutPageContent {
  return loadYamlContent<AboutPageContent>('pages/about.yaml');
}

/**
 * Get Contact page content
 */
export function getContactPageContent(): ContactPageContent {
  return loadYamlContent<ContactPageContent>('pages/contact.yaml');
}

/**
 * Get Workshops page content
 */
export function getWorkshopsPageContent(): WorkshopsPageContent {
  return loadYamlContent<WorkshopsPageContent>('pages/workshops.yaml');
}

/**
 * Get Postie page content
 */
export function getPostiePageContent(): PostiePageContent {
  return loadYamlContent<PostiePageContent>('pages/postie.yaml');
}
