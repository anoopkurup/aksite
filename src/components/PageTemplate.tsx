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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className={`text-4xl md:text-5xl font-bold ${textClasses[heroBackground]} mb-6 leading-tight`}>
                {title}
              </h1>
              {subtitle && (
                <p className={`text-xl ${heroBackground === 'gradient' ? 'text-blue-100' : 'text-[#374151]'} leading-relaxed`}>
                  {subtitle}
                </p>
              )}
            </div>
            <div className="relative">
              <div className={`${heroBackground === 'gradient'
                ? 'bg-white/15 backdrop-blur-sm'
                : 'bg-white'} rounded-lg p-8`}>
                <div className="text-center space-y-6">
                  {heroMedia ? (
                    <HeroMedia
                      media={heroMedia}
                      className="w-full"
                      priority={false}
                    />
                  ) : (
                    <div className="w-full h-64 bg-[#8fb4ff]/20 rounded-lg flex items-center justify-center">
                      <div className="text-center space-y-3">
                        <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto">
                          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <circle cx="12" cy="12" r="6"/>
                            <circle cx="12" cy="12" r="2"/>
                          </svg>
                        </div>
                        <p className={`${heroBackground === 'gradient' ? 'text-white/80' : 'text-[#1e3a8a]'} text-sm font-medium`}>
                          {title}
                        </p>
                        <p className={`${heroBackground === 'gradient' ? 'text-white/60' : 'text-[#374151]'} text-xs`}>
                          Professional services solution
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
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