# CapsuleX: Dynamic SVG Banners for GitHub

CapsuleX is a tool for generating dynamic, animated SVG banners for GitHub repositories. It offers a public API for production use and an interactive local editor for designing banners with extended features. This README provides a complete reference for both, formatted for clarity and high contrast across GitHub's light and dark themes.

## Overview

CapsuleX lets you create visually appealing banners with customizable shapes, gradients, text, and animations. Use the public API to embed banners in your GitHub READMEs or the local editor for interactive design. All examples use high-contrast dark gradients (e.g., `#0f172a,#1e293b` with white text) for optimal visibility.

## Part A: Public API (Production)

**Base Endpoint**: `https://capsule-x-nu.vercel.app/api/capsule`

### Core Shapes (`type`)

| Shape    | Description                              | Notes                                      |
|----------|------------------------------------------|--------------------------------------------|
| `wave`   | Flowing shape with animated bubbles      | Default, supports `gradientAnim`, `enableGlow` |
| `wave2`  | Three sliding layers + main gradient wave | Motion scales with `speed`                 |
| `blob`   | Morphing organic blob with slow rotation | Morph/rotation scales with `speed`          |
| `rounded`| Rounded rectangle with neon bar streams  | Bars scale with `density`, supports `enableGlow` |

### API Parameters

| Parameter      | Type   | Description                              | Default         | Range/Options                                  | Example                     |
|----------------|--------|------------------------------------------|-----------------|-----------------------------------------------|-----------------------------|
| `type`         | String | Shape type                               | `wave`          | `wave`, `wave2`, `blob`, `rounded`            | `type=blob`                 |
| `color`        | String | Two comma-separated hex colors (no `#`)  | `667eea,764ba2` | Hex (e.g., `0f172a,1e293b`)                   | `color=0f172a,1e293b`       |
| `text`         | String | URL-encoded text                         | None            | Any string                                    | `text=Welcome%20to%20CapsuleX` |
| `fontSize`     | Number | Text size (px)                           | `24`            | Positive (18–72 recommended)                  | `fontSize=40`               |
| `fontColor`    | String | Hex color for text (no `#`)              | `ffffff`        | Hex (e.g., `ffffff`, `0b1021`)                | `fontColor=ffffff`          |
| `fontFamily`   | String | CSS font stack                           | `Arial, sans-serif` | Valid CSS fonts                           | `fontFamily=Montserrat, sans-serif` |
| `fontWeight`   | String | CSS font weight                          | `bold`          | `normal`, `500`, `900`, etc.                  | `fontWeight=500`            |
| `width`        | Number | Banner width (px)                        | `800`           | Positive (1000–1200 for banners)              | `width=1200`                |
| `height`       | Number | Banner height (px)                       | `200`           | Positive (200–300 for banners)                | `height=240`                |
| `align`        | String | Text alignment                           | `center`        | `center`, `left`, `right`                     | `align=left`                |
| `textAnim`     | String | Text animation                           | `none`          | `none`, `bounce`, `wave`, `flash`, `typewriter` | `textAnim=bounce`           |
| `speed`        | Number | Global animation speed multiplier        | `1`             | 0.25–3                                        | `speed=1.4`                 |
| `density`      | Number | Effect density (bubbles/bars)            | `1`             | 0.5–2                                         | `density=1.6`               |
| `gradientAnim` | Boolean| Animate gradient stops                   | `true`          | `true`, `false`                               | `gradientAnim=false`        |
| `enableGlow`   | Boolean| Glow on shapes                           | `false`         | `true`, `false`                               | `enableGlow=true`           |
| `v`            | String | Cache-buster token                       | None            | Any string/number                              | `v=2`                       |

### High-Contrast Examples

These examples use dark gradients with white text (`fontColor=ffffff`) for readability on both GitHub themes:

- **Wave + Bubbles**  
  `https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=0f172a,1e293b&text=Wave%20Bubbles&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=bounce&gradientAnim=true&speed=1.1`  
  ![Wave Bubbles](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=0f172a,1e293b&text=Wave%20Bubbles&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=bounce&gradientAnim=true&speed=1.1)

