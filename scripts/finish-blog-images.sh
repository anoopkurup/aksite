#!/usr/bin/env bash
# Resume the blog-image regeneration that stopped at the OpenAI billing cap.
# Regenerates ONLY the 13 posts that still have old-style images (in the new
# rich concept-illustration style). Run after raising your OpenAI usage limit.
#
#   bash scripts/finish-blog-images.sh
#
# Safe to re-run: --force overwrites each post's webp in place; the markdown
# already references those paths, so nothing needs re-wiring.
set -e
cd "$(dirname "$0")/.."

REMAINING=(
  aida-to-ai-messaging-frameworks-workflows        # failed on a one-off 503, not billing
  founder-led-agencies-stop-scaling
  linkedin-content-system-scales-without-burnout
  mql-sql-handshake-fixing-drop-off
  offer-architecture-predictable-lead-engine
  pitch-networking-events-lead-with-problem
  positioning-matrix-b2b-services
  praise-trap-admired-but-not-paid
  price-objections-start-with-your-pipeline
  pricing-signals-what-your-rates-tell-prospects
  risks-of-referral-dependency-blog-article
  social-media-followers-to-clients
  video-studio-out-of-the-editing-rate-trap
)

for slug in "${REMAINING[@]}"; do
  npm run images -- --only "$slug" --force
done

echo "Done. All 13 remaining posts regenerated."
