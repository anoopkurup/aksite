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