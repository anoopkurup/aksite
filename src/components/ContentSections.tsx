import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LineIcon from "@/components/LineIcon";
import Link from "next/link";
import { ContentSection, convertIconName } from "@/lib/content";

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
  const bgClass = section.class?.includes('light-gray') || section.class?.includes('services') 
    ? 'bg-gradient-to-b from-blue-50 to-blue-100' 
    : section.class?.includes('audience') || section.class?.includes('approach')
    ? 'bg-[#fef7ed]'
    : 'bg-[#fef7ed]';

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
    default:
      return null;
  }
}

function ContentBlock({ section, bgClass }: { section: ContentSection; bgClass: string }) {
  const htmlContent = section.content ? section.content : '';
  
  return (
    <section className={`py-16 px-6 ${bgClass}`}>
      <div className="max-w-6xl mx-auto">
        <div 
          className="prose prose-lg prose-[#1e3a8a] max-w-none
            prose-headings:text-[#1e3a8a] prose-headings:font-bold
            prose-p:text-[#374151] prose-p:leading-relaxed
            prose-a:text-[#1e40af] prose-a:no-underline hover:prose-a:text-[#1e3a8a]
            prose-strong:text-[#1e3a8a]
            prose-ul:text-[#374151] prose-li:text-[#374151]
            prose-blockquote:text-[#374151] prose-blockquote:border-l-[#8fb4ff]"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
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
            <Card key={index} className="p-8 bg-white shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="p-0">
                {(item.icon || item.iconType) && (
                  <div className="mb-6">
                    <LineIcon 
                      type={convertIconName(item.icon || item.iconType)} 
                      className="text-[#e6a817]" 
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
                    className="text-[#374151] mb-6 leading-relaxed prose prose-sm max-w-none prose-p:mb-2 prose-ul:mb-2 prose-li:mb-1 prose-strong:text-[#1e3a8a]"
                    dangerouslySetInnerHTML={{ 
                      __html: item.description
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/✓/g, '<span class="text-[#e6a817] font-semibold">✓</span>')
                        .replace(/\n/g, '<br />')
                    }}
                  />
                )}
                {item.features && (
                  <ul className="space-y-2 mb-6">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-[#374151]">
                        <div className="w-2 h-2 bg-[#e6a817] rounded-full mt-2 mr-3 flex-shrink-0"></div>
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

  return (
    <section className={`py-16 px-6 ${bgClass}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {section.items.map((item, index) => (
            <Card key={index} className={`p-8 shadow-soft ${item.highlight ? 'bg-[#1e3a8a] text-white' : 'bg-white'}`}>
              <CardContent className="p-0">
                <h3 className={`text-xl font-bold mb-4 ${item.highlight ? 'text-white' : 'text-[#1e3a8a]'}`}>
                  {item.title}
                </h3>
                {item.description && (
                  <p className={`leading-relaxed ${item.highlight ? 'text-blue-100' : 'text-[#374151]'}`}>
                    {item.description}
                  </p>
                )}
                {item.features && (
                  <ul className="space-y-3 mt-4">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-start ${item.highlight ? 'text-blue-100' : 'text-[#374151]'}`}>
                        <div className={`w-2 h-2 bg-[#e6a817] rounded-full mt-2 mr-3 flex-shrink-0`}></div>
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
  return (
    <section className={`py-16 px-6 ${bgClass}`}>
      <div className="max-w-6xl mx-auto text-center">
        {section.title && (
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">{section.title}</h2>
        )}
        {section.description && (
          <p className="text-xl text-[#374151] mb-8 max-w-4xl mx-auto leading-relaxed">
            {section.description}
          </p>
        )}
        {section.button && (
          <Button asChild className="bg-[#e6a817] text-white hover:bg-[#d69e15] px-8 py-3 rounded-full font-semibold">
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

  const gridCols = section.items.length === 5 ? 'md:grid-cols-5' : 'md:grid-cols-4';

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

        <div className={`grid ${gridCols} gap-8`}>
          {section.items.map((item, index) => (
            <Card key={index} className="p-6 bg-white border-[#8fb4ff]/20 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.number}
                </div>
                <h3 className="font-bold text-[#1e3a8a] mb-3">{item.title}</h3>
                <p className="text-[#374151] text-sm leading-relaxed">{item.description}</p>
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
                <blockquote className="text-[#374151] mb-6 leading-relaxed">
                  "{item.quote}"
                </blockquote>
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
                <p className="text-[#374151] leading-relaxed">{(item as any).answer}</p>
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
                    <span className="bg-[#e6a817] text-white px-4 py-2 rounded-full text-sm font-bold">
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
                        <div className="w-2 h-2 bg-[#e6a817] rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {pricingItem.button && (
                    <Button asChild className={`w-full ${pricingItem.featured ? 'bg-[#e6a817] text-white hover:bg-[#d69e15]' : 'bg-[#1e3a8a] text-white hover:bg-[#1e40af]'}`}>
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