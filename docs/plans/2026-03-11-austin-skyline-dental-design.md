# Austin Skyline Dental Preview Design

## Goal

Create a new preview page in `tsh-previews` for Austin Skyline Dental that feels more modern and elevated than the live site while staying close to the brand. The preview will be sent directly to the client, so the content should remain grounded in the real practice positioning. Missing details should use neutral placeholder copy instead of invented claims.

## Chosen Direction

Recommended direction: editorial healthcare premium.

This direction keeps the practice feeling established, calm, and relationship-led while materially upgrading the visual quality. The page should feel brighter, cleaner, and more premium than the current site without becoming trendy or disconnected from the practice.

## Brand Inputs From The Live Site

- Austin Skyline Dental
- Cosmetic and family dentistry
- Dr. C. Steve Parker and Dr. Christopher F. Kimball
- Relationship-based care
- Preclinical interview, comprehensive exam, treatment planning, and consultation
- 314 Highland Mall Blvd, Suite 500, Austin, TX 78752
- `(512) 452-9547`
- Hours:
  - Monday, Tuesday, Thursday: 7:30am-4:30pm
  - Wednesday and Friday: 7:30am-1:00pm

## Page Structure

1. Hero with refined modern messaging, CTA, and trust highlights
2. Practice story / about section
3. Four fundamentals section based on the live site's patient-doctor relationship model
4. Services section using real service themes from the site
5. Doctor spotlight / team section
6. Patient experience / why choose us section
7. Testimonials or proof section using placeholders where exact source material is thin
8. Contact and appointment section
9. Mobile sticky CTA

## Implementation Plan

- Add a new page component in `src/pages`
- Add a dedicated stylesheet in `src/pages`
- Add a new route to `src/App.jsx`
- Use the existing preview conventions:
  - `useSEO`
  - `framer-motion`
  - per-page `previewData`
  - shared `FloatingCTA`

## Content Rules

- Keep real business facts accurate to the live site
- Use placeholder testimonial and supporting copy where details are unclear
- Do not fabricate awards, review counts, or unsupported service promises

## Verification

- Route renders correctly
- Layout works on desktop and mobile
- Anchor navigation works
- CTA links, phone, email, and map links are valid
- Existing routes remain unaffected
