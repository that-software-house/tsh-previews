### 3. `DesignAgent`

**Role**: Select the right layout patterns, sections, and component styles for the preview site.

**System Prompt**: You are a senior UX designer specializing in healthcare landing pages.
Given a brand profile and scraped practice data, select the best layout composition for a high-converting single-page preview site.
Prioritize: mobile-first, fast-loading, clear hierarchy, single primary CTA.
Dental practice patients are often anxious — the design should feel calm, trustworthy, and local. Not corporate, not clinical.
Reference modern healthcare UI patterns (think: One Medical, Forward Health, Simple Practice marketing pages).
Return valid JSON matching the provided schema exactly.

**Input**: ScraperAgent output + BrandAgent output

**Process**:
1. Choose section composition from the approved pattern library (see below)
2. Select component variants based on `brandPersonality`
3. Decide hero type: `split-image | full-bleed | centered-text | video-bg`
4. Select card style for services: `icon-grid | horizontal-list | image-cards | minimal-list`
5. Choose testimonial layout: `carousel | masonry | single-quote | grid`
6. Define animation level: `none | subtle | expressive`

**Design pattern library** (sourced from 21dev.co, Mobbin healthcare references, shadcn patterns):

```
HERO PATTERNS:
  - split-image:     Left: headline + CTA + phone. Right: warm photo of dentist/patient.
  - full-bleed:      Full-width hero image with gradient overlay + centered headline + dual CTA.
  - centered-text:   Centered headline, subtext, primary CTA, soft background pattern.

HERO LAYOUT RULE:
  - default-full-width: Hero sections should span the full viewport width by default. Hero imagery and hero content should read as a full-width composition rather than being boxed inside the main page container, unless the user explicitly asks otherwise.

SECTION LAYOUT RULE:
  - default-full-width: Sections should span the full viewport width by default. Content can align to an inner max-width container, but the section itself should read as a full-width composition unless the user explicitly asks for a constrained section.

SERVICES PATTERNS:
  - icon-grid:       2×3 grid, lucide icon + service name + 1-line description. Hover: lift shadow.
  - horizontal-list: Alternating left/right image+text rows. Good for 3–5 services.
  - image-cards:     Cards with stock dental photos, overlay title, hover reveal description.

SOCIAL PROOF PATTERNS:
  - review-strip:    Star ratings + short quotes, horizontal scroll on mobile.
  - single-quote:    Large pull quote, patient name, subtle background.
  - grid-cards:      2×2 review cards with avatar, name, star rating, truncated text.

BOOKING CTA PATTERNS:
  - sticky-banner:   Fixed bottom bar on mobile with phone + "Book Now" button.
  - section-cta:     Full-width tinted section, headline + two buttons (call + online form).
  - inline-form:     Embedded simple form (name, phone, preferred time) inline on page.

NAV PATTERNS:
  - minimal-transparent: Logo left, links center, phone right. Transparent on hero, white on scroll.
  - sidebar-mobile:      Hamburger menu on mobile, full-screen slide-in drawer.
```

**Output schema**:
```json
{
  "sections": ["nav", "hero", "trust-bar", "services", "about", "testimonials", "booking-cta", "footer"],
  "heroType": "split-image",
  "servicesStyle": "icon-grid",
  "testimonialsStyle": "review-strip",
  "ctaStyle": "section-cta",
  "navStyle": "minimal-transparent",
  "animationLevel": "subtle",
  "mobileSticky": true,
  "includeBookingForm": true,
  "trustBarItems": ["google-rating", "years-in-practice", "patients-served", "insurance-accepted"]
}
```
