# Preview Site Generator Agent

**Purpose**: Given a dental practice (or any SMB) website URL, automatically scrape their existing site, extract brand data, and generate a polished modern preview site — hosted and ready to send in a cold outreach email.

This is the technical backbone of the **"See Before You Buy"** outreach strategy.

---

## Claude Code Behavior — REQUIRED

> **Whenever a new client URL is provided for a preview, Claude Code MUST use the agent pipeline defined in this file. Do not manually write preview JSX/CSS by hand.**

### Trigger
Any message that contains a URL and implies creating a preview (e.g., "new client: https://...", "build a preview for...", "add this client: ...").

### Required workflow
1. **Always** run the full agent sequence: Scraper → Brand + Design (parallel) → Codegen → Deploy.
2. The **DesignAgent must run before CodegenAgent** and pass its design spec as input.
3. The DesignAgent **must read `docs/samples/`** to inform layout decisions (see DesignAgent definition below).
4. Do not skip agents or shortcut to writing code directly — even for simple sites.

### Why
Manual preview creation is inconsistent and doesn't scale. The agent pipeline ensures every preview follows the same quality bar, uses visual references from `docs/samples/`, and produces output the DeployAgent can handle automatically.

---

## Overview

```
Input URL (e.g. https://olddentalsite.com)
        │
        ▼
┌─────────────────────┐
│   Orchestrator      │  Coordinates all sub-agents, manages state, returns final URL
└────────┬────────────┘
         │
   ┌─────┴──────┬──────────────┬───────────────┐
   ▼            ▼              ▼               ▼
ScraperAgent  BrandAgent  DesignAgent    CodegenAgent
(extract)     (analyze)   (select UX)    (build site)
                                              │
                                             ▼
                                       DeployAgent
                                    (save + return URL)
```

Each agent is a focused, single-responsibility unit. The Orchestrator feeds outputs forward as inputs to the next stage. Agents run sequentially except where noted.

---

## Tech Stack Alignment

Fits into the existing codebase without new dependencies:

| Need | Existing Tool |
|---|---|
| URL scraping | `server/utils/urlFetcher.js` + `cheerio` |
| Agent orchestration | `@openai/agents` SDK (already in `server/agents/`) |
| UI generation | React 19 + Tailwind CSS 4 + Framer Motion |
| Component primitives | Radix UI + shadcn/ui patterns (already installed) |
| Icons | `lucide-react` (already installed) |
| Preview hosting | Static file served from `server/` or Netlify deploy preview |
| Screenshot capture | `html-to-image` (already installed) |
| Storage | Supabase (already configured) — store preview metadata |

No new `npm install` required.

---

## Agent Definitions

Full definitions live in individual files — read the relevant file before executing each step:

| Agent | File | Role |
|---|---|---|
| ScraperAgent | [scraper.md](./scraper.md) | Extract structured data from the prospect's website |
| BrandAgent | [brand-builder.md](./brand-builder.md) | Derive palette, fonts, and copy from scraped data |
| DesignAgent | [design.md](./design.md) | Review `docs/samples/`, produce layout spec JSON for CodegenAgent |
| CodegenAgent | [coder.md](./coder.md) | Generate JSX + CSS files from the design spec |
| DeployAgent | See below | Save files and return the shareable preview URL |

---

### `DeployAgent`

**Role**: Save the generated preview site and return a shareable URL.

**Input**: CodegenAgent output (JSX string + metadata)

**Process**:
1. Save `PreviewSite.jsx` to `server/previews/{slug}/PreviewSite.jsx`
2. Generate a static HTML wrapper (`index.html`) that loads the React component via Vite
3. Trigger a Netlify deploy preview via Netlify API (or serve from Express static route as fallback)
4. Store preview metadata in Supabase: `{ slug, prospect_url, business_name, preview_url, created_at, opened_at }`
5. Return the preview URL

**Preview URL format**: `https://preview.thatsoftwarehouse.com/{slug}`
**Fallback (dev)**: `http://localhost:3001/preview/{slug}`

**Supabase table**: `previews`
```sql
CREATE TABLE previews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  prospect_url TEXT NOT NULL,
  business_name TEXT,
  preview_url TEXT NOT NULL,
  outreach_email TEXT,
  opened_at TIMESTAMPTZ,
  clicked_cta_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

**Tracking pixel**: Embed a 1px transparent PNG from TSH's server in the preview page so you know when the prospect opens the link:
```html
<img src="https://thatsoftwarehouse.com/api/track/open/{slug}" width="1" height="1" />
```

---

## Orchestrator

**Location**: `server/agents/previewSiteAgent.js`

**Entry point**: `POST /api/preview/generate`

```javascript
// Request body
{
  "url": "https://olddentalsite.com",
  "outreachEmail": "dr.smith@olddentalsite.com"  // optional
}

