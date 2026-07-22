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
  'Premium editorial concept illustration in a confident flat modern vector style — the kind of metaphor-driven graphic a high-end B2B strategy brand uses to headline an article. NOT a labelled flowchart, NOT boxes-and-arrows, NOT a wireframe.',
  'Express ONE clear idea through a single concrete visual metaphor (a machine, a gear train, a balance scale, a tangle resolving into an orderly network, a signal, a gauge, a path).',
  'Background is pure flat white #FFFFFF, edge to edge and seamless — no cream, beige, grey wash, texture, border, or vignette.',
  'Strict brand palette ONLY: deep navy #1F3D73 is the dominant colour; a warm orange #F97316 is the single sparing accent — one focal glow / needle / highlight the eye lands on; medium-to-light grey (#475569 and #CBD5E1) is for secondary, background, or "before / noise" elements. Absolutely no other colours — no other blues, no teal, green, purple, yellow, or pastels.',
  'Deliberately combine two registers: fine confident line-art for context and secondary shapes, PLUS bold SOLID FILLED navy shapes for the focal subject. Orange is reserved for the one most important thing.',
  'Flat clean 2D geometry, generous negative space, everything on a tidy implied grid. A very subtle soft shadow or a soft orange radial glow is allowed for depth — but no heavy gradients, no 3D render, no photorealism, no skeuomorphic texture, no bevels.',
  'Restrained, intelligent, a little mechanical — like the illustration-diagrams in a top management-consultancy report. Let it breathe. No text or labels unless explicitly requested; if requested, keep them very short in a clean geometric sans-serif.',
].join(' ');

const W = '1536x1024';

