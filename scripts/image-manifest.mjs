/**
 * Image manifest — prompts authored for the AK site.
 *
 * BRAND_PREAMBLE is prepended to every job, so each job only describes its
 * subject. Style is locked here once: white bg, navy/grey/orange, Swiss/Apple
 * minimalism, no gradients/shadows/photos.
 *
 *   pages: [{ id, out, size, alt, prompt }]
 *   posts: [{ slug, hero:{size,alt,prompt}, inlines:[{size,alt,prompt}, ...] }]
 *
 * Per-post image COUNT is decided by the generator from the post's word count
 * (imageCountForWords). Author inline prompts in priority order — the generator
 * uses as many as the word count calls for (hero + first N inlines).
 */

export const BRAND_PREAMBLE = [
  'Minimalist vector illustration in a premium Swiss-design / Apple-product-page style.',
  'Background is pure flat white #FFFFFF, edge to edge and seamless — absolutely no cream, beige, grey or off-white tint, no paper texture, no border, no vignette. Absolutely no gradients, no drop shadows, no photographic elements, no 3D, no skeuomorphism.',
  'Clean flat 2D geometry: thin precise lines, simple shapes, generous negative space, everything aligned to a tidy grid.',
  'Strict limited palette only: deep navy (#1F3D73) for primary shapes and headings, medium slate grey (#475569) for secondary elements and labels, and a single warm orange (#F97316) used sparingly for exactly one point of emphasis.',
  'Restrained, high-end, calm — like a diagram in a premium financial or legal services report.',
  'If any text labels appear, keep them very short and use a clean simple sans-serif. Do not fill the canvas; let it breathe.',
].join(' ');

const W = '1536x1024';

export const pages = [
  {
    id: 'page-home-funnel',
    out: 'public/images/pages/home-funnel.webp',
    size: W,
    alt: 'The funnel: free Sales Scorecard to Pipeline Reality Check to the CLEAR engagement',
    prompt:
      'Subject: a minimal horizontal three-step flow diagram of a sales funnel. Three simple nodes left to right joined by thin arrows, each node slightly larger and more emphasised than the last. Short labels under the nodes: "Sales Scorecard", "Pipeline Reality Check", "CLEAR". Navy node outlines, grey connecting arrows and labels, the final "CLEAR" node accented in orange. Centered, wide banner, lots of white space.',
  },
  {
    id: 'page-clear-stages',
    out: 'public/images/pages/clear-stages.webp',
    size: W,
    alt: 'CLEAR in three stages: Package, Prove and Sell, Systemise',
    prompt:
      'Subject: a minimal horizontal three-stage process diagram, three evenly spaced steps connected by one thin line. Each step is a simple line-art icon above a short label: step 1 "Package" (a small box being assembled), step 2 "Prove & Sell" (two short arrows meeting, like a conversation), step 3 "Systemise" (a simple gear or checklist). Navy icons and numerals, grey labels, a single orange accent on step 3. Flat, clean, evenly aligned, plenty of white space.',
  },
  {
    id: 'page-clear-pricing',
    out: 'public/images/pages/clear-pricing.webp',
    size: W,
    alt: 'CLEAR payment schedule over three months: 50,000 then 1 lakh then 1 lakh',
    prompt:
      'Subject: a minimal horizontal payment-schedule timeline for a three-month engagement, month to month. Three evenly spaced nodes on one thin horizontal line, each a small circle with a short label below: "Month 1  Rs 50,000", "Month 2  Rs 1,00,000", "Month 3  Rs 1,00,000". Navy line and circles, grey labels, the first node "Month 1" accented in orange to mark the start. Clean, spare, lots of white space.',
  },
  {
    id: 'page-scorecard-bands',
    out: 'public/images/pages/scorecard-bands.webp',
    size: W,
    alt: 'Three scorecard bands from Referral-Dependent to System-Ready',
    prompt:
      'Subject: a minimal horizontal scale divided into three labelled segments, low to high, with small tick marks. Segment labels: "Referral-Dependent" (0-35), "One Engine Short" (36-65), "System-Ready" (66-100). A single thin horizontal bar with three zones. Navy and grey for the first two zones, the highest "System-Ready" zone accented in orange. Restrained, diagram-like, lots of white space.',
  },
  {
    id: 'page-prc-flow',
    out: 'public/images/pages/prc-flow.webp',
    size: W,
    alt: 'Pipeline Reality Check: your data in, one week, a written verdict out',
    prompt:
      'Subject: a minimal horizontal three-step flow. Step 1: a simple spreadsheet / stacked-rows icon labelled "12 months of deals". Thin arrow. Step 2: a simple clock or calendar icon labelled "One week". Thin arrow. Step 3: a single report document icon labelled "Written verdict". Navy line-art icons, grey labels and arrows, a small orange detail on the final report. Clean, spare, generous white space.',
  },
  {
    id: 'page-about-pathway',
    out: 'public/images/pages/about-pathway.webp',
    size: W,
    alt: 'From strategy to a working pipeline',
    prompt:
      'Subject: a minimal before-and-after diagram, two simple states joined by one thin orange arrow in the middle. Left state: a flat blueprint / map icon labelled "Strategy". Right state: a small connected flow of three nodes labelled "Working pipeline". Navy line-art shapes, grey labels, the single connecting arrow in orange. Balanced, calm, lots of white space.',
  },
];