- **Wave2 + Layered Motion**  
  `https://capsule-x-nu.vercel.app/api/capsule?type=wave2&color=0b0f19,1f2937&text=Layered%20Waves&fontSize=40&fontColor=ffffff&width=1200&height=240`  
  ![Layered Waves](https://capsule-x-nu.vercel.app/api/capsule?type=wave2&color=0b0f19,1f2937&text=Layered%20Waves&fontSize=40&fontColor=ffffff&width=1200&height=240)

- **Blob Morph**  
  `https://capsule-x-nu.vercel.app/api/capsule?type=blob&color=1e293b,334155&text=Organic%20Blob&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=flash`  
  ![Organic Blob](https://capsule-x-nu.vercel.app/api/capsule?type=blob&color=1e293b,334155&text=Organic%20Blob&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=flash)

- **Rounded Neon Bars**  
  `https://capsule-x-nu.vercel.app/api/capsule?type=rounded&color=0f172a,1e293b&text=Neon%20Bars&fontSize=40&fontColor=ffffff&width=1200&height=240&enableGlow=true&speed=1.3&density=1.4`  
  ![Neon Bars](https://capsule-x-nu.vercel.app/api/capsule?type=rounded&color=0f172a,1e293b&text=Neon%20Bars&fontSize=40&fontColor=ffffff&width=1200&height=240&enableGlow=true&speed=1.3&density=1.4)

### Compatibility Notes

- **Animation**: Uses SVG SMIL, loops indefinitely on Chromium/Firefox/Edge.
- **GitHub Caching**: GitHub’s image proxy may cache/rasterize SVGs, showing static images. Use `v=2` (increment as needed) to bust cache. Open raw URLs in a browser to confirm animation.
- **Contrast**: For readability, use dark gradients (`0f172a,1e293b`) with `fontColor=ffffff` or bright gradients (`8EC5FC,E0C3FC`) with `fontColor=0b1021`.

## Part B: Local Editor (UI) Features

The CapsuleX editor extends the API with interactive controls and preview-only features (via Framer Motion). Some features are editor-only and not yet in the API.

### Editor Configuration

| Key                | Type   | Description                              | Default         | Range/Options                                  | Notes                     |
|--------------------|--------|------------------------------------------|-----------------|-----------------------------------------------|---------------------------|
| `shape`            | String | Shape type                               | `wave`          | `wave`, `wave2`, `blob`, `rounded`, `doubleWave`, `hexagon`, `diamond`, `arrow`, `cloud`, `star`, `heart` | Editor-only shapes not in API |
| `shapeAnimation`   | String | Additional shape transforms (editor-only)| `static`        | `static`, `pulse`, `spin`, `elasticSpin`, `gelatine`, `float`, `wobble`, `swing` | Not in API                |
| `color`            | Object | Gradient colors                          | `{ type: 'gradient', colors: ['667eea', '764ba2'] }` | Two hex colors                        | Maps to API `color`       |
| `text.content`     | String | Text content                             | None            | Any string                                    | Maps to API `text`        |
| `text.fontSize`    | Number | Text size (px)                           | `24`            | 18–72 recommended                             | Maps to API `fontSize`    |
| `text.color`       | String | Hex color for text                       | `ffffff`        | Hex (e.g., `ffffff`, `0b1021`)                | Maps to API `fontColor`   |
| `text.animation`   | String | Text animation                           | `none`          | `none`, `bounce`, `wave`, `flash`, `typewriter`, `fadeIn`, `slideIn`, `hithere`, `gelatine`, `glow`, `grow`, `wobble`, `swing`, `elasticSpin`, `spin`, `flip`, `rotateInDownLeft`, `rotateInUpLeft` | Extended set in editor |
| `text.fontFamily`  | String | CSS font stack                           | `Arial, sans-serif` | Valid CSS fonts                           | Maps to API `fontFamily`  |
| `text.fontWeight`  | String | CSS font weight                          | `bold`          | `normal`, `100`, `300`, `500`, `700`, `900`   | Maps to API `fontWeight`  |
| `text.letterSpacing`| Number | Letter spacing (px)                      | `0`             | -2 to 10                                      | Editor-only               |
| `width`            | Number | Banner width (px)                        | `800`           | 400–1200 (UI limit)                           | Maps to API `width`       |
| `height`           | Number | Banner height (px)                       | `200`           | 100–400 (UI limit)                            | Maps to API `height`      |
| `animationSpeed`   | Number | Animation speed multiplier               | `1`             | 0.25–3                                        | Maps to API `speed`       |
| `animationRange.x` | Number | Horizontal text motion (editor-only)      | `0`             | 0–100                                         | Not in API                |
| `animationRange.y` | Number | Vertical text motion (editor-only)        | `0`             | 0–100                                         | Not in API                |
| `enableGlow`       | Boolean| Glow on shapes                           | `false`         | `true`, `false`                               | Maps to API `enableGlow`  |
| `gradient`         | Boolean| Animate gradient stops                   | `true`          | `true`, `false`                               | Maps to API `gradientAnim`|

### Best Practices

- **Contrast**: Use dark gradients (`0f172a,1e293b`) with `fontColor=ffffff` for readability across themes. For bright gradients (`8EC5FC,E0C3FC`), use `fontColor=0b1021`.
- **Fonts**: Use full CSS stacks (e.g., `Montserrat, Arial, sans-serif`) for reliability. Recommended: `Arial, sans-serif`, `Roboto, sans-serif`, `Montserrat, sans-serif`, `Playfair Display, serif`, `Courier New, monospace`, `Poiret One, cursive`.
- **Sizing**: Use `width=1000–1200` and `height=200–300` for banners. Keep `fontSize ≥ 24` for mobile readability.

## Minimal Profile README Example

Below is a high-contrast banner for your GitHub profile README, using a dark gradient and white text:

```markdown
![CapsuleX Banner](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=0f172a,1e293b&text=Welcome%20to%20My%20Profile&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=bounce&gradientAnim=true&speed=1.1)
```

![CapsuleX Banner](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=0f172a,1e293b&text=Welcome%20to%20My%20Profile&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=bounce&gradientAnim=true&speed=1.1)

## FAQ

- **Why is my banner static on GitHub?**  
  GitHub’s image proxy may cache/rasterize SVGs. Add `&v=2` (increment as needed) to the URL and open in a browser to verify animation.
- **Why is my text unreadable?**  
  Ensure high contrast: use dark gradients (`0f172a,1e293b`) with `fontColor=ffffff` or bright gradients with `fontColor=0b1021`.
- **Custom fonts?**  
  The API supports any CSS font stack, but GitHub renders only client-available fonts. Use stacks with fallbacks (e.g., `Montserrat, Arial, sans-serif`).
- **Color format?**  
  Provide two hex colors (no `#`, comma-separated) or URL-encode `#` as `%23`.

## Roadmap

- Add `shapeAnim` parameter to API (to match editor’s `pulse`, `spin`, etc.).
- Expose `animationRange.x/y` as API parameters.
- Add more shapes and named themes.
- Implement automatic contrast detection for `fontColor`.