export const pages = [
  {
    id: 'page-home-funnel',
    out: 'public/images/pages/home-funnel.webp',
    size: W,
    // Alt describes what is DRAWN, not what the section is about — the prompt below
    // renders a prospect-filtering metaphor, not the three-step engagement ladder.
    alt: 'A scatter of unqualified prospects drawn through a funnel and emerging as one committed client',
    prompt:
      'Metaphor: a wide scatter of thin grey line-dots (many unqualified prospects, all noise) on the left is drawn through a bold solid-filled navy funnel in the centre and emerges on the right as a single solid navy diamond lit with a soft orange radial glow — one committed client. The funnel is the confident focal object; the scattered dots are light grey line-art. Wide banner, lots of white space, no text.',
  },
  {
    id: 'page-clear-stages',
    out: 'public/images/pages/clear-stages.webp',
    size: W,
    alt: 'CLEAR in three stages: Package, Prove and Sell, Systemise',
    prompt:
      'Metaphor: three bold, solid-filled navy concept-icons in a confident row on one clean baseline, connected by a fine navy line with small orange nodes between them, each icon casting a very subtle soft shadow. (1) a solid navy cube being wrapped and sealed — packaging an offer; (2) two solid navy speech/proposal forms meeting with a small orange spark where they touch — proving and selling in real conversations; (3) a solid navy gear meshed with a smaller solid orange gear — a repeatable system running. Premium, generous white space, no text labels.',
  },
  {
    id: 'page-clear-pricing',
    out: 'public/images/pages/clear-pricing.webp',
    size: W,
    alt: 'CLEAR payment schedule over three months: 50,000 then 1 lakh then 1 lakh',
    prompt:
      'Metaphor: a confident three-milestone payment timeline on one bold navy baseline. Three solid-filled milestone circles with very subtle soft shadows — the first accented in solid orange with a soft glow to mark the start, the other two solid navy. One short word-label beneath each circle in a clean geometric sans-serif, exactly: "Month 1", "Month 2", "Month 3". Do NOT draw any currency amounts, rupee symbols or numbers other than 1, 2, 3. Premium, spare, lots of white space.',
  },
  {
    id: 'page-scorecard-bands',
    out: 'public/images/pages/scorecard-bands.webp',
    size: W,
    alt: 'Three scorecard bands from Referral-Dependent to System-Ready',
    prompt:
      'Metaphor: a confident diagnostic gauge — one bold semicircular dial reading left (low) to right (high), divided into three arcs. The low arc light grey, the middle arc navy, the highest arc solid orange with a soft orange glow, and a bold solid navy needle swinging toward the orange. Short labels beneath the arcs in a clean geometric sans-serif: "Referral-Dependent", "One Engine Short", "System-Ready". Premium instrument-panel feel, lots of white space.',
  },
  {
    id: 'page-prc-flow',
    out: 'public/images/pages/prc-flow.webp',
    size: W,
    alt: 'Pipeline Reality Check: your data in, one week, a written verdict out',
    prompt:
      'Metaphor: three bold solid-filled navy concept-icons in a confident row on one clean baseline, joined by a fine navy line with small orange nodes, each with a very subtle soft shadow. (1) a solid navy stack of data rows / spreadsheet — twelve months of deals going in; (2) a solid navy clock or single calendar tile with a small orange marker — one week; (3) a solid navy report document with an orange wax-seal / verdict mark — a written verdict coming out. Premium, generous white space, no extra text.',
  },
  {
    id: 'page-client-acquisition-system',
    out: 'public/images/pages/client-acquisition-system.webp',
    size: W,
    alt: 'A machine that turns scattered strangers into a steady line of clients',
    prompt:
      'Metaphor: a confident client-producing machine. LEFT: a loose scatter of thin grey line-dots — strangers, noise. CENTRE: a bold solid-filled navy machine housing with two meshed navy gears visible and one small orange indicator lamp glowing softly — the system, running. RIGHT: the dots emerge as an orderly, evenly spaced queue of solid navy circles on one clean baseline, the front circle lit with a soft orange glow — clients arriving on purpose. Wide banner, generous white space, no text.',
  },
  {
    id: 'page-client-acquisition-system-parts',
    out: 'public/images/pages/client-acquisition-system-parts.webp',
    size: W,
    alt: 'Five connected parts of one system, in a row on a single baseline',
    prompt:
      'Metaphor: five bold solid-filled navy concept-icons in a confident row on one clean baseline, joined by a fine navy line with small orange nodes between them, each with a very subtle soft shadow. (1) a solid navy cube wrapped with a band — one packaged offer; (2) a solid navy magnet drawing three small grey dots toward it — the right prospects arriving; (3) a solid navy open document with a small rising-graph mark — proof building trust; (4) two solid navy speech forms meeting with a small orange spark at the touch point — the sales conversation; (5) a solid navy circular loop-arrow enclosing a small orange core — delivered work feeding the next client. Premium, generous white space, no text labels.',
  },
  {
    id: 'page-client-acquisition-system-rhythm',
    out: 'public/images/pages/client-acquisition-system-rhythm.webp',
    size: W,
    alt: 'A steady weekly pulse running above a row of calendar tiles',
    prompt:
      'Metaphor: a confident weekly rhythm. A long row of clean flat calendar-week tiles in light grey line-art runs along the bottom. Above them, one continuous bold navy pulse-line beats steadily left to right, with one small solid orange peak on every tile — the same small effort, every single week, never stopping. The final tile carries a solid navy circle lit with a soft orange glow — the compounding result. Wide banner, spare and mechanical, generous white space, no text.',
  },
  {
    id: 'page-about-pathway',
    out: 'public/images/pages/about-pathway.webp',
    size: W,
    alt: 'From strategy to a working pipeline',
    prompt:
      'Metaphor: a confident left-to-right transformation. LEFT: a dense tangle of overlapping thin navy lines knotted around a single small orange core — ad-hoc, referral-dependent selling, all noise. A bold solid orange arrow crosses the centre. RIGHT: the tangle resolves into a clean orderly node-network — solid-filled navy nodes joined by straight navy links, three nodes lit with a soft orange glow — a working, connected pipeline. Premium editorial concept illustration, lots of white space, no text.',
  },
];

