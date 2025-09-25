import { ReactNode } from "react";
import HeroMedia, { HeroMedia as HeroMediaType } from "@/components/HeroMedia";

interface PageTemplateProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  heroBackground?: "gradient" | "light" | "white";
  heroIcon?: string;
  heroMedia?: HeroMediaType | null;
}

export default function PageTemplate({ 
  title, 
  subtitle, 
  children, 
  heroBackground = "light",
  heroIcon = "target",
  heroMedia
}: PageTemplateProps) {
  const bgClasses = {
    gradient: "bg-gradient-to-br from-navy-900 to-navy-800 text-white",
    light: "bg-navy-700",
    white: "bg-white"
  };

  const textClasses = {
    gradient: "text-white",
    light: "text-white",
    white: "text-navy-900"
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`${bgClasses[heroBackground]} py-24 px-6 min-h-[500px] flex items-center`}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
            {/* Hero Image/Media Area - Shows first on mobile */}
            <div className="relative order-first md:order-2">
              <div className="text-center space-y-6">
                <div className={`w-full aspect-video bg-gradient-to-br ${
                  heroBackground === 'gradient'
                    ? 'from-navy-600/30 to-navy-800/30'
                    : heroBackground === 'light'
                    ? 'from-navy-500/20 to-navy-600/20'
                    : 'from-gray-100 to-gray-200'
                } rounded-lg flex items-center justify-center relative overflow-hidden min-h-[280px] md:min-h-[240px]`}>
                  {heroMedia ? (
                    <HeroMedia
                      media={heroMedia}
                      className="w-full h-full object-cover"
                      priority={false}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-3">
                        <div className={`w-20 h-20 md:w-16 md:h-16 ${
                          heroBackground === 'gradient' ? 'bg-white/20' : heroBackground === 'light' ? 'bg-white/20' : 'bg-navy-600'
                        } rounded-full flex items-center justify-center mx-auto`}>
                          <svg className={`w-10 h-10 md:w-8 md:h-8 ${
                            heroBackground === 'white' ? 'text-white' : 'text-white'
                          }`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <div className={`${
                          heroBackground === 'white' ? 'text-navy-600' : 'text-white/80'
                        } text-base md:text-sm font-medium`}>
                          {title}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <p className={`${
                  heroBackground === 'gradient' ? 'text-blue-100' : heroBackground === 'white' ? 'text-navy-600/80' : 'text-white/80'
                } text-sm italic`}>
                  (Professional services solution)
                </p>
              </div>
            </div>

            {/* Hero Content - Shows second on mobile */}
            <div className="order-last md:order-1">
              <h1 className={`text-4xl md:text-5xl font-bold ${textClasses[heroBackground]} mb-6 leading-tight`}>
                {title}
              </h1>
              {subtitle && (
                <p className={`text-xl ${heroBackground === 'gradient' ? 'text-blue-100' : heroBackground === 'white' ? 'text-navy-700/80' : 'text-white/80'} leading-relaxed`}>
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main>
        {children}
      </main>
    </div>
  );
}