# Construction Hero Demo Design

## Goal

Create a standalone demo route inside `tsh-previews` that turns a sequence of house construction frames into scroll-driven hero concepts. The first section should begin on frame `01-0-00.jpg` and progress through all frames until the build appears complete. A second section should reuse the same image set in a full-width cinematic hero treatment.

## Recommended Approach

Use pinned heroes inside tall scroll containers. While each hero remains sticky, scroll progress is converted into a frame index and the displayed image swaps to the matching frame from the imported sequence.

## Why This Approach

- Keeps the demo isolated from the current homepage and client preview routes.
- Shows two distinct presentation modes with the same source material: framed product UI and full-bleed marketing hero.
- Uses lightweight scroll progress tracking instead of unnecessary canvas complexity.

## Components

- A new `ConstructionScrollHero` component renders both scroll-driven hero sections.
- A new `ConstructionHeroDemo` page owns SEO metadata and exposes the demo as its own route.
- Frame images live in `public/assets/construction-frames/` so they can be served directly by Vite.

## Interaction

- The user lands on a full-screen framed hero panel.
- As the user scrolls through the first tall wrapper, the hero stays pinned and advances through the build sequence.
- Below that, a second full-width hero uses the same frames as a background image with overlay copy.
- Each section has its own progress treatment so the demos feel separate rather than continuous.

## Responsive Behavior

- Desktop uses a split layout with copy on the left and the frame panel on the right for the first section.
- The second section uses full-bleed imagery with constrained overlay text for readability.
- Mobile collapses the first section to a single column and shortens the scroll distance for both sections.

## Verification

- Confirm that the new route renders without affecting the existing homepage.
- Confirm that frame 1 appears at the top and frame 15 appears at the end of each scroll range.
- Confirm that both sections advance independently using the same source frames.
- Confirm that the demo builds successfully with Vite.
