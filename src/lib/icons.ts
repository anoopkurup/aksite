/**
 * Icon Mapping System
 * Maps string identifiers to Lucide React icon components
 * Used for content files (YAML) to reference icons without importing React components
 */

import {
  ArrowRight,
  ArrowLeft,
  Target,
  MessageSquare,
  TrendingUp,
  Layers,
  Mail,
  Linkedin,
  Calendar,
  MessageCircle,
  Compass,
  RefreshCw,
  CheckCircle,
  FileText,
  Play,
  Clock,
} from 'lucide-react';

/**
 * Icon mapping object
 * Add new icons here as needed
 */
export const iconMap = {
  'arrow-right': ArrowRight,
  'arrow-left': ArrowLeft,
  'target': Target,
  'message-square': MessageSquare,
  'trending-up': TrendingUp,
  'layers': Layers,
  'mail': Mail,
  'linkedin': Linkedin,
  'calendar': Calendar,
  'message-circle': MessageCircle,
  'compass': Compass,
  'refresh-cw': RefreshCw,
  'check-circle': CheckCircle,
  'file-text': FileText,
  'play': Play,
  'clock': Clock,
} as const;

/**
 * Type-safe icon name (derived from iconMap keys)
 */
export type IconName = keyof typeof iconMap;

/**
 * Get icon component by string identifier
 * @param name - Icon name (e.g., 'target', 'message-square')
 * @returns Lucide React icon component
 * @throws Error if icon name is not found
 */
export function getIcon(name: IconName) {
  const icon = iconMap[name];
  if (!icon) {
    throw new Error(`Icon "${name}" not found in iconMap. Available icons: ${Object.keys(iconMap).join(', ')}`);
  }
  return icon;
}

/**
 * Check if a string is a valid icon name
 * @param name - String to check
 * @returns true if name is a valid icon identifier
 */
export function isValidIconName(name: string): name is IconName {
  return name in iconMap;
}

/**
 * Get all available icon names
 * @returns Array of valid icon identifiers
 */
export function getAvailableIcons(): IconName[] {
  return Object.keys(iconMap) as IconName[];
}