// helper to keep entries terse
const img = (alt, prompt) => ({ size: W, alt, prompt });

export const posts = [
  {
    slug: 'ad-agency-from-big-clients-to-many-small',
    hero: img(
      'Shifting from a few big clients to many small ones',
      'Subject: a flat conceptual banner contrasting two simple states joined by a thin orange arrow. Left: one large navy circle labelled "Few big clients". Right: a tidy grid of many small navy circles labelled "Many small clients". Minimal text, lots of white space.'
    ),
    inlines: [
      img(
        'Owning the result instead of delivering the brief',
        'Subject: a minimal two-state diagram. Left: a navy document icon labelled "The brief". Thin orange arrow. Right: a simple target / outcome icon labelled "The result". Spare, clean, plenty of white space.'
      ),
    ],
  },
  {
    slug: 'advertising-agency-one-sellable-offer',
    hero: img(
      'Scattered services converging into one sellable offer',
      'Subject: a flat conceptual banner. On the left, several small scattered navy shapes of different kinds; thin grey lines funnel them toward a single clean navy rectangle on the right, outlined and accented in orange, labelled "One offer". Lots of white space.'
    ),
    inlines: [
      img(
        'Packaging chaos into one thing with a name and a price',
        'Subject: a minimal diagram of a single packaged offer — one clean rectangle labelled "Named offer" with a small price tag detail in orange. Around it, a few faint grey scattered shapes being drawn in. Flat, spare, white background.'
      ),
    ],
  },
  {
    slug: 'ai-adoption-business-model-problem',
    hero: img(
      'AI adoption is a business-model shift, not a tool',
      'Subject: a flat conceptual banner contrasting two simple line trends on a small axis. One straight diagonal navy line labelled "Effort = output". Beside it, a line that stays flat then steps sharply upward, accented in orange, labelled "Leverage". Minimal, calm, white background.'
    ),
    inlines: [
      img(
        'Effort-driven work versus leverage',
        'Subject: a minimal two-panel diagram. Left panel: many small navy figures all pushing, labelled "More output = more hours". Right panel: one small navy figure beside a simple system block, output arrow larger, accented in orange, labelled "Output decoupled from hours". Flat, spare.'
      ),
    ],
  },
  {
    slug: 'aida-to-ai-messaging-frameworks-workflows',
    hero: img(
      'A classic framework transformed into an AI workflow',
      'Subject: a flat conceptual banner. On the left a simple navy funnel shape labelled "Framework"; a thin orange arrow; on the right a simple connected workflow of small nodes and a gear labelled "Workflow". Minimal, white background.'
    ),
    inlines: [
      img(
        'The AIDA funnel: Attention, Interest, Desire, Action',
        'Subject: a minimal vertical four-stage funnel narrowing top to bottom, each stage a thin horizontal band with a short label: "Attention", "Interest", "Desire", "Action". Navy bands, grey labels, the bottom "Action" stage accented in orange. Clean, spare.'
      ),
      img(
        'From framework to operational workflow',
        'Subject: a minimal left-to-right transformation. A single navy box labelled "Framework", a thin orange arrow, then a row of three small connected step-nodes labelled "Input", "Process", "Output". Flat, evenly aligned, white background.'
      ),
    ],
  },
  {
    slug: 'boutique-law-firm-productised-advisory',
    hero: img(
      'From reactive practice to proactive advisory',
      'Subject: a flat conceptual banner with two states joined by a thin orange arrow. Left: a simple alert / lightning icon labelled "Reactive". Right: a simple repeating-calendar icon labelled "Proactive advisory". Navy line-art, grey labels, white background.'
    ),
    inlines: [
      img(
        'An offer a stranger can say yes to',
        'Subject: a minimal diagram of one clean navy rectangle labelled "Productised advisory" with a small orange checkmark beside it, and a simple figure approaching from the left. Flat, spare, white background.'
      ),
    ],
  },
  {
    slug: 'branding-agency-niche-specialisation',
    hero: img(
      'From generalist to known for one thing',
      'Subject: a flat conceptual banner. Left: a cluster of several faint grey identical icons labelled "Everything". Thin orange arrow. Right: one single bold navy icon labelled "One thing". Minimal, lots of white space.'
    ),
    inlines: [
      img(
        'Selling the outcome, not the deliverables',
        'Subject: a minimal two-state diagram. Left: a small stack of navy deliverable icons (files, shapes) labelled "Deliverables". Thin orange arrow. Right: a single target icon labelled "Outcome", accented in orange. Flat, clean.'
      ),
    ],
  },
  {
    slug: 'cog-vs-brand-purchase-blog-article',
    hero: img(
      'Bought as a cog versus chosen as a brand',
      'Subject: a flat conceptual banner contrasting two states. Left: a single small navy gear sitting inside a larger faint machine outline, labelled "A cog". Right: one standalone navy mark / badge, accented in orange, labelled "A brand". A thin divider between them. White background, minimal.'
    ),
    inlines: [
      img(
        'The cog purchase: one component in the client machine',
        'Subject: a minimal diagram of one small navy gear meshed among several faint grey gears inside a large rounded outline labelled "Client’s machine". Spare, flat, white background.'
      ),
      img(
        'The brand purchase: chosen by name',
        'Subject: a minimal diagram of one standalone navy badge / mark accented in orange, with a small figure pointing to it labelled "Chosen by name". Lots of white space, flat.'
      ),
    ],
  },
  {
    slug: 'complete-guide-marketing-systems-scale-beyond-referrals',
    hero: img(
      'From referral dependency to a marketing system',
      'Subject: a flat conceptual banner with two states joined by a thin orange arrow. Left: a single fragile node with one thin thread labelled "Referrals". Right: a simple connected system of nodes and a gear labelled "System". Navy line-art, white background.'
    ),
    inlines: [
      img(
        'The cost of referral dependency: an unpredictable pipeline',
        'Subject: a minimal line chart with a single jagged, erratic navy line on a thin axis labelled "Referral pipeline", with one orange dip marked to show a quiet stretch. Spare, flat, white background.'
      ),
      img(
        'A five-stage framework for building marketing systems',
        'Subject: a minimal horizontal five-step process. Five small evenly spaced navy nodes connected by one thin line, numbered 1 to 5, short generic labels under each. Grey labels, the final node accented in orange. Clean, evenly aligned.'
      ),
      img(
        'A 90-day roadmap in three phases',
        'Subject: a minimal horizontal timeline split into three equal segments labelled "Days 0-30", "Days 30-60", "Days 60-90", each with a small milestone dot. Navy line and dots, grey labels, the final segment accented in orange. Flat, spare.'
      ),
      img(
        'Measuring system success',
        'Subject: a minimal row of three simple gauge / metric icons side by side, each a thin semicircle dial with a needle, short labels beneath. Navy dials, grey labels, one dial’s needle accented in orange. Flat, clean, white background.'
      ),
    ],
  },
  {
    slug: 'consultant-family-business-succession-niche',
    hero: img(
      'A niche in family-business succession',
      'Subject: a flat conceptual banner of generational handover — two simple navy figure-nodes connected by a thin line, a small baton passing between them accented in orange, labelled "Succession". Minimal, lots of white space.'
    ),
    inlines: [],
  },
  {
    slug: 'corporate-trainer-speak-like-a-leader',
    hero: img(
      'Repositioned training: speak like a leader',
      'Subject: a flat conceptual banner of a simple navy line-art figure at a small podium addressing a few seats, a short speech-line accented in orange, labelled "Speak like a leader". Minimal, white background.'
    ),
    inlines: [],
  },
  {
    slug: 'creative-agency-breaking-feast-and-famine',
    hero: img(
      'From feast-and-famine to a steady pipeline',
      'Subject: a flat conceptual banner with two line trends. A wildly spiky navy line labelled "Feast & famine", and beside or below it a smooth steady navy line accented in orange labelled "Steady". Thin axis, minimal, white background.'
    ),
    inlines: [
      img(
        'Anchoring to a moment the buyer can feel',
        'Subject: a minimal diagram of a thin horizontal timeline with one clearly marked navy moment-point accented in orange, labelled "Trigger moment", and a small offer node attached to it. Spare, flat, white background.'
      ),
    ],
  },
  {
    slug: 'founder-led-agencies-stop-scaling',
    hero: img(
      'The founder bottleneck versus a distributed system',
      'Subject: a flat conceptual banner with two states joined by a thin orange arrow. Left: many thin lines all converging into one single navy node labelled "Founder". Right: lines distributed across several small connected nodes labelled "System". White background, minimal.'
    ),
    inlines: [
      img(
        'When the founder closes everything',
        'Subject: a minimal diagram: several small navy lead-nodes on the left, all funnelling through one central navy figure-node accented in orange labelled "Founder", a single output on the right. Flat, spare.'
      ),
      img(
        'From a service into a packaged offer',
        'Subject: a minimal left-to-right transformation. A loose cluster of faint grey service shapes labelled "Service", a thin orange arrow, one clean navy rectangle labelled "Offer". Evenly aligned, white background.'
      ),
    ],
  },
  {
    slug: 'linkedin-content-system-scales-without-burnout',
    hero: img(
      'One idea multiplied into many posts',
      'Subject: a flat conceptual banner. A single navy idea-node on the left labelled "One idea", thin grey lines fanning out to several small post-cards on the right, one card accented in orange. Minimal, white background.'
    ),
    inlines: [
      img(
        'The content pipeline: capture, batch, schedule',
        'Subject: a minimal horizontal three-step workflow. Three small navy nodes joined by thin arrows with short labels "Capture", "Batch", "Schedule". Grey labels, the final node accented in orange. Flat, evenly aligned.'
      ),
      img(
        'Repurposing one pillar into many formats',
        'Subject: a minimal hub-and-spoke diagram. One central navy node labelled "Pillar", thin grey spokes to several small outer nodes labelled with short format words, one outer node accented in orange. Spare, white background.'
      ),
    ],
  },
  {
    slug: 'mql-sql-handshake-fixing-drop-off',
    hero: img(
      'The handoff between marketing and sales',
      'Subject: a flat conceptual banner of two simple navy nodes labelled "Marketing" and "Sales" with a baton passing between them across a thin orange connecting line. Minimal, white background.'
    ),
    inlines: [
      img(
        'The black hole between marketing and sales',
        'Subject: a minimal diagram of two navy nodes "Marketing" and "Sales" separated by a gap, with a few small lead-dots falling down into the gap, one dot accented in orange. Spare, flat, white background.'
      ),
      img(
        'Aligned lead definitions: MQL versus SQL',
        'Subject: a minimal side-by-side of two simple navy criteria cards labelled "MQL" and "SQL", each with two or three short bullet lines, the "SQL" card accented in orange. Clean, evenly aligned.'
      ),
      img(
        'A service-level handoff process',
        'Subject: a minimal horizontal flow: node "Marketing", thin arrow through a small labelled gate "SLA", node "Sales". Navy nodes and line, grey labels, the "SLA" gate accented in orange. Flat, spare.'
      ),
    ],
  },
  {
    slug: 'offer-architecture-predictable-lead-engine',
    hero: img(
      'Simple flat blocks assembled into one packaged offer',
      'Subject: a clean, flat, front-facing conceptual banner of a packaged offer — three or four simple flat rectangles neatly stacked and aligned into one tidy column, shown straight-on with no perspective. Strictly flat 2D line-art, no isometric view, no 3D, no shading. Navy rectangles with thin outlines and exactly one orange rectangle as the keystone. Minimal or no text. Wide banner, generous white space.'
    ),
    inlines: [
      img(
        'Offer architecture as a three-layer stack building to predictable leads',
        'Subject: a minimal diagram of an offer architecture as a vertical stack of three labelled layers, connected by thin upward arrows. Bottom layer "Core skill", middle layer "Packaged offer", top layer "Predictable leads". Navy layers, grey labels, an orange accent on the top "Predictable leads" layer only. Flat, aligned, spare, lots of white space.'
      ),
      img(
        'A five-level offer ladder',
        'Subject: a minimal ascending five-step ladder / staircase, left low to right high, each step a thin navy bar slightly higher than the last, short generic labels, value rising. Navy steps, grey labels, the top step accented in orange. Flat, clean, white background.'
      ),
    ],
  },
  {
    slug: 'pitch-networking-events-lead-with-problem',
    hero: img(
      'At networking events, lead with the problem',
      'Subject: a flat conceptual banner of a single navy figure speaking, with a simple orange question-mark / problem icon above the audience that makes several small audience-nodes lean in. Minimal, white background.'
    ),
    inlines: [
      img(
        'Leading with the niche versus leading with the problem',
        'Subject: a minimal two-panel diagram. Left: a narrow navy funnel labelled "Lead with niche" with few nodes entering. Right: a wide navy funnel labelled "Lead with problem" with many nodes entering, accented in orange. Flat, spare, white background.'
      ),
      img(
        'A problem-first pitch structure',
        'Subject: a minimal horizontal three-step flow with short labels "Problem", "Who it’s for", "Outcome", three small navy nodes joined by thin arrows, the first "Problem" node accented in orange. Clean, evenly aligned.'
      ),
    ],
  },
  {
    slug: 'positioning-matrix-b2b-services',
    hero: img(
      'A positioning matrix with a single point in the premium quadrant',
      'Subject: a clean conceptual banner illustration of strategic positioning. A simple 2x2 grid with thin axes and a single dot plotted in the top-right quadrant. Minimal or no text. Navy grid lines and the plotted dot, grey axis ticks, a soft orange highlight on the top-right quadrant where the dot sits. Wide banner composition, lots of white space.'
    ),
    inlines: [
      img(
        'A 2x2 positioning matrix highlighting the defendable, premium quadrant',
        'Subject: a minimal 2x2 positioning matrix diagram. Horizontal axis labelled "Value" (low to high), vertical axis labelled "Urgency" (low to high). Four lightly outlined quadrants; the top-right quadrant labelled "Defendable / premium" and gently highlighted, with a single dot marked inside it. Navy axes and labels, grey gridlines, an orange highlight on the premium quadrant only. Clean Swiss diagram, well spaced.'
      ),
      img(
        'The three positioning dimensions: pain, urgency, value',
        'Subject: a minimal diagram of three horizontal slider bars stacked vertically, labelled "Pain", "Urgency", "Value", each with a small marker. Navy bars and markers, grey labels, the "Value" slider marker accented in orange to mark the high-value intersection. Flat, spare, white background.'
      ),
    ],
  },
  {
    slug: 'praise-trap-admired-but-not-paid',
    hero: img(
      'Admired but not paid',
      'Subject: a flat conceptual banner contrasting two simple icons joined by a thin divider. Left: a small clapping / applause icon labelled "Praise". Right: a simple wallet or rupee icon labelled "Paid", accented in orange. Minimal, white background.'
    ),
    inlines: [
      img(
        'Where the line sits between free value and paid work',
        'Subject: a minimal diagram of a single thin horizontal line with a clearly marked navy boundary point accented in orange; left side labelled "Free value", right side labelled "Paid work". Spare, flat, white background.'
      ),
      img(
        'A three-metric diagnostic',
        'Subject: a minimal row of three simple gauge icons side by side, each a thin semicircle dial with a needle and a short label beneath. Navy dials, grey labels, one needle accented in orange. Flat, clean, white background.'
      ),
    ],
  },
  {
    slug: 'price-objections-start-with-your-pipeline',
    hero: img(
      'A thin pipeline weakens price conviction',
      'Subject: a flat conceptual banner with two states joined by a thin orange arrow. Left: a nearly empty pipeline with one node and a downward price arrow labelled "Thin pipeline". Right: a full pipeline with several nodes and a steady price labelled "Full pipeline", accented in orange. Minimal, white background.'
    ),
    inlines: [
      img(
        'Three structural models instead of a discount',
        'Subject: a minimal side-by-side of three simple navy option-cards, each with a short generic label, evenly spaced, the third card accented in orange. Flat, clean, white background.'
      ),
    ],
  },
  {
    slug: 'pricing-signals-what-your-rates-tell-prospects',
    hero: img(
      'Your price is a signal',
      'Subject: a flat conceptual banner of a single navy price-tag icon emitting a few thin concentric signal arcs, one arc accented in orange, labelled "Price = signal". Minimal, lots of white space.'
    ),
    inlines: [
      img(
        'The mixed message: premium positioning, budget price',
        'Subject: a minimal two-state diagram. Left: a high navy "premium" marker paired with a low price marker, with a small orange clash / mismatch mark, labelled "Mixed message". Right: both markers aligned at the same height labelled "Aligned". Flat, spare, white background.'
      ),
      img(
        'Pricing signals from budget to premium',
        'Subject: a minimal horizontal scale from "Budget" on the left to "Premium" on the right, with three or four small marker points along a thin navy line, the "Premium" end accented in orange. Grey labels, clean, evenly spaced.'
      ),
    ],
  },
  {
    slug: 'risks-of-referral-dependency-blog-article',
    hero: img(
      'A pipeline hanging by a single thread',
      'Subject: a flat conceptual banner of a single navy node suspended by one thin thread accented in orange, labelled "Referral-dependent", conveying fragility through minimal line-art. Lots of white space.'
    ),
    inlines: [
      img(
        'A single point of failure: one referral source',
        'Subject: a minimal diagram of several small navy lead-nodes all connected to one single source node accented in orange, labelled "One source". Spare, flat, white background.'
      ),
      img(
        'What to build instead: diversified channels',
        'Subject: a minimal diagram of three or four small navy channel-nodes each feeding into one central pipeline node, balanced and connected, one channel accented in orange, labelled "Multiple channels". Flat, evenly aligned.'
      ),
    ],
  },
  {
    slug: 'social-media-followers-to-clients',
    hero: img(
      'Turning followers into clients',
      'Subject: a flat conceptual banner of a simple funnel: a wide band of many small navy follower-dots at the top narrowing down to a few client-nodes at the bottom accented in orange, labelled "Followers to clients". Minimal, white background.'
    ),
    inlines: [
      img(
        'From followers to engagement to clients',
        'Subject: a minimal horizontal three-step flow with short labels "Followers", "Engagement", "Clients", three small navy nodes joined by thin arrows, the final "Clients" node accented in orange. Clean, evenly aligned.'
      ),
    ],
  },
  {
    slug: 'video-studio-out-of-the-editing-rate-trap',
    hero: img(
      'From videos by the unit to a packaged set',
      'Subject: a flat conceptual banner with two states joined by a thin orange arrow. Left: several identical small navy video-clip icons priced per unit, labelled "By the unit". Right: one bundled navy package labelled "A set with a purpose", accented in orange. Minimal, white background.'
    ),
    inlines: [
      img(
        'Becoming a category, not a commodity',
        'Subject: a minimal two-state diagram. Left: a row of identical faint grey commodity squares labelled "Commodity". Thin orange arrow. Right: one distinct navy shape standing apart labelled "Category". Flat, spare, white background.'
      ),
    ],
  },
];
