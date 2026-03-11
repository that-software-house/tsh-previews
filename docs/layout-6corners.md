# Layout Reference: 6 Corners Dental Studio
**Source:** https://www.6cornersdentalstudio.com/
**Aesthetic:** Clean coastal-professional · Quiet premium · Boutique neighborhood · Modern serif editorial

Use this file as a DesignAgent or CodegenAgent reference to build the **"6 Corners" layout system** — a high-contrast dark/light alternating page structure with editorial typography, hexagon motifs, and cinematic scroll reveals.

---

## Design Personality

| Attribute | Value |
|---|---|
| Personality | `clean-editorial` |
| Mood | Calm, trustworthy, subtle prestige |
| Target | Anxiety-prone urban professionals, young families |
| Tone | Neighborhood warmth + upscale lifestyle magazine |
| NOT | Corporate chain, clinical sterile, generic healthcare template |

---

## Color System

Define as CSS custom properties on the root preview class.

```css
/* Steel-blue primary scale */
--primary-darkest: #0f2431;
--primary-darker: #143142;
--primary-dark: #286284;
--primary: #327ba5;
--primary-light: #99cae6;
--primary-lighter: #d6e4ed;
--primary-lightest: #eaf1f6;

/* Near-black scale */
--dark: #030608;
--dark-mid: #1c1e20;
--dark-surface: #343434;

/* Neutral scale */
--bg: #f2f2f2;
--surface: #ffffff;
--text: #030608;
--text-muted: #818283;
--border: #d9d9d9;
```

**Semantic usage:**
- Page background: `--bg` (`#f2f2f2`)
- Dark sections (doctor, testimonials, footer): `--dark` (`#030608`) with white text
- Primary CTA button fill: `--primary-light` (`#99cae6`) with dark text
- CTA card background: `--primary-lighter` (`#d6e4ed`)
- Accent underline / dividers: `--primary` (`#327ba5`)
- Hexagon SVG decorations: `--primary-lighter` (`#d6e4ed`)
- Nav dark overlay (scrolled/mobile): `--primary-darkest` (`#0f2431`)

---

## Typography

```css
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&family=Hanken+Grotesk:wght@400;500;600;700&display=swap');

--font-display: 'Fraunces', Georgia, serif;
--font-body: 'Hanken Grotesk', Arial, sans-serif;
```

**Type scale:**

| Element | Font | Size | Weight | Letter Spacing | Notes |
|---|---|---|---|---|---|
| Hero h1 | Fraunces | `clamp(3rem, 5.5vw, 4.5rem)` | 400 | `-0.045rem` | Light-weight editorial serif |
| Section h2 | Fraunces | `clamp(2rem, 3.5vw, 3.25rem)` | 400 | `-0.033rem` | Never bold — stays elegant |
| Section h3 | Fraunces | `clamp(1.5rem, 2.5vw, 1.75rem)` | 400 | `-0.018rem` | |
| Body | Hanken Grotesk | `1.125rem` | 400 | — | `line-height: 1.6` |
| Button | Hanken Grotesk | `1.125rem` | 500 | — | |
| Nav links | Hanken Grotesk | `1rem` | 400 | — | |
| Caption / small | Hanken Grotesk | `0.875rem` | 600 | `0.08em` uppercase | Used for kickers/labels |

**Key rule:** Fraunces at **weight 400** for all display headings — never 700. The thin, optical-size serif is the signature of this system. Paired with Hanken Grotesk's clean legibility, it reads premium without being cold.

**Responsive font scaling:**
```css
html { font-size: calc(0.4rem + 0.67vw); } /* 479px: ~75% → 1440px: 100% */
@media (min-width: 1440px) { html { font-size: 1rem; } }
```

---

## Section Rhythm (Top → Bottom)

The page alternates **light → dark → light → dark** creating cinematic contrast. Never two consecutive light or dark sections.

