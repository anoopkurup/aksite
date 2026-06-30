// Injects one or more JSON-LD schema blocks into the page. Server component —
// renders <script type="application/ld+json"> in the served HTML so crawlers
// see it. Pass schema objects built by the helpers in src/lib/seo.ts.

interface JsonLdProps {
  schema: Record<string, unknown> | Array<Record<string, unknown>>;
}

export default function JsonLd({ schema }: JsonLdProps) {
  const blocks = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Schema is built from trusted, static content-map data — not user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
