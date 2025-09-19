import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ContentSection, convertIconName } from "@/lib/content";
import { processInlineMarkdown } from "@/lib/markdown";

// Custom icon component to replace LineIcon
function CustomIcon({ type, className, size = 24 }: { type: string; className?: string; size?: number }) {
  const iconProps = {
    className: className || "w-6 h-6",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    width: size,
    height: size
  };

  switch (type) {
    case 'check':
      return (
        <svg {...iconProps}>
          <polyline points="20,6 9,17 4,12"/>
        </svg>
      );
    case 'shield':
      return (
        <svg {...iconProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10"/>
        </svg>
      );
  }
}

// SVG Icon renderer for flat design
function renderIconSVG(iconType: string) {
  const iconProps = {
    className: "w-8 h-8",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  };

  switch (iconType) {
    case 'target':
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      );
    case 'users':
    case 'handshake':
      return (
        <svg {...iconProps}>
          <path d="M20 7h-9"/>
          <path d="M14 17H5"/>
          <circle cx="17" cy="17" r="3"/>
          <circle cx="7" cy="7" r="3"/>
        </svg>
      );
    case 'settings':
    case 'cog':
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6"/>
          <path d="m21 12-6-6-6 6-6-6"/>
        </svg>
      );
    case 'chart':
    case 'trending-up':
      return (
        <svg {...iconProps}>
          <polyline points="22,6 13.5,14.5 8.5,9.5 2,16"/>
          <polyline points="16,6 22,6 22,12"/>
        </svg>
      );
    case 'check':
      return (
        <svg {...iconProps}>
          <polyline points="20,6 9,17 4,12"/>
        </svg>
      );
    case 'shield':
      return (
        <svg {...iconProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      );
    case 'lightbulb':
      return (
        <svg {...iconProps}>
          <path d="M9 21h6"/>
          <path d="M12 17h.01"/>
          <path d="M7 7a5 5 0 0 1 10 0c0 1.5-.8 2.8-2 3.7V17H9v-6.3C7.8 9.8 7 8.5 7 7z"/>
        </svg>
      );
    case 'monitor':
      return (
        <svg {...iconProps}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      );
  }
}

interface ContentSectionsProps {
  sections: ContentSection[];
}

export default function ContentSections({ sections }: ContentSectionsProps) {
  return (
    <>
      {sections.map((section, index) => (
        <ContentSectionRenderer key={index} section={section} />
      ))}
    </>
  );
}

interface ContentSectionRendererProps {
  section: ContentSection;
}

function ContentSectionRenderer({ section }: ContentSectionRendererProps) {
  const bgClass = section.class?.includes('alt-bg') || section.class?.includes('services') 
    ? 'bg-gradient-to-b from-blue-50 to-blue-100' 
    : section.class?.includes('audience') || section.class?.includes('approach')
    ? 'bg-[#fef7ed]'
    : section.class?.includes('testimonials')
    ? 'bg-[#1e3a8a]'
    : 'bg-white';

  switch (section.type) {
    case 'content':
      return <ContentBlock section={section} bgClass={bgClass} />;
    case 'grid':
      return <GridSection section={section} bgClass={bgClass} />;
    case 'features':
      return <FeaturesSection section={section} bgClass={bgClass} />;
    case 'highlight':
      return <HighlightSection section={section} bgClass={bgClass} />;
    case 'stats':
      return <StatsSection section={section} bgClass={bgClass} />;
    case 'timeline':
      return <TimelineSection section={section} bgClass={bgClass} />;
    case 'testimonials':
      return <TestimonialsSection section={section} bgClass={bgClass} />;
    case 'faq':
      return <FAQSection section={section} bgClass={bgClass} />;
    case 'pricing':
      return <PricingSection section={section} bgClass={bgClass} />;
    case 'checklist':
      return <ChecklistSection section={section} bgClass={bgClass} />;
    case 'value-stack':
      return <ValueStackSection section={section} bgClass={bgClass} />;
    case 'guarantee':
      return <GuaranteeSection section={section} bgClass={bgClass} />;
    default:
      return null;
  }
}