// Response
{
  "success": true,
  "previewUrl": "https://preview.thatsoftwarehouse.com/smile-dental-austin-x7k2",
  "businessName": "Smile Dental Austin",
  "slug": "smile-dental-austin-x7k2",
  "siteScoreBefore": { "mobile": 34, "desktop": 61 },
  "generatedAt": "2026-03-04T14:22:00Z"
}
```

**Orchestrator flow**:
```javascript
async function generatePreviewSite(url, outreachEmail) {
  // 1. Scrape
  const scraped = await run(scraperAgent, { url });

  // 2. Brand analysis (parallel with design selection if scrape is complete)
  const [brand, design] = await Promise.all([
    run(brandAgent, { scraped }),
    run(designAgent, { scraped })  // can run in parallel — both only need scraper output
  ]);

  // 3. Code generation
  const { jsx, metadata } = await run(codegenAgent, { scraped, brand, design });

  // 4. Deploy
  const { previewUrl, slug } = await run(deployAgent, { jsx, metadata, outreachEmail });

  return { previewUrl, slug, businessName: scraped.businessName, siteScoreBefore: scraped.existingSiteScore };
}
```

---

## File Structure

```
server/
├── agents/
│   ├── index.js                    ← Export all agents (add previewSiteAgents here)
│   ├── previewSiteAgents.js        ← NEW: scraperAgent, brandAgent, designAgent, codegenAgent
│   └── (existing agents...)
├── routes/
│   └── previewSite.js              ← NEW: POST /api/preview/generate, GET /api/preview/:slug
├── utils/
│   └── urlFetcher.js               ← EXISTING: reuse as-is for scraping
└── previews/                       ← NEW: generated preview files stored here
    └── {slug}/
        ├── PreviewSite.jsx
        └── index.html

src/
└── pages/
    └── PreviewDashboard.jsx        ← NEW (optional): internal TSH tool to view all generated previews + open tracking
```

---

## Frontend Dashboard (Internal TSH Tool)

A simple internal page at `/preview-dashboard` (auth-gated to TSH team) showing:

- Table of all generated previews with: business name, prospect URL, preview URL, generated date, opened date, CTA clicked date
- One-click "Copy outreach email" button that pre-fills the cold email template with the prospect's preview URL
- Preview thumbnail (screenshot via `html-to-image`)
- Status badge: `sent | opened | clicked | converted`

This turns the agent into a proper sales pipeline tool, not just a code generator.

---

## Design Reference Sources

Use these as inspiration sources in `DesignAgent` prompts:

| Source | What to Pull |
|---|---|
| **21dev.co** | Hero layouts, card components, CTA sections — filter by "healthcare" or "landing page" |
| **Mobbin** (mobbin.com) | Real healthcare app UI patterns — One Medical, ZocDoc, Headspace for UI inspiration |
| **shadcn/ui** | Component primitives already in the project — Button, Card, Badge, Tabs, Input |
| **Radix UI** | Accessible headless components — already installed, use for any interactive elements |
| **Tailwind UI** (reference only) | Marketing page patterns — hero sections, feature grids, testimonials |
| **Dribbble** search: `dental website 2025` | Visual inspiration for hero imagery and color palette choices |

**Non-negotiable design standards for every preview**:
- Lighthouse mobile score target: **>85** (vs. their current ~34)
- First Contentful Paint: **<1.5s**
- Hero section should be full-width by default, with full-width image/content composition unless the user explicitly asks for a constrained hero
- Sections should be full-width by default, with inner alignment containers only as needed for readability and layout control
- No horizontal scroll on mobile
- Touch targets minimum 44×44px
- Color contrast WCAG AA compliant

---

## Error Handling

| Failure Point | Fallback |
|---|---|
| Scraper: site blocks requests | Retry with puppeteer-like headers; if still blocked, ask user to paste HTML manually |
| Scraper: no services found | Use generic dental services list: General, Cosmetic, Preventive, Emergency |
| BrandAgent: unreadable colors | Default to trusted healthcare palette: `#1A56DB` / `#F9FAFB` / `#0E9F6E` |
| CodegenAgent: invalid JSX output | Re-run with stricter prompt + JSON-mode; max 3 retries |
| Deploy: Netlify API down | Serve from Express static route as fallback |

---

## Time & Cost Estimates

| Step | Time | API Cost (est.) |
|---|---|---|
| ScraperAgent (scrape + vision) | ~15s | ~$0.02 (GPT-4o vision) |
| BrandAgent | ~8s | ~$0.01 |
| DesignAgent | ~5s | ~$0.005 |
| CodegenAgent | ~25s | ~$0.08 (large output) |
| DeployAgent | ~10s | $0 |
| **Total** | **~60s** | **~$0.11/preview** |

At $0.11 per preview and a 15–25% conversion rate, the cost per closed client from this channel is under $1 in API spend. The real cost is the dev time to build the agent — estimated **3–5 days** for a senior dev familiar with the codebase.

---

## MVP Scope vs. Full Version

### MVP (build in 3–5 days)
- [ ] ScraperAgent using existing `urlFetcher.js` + Cheerio
- [ ] Hardcoded brand defaults (skip BrandAgent, use a fixed modern healthcare palette)
- [ ] 3 hardcoded layout templates (warm, modern, minimal) — pick based on scraped personality keywords
- [ ] CodegenAgent generates static HTML (not JSX) for simplicity
- [ ] Preview served from Express static route
- [ ] Manual outreach (copy URL, paste into email)

### Full Version (1–2 weeks)
- [ ] All 5 agents with full prompt engineering
- [ ] Dynamic Tailwind + React generation
- [ ] Netlify deploy preview integration
- [ ] Supabase tracking (open pixel + CTA click)
- [ ] Internal dashboard at `/preview-dashboard`
- [ ] One-click outreach email generation
