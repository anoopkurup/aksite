"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export interface HeroMedia {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
  alt?: string;
}

// Helper function to extract YouTube video ID from URL
export function extractYouTubeId(url: string): string | null {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

interface HeroMediaProps {
  media: HeroMedia | null;
  className?: string;
  priority?: boolean;
}

export default function HeroMedia({ media, className = "", priority = false }: HeroMediaProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  if (!media) {
    return (
      <div className={`relative bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300 ${className}`}>
        <div className="text-center space-y-3">
          <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center mx-auto">
            <Play className="text-slate-500" size={24} />
          </div>
          <p className="text-slate-500 text-sm font-medium">No media configured</p>
        </div>
      </div>
    );
  }

  if (media.type === 'video') {
    const videoId = extractYouTubeId(media.url);
    
    if (!videoId) {
      return (
        <div className={`relative bg-red-50 rounded-lg flex items-center justify-center border-2 border-dashed border-red-300 ${className}`}>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center mx-auto">
              <Play className="text-red-600" size={24} />
            </div>
            <p className="text-red-600 text-sm font-medium">Invalid YouTube URL</p>
          </div>
        </div>
      );
    }

    return (
      <div className={`relative ${className}`}>
        {!isVideoLoaded && media.thumbnail && (
          <div className="relative w-full aspect-video bg-slate-100 rounded-lg overflow-hidden">
            <Image
              src={media.thumbnail}
              alt={media.alt || "Video thumbnail"}
              fill
              className="object-cover"
              priority={priority}
            />
            <button
              onClick={() => setIsVideoLoaded(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors group"
              aria-label="Play video"
            >
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                <Play className="text-slate-700 ml-1" size={24} fill="currentColor" />
              </div>
            </button>
          </div>
        )}
        
        {(isVideoLoaded || !media.thumbnail) && (
          <div className="relative w-full aspect-video bg-slate-100 rounded-lg overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=${isVideoLoaded ? '1' : '0'}&rel=0&modestbranding=1`}
              title={media.alt || "YouTube video"}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        )}
      </div>
    );
  }

  // Image type
  return (
    <div className={`relative ${className}`}>
      <div className="relative w-full aspect-video bg-slate-100 rounded-lg overflow-hidden">
        <Image
          src={media.url}
          alt={media.alt || "Hero image"}
          fill
          className="object-cover"
          priority={priority}
        />
      </div>
    </div>
  );
}