```
NAV         transparent → dark on scroll
HERO        dark (#030608 bg + 80% photo overlay)
ABOUT       light (#f2f2f2)
DOCTOR      dark (#030608)
SERVICES    light (#f2f2f2 or #eaf1f6)
CHOOSE      light (#f2f2f2)
TESTIMONIALS dark (#030608)
INSURANCE   light (#f2f2f2)
CTA CARD    tinted (#d6e4ed)
FOOTER      dark (#030608)
```

---

## Section-by-Section Spec

### NAV
- **Layout:** Fixed, full-width, 3-column flex — `[left links] [center logo] [right CTAs]`
- **Default state:** Transparent background, `0.0625rem solid white` bottom border
- **Scrolled state:** Dark navy `#0f2431` background slides in as separate `z-index: 0` div (height animates `0.5s ease`) — nav items remain above it
- **Logo:** White SVG, `width: 5rem`, absolutely centered
- **Links:** White text, `padding: 0.5rem 1rem`, hover → `#99cae6`
- **CTAs:** "Book Online" pill + phone number
- **Mobile:** Full-screen overlay `#0f2431`, `height: calc(100dvh - 5.5rem)`
- **Shell:** `padding: 0 5%`, `min-height: 5.5rem`

---

### HERO
- **Layout:** Full-screen centered, `min-height: 100svh`
- **Background:** Full-bleed photo + `rgba(0,0,0,0.80)` overlay — photo reads as mood texture, not content
- **Content:** Centered single column, max-width ~`50ch`
- **Headline:** Fraunces 4.5rem weight 400, white, `letter-spacing: -0.045rem`, `text-wrap: balance`
- **Subheadline:** Fraunces smaller, white
- **Body:** Hanken Grotesk 1.125rem, `rgba(255,255,255,0.75)`
- **CTAs:** Two-button row — primary fill (`#99cae6`, dark text) + white outline
- **Padding:** `14.25rem` top/bottom desktop

**Animation (staggered reveal on load):**
```
hero-bg-element    → fadeIn, duration 1.2s
hero-title         → fadeIn + translateY(30px), delay 0.1s, duration 0.9s
hero-sub-title     → fadeIn + translateY(20px), delay 0.25s, duration 0.8s
hero-description   → fadeIn + translateY(16px), delay 0.38s, duration 0.75s
hero-button-group  → fadeIn + translateY(12px), delay 0.5s, duration 0.7s
```
All elements start: `opacity: 0; transform: translateY(Xpx)` — rendered hidden until JS triggers.

---

### ABOUT (Light)
- **Layout:** 2-column split, `gap: 3rem`, `align-items: center`
- **Left:** Text content — label, h2 (Fraunces), body, CTA link
- **Right:** Tall portrait image (`height: 40rem`, `object-fit: cover`, `border-radius: 0.5rem`) with **4 hexagon SVGs** floating around it
- **Heading accent:** 2px blue line (`#327ba5`) beneath h2, animates `scaleX(0→1)` on scroll entry
- **Section padding:** `8.75rem` top/bottom

**Hexagon decoration spec:**
```
4× <svg viewBox="0 0 268 305"> polygon points="134 0, 268 77, 268 229, 134 305, 0 229, 0 77"
fill="#d6e4ed" (astral-lighter), no stroke, position: absolute

Positions (relative to image container):
  hex-1: top: -9%,  left: -42%,  width: 77%   (large, behind left)
  hex-2: top:  11%, right: -42%, width: 57%   (medium, right side)
  hex-3: top:  55%, left: -20%,  width: 37%   (small, lower left)
  hex-4: bottom: -5%, right: -15%, width: 47% (medium, lower right)
z-index: -1 (behind image)
```

**Scroll animation:**
```
text column:   opacity 0→1, translateX(-40px→0), duration 0.8s, ease out
image column:  opacity 0→1, translateX(40px→0),  duration 0.8s, delay 0.15s
hexagons:      opacity 0→0.85, scale(0.85→1), stagger 0.1s each
```

