import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LineIcon from "@/components/LineIcon";
import Link from "next/link";
import { ContentSection, convertIconName } from "@/lib/content";
import { processInlineMarkdown, markdownToHtml } from "@/lib/markdown";

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
                      return `<li class="flex items-start mb-2 text-[#374151] leading-relaxed"><div class="w-2 h-2 bg-[#f59e0b] rounded-full mt-2 mr-3 flex-shrink-0"></div><span>${text}</span></li>`;
                    })
                    .join('');
                  return `<ul class="mb-4">${listItems}</ul>`;
                } else if (paragraph.trim()) {
                  // Process bold text
                  const processedText = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[#1e3a8a]">$1</strong>');
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
            <Card key={index} className={`p-8 bg-white shadow-soft hover:shadow-medium transition-shadow text-center ${shouldCenter ? 'w-full max-w-sm' : ''}`}>
              <CardContent className="p-0">
                {(item.icon || item.iconType) && (
                  <div className="mb-6">
                    <LineIcon 
                      type={convertIconName(item.icon || item.iconType)} 
                      className="text-[#f59e0b] mx-auto" 
                      size={56} 
                    />
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
                  <div className="bg-[#8fb4ff]/10 border border-[#8fb4ff]/30 p-4 rounded-lg mb-4">
                    <p className="text-sm font-semibold text-[#1e3a8a]">{item.results}</p>
                  </div>
                )}
                {item.link && (
                  <Button asChild className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white">
                    <Link href={item.link.url || '#'} className="flex items-center">
                      {item.link.text || 'Learn More'}
                      <LineIcon type="arrow-right" className="ml-2" size={16} />
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
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
            <Card key={index} className={`p-8 shadow-soft text-center ${item.highlight ? 'bg-[#1e3a8a] text-white border-2 border-[#8fb4ff]' : 'bg-white'}`}>
              <CardContent className="p-0">
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
              </CardContent>
            </Card>
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
              <LineIcon type="arrow-right" className="ml-2" size={16} />
            </Link>
          </Button>
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
            <Card key={index} className="p-6 bg-[#1e3a8a] text-white text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold mb-2">{item.number}</div>
                <div className="text-lg font-semibold text-blue-100 mb-2">{item.label}</div>
                <div className="text-sm text-blue-200">{item.description}</div>
              </CardContent>
            </Card>
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
            <Card key={index} className="p-6 bg-white border-[#8fb4ff]/20 text-center shadow-soft hover:shadow-medium transition-shadow max-w-sm mx-auto">
              <CardContent className="p-0">
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
              </CardContent>
            </Card>
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
            <Card key={index} className="p-6 bg-white shadow-soft">
              <CardContent className="p-0">
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
              </CardContent>
            </Card>
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
                    <LineIcon type="check" className="text-white" size={16} />
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
                    <LineIcon type="check" className="text-[#f59e0b]" size={20} />
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
              <LineIcon type="shield" className="text-[#f59e0b] mx-auto" size={64} />
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