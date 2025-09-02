import { ReactNode } from "react";

interface PageTemplateProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  heroBackground?: "gradient" | "light" | "white";
}

export default function PageTemplate({ 
  title, 
  subtitle, 
  children, 
  heroBackground = "light" 
}: PageTemplateProps) {
  const bgClasses = {
    gradient: "bg-gradient-to-br from-oxford-blue to-blue-900 text-white",
    light: "bg-light-gray",
    white: "bg-white"
  };

  const textClasses = {
    gradient: "text-white",
    light: "text-oxford-blue",
    white: "text-oxford-blue"
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`${bgClasses[heroBackground]} py-16 px-6`}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-5xl font-bold ${textClasses[heroBackground]} mb-6`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`text-xl ${heroBackground === 'gradient' ? 'text-blue-100' : 'text-charcoal'} leading-relaxed`}>
              {subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <main>
        {children}
      </main>
    </div>
  );
}