# Website Migration: Page Mapping Document

**Domain:** anoopkurup.com  
**New Positioning:** Business Clarity Architect  
**Date:** January 2026

---

## 1. Overview

This document outlines the website restructuring from the current "Marketing Systems" positioning to the new "Business Clarity Architect" positioning. It includes pages to retain, create, and archive with appropriate redirects.

---

## 2. Pages to RETAIN (with updates)

These pages will be kept but require content updates to align with the new positioning.

| Current URL | Action Required | Notes |
|-------------|-----------------|-------|
| `/` (Homepage) | Major rewrite | Symptom-based entry points, Clarity Stack intro, new service tiers (Diagnose/Build/Partner) |
| `/about` | Update positioning | Business Clarity Architect story, GE + IPR background, new philosophy |
| `/blog` | Content realignment | New posts aligned to 4 content themes |
| `/contact` | Simplify | Single CTA: Book Clarity Diagnosis Call |
| `/videos` | Rename from `/resources/webinars` | Repurpose as Videos page for YouTube content |
| `/privacy-policy` | Keep as-is | Legal page - no changes needed |
| `/terms-and-conditions` | Keep as-is | Legal page - no changes needed |

---

## 3. Pages to CREATE (new)

New pages required for the Business Clarity Architect service model.

| New URL | Page Name | Service Tier | Purpose |
|---------|-----------|--------------|---------|
| `/diagnose` | Clarity Diagnosis | DIAGNOSE | 60-min session + written summary. For founders not sure what's broken. |
| `/build` | Clarity Sprint | BUILD | 4-8 week intensive engagement. Three variants: Strategy Sprint, Positioning Sprint, Conversion Sprint. |
| `/partner` | Ongoing Advisory | PARTNER | Monthly retainer, 2 sessions/month + async access. Minimum 3 months. |
| `/framework` | The Clarity Stack™ | Educational | Framework explanation page for MOFU content. Explains the 3 layers. |
| `/case-studies` | Case Studies | Proof | Marketing Agency, Public Speaking Trainer, School Group examples. |

---

## 4. Pages to REMOVE/ARCHIVE (with redirects)

These pages no longer fit the new positioning and should be archived with 301 redirects.

### 4.1 Services Pages

| Current URL | Redirect To | Reason |
|-------------|-------------|--------|
| `/services` | `/` (Homepage) | Old service model doesn't fit Clarity Stack |
| `/services/content-growth` | `/build` | Tactical service → replaced by Clarity Sprint |
| `/services/lead-generation` | `/build` | Tactical service → replaced by Clarity Sprint |
| `/services/marketing-operations` | `/partner` | Ongoing service → replaced by Advisory |

### 4.2 Solutions Pages

| Current URL | Redirect To | Reason |
|-------------|-------------|--------|
| `/solutions` | `/` (Homepage) | Old structure |
| `/solutions/visibility` | `/build` | Tactical outcome → addressed in Clarity Sprint |
| `/solutions/leads` | `/build` | Tactical outcome → addressed in Clarity Sprint |
| `/solutions/complete-system` | `/partner` | Full-service → replaced by Advisory |

### 4.3 Workshops Pages

| Current URL | Redirect To | Reason |
|-------------|-------------|--------|
| `/workshops` | `/build` | Workshop model → replaced by Clarity Sprint |
| `/workshops/100-day-lead-generation-sprint` | `/build` | Conversion-layer tactic → addressed in Clarity Sprint |
| `/workshops/linkedin-sales-activation` | `/build` | Conversion-layer tactic → addressed in Clarity Sprint |

### 4.4 Resources Pages

| Current URL | Redirect To | Reason |
|-------------|-------------|--------|
| `/resources/webinars` | `/videos` | Rename and repurpose for YouTube content |

---

## 5. Navigation Structure

### Current Navigation
```
About | Solutions ▼ | Resources ▼ | Blog | Contact | [Work With Me]
```

### New Navigation
```
About | Services ▼ | Framework | Videos | Blog | Contact | [Book Diagnosis]
         ├── Diagnose
         ├── Build  
         └── Partner
```

---

## 6. URL Redirect Map (Technical Reference)

For implementation in `.htaccess`, Netlify `_redirects`, or hosting platform:

```
# Services redirects
/services                              → /                 301
/services/content-growth               → /build            301
/services/lead-generation              → /build            301
/services/marketing-operations         → /partner          301

# Solutions redirects
/solutions                             → /                 301
/solutions/visibility                  → /build            301
/solutions/leads                       → /build            301
/solutions/complete-system             → /partner          301

# Workshops redirects
/workshops                             → /build            301
/workshops/100-day-lead-generation-sprint → /build         301
/workshops/linkedin-sales-activation   → /build            301

# Resources rename
/resources/webinars                    → /videos           301
/resources                             → /videos           301
```

---

## 7. Summary

| Category | Count | Pages |
|----------|-------|-------|
| **RETAIN** | 7 | Homepage, About, Blog, Contact, Videos, Privacy, Terms |
| **CREATE** | 5 | Diagnose, Build, Partner, Framework, Case Studies |
| **ARCHIVE** | 12 | Services (4), Solutions (4), Workshops (3), Resources (1) |

**Total pages in new site:** 12 pages

---

## 8. Implementation Priority

1. **Phase 1 - Foundation**
   - Update Homepage with new positioning
   - Create `/diagnose`, `/build`, `/partner` service pages
   - Update `/about` page
   - Rename `/resources/webinars` → `/videos`

2. **Phase 2 - Content**
   - Create `/framework` page
   - Create `/case-studies` page
   - Update `/contact` with single CTA

3. **Phase 3 - Cleanup**
   - Implement all 301 redirects
   - Remove old pages from CMS
   - Update navigation menu
   - Test all redirect paths

---

*Document prepared for Anoop Kurup - Business Clarity Architect*