function ContentBlock({ section, bgClass }: { section: ContentSection; bgClass: string }) {
  if (!section.content) return null;

  return (
    <section className={`py-16 px-6 ${bgClass}`}>
      <div className="max-w-4xl mx-auto">
        <div 
          className="max-w-none"
          dangerouslySetInnerHTML={{ 
            __html: section.content
              .split('\n\n')
              .map(paragraph => {
                paragraph = paragraph.trim();
                if (paragraph.startsWith('## ')) {
                  return `<h2 class="text-4xl font-bold text-[#1e3a8a] mb-8 text-center">${paragraph.replace('## ', '')}</h2>`;
                } else if (paragraph.startsWith('### ')) {
                  return `<h3 class="text-2xl font-bold text-[#1e3a8a] mb-4">${paragraph.replace('### ', '')}</h3>`;
                } else if (paragraph.includes('- ')) {
                  const listItems = paragraph.split('\n')
                    .filter(line => line.trim().startsWith('- '))
                    .map(line => {
                      const text = line.trim().replace('- ', '');
                      const processedText = processInlineMarkdown(text);
                      return `<li class="flex items-start mb-2 text-[#374151] leading-relaxed"><div class="w-2 h-2 bg-[#f59e0b] rounded-full mt-2 mr-3 flex-shrink-0"></div><span>${processedText}</span></li>`;
                    })
                    .join('');
                  return `<ul class="mb-4">${listItems}</ul>`;
                } else if (paragraph.trim()) {
                  // Process inline markdown (bold, italic, links)
                  const processedText = processInlineMarkdown(paragraph);
                  return `<p class="text-[#374151] leading-relaxed mb-4">${processedText}</p>`;
                }
                return '';
              })
              .filter(html => html)
              .join('')
          }}
        />
      </div>
    </section>
  );
}