---

### DOCTOR (Dark)
- **Layout:** 50/50 CSS grid, `min-height: 40rem`
- **Left:** Full-bleed square photo, `aspect-ratio: 1`, `object-fit: cover`, no border-radius
- **Right:** Content — label, h2, bio, credentials list, CTA — `padding: 4rem 3rem`, white text on `#030608`
- **Decorative hexagons:** 2–3 small `#d6e4ed` hexes, `opacity: 0.06` — barely visible, textural only
- **Content max-width:** `27rem` (tight column for readability)

---

### SERVICES (Light)
- **Layout:** 3-column CSS grid, `gap: 3rem 4rem`
- **Section header:** Centered label + h2 + short body, `margin-bottom: 4rem`
- **Service card:**
  - Image: `aspect-ratio: 1`, `border-radius: 0.5rem`, `overflow: hidden`
  - Header below: `padding: 1.25rem 0`, flex column, `gap: 0.5rem`
  - Title: Fraunces h5 weight 400
  - Description: Hanken Grotesk 0.875rem muted

**Card hover animation:**
```css
/* Image zoom */
.service-img { transition: transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
.service-card:hover .service-img { transform: scale(1.1); }

/* Title lines split */
.title-top    { transition: transform 0.4s ease; }
.title-bottom { transition: transform 0.4s ease; }
.service-card:hover .title-top    { transform: translateY(-0.5rem); }
.service-card:hover .title-bottom { transform: translateY(0.5rem); }

/* Underline reveal */
.header-line {
  height: 0.125rem;
  background: #327ba5;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}
.service-card:hover .header-line { transform: scaleX(1); }
```

**Scroll animation (stagger cards):**
```
Each card: opacity 0→1, translateY(40px→0)
Stagger: 0.1s per card
Duration: 0.7s, ease [0.22, 1, 0.36, 1]
```

---

### CHOOSE (Light)
- **Layout:** 2-column split, text left, image right
- **Left:** Label + h2 + list of reasons
- **List items:** Each separated by `1px solid #327ba5` bottom border
- **List item animation on scroll:** Each item fades + slides up with 0.12s stagger
- **Image:** Portrait, `height: 35rem`, `object-fit: cover`, `border-radius: 0.5rem`
- **Secondary image:** Small image positioned absolutely, partially off-canvas, creates depth

---

### TESTIMONIALS (Dark)
- **Layout:** 50/50 grid — left: full-bleed photo, right: slider
- **Background:** `#030608`, white text
- **Photo:** `object-fit: cover`, full height of section, no border-radius on left (bleeds to edge)
- **Slider content:**
  - Stars image (icon, `height: 1.125rem`)
  - Quote: Fraunces italic, `font-size: 1.5rem`, white, `max-width: 38ch`
  - Author name: Hanken Grotesk 1rem, `#99cae6` (astral-light)
  - Nav dots: `width: 0.5rem; height: 0.5rem; border-radius: 50%`, white 20% inactive → 100% active
  - Prev/Next: `3rem × 3rem`, `0.125rem solid white`, transparent fill, arrow SVG inside

**Slider transition:**
```
Slides: opacity 0→1 cross-fade, duration 0.5s
Active dot: scale(1→1.5) + opacity change, duration 0.3s
```

---

### CTA CARD (Tinted)
- **Background:** `#d6e4ed` (astral-lighter) — the mint-steel panel
- **Layout:** Card with `border-radius: 0.5rem`, `overflow: hidden`, 2-column grid inside
- **Left (content):** `padding: 5.5rem`, label + h2 + body + CTA button
- **Right (image):** `width: 140%; margin-left: -35%` — image overflows left edge of its column, creating an overlapping crop effect
- **Button:** Dark solid (`#343434` background, white text) in this section

