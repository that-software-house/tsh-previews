### 4. `CodegenAgent`

**Role**: Generate the full React + Tailwind preview site source code as a single self-contained file.

**Input**: All previous agent outputs (scraper + brand + design)

**Process**:
1. Generate a single `PreviewSite.jsx` component (self-contained, no external imports beyond React + Tailwind + lucide-react + framer-motion — all already in the project)
2. Inline all brand data (colors via Tailwind arbitrary values or CSS variables, fonts via Google Fonts link in a `<style>` tag)
3. Use real scraped content (business name, services, testimonials, contact info) — not lorem ipsum
4. Implement each section based on DesignAgent selections
5. Ensure full mobile responsiveness (Tailwind responsive prefixes: `sm:`, `md:`, `lg:`)
6. Add a subtle "Preview by That Software House" watermark in the footer with a link to TSH's contact page

**Output**: A single JSX file (`PreviewSite.jsx`) + a metadata object

**Key implementation rules for CodegenAgent**:

```
MUST:
- Use Tailwind utility classes only (no arbitrary CSS files)
- Use lucide-react for all icons (imported inline)
- Use framer-motion for scroll-triggered section fade-ins (animationLevel: subtle = opacity 0→1 + y 20→0)
- Hero sections must span the full viewport width by default; hero imagery and hero content should be composed as a full-width experience unless the user explicitly requests a constrained layout
- All sections should span the full viewport width by default; align content with an inner container only when needed, but do not box the section itself unless the user explicitly requests a constrained section
- Make the phone number a real tel: link
- Make the address a real Google Maps link
- Include a sticky mobile bottom bar with phone + CTA if mobileSticky: true
- Add smooth scroll behavior between sections

MUST NOT:
- Use placeholder text (no "Lorem ipsum", no "[Insert name]")
- Use external image URLs that may go down (use Unsplash CDN with specific dental-relevant queries)
- Require any additional npm packages
- Include any forms that POST to a real backend (use mailto: or just visual mock)
- Include the client's real booking system (keep it visual-only for the preview)

UNSPLASH IMAGE STRATEGY:
- Hero: https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200 (dental office)
- About: https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800 (dentist portrait)
- Team: https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400 (medical professional)
- Patient: https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600 (happy patient)
```

**System prompt**:
```
You are a senior React developer and UI engineer.
Generate a complete, production-quality single-page React component for a dental practice preview website.
Use only: React, Tailwind CSS utility classes, lucide-react icons, and framer-motion animations.
The site must look like it was designed by a top-tier agency — not a template.
Use real business data provided. No placeholders. No lorem ipsum.
Output only valid JSX. The component must be a default export named PreviewSite.
```

---
