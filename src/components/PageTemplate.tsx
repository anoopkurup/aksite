import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import LineIcon from "@/components/LineIcon";

interface PageTemplateProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  heroBackground?: "gradient" | "light" | "white";
  heroIcon?: string;
}

export default function PageTemplate({ 
  title, 
  subtitle, 
  children, 
  heroBackground = "light",
  heroIcon = "target"
}: PageTemplateProps) {
  const bgClasses = {
    gradient: "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground",
    light: "bg-slate-50",
    white: "bg-slate-50"
  };

  const textClasses = {
    gradient: "text-primary-foreground",
    light: "text-oxford-blue",
    white: "text-oxford-blue"
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
                <p className={`text-xl ${heroBackground === 'gradient' ? 'text-primary-foreground/80' : 'text-charcoal'} leading-relaxed`}>
                  {subtitle}
                </p>
              )}
            </div>
            <div className="relative">
              <Card className={`${heroBackground === 'gradient' 
                ? 'bg-primary-foreground/15 border-primary-foreground/30 backdrop-blur-sm' 
                : 'bg-white border-slate-200'} shadow-2xl`}>
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className="w-full h-64 bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300">
                      <div className="text-center space-y-3">
                        <LineIcon 
                          type={heroIcon} 
                          className={heroBackground === 'gradient' ? 'text-primary-foreground/60' : 'text-gamboge'} 
                          size={48} 
                        />
                        <p className={`${heroBackground === 'gradient' ? 'text-primary-foreground/80' : 'text-oxford-blue'} text-sm font-medium`}>
                          {title}
                        </p>
                        <p className={`${heroBackground === 'gradient' ? 'text-primary-foreground/60' : 'text-charcoal'} text-xs`}>
                          Professional services solution
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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