**Scroll animation:**
```
Card: opacity 0→1, scale(0.97→1), duration 0.8s, ease out
Image: translateX(20px→0), duration 0.9s, delay 0.15s
```

---

### FOOTER (Dark)
- **Background:** `#030608`
- **Top row:** Flex row — logo + address/phone left, nav columns right, `gap: 3rem`
- **Logo:** White, `width: 7rem`
- **Divider:** `height: 0.125rem; background-color: #99cae6` (astral-light) — full width
- **Bottom row:** Copyright left + legal links right
- **Link hover:** `color: #99cae6`
- **Font:** `0.875rem`, weight 600 for footer nav

---

## Button System

```css
/* Primary (light fill, dark text) */
.btn-primary {
  background: #99cae6;
  border: 0.125rem solid #99cae6;
  color: #030608;
  padding: 0.625rem 1.5rem;
  min-height: 3rem;
  font-size: 1.125rem;
  font-weight: 500;
  border-radius: 0;          /* Square corners — signature of this system */
  transition: background 0.25s, border-color 0.25s, color 0.25s;
}
.btn-primary:hover { background: #327ba5; border-color: #327ba5; color: #fff; }

/* White outline (on dark bg) */
.btn-outline-white {
  background: transparent;
  border: 0.125rem solid #fff;
  color: #fff;
}
.btn-outline-white:hover { background: #fff; color: #030608; }

/* Dark solid */
.btn-dark {
  background: #343434;
  border: 0.125rem solid #343434;
  color: #fff;
}
.btn-dark:hover { background: #327ba5; border-color: #327ba5; }
```

**Critical:** Buttons use `border-radius: 0` (square). This is intentional — it creates a graphic, architectural quality vs the rounded pill common in other previews.

---

## Motion System

All scroll animations use Framer Motion `whileInView` with `viewport={{ once: true, amount: 0.15 }}`.

### Standard variants

```js
// Fade up — default for most elements
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

// Fade left — text columns in splits
const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } }
}

// Fade right — image columns in splits
const fadeRight = {
  hidden: { opacity: 0, x: 48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] } }
}

// Scale reveal — cards, CTA card
const scaleUp = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
}

// Stagger container
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}

// Stagger child — list items, cards, hexagons
const staggerChild = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
}
```

### Hero load sequence
```js
// Use animate (not whileInView) for hero — triggers on mount
// Sequence: bg → headline → subheadline → body → buttons
const heroSequence = [0, 0.1, 0.25, 0.38, 0.5] // delays in seconds
// Each: opacity 0→1, y: 30→0 (less y for later elements), duration 0.8s
```

### Hexagon parallax (subtle depth)
```js
// Each hex gets a slight y offset based on scroll position
// Use useScroll + useTransform for parallax:
// hex-1: y range [0, -30px] over hero scroll
// hex-2: y range [0, 20px]
// hex-3: y range [0, -15px]
// hex-4: y range [0, 25px]
```

### Heading underline animation
```js
// Animate a 2px line under h2 headings from scaleX(0) → scaleX(1)
// transform-origin: left
// Duration: 0.6s, delay after heading appears: 0.3s
// Color: #327ba5
```

---

## Layout Utilities

```css
/* Shell / container */
.shell {
  width: min(80rem, calc(100% - 10%)); /* 1280px max, 5% padding each side */
  margin: 0 auto;
}

/* Section padding */
.section-pad { padding: 8.75rem 0; }
@media (max-width: 991px) { .section-pad { padding: 6rem 0; } }
@media (max-width: 479px) { .section-pad { padding: 4rem 0; } }

/* Section label (kicker) */
.label {
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);   /* or white on dark sections */
  display: block;
  margin-bottom: 1rem;
}

/* Heading underline accent */
.heading-line {
  display: block;
  height: 0.125rem;
  background: var(--primary);
  transform: scaleX(0);
  transform-origin: left;
  margin-top: 0.75rem;
}
```

---

