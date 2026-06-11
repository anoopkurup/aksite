import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_PATH = path.join(process.cwd(), 'src/content');

export interface ContentSection {
  type: string;
  class?: string;
  header?: {
    title?: string;
    subtitle?: string;
  };
  title?: string;
  description?: string;
  content?: string;
  grid_class?: string;
  items?: Array<{
    icon?: string;
    iconType?: string;
    title?: string;
    subheading?: string;
    description?: string;
    features?: string[];
    link?: {
      url?: string;
      text?: string;
    };
    highlight?: boolean;
    number?: string;
    label?: string;
    quote?: string;
    author?: string;
    role?: string;
    company?: string;
    results?: string;
    question?: string;
    answer?: string;
    name?: string;
    price?: string;
    featured?: boolean;
    button?: {
      text?: string;
      url?: string;
      class?: string;
    };
  }>;
  button?: {
    text?: string;
    url?: string;
  };
  buttons?: Array<{
    text?: string;
    url?: string;
  }>;
}

export interface HeroMedia {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  alt?: string;
}

export interface ContentPage {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    content_class?: string;
    hero_image?: string;
    hero_video_url?: string;
    hero_video_thumbnail?: string;
    hero_media_type?: 'image' | 'video';
    sections?: ContentSection[];
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

export interface WebinarResource {
  title: string;
  url: string;
}

export interface Webinar {
  slug: string;
  frontmatter: {
    title: string;
    slug: string;
    description: string;
    date?: string;  // For upcoming webinars (ISO format YYYY-MM-DD)
    recorded_date?: string;  // For past webinars
    time?: string;  // e.g., "2:00 PM EST"
    duration: string;
    format?: string;  // e.g., "Live + Q&A"
    registration_url?: string;
    video_url?: string;
    video_platform?: 'youtube' | 'vimeo';
    download_link?: string;
    topics: string[];
    resources?: WebinarResource[];
    featured_image?: string;
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

export function getAllContentFiles(directory: string): string[] {
  try {
    const fullPath = path.join(CONTENT_PATH, directory);
    const files = fs.readdirSync(fullPath);
    return files
      .filter((file) => file.endsWith('.md') && !file.startsWith('_'))
      .map((file) => file.replace('.md', ''));
  } catch (error) {
    console.error(`Error reading directory: ${directory}`, error);
    return [];
  }
}

// Helper function to convert icon names from content to LineIcon types
export function convertIconName(iconName?: string): string {
  if (!iconName) return 'chart';
  
  const iconMap: Record<string, string> = {
    'icon-chart': 'chart',
    'icon-computer': 'monitor',
    'icon-monitor': 'monitor',
    'icon-target': 'target',
    'icon-handshake': 'handshake',
    'icon-graduation': 'graduation',
    'icon-robot': 'cpu',
    'icon-funnel': 'funnel',
    'icon-scale': 'scale',
    'icon-shield': 'shield',
  };

  return iconMap[iconName] || iconName.replace('icon-', '') || 'chart';
}


// Helper function to process hero media configuration from frontmatter
export function processHeroMedia(frontmatter: ContentPage['frontmatter']): HeroMedia | null {
  // Check for explicit media type first
  if (frontmatter.hero_media_type === 'video' && frontmatter.hero_video_url) {
    return {
      type: 'video',
      url: frontmatter.hero_video_url,
      thumbnail: frontmatter.hero_video_thumbnail,
      alt: `Video: ${frontmatter.title}`
    };
  }
  
  // Check for video URL (backwards compatibility)
  if (frontmatter.hero_video_url) {
    return {
      type: 'video',
      url: frontmatter.hero_video_url,
      thumbnail: frontmatter.hero_video_thumbnail,
      alt: `Video: ${frontmatter.title}`
    };
  }
  
  // Check for image (existing behavior)
  if (frontmatter.hero_image) {
    return {
      type: 'image',
      url: frontmatter.hero_image,
      alt: frontmatter.title
    };
  }
  
  return null;
}

// ============================================
// Webinar Management Functions
// ============================================

/**
 * Get a single webinar by slug from either upcoming or past directories
 */
export function getWebinarBySlug(slug: string): Webinar | null {
  try {
    // Try upcoming first
    const upcomingPath = path.join(CONTENT_PATH, 'webinars/upcoming', `${slug}.md`);
    if (fs.existsSync(upcomingPath)) {
      const fileContents = fs.readFileSync(upcomingPath, 'utf8');
      const { data, content } = matter(fileContents);
      return {
        slug,
        frontmatter: data as Webinar['frontmatter'],
        content,
      };
    }

    // Try past
    const pastPath = path.join(CONTENT_PATH, 'webinars/past', `${slug}.md`);
    if (fs.existsSync(pastPath)) {
      const fileContents = fs.readFileSync(pastPath, 'utf8');
      const { data, content } = matter(fileContents);
      return {
        slug,
        frontmatter: data as Webinar['frontmatter'],
        content,
      };
    }

    return null;
  } catch (error) {
    console.error(`Error reading webinar: ${slug}`, error);
    return null;
  }
}

/**
 * Get all webinars from a specific directory (upcoming or past)
 */
function getAllWebinarsFromDirectory(directory: 'upcoming' | 'past'): Webinar[] {
  try {
    const dirPath = path.join(CONTENT_PATH, 'webinars', directory);

    if (!fs.existsSync(dirPath)) {
      return [];
    }

    const files = fs.readdirSync(dirPath);
    const webinars = files
      .filter((file) => file.endsWith('.md') && !file.startsWith('_'))
      .map((file) => {
        const slug = file.replace('.md', '');
        const fullPath = path.join(dirPath, file);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          frontmatter: data as Webinar['frontmatter'],
          content,
        };
      });

    return webinars;
  } catch (error) {
    console.error(`Error reading webinars from ${directory}:`, error);
    return [];
  }
}

/**
 * Get upcoming webinars (filtered by date >= today, sorted by date ascending)
 * Returns only the 1 most recent upcoming webinar
 */
export function getUpcomingWebinars(): Webinar[] {
  const webinars = getAllWebinarsFromDirectory('upcoming');
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return webinars
    .filter((webinar) => {
      if (!webinar.frontmatter.date) return true; // Include if no date (coming soon)
      const webinarDate = new Date(webinar.frontmatter.date);
      return webinarDate >= today;
    })
    .sort((a, b) => {
      // Sort by date, putting "no date" items at the end
      if (!a.frontmatter.date) return 1;
      if (!b.frontmatter.date) return -1;
      return new Date(a.frontmatter.date).getTime() - new Date(b.frontmatter.date).getTime();
    })
    .slice(0, 1); // Return only the most recent upcoming webinar
}

/**
 * Get past webinars (from past directory, sorted by recorded_date descending)
 */
export function getPastWebinars(): Webinar[] {
  const webinars = getAllWebinarsFromDirectory('past');

  return webinars.sort((a, b) => {
    const dateA = a.frontmatter.recorded_date ? new Date(a.frontmatter.recorded_date).getTime() : 0;
    const dateB = b.frontmatter.recorded_date ? new Date(b.frontmatter.recorded_date).getTime() : 0;
    return dateB - dateA; // Most recent first
  });
}

/**
 * Get all webinar slugs for static page generation
 */
export function getAllWebinarSlugs(): string[] {
  const upcoming = getAllWebinarsFromDirectory('upcoming').map((w) => w.slug);
  const past = getAllWebinarsFromDirectory('past').map((w) => w.slug);
  return [...upcoming, ...past];
}

/**
 * Extract YouTube video ID from video URL and return thumbnail URL
 * Supports both embed and watch URLs
 */
export function getYouTubeThumbnail(video_url?: string): string | null {
  if (!video_url) return null;

  // Extract video ID from various YouTube URL formats
  let videoId: string | null = null;

  // Format: https://www.youtube.com/embed/VIDEO_ID
  const embedMatch = video_url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/);
  if (embedMatch) {
    videoId = embedMatch[1];
  }

  // Format: https://www.youtube.com/watch?v=VIDEO_ID
  const watchMatch = video_url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (watchMatch) {
    videoId = watchMatch[1];
  }

  // Format: https://youtu.be/VIDEO_ID
  const shortMatch = video_url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortMatch) {
    videoId = shortMatch[1];
  }

  if (!videoId) return null;

  // Return high-quality thumbnail URL
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
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

// Homepage Content — "I fix sales for founder-led services businesses"
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