// helper to keep entries terse
const img = (alt, prompt) => ({ size: W, alt, prompt });

export const posts = [
 {
 slug: 'stop-relying-on-referrals',
 hero: img(
 'A pipeline tap held by another hand versus a tap you own',
 'Metaphor: two water taps side by side feeding one pipeline channel below. LEFT: a light grey line-art tap turned by a detached grey hand from outside the frame — flow you do not control, drops falling irregularly. RIGHT: a bold solid-filled navy tap with its own handle, a steady even stream falling, the stream lit with a soft orange glow — flow you own. Flat premium vector, generous white space, no text.'
 ),
 inlines: [
 img(
 'The feast-or-famine revenue wave',
 'Subject: a single bold navy line on a small clean axis rising into a high crest then collapsing into a deep trough, repeating twice — a boom-and-bust wave. One small solid orange dot marks the bottom of a trough. Beside it, a faint light-grey straight steady line shows the alternative. Minimal, calm, white background, no text.'
 ),
 img(
 'Trust, timing and framing rebuilt as three deliberate blocks',
 'Subject: three bold solid-filled navy blocks being placed onto one clean baseline by a fine line-art crane hook, the middle block accented with a small soft orange glow. To the left, faint grey outlines of the same three blocks floating loose — the advantages a referral carries by luck. Flat, spare, generous white space, no text.'
 ),
 img(
 'Four weeks, four small deliberate steps',
 'Subject: four clean flat calendar tiles in a confident row on one baseline, each holding one simple solid navy mark: a list, a wrapped cube, a clock face, a document. A fine navy line threads through all four with a small orange node at the final tile. Minimal, tidy grid, white background, no text.'
 ),
 img(
 'Two streams feeding one pipeline',
 'Subject: two channels converging into one wider channel. The upper channel is light grey line-art with irregular dots — referrals, arriving on luck. The lower channel is bold solid navy with evenly spaced dots — the deliberate channel. Where they merge, the combined stream is navy with one orange-lit dot at the front. Flat, spare, no text.'
 ),
 ],
 },
 {
 slug: 'lead-generation-for-service-business',
 hero: img(
 'A huge volume funnel versus one precise path to a few right clients',
 'Metaphor: a contrast banner. LEFT: a very large light-grey line-art funnel being filled by a dense cloud of tiny grey dots, a few dropping out below — the SaaS volume machine, all noise. RIGHT: a single bold solid navy path drawn from one navy figure directly to a short tidy row of five solid navy diamonds, the first diamond lit with a soft orange glow — few, chosen, right. Flat premium vector, generous white space, no text.'
 ),
 inlines: [
 img(
 'The two leads worth having: a warm path and a lit beacon',
 'Subject: a two-panel minimal diagram. LEFT panel: three solid navy circles joined by fine lines, the connecting line highlighted — a warm introduction path through people who know each other. RIGHT panel: one small lighthouse-like beacon in solid navy casting a soft orange light cone, with two grey dots turning toward it — problem-aware prospects finding you. Flat, spare, white background, no text.'
 ),
 img(
 'A founder-sized week powering four small channels',
 'Subject: one small solid navy hourglass at the left, from which four fine navy lines run to four simple solid navy icons in a row: an envelope, a handshake, a document, a podium. One line carries a small orange node. The lines are thin and short — a little time, deliberately split. Minimal, tidy, white background, no text.'
 ),
 img(
 'Qualifying out: many enter, few pass, on purpose',
 'Subject: a bold solid navy gate or sieve in the centre of the frame. From the left, a loose crowd of light grey line-art shapes of mixed sizes approaches; to the right of the gate only three solid navy diamonds continue on a clean baseline, the front one lit with a soft orange glow. A few grey shapes turn politely away below. Flat, spare, no text.'
 ),
 img(
 'Lead generation as one gear inside a larger machine',
 'Subject: a train of four meshed flat gears. One gear is solid orange and slightly highlighted — lead generation; the other three are solid navy — offer, follow-up, closing. All four visibly mesh; none turns alone. Generous white space, flat 2D, subtle soft shadows, no text.'
 ),
 ],
 },
 {
 slug: 'founder-led-sales-trap',
 hero: img(
 'Every deal routed through one narrow point: the founder',
 'Metaphor: many fine grey lines from the left, each starting at a small grey circle — prospects — all converging into one narrow bold gap occupied by a single solid navy figure, then fanning out on the right as only a few finished navy diamonds. The figure glows softly orange at the centre — brilliant, and a bottleneck. Flat premium vector, generous white space, no text.'
 ),
 inlines: [
 img(
 'Three bodies of knowledge locked in one vault',
 'Subject: a bold solid navy vault door, slightly ajar, with a soft orange glow escaping the gap. Inside, three simple shapes are visible in outline: a checklist, a speech form, a balance scale — the qualification instinct, the stories, the deal judgement. Flat, spare, subtle shadow, white background, no text.'
 ),
 img(
 'The sale, documented: from one head to four pages',
 'Subject: a small solid navy head-profile on the left; four fine lines flow from it to four clean flat document tiles standing in a row on one baseline, each with a simple navy mark — a checklist, a question mark, a quote block, a rule line. The third document is accented with a small orange corner. Minimal, tidy, no other text.'
 ),
 img(
 'Handing over the sale in stages, not in one leap',
 'Subject: a staircase of four broad flat steps rising left to right. On each step a baton-like solid navy bar is passed from one small navy figure to another; on the top step only one figure remains, lit with a soft orange glow — the part that stays the founder’s. Flat, spare, clean baseline, white background, no text.'
 ),
 img(
 'The founder reserved for the few deals that need them',
 'Subject: a row of eight small deal-circles on one clean baseline; six are solid navy and connected below to a simple gear — handled by the system; two larger circles at the right are lit with a soft orange glow and connect upward by a fine line to one small solid navy figure — the founder, applied only where it matters. Minimal, no text.'
 ),
 ],
 },
 {
 slug: 'how-to-productize-your-service',
 hero: img(
 'Bespoke chaos packaged into one clear offer with a price',
 'Metaphor: a transformation banner. LEFT: a loose pile of mismatched light-grey line-art shapes tangled with a thin thread — bespoke everything, reinvented each time. A bold solid orange arrow crosses the centre. RIGHT: one confident solid navy cube, cleanly wrapped with a band, with a small flat tag attached whose edge is solid orange — one named, priced, repeatable offer. Flat premium vector, generous white space, no text.'
 ),
 inlines: [
 img(
 'Four commitments that make one package: scope, outcome, price, timeline',
 'Subject: four flat square tiles clicking together into one larger square, drawn slightly apart so the joins show. Three tiles are solid navy with simple marks — a boundary frame, a target, a clock; the fourth tile is solid navy with a small solid orange price-tag mark. Subtle soft shadows, tidy grid, white background, no text.'
 ),
 img(
 'Choosing the one engagement your history already proves',
 'Subject: a tidy grid of twelve light grey line-art project shapes; one shape near the centre is solid navy, ringed by a fine orange circle with a soft glow — the engagement run many times, valued, and worth packaging. Everything else stays quiet grey. Minimal, generous white space, no text.'
 ),
 img(
 'A stated price on the door instead of a negotiation',
 'Subject: a single solid navy storefront-like doorway on a clean baseline, with one flat clear tag hanging beside it, the tag solid orange and blank — the price, stated up front. Approaching from the left, three small grey line-art figures, the first stepping confidently toward the door. Flat, spare, no text.'
 ),
 img(
 'A productised front door, a custom back room',
 'Subject: a simple flat floor-plan view: a small bold solid navy doorway at the front lit with a soft orange glow — the packaged offer — opening into a larger, quieter room drawn in fine grey line-art containing three loose bespoke shapes — the custom work behind it. One fine navy path runs from the door into the room. Minimal, no text.'
 ),
 ],
 },
 {
 slug: 'ad-agency-from-big-clients-to-many-small',
 hero: img(
 'Shifting from a few big clients to many small ones',
 'Subject: a flat conceptual banner contrasting two simple states joined by a thin orange arrow. Left: one large navy circle. Right: a tidy grid of many small navy circles. Minimal text, lots of white space.'
 ),
 inlines: [
 img(
 'Owning the result instead of delivering the brief',
 'Subject: a minimal two-state diagram. Left: a navy document icon. Thin orange arrow. Right: a simple target / outcome icon. Spare, clean, plenty of white space.'
 ),
 ],
 },
 {
 slug: 'advertising-agency-one-sellable-offer',
 hero: img(
 'Scattered services converging into one sellable offer',
 'Subject: a flat conceptual banner. On the left, several small scattered navy shapes of different kinds; thin grey lines funnel them toward a single clean navy rectangle on the right, outlined and accented in orange. Lots of white space.'
 ),
 inlines: [
 img(
 'Packaging chaos into one thing with a name and a price',
 'Subject: a minimal diagram of a single packaged offer — one clean rectangle with a small price tag detail in orange. Around it, a few faint grey scattered shapes being drawn in. Flat, spare, white background.'
 ),
 ],
 },
 {
 slug: 'ai-adoption-business-model-problem',
 hero: img(
 'AI adoption is a business-model shift, not a tool',
 'Subject: a flat conceptual banner contrasting two simple line trends on a small axis. One straight diagonal navy line. Beside it, a line that stays flat then steps sharply upward, accented in orange. Minimal, calm, white background.'
 ),
 inlines: [
 img(
 'Effort-driven work versus leverage',
 'Subject: a minimal two-panel diagram. Left panel: many small navy figures all pushing. Right panel: one small navy figure beside a simple system block, output arrow larger, accented in orange. Flat, spare.'
 ),
 ],
 },
 {
 slug: 'aida-to-ai-messaging-frameworks-workflows',
 hero: img(
 'A classic framework transformed into an AI workflow',
 'Subject: a flat conceptual banner. On the left a simple navy funnel shape; a thin orange arrow; on the right a simple connected workflow of small nodes and a gear. Minimal, white background.'
 ),
 inlines: [
 img(
 'The AIDA funnel: Attention, Interest, Desire, Action',
 'Subject: a minimal vertical four-stage funnel narrowing top to bottom, each stage a thin horizontal band with a short label:,,. Navy bands, grey labels, the bottom stage accented in orange. Clean, spare.'
 ),
 img(
 'From framework to operational workflow',
 'Subject: a minimal left-to-right transformation. A single navy box, a thin orange arrow, then a row of three small connected step-nodes,. Flat, evenly aligned, white background.'
 ),
 ],
 },
 {
 slug: 'boutique-law-firm-productised-advisory',
 hero: img(
 'From reactive practice to proactive advisory',
 'Subject: a flat conceptual banner with two states joined by a thin orange arrow. Left: a simple alert / lightning icon. Right: a simple repeating-calendar icon. Navy line-art, grey labels, white background.'
 ),
 inlines: [
 img(
 'An offer a stranger can say yes to',
 'Subject: a minimal diagram of one clean navy rectangle with a small orange checkmark beside it, and a simple figure approaching from the left. Flat, spare, white background.'
 ),
 ],
 },
 {
 slug: 'branding-agency-niche-specialisation',
 hero: img(
 'From generalist to known for one thing',
 'Subject: a flat conceptual banner. Left: a cluster of several faint grey identical icons. Thin orange arrow. Right: one single bold navy icon. Minimal, lots of white space.'
 ),
 inlines: [
 img(
 'Selling the outcome, not the deliverables',
 'Subject: a minimal two-state diagram. Left: a small stack of navy deliverable icons (files, shapes). Thin orange arrow. Right: a single target icon, accented in orange. Flat, clean.'
 ),
 ],
 },
 {
 slug: 'cog-vs-brand-purchase-blog-article',
 hero: img(
 'Bought as a cog versus chosen as a brand',
 'Subject: a flat conceptual banner contrasting two states. Left: a single small navy gear sitting inside a larger faint machine outline. Right: one standalone navy mark / badge, accented in orange. A thin divider between them. White background, minimal.'
 ),
 inlines: [
 img(
 'The cog purchase: one component in the client machine',
 'Subject: a minimal diagram of one small navy gear meshed among several faint grey gears inside a large rounded outline. Spare, flat, white background.'
 ),
 img(
 'The brand purchase: chosen by name',
 'Subject: a minimal diagram of one standalone navy badge / mark accented in orange, with a small figure pointing to it. Lots of white space, flat.'
 ),
 ],
 },
 {
 slug: 'complete-guide-marketing-systems-scale-beyond-referrals',
 hero: img(
 'From referral dependency to a marketing system',
 'Subject: a flat conceptual banner with two states joined by a thin orange arrow. Left: a single fragile node with one thin thread. Right: a simple connected system of nodes and a gear. Navy line-art, white background.'
 ),
 inlines: [
 img(
 'The cost of referral dependency: an unpredictable pipeline',
 'Subject: a minimal line chart with a single jagged, erratic navy line on a thin axis, with one orange dip marked to show a quiet stretch. Spare, flat, white background.'
 ),
 img(
 'A five-stage framework for building marketing systems',
 'Subject: a minimal horizontal five-step process. Five small evenly spaced navy nodes connected by one thin line, numbered 1 to 5, short generic labels under each. Grey labels, the final node accented in orange. Clean, evenly aligned.'
 ),
 img(
 'A 90-day roadmap in three phases',
 'Subject: a minimal horizontal timeline split into three equal segments,,, each with a small milestone dot. Navy line and dots, grey labels, the final segment accented in orange. Flat, spare.'
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
 'Subject: a flat conceptual banner of generational handover — two simple navy figure-nodes connected by a thin line, a small baton passing between them accented in orange. Minimal, lots of white space.'
 ),
 inlines: [],
 },
 {
 slug: 'corporate-trainer-speak-like-a-leader',
 hero: img(
 'Repositioned training: speak like a leader',
 'Subject: a flat conceptual banner of a simple navy line-art figure at a small podium addressing a few seats, a short speech-line accented in orange. Minimal, white background.'
 ),
 inlines: [],
 },
 {
 slug: 'creative-agency-breaking-feast-and-famine',
 hero: img(
 'From feast-and-famine to a steady pipeline',
 'Subject: a flat conceptual banner with two line trends. A wildly spiky navy line, and beside or below it a smooth steady navy line accented in orange. Thin axis, minimal, white background.'
 ),
 inlines: [
 img(
 'Anchoring to a moment the buyer can feel',
 'Subject: a minimal diagram of a thin horizontal timeline with one clearly marked navy moment-point accented in orange, and a small offer node attached to it. Spare, flat, white background.'
 ),
 ],
 },
 {
 slug: 'creative-founder-artist-or-business-blog-article',
 hero: img(
 'The creative founder torn between art and business',
 'Subject: a flat conceptual banner contrasting two states separated by a thin divider. Left: one expressive, irregular freeform navy brush-stroke shape — unrepeatable art. Right: a tidy grid of identical small solid navy squares — a repeatable business, one square accented in orange. Minimal, lots of white space.'
 ),
 inlines: [
 img(
 'The choice: artist or business owner',
 'Subject: a minimal diagram of a single thin navy path splitting at a clear fork into two branches. One branch ends in an expressive freeform shape, the other in a simple solid navy gear accented in orange. Flat, spare, white background.'
 ),
 ],
 },
 {
 slug: 'disqualify-prospects-generate-revenue-blog-article',
 hero: img(
 'Disqualifying prospects: a filter that protects selling time',
 'Subject: a flat conceptual banner. A wide scatter of faint grey dots on the left passes through a bold solid navy filter / gate in the centre; only a few solid navy dots emerge on the right, one lit with a soft orange glow. Minimal, lots of white space.'
 ),
 inlines: [
 img(
 'Fixed selling time consumed by the wrong conversations',
 'Subject: a minimal diagram of one thin horizontal time-bar, most of it filled with faint grey segments — hours lost to the wrong prospects — with a small remaining solid navy segment accented in orange. Spare, flat, white background.'
 ),
 img(
 'A three-part disqualification system',
 'Subject: a minimal horizontal three-step flow: three small solid navy nodes joined by thin arrows — a simple profile card, a signal / megaphone, a short checklist — the checklist node accented in orange. Clean, evenly aligned, white background.'
 ),
 ],
 },
 {
 slug: 'founder-led-agencies-stop-scaling',
 hero: img(
 'The founder bottleneck versus a distributed system',
 'Subject: a flat conceptual banner with two states joined by a thin orange arrow. Left: many thin lines all converging into one single navy node. Right: lines distributed across several small connected nodes. White background, minimal.'
 ),
 inlines: [
 img(
 'When the founder closes everything',
 'Subject: a minimal diagram: several small navy lead-nodes on the left, all funnelling through one central navy figure-node accented in orange, a single output on the right. Flat, spare.'
 ),
 img(
 'From a service into a packaged offer',
 'Subject: a minimal left-to-right transformation. A loose cluster of faint grey service shapes, a thin orange arrow, one clean navy rectangle. Evenly aligned, white background.'
 ),
 ],
 },
 {
 slug: 'linkedin-content-system-scales-without-burnout',
 hero: img(
 'One idea multiplied into many posts',
 'Subject: a flat conceptual banner. A single navy idea-node on the left, thin grey lines fanning out to several small post-cards on the right, one card accented in orange. Minimal, white background.'
 ),
 inlines: [
 img(
 'The content pipeline: capture, batch, schedule',
 'Subject: a minimal horizontal three-step workflow. Three small navy nodes joined by thin arrows with. Grey labels, the final node accented in orange. Flat, evenly aligned.'
 ),
 img(
 'Repurposing one pillar into many formats',
 'Subject: a minimal hub-and-spoke diagram. One central navy node, thin grey spokes to several small outer nodes labelled with short format words, one outer node accented in orange. Spare, white background.'
 ),
 ],
 },
 {
 slug: 'mql-sql-handshake-fixing-drop-off',
 hero: img(
 'The handoff between marketing and sales',
 'Subject: a flat conceptual banner of two simple navy nodes and with a baton passing between them across a thin orange connecting line. Minimal, white background.'
 ),
 inlines: [
 img(
 'The black hole between marketing and sales',
 'Subject: a minimal diagram of two navy nodes and separated by a gap, with a few small lead-dots falling down into the gap, one dot accented in orange. Spare, flat, white background.'
 ),
 img(
 'Aligned lead definitions: MQL versus SQL',
 'Subject: a minimal side-by-side of two simple navy criteria cards and, each with two or three short bullet lines, the card accented in orange. Clean, evenly aligned.'
 ),
 img(
 'A service-level handoff process',
 'Subject: a minimal horizontal flow: node, thin arrow through a small labelled gate, node. Navy nodes and line, grey labels, the gate accented in orange. Flat, spare.'
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
 'Subject: a minimal diagram of an offer architecture as a vertical stack of three labelled layers, connected by thin upward arrows. Bottom layer, middle layer, top layer. Navy layers, grey labels, an orange accent on the top layer only. Flat, aligned, spare, lots of white space.'
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
 'Subject: a minimal two-panel diagram. Left: a narrow navy funnel with few nodes entering. Right: a wide navy funnel with many nodes entering, accented in orange. Flat, spare, white background.'
 ),
 img(
 'A problem-first pitch structure',
 'Subject: a minimal horizontal three-step flow with, three small navy nodes joined by thin arrows, the first node accented in orange. Clean, evenly aligned.'
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
 'Subject: a minimal 2x2 positioning matrix diagram. Horizontal axis (low to high), vertical axis (low to high). Four lightly outlined quadrants; the top-right quadrant and gently highlighted, with a single dot marked inside it. Navy axes and labels, grey gridlines, an orange highlight on the premium quadrant only. Clean Swiss diagram, well spaced.'
 ),
 img(
 'The three positioning dimensions: pain, urgency, value',
 'Subject: a minimal diagram of three horizontal slider bars stacked vertically,,, each with a small marker. Navy bars and markers, grey labels, the slider marker accented in orange to mark the high-value intersection. Flat, spare, white background.'
 ),
 ],
 },
 {
 slug: 'praise-trap-admired-but-not-paid',
 hero: img(
 'Admired but not paid',
 'Subject: a flat conceptual banner contrasting two simple icons joined by a thin divider. Left: a small clapping / applause icon. Right: a simple wallet or rupee icon, accented in orange. Minimal, white background.'
 ),
 inlines: [
 img(
 'Where the line sits between free value and paid work',
 'Subject: a minimal diagram of a single thin horizontal line with a clearly marked navy boundary point accented in orange; left side, right side. Spare, flat, white background.'
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
 'Subject: a flat conceptual banner with two states joined by a thin orange arrow. Left: a nearly empty pipeline with one node and a downward price arrow. Right: a full pipeline with several nodes and a steady price, accented in orange. Minimal, white background.'
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
 'Subject: a flat conceptual banner of a single navy price-tag icon emitting a few thin concentric signal arcs, one arc accented in orange. Minimal, lots of white space.'
 ),
 inlines: [
 img(
 'The mixed message: premium positioning, budget price',
 'Subject: a minimal two-state diagram. Left: a high navy marker paired with a low price marker, with a small orange clash / mismatch mark. Right: both markers aligned at the same height. Flat, spare, white background.'
 ),
 img(
 'Pricing signals from budget to premium',
 'Subject: a minimal horizontal scale from on the left to on the right, with three or four small marker points along a thin navy line, the end accented in orange. Grey labels, clean, evenly spaced.'
 ),
 ],
 },
 {
 slug: 'risks-of-referral-dependency-blog-article',
 hero: img(
 'A pipeline hanging by a single thread',
 'Subject: a flat conceptual banner of a single navy node suspended by one thin thread accented in orange, conveying fragility through minimal line-art. Lots of white space.'
 ),
 inlines: [
 img(
 'A single point of failure: one referral source',
 'Subject: a minimal diagram of several small navy lead-nodes all connected to one single source node accented in orange. Spare, flat, white background.'
 ),
 img(
 'What to build instead: diversified channels',
 'Subject: a minimal diagram of three or four small navy channel-nodes each feeding into one central pipeline node, balanced and connected, one channel accented in orange. Flat, evenly aligned.'
 ),
 ],
 },
 {
 slug: 'social-media-followers-to-clients',
 hero: img(
 'Turning followers into clients',
 'Subject: a flat conceptual banner of a simple funnel: a wide band of many small navy follower-dots at the top narrowing down to a few client-nodes at the bottom accented in orange. Minimal, white background.'
 ),
 inlines: [
 img(
 'From followers to engagement to clients',
 'Subject: a minimal horizontal three-step flow with, three small navy nodes joined by thin arrows, the final node accented in orange. Clean, evenly aligned.'
 ),
 ],
 },
 {
 slug: 'video-studio-out-of-the-editing-rate-trap',
 hero: img(
 'From videos by the unit to a packaged set',
 'Subject: a flat conceptual banner with two states joined by a thin orange arrow. Left: several identical small navy video-clip icons priced per unit. Right: one bundled navy package, accented in orange. Minimal, white background.'
 ),
 inlines: [
 img(
 'Becoming a category, not a commodity',
 'Subject: a minimal two-state diagram. Left: a row of identical faint grey commodity squares. Thin orange arrow. Right: one distinct navy shape standing apart. Flat, spare, white background.'
 ),
 ],
 },
];
