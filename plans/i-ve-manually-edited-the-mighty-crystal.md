# Hero redesign — line-art background + Liberetty-style box

## Context
The user added a full "Idea → Apps" line-art image (`src/imports/3928eeec-3fe0-454c-a5a7-d616f2c84c3a.png`) — a tangled scribble + lightbulb on the left, two hands touching in the center, and a device cluster (phone/tablet/laptop/desktop/cloud) on the right. This single illustration expresses the exact hero concept far better than the hand-built SVG/device panels currently in the hero.

The user wants the hero to:
1. Use this line-art image as the hero **background**.
2. Sit inside a **Liberetty-style box** — a light-colored panel with a diagonal white strip at the bottom (recreated in CSS, NOT the actual competitor screenshot).
3. **Remove** the scattered playful shapes and the custom-built idea/device mockups.

## Changes

### `src/App.tsx`
- **Import the image** at the top: `import ideaToApps from "./imports/3928eeec-3fe0-454c-a5a7-d616f2c84c3a.png";`
- **Delete** the `IdeaSide` and `AppsSide` components (no longer used).
- **Rewrite `Hero`**:
  - Remove the scattered-shapes overlay div (`span` squares/triangle/squiggle SVG).
  - Remove the three-part "touch" grid (idea panel / spark / apps panel) and the dashed connecting-line SVG.
  - Wrap the hero content in a **light box panel**: rounded container with a pale cyan-gray background (new token `--color-hero-box`, ~`#e3ecec`), sitting inside the max-width wrapper with horizontal padding so it reads as a distinct box like Liberetty.
  - Add a **diagonal white strip** at the bottom of the box using an absolutely-positioned white element with `clip-path: polygon(...)` (angled cut), matching the Liberetty diagonal.
  - Place the **line-art image as a background** inside the box: an absolutely-positioned `<img src={ideaToApps} alt="From a tangled idea to apps on every device" />` with `object-contain`, centered, behind the text (`z-0`), content above it (`relative z-10`). Because the art is dark line work on transparent/white, the pale box shows through cleanly.
  - Keep the centered headline, subcopy, and the two CTA buttons (`View Portfolio`, `Get a Quote`) layered above the image. The image's empty center (where the hands touch) sits behind the headline.
  - Keep the existing marquee strip below the box unchanged.

### `src/index.css`
- Add one token in the `@theme` block: `--color-hero-box: #e3ecec;` (pale cyan-gray for the box). Existing `pop-*` shape colors can remain (still used elsewhere / harmless) but are no longer referenced by the hero.

## Notes / responsiveness
- The line-art is very wide. On small screens set the image to `object-contain` and let it scale down; box height driven by content with generous vertical padding so the art remains legible. Consider slightly reducing image opacity on mobile if it competes with text (optional).
- No new dependencies. Vite resolves the PNG import to a hashed asset URL automatically.

## Verification
- Dev server is already running on `$PORT`; open the preview panel.
- Confirm: (1) hero shows the pale box with a diagonal white strip at the bottom, (2) the line-art idea→apps illustration sits behind the headline, (3) no scattered shapes or hand-built device panels remain, (4) headline + both CTAs are readable and centered, (5) layout holds at ~375px, ~768px, and desktop widths, (6) header and the rest of the page are unchanged.
