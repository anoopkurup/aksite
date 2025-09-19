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
    gradient: "bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white",
    light: "bg-[#fef7ed]",
    white: "bg-[#fef7ed]"
  };

  const textClasses = {
    gradient: "text-white",
    light: "text-[#1e3a8a]",
    white: "text-[#1e3a8a]"
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
                    ? 'from-[#8fb4ff]/30 to-[#1e3a8a]/30'
                    : heroBackground === 'light'
                    ? 'from-[#f59e0b]/20 to-[#FFBF00]/20'
                    : 'from-[#8fb4ff]/20 to-[#1e3a8a]/20'
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
                          heroBackground === 'gradient' ? 'bg-white/20' : 'bg-[#1e3a8a]/20'
                        } rounded-full flex items-center justify-center mx-auto`}>
                          <svg className={`w-10 h-10 md:w-8 md:h-8 ${
                            heroBackground === 'gradient' ? 'text-white' : 'text-[#1e3a8a]'
                          }`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <div className={`${
                          heroBackground === 'gradient' ? 'text-white/80' : 'text-[#1e3a8a]/80'
                        } text-base md:text-sm font-medium`}>
                          {title}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <p className={`${
                  heroBackground === 'gradient' ? 'text-blue-100' : 'text-[#374151]'
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
                <p className={`text-xl ${heroBackground === 'gradient' ? 'text-blue-100' : 'text-[#374151]'} leading-relaxed`}>
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