function GridSection({ section, bgClass }: { section: ContentSection; bgClass: string }) {
  if (!section.items) return null;

  const gridCols = section.grid_class?.includes('grid-2') ? 'md:grid-cols-2' :
                  section.items.length === 3 ? 'md:grid-cols-3' :
                  section.items.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' :
                  section.items.length >= 5 ? 'md:grid-cols-2 lg:grid-cols-3' :
                  'md:grid-cols-2';

  // Determine if we should center items for 3-column layout
  const shouldCenter = section.items.length === 3;

  return (
    <section className={`py-16 px-6 ${bgClass}`}>
      <div className="max-w-6xl mx-auto">
        {section.header && (
          <div className="text-center mb-16">
            {section.header.title && (
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">{section.header.title}</h2>
            )}
            {section.header.subtitle && (
              <p className="text-xl text-[#374151] max-w-4xl mx-auto">{section.header.subtitle}</p>
            )}
          </div>
        )}

        <div className={`grid ${gridCols} gap-8 ${shouldCenter ? 'justify-items-center' : ''}`}>
          {section.items.map((item, index) => (
            <div key={index} className={`text-center ${shouldCenter ? 'w-full max-w-sm' : ''}`}>
              {(item.icon || item.iconType) && (
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[#FFBF00] rounded-full flex items-center justify-center mx-auto mb-4">
                    {renderIconSVG(convertIconName(item.icon || item.iconType))}
                  </div>
                </div>
              )}
              {item.title && (
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">{item.title}</h3>
              )}
              {item.subheading && (
                <p className="text-[#1e40af] font-semibold mb-4">{item.subheading}</p>
              )}
              {item.description && (
                <div
                  className="text-[#374151] mb-6 leading-relaxed prose prose-sm max-w-none prose-p:mb-2 prose-ul:mb-2 prose-li:mb-1 prose-strong:text-[#1e3a8a] prose-em:text-[#374151] prose-em:italic text-left"
                  dangerouslySetInnerHTML={{
                    __html: processInlineMarkdown(item.description)
                      .replace(/✓/g, '<span class="text-[#f59e0b] font-semibold">✓</span>')
                  }}
                />
              )}
              {item.features && (
                <ul className="space-y-2 mb-6 text-left">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-[#374151]">
                      <div className="w-2 h-2 bg-[#f59e0b] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              {item.results && (
                <div className="bg-[#8fb4ff]/10 p-4 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-[#1e3a8a]">{item.results}</p>
                </div>
              )}
              {item.link && (
                <Button asChild className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white">
                  <Link href={item.link.url || '#'} className="flex items-center">
                    {item.link.text || 'Learn More'}
                    <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </Link>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection({ section, bgClass }: { section: ContentSection; bgClass: string }) {
  if (!section.items) return null;

  // Determine grid layout based on number of items
  const gridCols = section.items.length === 3 ? 'md:grid-cols-3' : 
                   section.items.length === 2 ? 'md:grid-cols-2' : 
                   'md:grid-cols-2';

  return (
    <section className={`py-16 px-6 ${bgClass}`}>
      <div className="max-w-6xl mx-auto">
        {section.header && (
          <div className="text-center mb-16">
            {section.header.title && (
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">{section.header.title}</h2>
            )}
            {section.header.subtitle && (
              <p className="text-xl text-[#374151] max-w-4xl mx-auto">{section.header.subtitle}</p>
            )}
          </div>
        )}

        <div className={`grid ${gridCols} gap-8`}>
          {section.items.map((item, index) => (
            <div key={index} className={`p-8 text-center ${item.highlight ? 'bg-[#1e3a8a] text-white rounded-lg' : 'bg-white'}`}>
              <h3 className={`text-xl font-bold mb-4 ${item.highlight ? 'text-white' : 'text-[#1e3a8a]'}`}>
                {item.title}
              </h3>
              {item.description && (
                <div
                  className={`leading-relaxed prose prose-sm max-w-none prose-em:italic text-left ${item.highlight ? 'text-blue-100 prose-strong:text-white prose-em:text-blue-200' : 'text-[#374151] prose-strong:text-[#1e3a8a] prose-em:text-[#374151]'}`}
                  dangerouslySetInnerHTML={{
                    __html: processInlineMarkdown(item.description)
                  }}
                />
              )}
              {item.features && (
                <ul className="space-y-3 mt-4 text-left">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-start ${item.highlight ? 'text-blue-100' : 'text-[#374151]'}`}>
                      <div className={`w-2 h-2 bg-[#f59e0b] rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HighlightSection({ section, bgClass }: { section: ContentSection; bgClass: string }) {
  const isNavyBackground = section.class?.includes('testimonials');
  
  return (
    <section className={`py-16 px-6 ${bgClass}`}>
      <div className="max-w-6xl mx-auto text-center">
        {section.title && (
          <h2 className={`text-3xl font-bold mb-6 ${isNavyBackground ? 'text-white' : 'text-[#1e3a8a]'}`}>{section.title}</h2>
        )}
        {section.description && (
          <div 
            className={`text-xl mb-8 max-w-4xl mx-auto leading-relaxed prose prose-xl max-w-none prose-em:italic ${
              isNavyBackground 
                ? 'text-blue-100 prose-strong:text-white prose-em:text-blue-200' 
                : 'text-[#374151] prose-strong:text-[#1e3a8a] prose-em:text-[#374151]'
            }`}
            dangerouslySetInnerHTML={{ 
              __html: processInlineMarkdown(section.description)
            }}
          />
        )}
        {section.button && (
          <Button asChild className="bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-white hover:from-[#d97706] hover:to-[#b45309] px-8 py-3 rounded-full font-semibold">
            <Link href={section.button.url || '#'} className="flex items-center">
              {section.button.text || 'Learn More'}
              <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </Link>
          </Button>
        )}
        {section.buttons && section.buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {section.buttons.map((button, index) => (
              <Button
                key={index}
                asChild
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  index === 0
                    ? 'bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-white hover:from-[#d97706] hover:to-[#b45309]'
                    : isNavyBackground
                    ? 'bg-gradient-to-br from-[#93c5fd] to-[#60a5fa] text-[#1e3a8a] hover:from-[#60a5fa] hover:to-[#3b82f6] border-2 border-blue-300'
                    : 'bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white hover:from-[#1e40af] hover:to-[#1d4ed8]'
                }`}
              >
                <Link href={button.url || '#'} className="flex items-center">
                  {button.text || 'Learn More'}
                  <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
                </Link>
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function StatsSection({ section, bgClass }: { section: ContentSection; bgClass: string }) {
  if (!section.items) return null;

  return (
    <section className={`py-16 px-6 ${bgClass}`}>
      <div className="max-w-6xl mx-auto">
        {section.header && (
          <div className="text-center mb-16">
            {section.header.title && (
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">{section.header.title}</h2>
            )}
            {section.header.subtitle && (
              <p className="text-xl text-[#374151]">{section.header.subtitle}</p>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {section.items.map((item, index) => (
            <div key={index} className="p-6 bg-[#1e3a8a] text-white text-center rounded-lg">
              <div className="text-3xl font-bold mb-2">{item.number}</div>
              <div className="text-lg font-semibold text-blue-100 mb-2">{item.label}</div>
              <div className="text-sm text-blue-200">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection({ section, bgClass }: { section: ContentSection; bgClass: string }) {
  if (!section.items) return null;

  const gridCols = section.items.length === 3 ? 'md:grid-cols-3' : 
                   section.items.length === 5 ? 'md:grid-cols-5' : 'md:grid-cols-4';

  return (
    <section className={`py-16 px-6 ${bgClass}`}>
      <div className="max-w-6xl mx-auto">
        {section.header && (
          <div className="text-center mb-16">
            {section.header.title && (
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">{section.header.title}</h2>
            )}
          </div>
        )}

        <div className={`grid ${gridCols} gap-8 justify-center`}>
          {section.items.map((item, index) => (
            <div key={index} className="p-6 bg-white text-center max-w-sm mx-auto">
              <div className="w-12 h-12 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {item.number}
              </div>
              <h3 className="font-bold text-[#1e3a8a] mb-3">{item.title}</h3>
              <div
                className="text-[#374151] text-sm leading-relaxed prose prose-sm max-w-none prose-strong:text-[#1e3a8a] prose-em:text-[#374151] prose-em:italic"
                dangerouslySetInnerHTML={{
                  __html: processInlineMarkdown(item.description || '')
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({ section, bgClass }: { section: ContentSection; bgClass: string }) {
  if (!section.items) return null;

  return (
    <section className={`py-16 px-6 ${bgClass}`}>
      <div className="max-w-6xl mx-auto">
        {section.header && (
          <div className="text-center mb-16">
            {section.header.title && (
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">{section.header.title}</h2>
            )}
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {section.items.map((item, index) => (
            <div key={index} className="p-6 bg-[#fef7ed] rounded-lg">
              <blockquote
                className="text-[#374151] mb-6 leading-relaxed prose prose-sm max-w-none prose-strong:text-[#1e3a8a] prose-em:text-[#374151] prose-em:italic"
                dangerouslySetInnerHTML={{
                  __html: `"${processInlineMarkdown(item.quote || '')}"`
                }}
              />
              <div>
                <p className="font-semibold text-[#1e3a8a]">{item.author}</p>
                {item.role && <p className="text-sm text-[#1e40af]">{item.role}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection({ section, bgClass }: { section: ContentSection; bgClass: string }) {
  if (!section.items) return null;

  return (
    <section className={`py-16 px-6 ${bgClass}`}>
      <div className="max-w-4xl mx-auto">
        {section.header && (
          <div className="text-center mb-16">
            {section.header.title && (
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">{section.header.title}</h2>
            )}
          </div>
        )}

        <div className="space-y-6">
          {section.items.map((item, index) => (
            <Card key={index} className="p-6 bg-white shadow-soft">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold text-[#1e3a8a] mb-3">{(item as any).question}</h3>
                <div 
                  className="text-[#374151] leading-relaxed prose prose-sm max-w-none prose-strong:text-[#1e3a8a] prose-em:text-[#374151] prose-em:italic"
                  dangerouslySetInnerHTML={{ 
                    __html: processInlineMarkdown((item as any).answer || '')
                  }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection({ section, bgClass }: { section: ContentSection; bgClass: string }) {
  if (!section.items) return null;

  return (
    <section className={`py-16 px-6 ${bgClass}`}>
      <div className="max-w-6xl mx-auto">
        {section.header && (
          <div className="text-center mb-16">
            {section.header.title && (
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">{section.header.title}</h2>
            )}
            {section.header.subtitle && (
              <p className="text-xl text-[#374151]">{section.header.subtitle}</p>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {section.items.map((item, index) => {
            const pricingItem = item as any;
            return (
              <Card 
                key={index} 
                className={`p-8 shadow-soft text-center relative ${
                  pricingItem.featured ? 'border-2 border-[#8fb4ff] bg-[#1e3a8a] text-white' : 'bg-white'
                }`}
              >
                {pricingItem.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#f59e0b] text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-0">
                  <h3 className={`text-xl font-bold mb-4 ${pricingItem.featured ? 'text-white' : 'text-[#1e3a8a]'}`}>
                    {pricingItem.name}
                  </h3>
                  <div className={`text-3xl font-bold mb-6 ${pricingItem.featured ? 'text-white' : 'text-[#1e3a8a]'}`}>
                    {pricingItem.price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pricingItem.features?.map((feature: string, idx: number) => (
                      <li key={idx} className={`flex items-center justify-center ${pricingItem.featured ? 'text-blue-100' : 'text-[#374151]'}`}>
                        <div className="w-2 h-2 bg-[#f59e0b] rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {pricingItem.button && (
                    <Button asChild className={`w-full ${pricingItem.featured ? 'bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-white hover:from-[#d97706] hover:to-[#b45309]' : 'bg-[#1e3a8a] text-white hover:bg-[#1e40af]'}`}>
                      <Link href={pricingItem.button.url || '#'}>{pricingItem.button.text || 'Get Started'}</Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ChecklistSection({ section, bgClass }: { section: ContentSection; bgClass: string }) {
  if (!section.items) return null;

  return (
    <section className={`py-16 px-6 ${bgClass}`}>
      <div className="max-w-4xl mx-auto">
        {section.header && (
          <div className="text-center mb-16">
            {section.header.title && (
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">{section.header.title}</h2>
            )}
            {section.header.subtitle && (
              <p className="text-xl text-[#374151]">{section.header.subtitle}</p>
            )}
          </div>
        )}

        <Card className="p-8 bg-white shadow-soft">
          <CardContent className="p-0">
            <ul className="space-y-4">
              {section.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#f59e0b] rounded-full flex items-center justify-center mr-4 mt-1">
                    <CustomIcon type="check" className="text-white" size={16} />
                  </div>
                  <div 
                    className="text-[#374151] leading-relaxed prose prose-sm max-w-none prose-strong:text-[#1e3a8a] prose-em:text-[#374151] prose-em:italic"
                    dangerouslySetInnerHTML={{ 
                      __html: processInlineMarkdown(typeof item === 'string' ? item : (item as any).description || '')
                    }}
                  />
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function ValueStackSection({ section, bgClass }: { section: ContentSection; bgClass: string }) {
  if (!section.items) return null;

  return (
    <section className={`py-16 px-6 ${bgClass}`}>
      <div className="max-w-4xl mx-auto text-center">
        {section.title && (
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-12">{section.title}</h2>
        )}

        <Card className="p-8 bg-white shadow-soft border-2 border-[#8fb4ff]/30">
          <CardContent className="p-0">
            <ul className="space-y-4">
              {section.items.map((item, index) => (
                <li key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div 
                    className="text-[#374151] leading-relaxed prose prose-sm max-w-none prose-strong:text-[#1e3a8a] prose-em:text-[#374151] prose-em:italic flex-1 text-left"
                    dangerouslySetInnerHTML={{ 
                      __html: processInlineMarkdown(typeof item === 'string' ? item : (item as any).description || '')
                    }}
                  />
                  <div className="flex-shrink-0 ml-4">
                    <CustomIcon type="check" className="text-[#f59e0b]" size={20} />
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function GuaranteeSection({ section, bgClass }: { section: ContentSection; bgClass: string }) {
  return (
    <section className={`py-16 px-6 ${bgClass}`}>
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white shadow-soft border-2 border-[#8fb4ff]/30">
          <CardContent className="p-0 text-center">
            <div className="mb-6">
              <CustomIcon type="shield" className="text-[#f59e0b] mx-auto" size={64} />
            </div>
            {section.title && (
              <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
            )}
            {section.description && (
              <div 
                className="text-xl text-blue-100 leading-relaxed prose prose-xl max-w-none prose-strong:text-white prose-em:text-blue-200 prose-em:italic"
                dangerouslySetInnerHTML={{ 
                  __html: processInlineMarkdown(section.description)
                }}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}