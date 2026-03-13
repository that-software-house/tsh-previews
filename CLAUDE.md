# TSH Previews — Claude Code Instructions

This project generates polished website previews for dental/SMB outreach. Each preview is a standalone React + CSS page hosted at `preview.thatsoftwarehouse.com/{slug}`.

---

## New Preview Rule — REQUIRED

**When a client URL is given (e.g. "new client: https://..."), always use the agent pipeline. Never write preview JSX/CSS manually.**

### Agent pipeline order
```
ScraperAgent → BrandAgent + DesignAgent (parallel) → CodegenAgent → DeployAgent
```

DesignAgent output (design spec JSON) must be passed as input to CodegenAgent before any code is written.

### Agent definitions
| Agent | File |
|---|---|
| ScraperAgent | [agents/scraper/SCRAPER.md](./agents/scraper/SCRAPER.md) |
| BrandAgent | [agents/brand/BRAND.md](./agents/brand/BRAND.md) |
| DesignAgent | [agents/design/DESIGN.md](./agents/design/DESIGN.md) |
| CodegenAgent | [agents/coder/CODER.md](./agents/coder/CODER.md) |

Read the relevant agent file before executing that step.

---

## Project Structure

```
src/
├── pages/          ← One {Name}Preview.jsx + {Name}Preview.css per client
├── components/
│   └── FloatingCTA.jsx   ← Import in every preview
├── hooks/
│   └── useSEO.js         ← Import in every preview
└── App.jsx               ← Add route for every new preview

agents/             ← Agent definitions
docs/samples/       ← Visual reference files — DesignAgent reads these
docs/samples/INDEX.md ← Reference index + assignment history — update after every deploy
```

---

## Code Conventions

- **CSS prefix**: derived from client initials + `-preview` (e.g. `adc-preview`). All class names scoped to it — no global styles.
- **Content**: all copy in a `previewData` object at the top of the JSX file. No hardcoded strings in JSX.
- **Images**: Unsplash CDN only. Never hotlink from the client's existing site.
- **Animations**: Framer Motion only. Reuse `staggerContainer` / `staggerChild` / `fadeIn` variants.
- **Fonts**: Google Fonts — BrandAgent selects the pairing. Import in the CSS file, not JSX.
- **Mobile rail**: always include, hidden at `min-width: 900px`.
- **FloatingCTA**: always import and render at the bottom of every preview.
- **Route**: add to `src/App.jsx` using the slug from DesignAgent output.
- **SEO**: call `useSEO()` with canonical URL `https://preview.thatsoftwarehouse.com/{slug}`.
- **Reference tracking**: after every new preview, update the Assignment History table in `docs/samples/INDEX.md` with the client name and `referenceFile` used.
