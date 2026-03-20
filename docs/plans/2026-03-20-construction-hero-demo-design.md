# Construction Hero Demo Design

## Goal

Create a standalone demo route inside `tsh-previews` that turns a sequence of house construction frames into a scroll-driven hero. The section should begin on frame `01-0-00.jpg` and progress through all frames until the build appears complete.

## Recommended Approach

Use a pinned hero inside a tall scroll container. While the hero remains sticky, scroll progress is converted into a frame index and the displayed image swaps to the matching frame from the imported sequence.

## Why This Approach

- Keeps the demo isolated from the current homepage and client preview routes.
- Uses plain React state and browser scroll events, which is enough for a 15-frame sequence.
- Avoids unnecessary canvas complexity for a lightweight prototype.

## Components

- A new `ConstructionScrollHero` component renders the copy, progress indicator, and active frame.
- A new `ConstructionHeroDemo` page owns SEO metadata and exposes the demo as its own route.
- Frame images live in `public/assets/construction-frames/` so they can be served directly by Vite.

## Interaction

- The user lands on a full-screen hero panel.
- As the user scrolls through the tall wrapper, the hero stays pinned.
- Scroll progress maps linearly to the 15 source images.
- A small progress bar and frame counter reinforce the current position in the sequence.

## Responsive Behavior

- Desktop uses a split layout with copy on the left and the frame panel on the right.
- Mobile collapses to a single column and reduces the total scroll distance.

## Verification

- Confirm that the new route renders without affecting the existing homepage.
- Confirm that frame 1 appears at the top and frame 15 appears at the end of the scroll range.
- Confirm that the demo builds successfully with Vite.