## Hexagon SVG Component

```jsx
// Reusable hex decoration — place 3-4 per split section image
function HexDecor({ size = '60%', style = {} }) {
  return (
    <svg
      viewBox="0 0 268 305"
      fill="var(--primary-lighter)"  /* #d6e4ed */
      style={{
        position: 'absolute',
        width: size,
        pointerEvents: 'none',
        zIndex: -1,
        ...style
      }}
      aria-hidden="true"
    >
      <polygon points="134,0 268,77 268,229 134,305 0,229 0,77" />
    </svg>
  )
}

// Usage around an image:
// <div style={{ position: 'relative' }}>
//   <HexDecor size="77%" style={{ top: '-9%', left: '-42%' }} />
//   <HexDecor size="57%" style={{ top: '11%', right: '-42%' }} />
//   <HexDecor size="37%" style={{ bottom: '15%', left: '-20%' }} />
//   <HexDecor size="47%" style={{ bottom: '-5%', right: '-15%' }} />
//   <img ... />
// </div>
```

---

## Dark/Light Section Toggle Pattern

```jsx
// Every section declares its mode — components adapt via CSS vars
// Dark sections override the root palette:

.section--dark {
  background: var(--dark);       /* #030608 */
  --text: #ffffff;
  --text-muted: rgba(255,255,255,0.6);
  --border: rgba(255,255,255,0.12);
  --label-color: var(--primary-light);  /* #99cae6 */
}

// Usage:
<section className="section--dark">
  ...
</section>
```

---

## CodegenAgent Instructions

When building a preview using this layout system:

1. **Import font pair:** `Fraunces` (display, always weight 400) + `Hanken Grotesk` (body)
2. **Alternate dark/light sections** in the order: hero(dark) → about(light) → doctor(dark) → services(light) → differentiators(light) → testimonials(dark) → cta(tinted) → contact(light) → footer(dark)
3. **Use `border-radius: 0` on all buttons** — square corners are the signature of this system
4. **Generate 4 HexDecor SVGs** per split-section image, positioned as specified above
5. **Hero animation:** Mount-triggered stagger sequence (not scroll-triggered) — all elements start `opacity: 0`
6. **Scroll animations:** `whileInView` with `viewport={{ once: true, amount: 0.15 }}`, use `fadeUp` / `fadeLeft` / `fadeRight` based on content side
7. **Heading underline:** Every h2 gets a 2px `#327ba5` line that `scaleX(0→1)` animates in on scroll
8. **Service cards:** Image zoom (`scale(1.1)`) + title split (`translateY ±0.5rem`) on hover
9. **Nav:** Transparent default → dark overlay slides behind on scroll (separate z-indexed div)
10. **Shell width:** `min(80rem, calc(100% - 10%))` — wider than typical, generous whitespace
11. **Testimonials:** Always paired with full-bleed photo on opposite side, slider dots, author name in `#99cae6`
12. **CTA card:** Use `#d6e4ed` background, image overflow trick (`width: 140%, margin-left: -35%` on image side), dark square button
13. **Section padding:** `8.75rem` — this generous vertical rhythm is central to the premium feel

---

## Quick-Reference Card

```
Fonts:         Fraunces (display, wt 400) + Hanken Grotesk (body)
Primary:       #327ba5  (steel blue)
Primary light: #99cae6  (CTA button fill)
Primary pale:  #d6e4ed  (CTA card bg, hex SVGs)
Dark bg:       #030608  (near-black sections)
Page bg:       #f2f2f2  (light sections)
Buttons:       border-radius: 0  (square)
Shell:         min(80rem, calc(100% - 10%))
Section pad:   8.75rem top/bottom
Hex SVG fill:  #d6e4ed, 4 per split image, z-index: -1
Divider:       0.125rem solid #99cae6
Motion ease:   [0.22, 1, 0.36, 1]
Hero overlay:  rgba(0,0,0,0.80)
```
