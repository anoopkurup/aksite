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
    [key: string]: any;
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

/**
 * Base content response type
 */
export interface PageContent<T> {
  data: T;
  error?: string;
}

// ============================================================================
// TypeScript Interfaces for YAML Content Structure
// ============================================================================

// Homepage Content — "I fix sales for B2B services businesses"
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
  sound_familiar: {
    section_title: string;
    items: Array<{
      symptom: string;
      reframe: string;
    }>;
  };
  how_i_fix_it: {
    section_title: string;
    stages: Array<{
      number: string;
      name: string;
      description: string;
    }>;
  };
  proof: {
    section_title: string;
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
  investment: {
    section_title: string;
    title: string;
    description: string;
    credit_note: string;
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
    credit_note: string;
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
// Core YAML Loading Function
// ============================================================================

/**
 * Load and parse YAML content file
 * @param relativePath - Path relative to /content directory
 * @returns Parsed content data
 */
function loadYamlContent<T>(relativePath: string): PageContent<T> {
  try {
    const contentDir = path.join(process.cwd(), 'content');
    const filePath = path.join(contentDir, relativePath);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = yaml.load(fileContents) as T;

    return { data };
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
export function getHomePageContent(): PageContent<HomePageContent> {
  return loadYamlContent<HomePageContent>('pages/home.yaml');
}

/**
 * Get CLEAR engagement page content
 */
export function getClearPageContent(): PageContent<ClearPageContent> {
  return loadYamlContent<ClearPageContent>('pages/clear.yaml');
}

/**
 * Get Pipeline Reality Check page content
 */
export function getPipelineRealityCheckContent(): PageContent<PipelineRealityCheckContent> {
  return loadYamlContent<PipelineRealityCheckContent>('pages/pipeline-reality-check.yaml');
}

/**
 * Get About page content
 */
export function getAboutPageContent(): PageContent<AboutPageContent> {
  return loadYamlContent<AboutPageContent>('pages/about.yaml');
}

/**
 * Get Contact page content
 */
export function getContactPageContent(): PageContent<ContactPageContent> {
  return loadYamlContent<ContactPageContent>('pages/contact.yaml');
}