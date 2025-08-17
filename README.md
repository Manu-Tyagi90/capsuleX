# CapsuleX: Dynamic SVG Banners for GitHub

CapsuleX is a tool for generating dynamic, animated SVG banners for GitHub repositories. It offers a public API for production use and an interactive local editor for designing banners with extended features.

## Overview

CapsuleX lets you create visually appealing banners with customizable shapes, gradients, text, and animations. Use the public API to embed banners in your GitHub READMEs or the local editor for interactive design.

## Part A: Public API (Production)

**Base Endpoint**: `https://capsule-x-nu.vercel.app/api/capsule`

### Core Shapes (`type`)

| Shape | Icon | Description | Best For | Example |
|-------|------|-------------|----------|---------|
| `wave` | 🌊 | Flowing wave with animated bubbles | Dynamic headers, welcome banners | Default choice |
| `wave2` | 🌊🌊 | Three-layer sliding waves | Depth effects, motion backgrounds | Layered animations |
| `blob` | 🫧 | Morphing organic blob with rotation | Modern, playful designs | Creative projects |
| `rounded` | ⬜ | Rounded rectangle with neon streams | Tech/gaming themes | Futuristic look |

### Extended Shapes (Editor Only)

| Shape | Icon | Description | Best For |
|-------|------|-------------|----------|
| `doubleWave` | 〰️〰️ | Dual wave patterns | Complex motion |
| `hexagon` | ⬡ | Six-sided polygon | Tech, blockchain, chemistry themes |
| `diamond` | 💎 | Four-pointed diamond | Premium, luxury branding |
| `arrow` | ➜ | Directional arrow | CTAs, navigation, progress |
| `cloud` | ☁️ | Soft cloud shape | SaaS, weather, dreams |
| `star` | ⭐ | Five-pointed star | Achievements, ratings, favorites |
| `heart` | ❤️ | Heart shape | Social, health, appreciation |

### Color Gradient Schemes

| Theme | Gradient Colors | Font Color | Description | Preview |
|-------|----------------|------------|-------------|---------|
| **Dark Navy** | `0f172a,1e293b` | `ffffff` | Professional, high contrast | ![](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=0f172a,1e293b&text=Dark%20Navy&fontSize=24&fontColor=ffffff&width=400&height=100) |
| **Midnight** | `0b0f19,1f2937` | `ffffff` | Deep, mysterious | ![](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=0b0f19,1f2937&text=Midnight&fontSize=24&fontColor=ffffff&width=400&height=100) |
| **Purple Dream** | `667eea,764ba2` | `ffffff` | Creative, modern | ![](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=667eea,764ba2&text=Purple%20Dream&fontSize=24&fontColor=ffffff&width=400&height=100) |
| **Ocean Blue** | `2193b0,6dd5ed` | `ffffff` | Calm, trustworthy | ![](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=2193b0,6dd5ed&text=Ocean%20Blue&fontSize=24&fontColor=ffffff&width=400&height=100) |
| **Sunset** | `ff6b6b,feca57` | `1a1a1a` | Warm, energetic | ![](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=ff6b6b,feca57&text=Sunset&fontSize=24&fontColor=1a1a1a&width=400&height=100) |
| **Forest** | `11998e,38ef7d` | `ffffff` | Natural, growth | ![](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=11998e,38ef7d&text=Forest&fontSize=24&fontColor=ffffff&width=400&height=100) |
| **Cherry** | `eb3349,f45c43` | `ffffff` | Bold, passionate | ![](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=eb3349,f45c43&text=Cherry&fontSize=24&fontColor=ffffff&width=400&height=100) |
| **Lavender** | `8EC5FC,E0C3FC` | `0b1021` | Soft, dreamy | ![](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=8EC5FC,E0C3FC&text=Lavender&fontSize=24&fontColor=0b1021&width=400&height=100) |
| **Slate** | `1e293b,334155` | `ffffff` | Subtle, professional | ![](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=1e293b,334155&text=Slate&fontSize=24&fontColor=ffffff&width=400&height=100) |
| **Neon** | `00f2fe,4facfe` | `ffffff` | Electric, modern | ![](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=00f2fe,4facfe&text=Neon&fontSize=24&fontColor=ffffff&width=400&height=100) |

### API Parameters

| Parameter | Type | Description | Default | Range/Options | Example |
|-----------|------|-------------|---------|---------------|---------|
| `type` | String | Shape type | `wave` | `wave`, `wave2`, `blob`, `rounded` | `type=blob` |
| `color` | String | Two comma-separated hex colors (no `#`) | `667eea,764ba2` | Any hex colors | `color=0f172a,1e293b` |
| `text` | String | URL-encoded text | None | Any string | `text=Welcome%20to%20CapsuleX` |
| `fontSize` | Number | Text size (px) | `24` | 18–72 recommended | `fontSize=40` |
| `fontColor` | String | Hex color for text (no `#`) | `ffffff` | Any hex color | `fontColor=ffffff` |
| `fontFamily` | String | CSS font stack | `Arial, sans-serif` | Valid CSS fonts | `fontFamily=Montserrat, sans-serif` |
| `fontWeight` | String | CSS font weight | `bold` | `normal`, `500`, `900`, etc. | `fontWeight=500` |
| `width` | Number | Banner width (px) | `800` | Positive integer | `width=1200` |
| `height` | Number | Banner height (px) | `200` | Positive integer | `height=240` |
| `align` | String | Text alignment | `center` | `center`, `left`, `right` | `align=left` |
| `textAnim` | String | Text animation | `none` | See text animations table | `textAnim=bounce` |
| `speed` | Number | Animation speed multiplier | `1` | 0.25–3 | `speed=1.4` |
| `density` | Number | Effect density | `1` | 0.5–2 | `density=1.6` |
| `gradientAnim` | Boolean | Animate gradient | `true` | `true`, `false` | `gradientAnim=false` |
| `enableGlow` | Boolean | Glow effects | `false` | `true`, `false` | `enableGlow=true` |
| `v` | String | Cache-buster | None | Any string/number | `v=2` |

### Text Animations (API)

| Animation | Icon | Description | Best For |
|-----------|------|-------------|----------|
| `none` | ⏹️ | Static text | Clean, professional |
| `bounce` | ⚾ | Bouncing effect | Playful, attention-grabbing |
| `wave` | 〰️ | Wave motion through letters | Smooth, flowing |
| `flash` | ⚡ | Flashing/blinking effect | Urgent, alerts |
| `typewriter` | ⌨️ | Typing effect | Welcome messages, reveals |

### Extended Animations (Editor Only)

| Animation | Icon | Description | Best For |
|-----------|------|-------------|----------|
| `fadeIn` | 💫 | Fade in from transparent | Smooth entrance |
| `fadeOut` | 🌙 | Fade out to transparent | Smooth exit |
| `fadeDown` | ⬇️ | Fade in from top | Dropdown effect |
| `fadeLeft` | ⬅️ | Fade in from right | Slide entrance |
| `fadeOutDown` | ⏬ | Fade out downward | Dismissal effect |
| `fadeOutRight` | ⏩ | Fade out to right | Slide exit |
| `bounce2` | 🏀 | Alternative bounce | Energetic motion |
| `bounceIn` | 📥 | Bounce entrance | Playful arrival |
| `bounceRight` | ➡️ | Bounce from left | Directional bounce |
| `bounceOut` | 📤 | Bounce exit | Playful departure |
| `bounceDown` | ⬇️ | Downward bounce | Gravity effect |
| `spin` | 🔄 | 360° rotation | Loading, processing |
| `elasticSpin` | 🌀 | Elastic rotation | Springy motion |
| `flip` | 🔃 | Card flip effect | Reveal, transform |
| `rotateInDownLeft` | ↙️ | Rotate in from top-right | Dynamic entrance |
| `rotateInUpLeft` | ↖️ | Rotate in from bottom-right | Rising effect |
| `swing` | 🎭 | Pendulum swing | Playful, natural |
| `gelatine` | 🍮 | Jelly-like wobble | Fun, organic |
| `pulse` | 💗 | Size pulsation | Heartbeat, emphasis |
| `hithere` | 👋 | Waving hello | Greeting, welcome |
| `grow` | 🌱 | Scale up effect | Expansion, emphasis |
| `shake` | 🫨 | Shaking motion | Error, attention |
| `wobble` | 🏃 | Wobbling motion | Unstable, playful |
| `hinge` | 🚪 | Hinge rotation | Door effect |
| `rollIn` | 🎲 | Roll in entrance | Tumbling arrival |
| `rollOut` | 🎯 | Roll out exit | Tumbling departure |
| `glow` | ✨ | Glowing effect | Highlight, magic |

### Shape Animations (Editor Only)

| Animation | Icon | Description | Best For |
|-----------|------|-------------|----------|
| `static` | ⏸️ | No animation | Clean, stable |
| `pulse` | 💗 | Breathing effect | Living, organic |
| `spin` | 🔄 | Continuous rotation | Dynamic, loading |
| `elasticSpin` | 🌀 | Springy rotation | Playful motion |
| `gelatine` | 🍮 | Jelly wobble | Fun, bouncy |
| `float` | 🎈 | Floating motion | Light, airy |
| `wobble` | 🏃 | Side-to-side wobble | Energetic |
| `swing` | 🎭 | Pendulum swing | Natural motion |

## High-Contrast Examples

### Professional Dark
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=0f172a,1e293b&text=Professional&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=bounce&gradientAnim=true
```
![Professional Dark](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=0f172a,1e293b&text=Professional&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=bounce&gradientAnim=true)

### Ocean Wave
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave2&color=2193b0,6dd5ed&text=Ocean%20Wave&fontSize=40&fontColor=ffffff&width=1200&height=240
```
![Ocean Wave](https://capsule-x-nu.vercel.app/api/capsule?type=wave2&color=2193b0,6dd5ed&text=Ocean%20Wave&fontSize=40&fontColor=ffffff&width=1200&height=240)

### Purple Blob
```
https://capsule-x-nu.vercel.app/api/capsule?type=blob&color=667eea,764ba2&text=Creative%20Blob&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=flash
```
![Purple Blob](https://capsule-x-nu.vercel.app/api/capsule?type=blob&color=667eea,764ba2&text=Creative%20Blob&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=flash)

### Neon Bars
```
https://capsule-x-nu.vercel.app/api/capsule?type=rounded&color=00f2fe,4facfe&text=Neon%20Style&fontSize=40&fontColor=ffffff&width=1200&height=240&enableGlow=true&speed=1.3&density=1.4
```
![Neon Bars](https://capsule-x-nu.vercel.app/api/capsule?type=rounded&color=00f2fe,4facfe&text=Neon%20Style&fontSize=40&fontColor=ffffff&width=1200&height=240&enableGlow=true&speed=1.3&density=1.4)

## Minimal Profile README Example

```markdown
![Welcome](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=667eea,764ba2&text=Welcome%20to%20My%20Profile&fontSize=48&fontColor=ffffff&width=1200&height=260&textAnim=bounce&gradientAnim=true&speed=1.1&v=1)

### 🚀 Currently Working On
![Current](https://capsule-x-nu.vercel.app/api/capsule?type=blob&color=11998e,38ef7d&text=Open%20Source%20Projects&fontSize=32&fontColor=ffffff&width=900&height=180&textAnim=wave&v=1)

### 💻 Tech Stack
![Tech](https://capsule-x-nu.vercel.app/api/capsule?type=rounded&color=2193b0,6dd5ed&text=Full%20Stack%20Developer&fontSize=28&fontColor=ffffff&width=800&height=160&enableGlow=true&density=1.2&v=1)

### 📫 Let's Connect
![Contact](https://capsule-x-nu.vercel.app/api/capsule?type=wave2&color=eb3349,f45c43&text=Get%20In%20Touch!&fontSize=36&fontColor=ffffff&width=700&height=140&textAnim=flash&speed=0.8&v=1)
```

## Best Practices

1. **Color Selection**: Choose gradients based on your theme:
   - Dark themes: Use darker gradients with white text
   - Light themes: Use vibrant gradients with appropriate contrast
   - Universal: `0f172a,1e293b` with `fontColor=ffffff` works everywhere

2. **Animation Choice**: Match animation to content:
   - Professional: `none` or subtle `fadeIn`
   - Playful: `bounce`, `wobble`, `gelatine`
   - Attention: `flash`, `pulse`, `glow`
   - Modern: `typewriter`, `wave`, `spin`

3. **Performance**: 
   - Keep `speed` between 0.5-2 for smooth animation
   - Use `density` 0.8-1.5 for balanced effects
   - Add `&v=1` and increment to bust GitHub cache

4. **Readability**:
   - Minimum `fontSize=24` for mobile
   - High contrast between text and background
   - Test in both light and dark GitHub themes

# CapsuleX API Examples - Ready to Use

## 🎨 Shape Showcase with Multiple Color Themes

### Wave Shape (Default) - Various Colors

#### Dark Navy Wave
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=0f172a,1e293b&text=Dark%20Navy%20Wave&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=bounce&gradientAnim=true&speed=1.1
```
![Dark Navy Wave](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=0f172a,1e293b&text=Dark%20Navy%20Wave&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=bounce&gradientAnim=true&speed=1.1)

#### Purple Dream Wave
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=667eea,764ba2&text=Purple%20Dream%20Wave&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=wave&gradientAnim=true
```
![Purple Dream Wave](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=667eea,764ba2&text=Purple%20Dream%20Wave&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=wave&gradientAnim=true)

#### Ocean Blue Wave
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=2193b0,6dd5ed&text=Ocean%20Blue%20Wave&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=flash&enableGlow=true
```
![Ocean Blue Wave](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=2193b0,6dd5ed&text=Ocean%20Blue%20Wave&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=flash&enableGlow=true)

#### Sunset Wave
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=ff6b6b,feca57&text=Sunset%20Wave&fontSize=40&fontColor=1a1a1a&width=1200&height=240&textAnim=typewriter&speed=0.8
```
![Sunset Wave](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=ff6b6b,feca57&text=Sunset%20Wave&fontSize=40&fontColor=1a1a1a&width=1200&height=240&textAnim=typewriter&speed=0.8)

#### Forest Green Wave
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=11998e,38ef7d&text=Forest%20Green%20Wave&fontSize=40&fontColor=ffffff&width=1200&height=240&density=1.5
```
![Forest Green Wave](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=11998e,38ef7d&text=Forest%20Green%20Wave&fontSize=40&fontColor=ffffff&width=1200&height=240&density=1.5)

#### Cherry Red Wave
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=eb3349,f45c43&text=Cherry%20Red%20Wave&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=bounce&enableGlow=true
```
![Cherry Red Wave](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=eb3349,f45c43&text=Cherry%20Red%20Wave&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=bounce&enableGlow=true)

### Wave2 Shape - Layered Waves

#### Midnight Wave2
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave2&color=0b0f19,1f2937&text=Midnight%20Layers&fontSize=40&fontColor=ffffff&width=1200&height=240&speed=1.2
```
![Midnight Wave2](https://capsule-x-nu.vercel.app/api/capsule?type=wave2&color=0b0f19,1f2937&text=Midnight%20Layers&fontSize=40&fontColor=ffffff&width=1200&height=240&speed=1.2)

#### Neon Wave2
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave2&color=00f2fe,4facfe&text=Neon%20Layers&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=wave
```
![Neon Wave2](https://capsule-x-nu.vercel.app/api/capsule?type=wave2&color=00f2fe,4facfe&text=Neon%20Layers&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=wave)

#### Lavender Wave2
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave2&color=8EC5FC,E0C3FC&text=Lavender%20Layers&fontSize=40&fontColor=0b1021&width=1200&height=240&speed=0.7
```
![Lavender Wave2](https://capsule-x-nu.vercel.app/api/capsule?type=wave2&color=8EC5FC,E0C3FC&text=Lavender%20Layers&fontSize=40&fontColor=0b1021&width=1200&height=240&speed=0.7)

#### Royal Purple Wave2
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave2&color=5f27cd,8854d0&text=Royal%20Purple&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=flash
```
![Royal Purple Wave2](https://capsule-x-nu.vercel.app/api/capsule?type=wave2&color=5f27cd,8854d0&text=Royal%20Purple&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=flash)

### Blob Shape - Organic Morphing

#### Slate Blob
```
https://capsule-x-nu.vercel.app/api/capsule?type=blob&color=1e293b,334155&text=Slate%20Blob&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=bounce&speed=0.8
```
![Slate Blob](https://capsule-x-nu.vercel.app/api/capsule?type=blob&color=1e293b,334155&text=Slate%20Blob&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=bounce&speed=0.8)

#### Pink Gradient Blob
```
https://capsule-x-nu.vercel.app/api/capsule?type=blob&color=f093fb,f5576c&text=Pink%20Gradient&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=wave&enableGlow=true
```
![Pink Gradient Blob](https://capsule-x-nu.vercel.app/api/capsule?type=blob&color=f093fb,f5576c&text=Pink%20Gradient&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=wave&enableGlow=true)

#### Teal Blob
```
https://capsule-x-nu.vercel.app/api/capsule?type=blob&color=007991,78ffd6&text=Teal%20Morph&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=typewriter
```
![Teal Blob](https://capsule-x-nu.vercel.app/api/capsule?type=blob&color=007991,78ffd6&text=Teal%20Morph&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=typewriter)

#### Golden Blob
```
https://capsule-x-nu.vercel.app/api/capsule?type=blob&color=f2994a,f2c94c&text=Golden%20Blob&fontSize=40&fontColor=1a1a1a&width=1200&height=240&speed=1.5
```
![Golden Blob](https://capsule-x-nu.vercel.app/api/capsule?type=blob&color=f2994a,f2c94c&text=Golden%20Blob&fontSize=40&fontColor=1a1a1a&width=1200&height=240&speed=1.5)

### Rounded Shape - Neon Bars

#### Dark Neon Rounded
```
https://capsule-x-nu.vercel.app/api/capsule?type=rounded&color=0f172a,1e293b&text=Dark%20Neon%20Bars&fontSize=40&fontColor=ffffff&width=1200&height=240&enableGlow=true&speed=1.3&density=1.4
```
![Dark Neon Rounded](https://capsule-x-nu.vercel.app/api/capsule?type=rounded&color=0f172a,1e293b&text=Dark%20Neon%20Bars&fontSize=40&fontColor=ffffff&width=1200&height=240&enableGlow=true&speed=1.3&density=1.4)

#### Electric Blue Rounded
```
https://capsule-x-nu.vercel.app/api/capsule?type=rounded&color=00d2ff,3a7bd5&text=Electric%20Blue&fontSize=40&fontColor=ffffff&width=1200&height=240&enableGlow=true&density=2
```
![Electric Blue Rounded](https://capsule-x-nu.vercel.app/api/capsule?type=rounded&color=00d2ff,3a7bd5&text=Electric%20Blue&fontSize=40&fontColor=ffffff&width=1200&height=240&enableGlow=true&density=2)

#### Violet Rounded
```
https://capsule-x-nu.vercel.app/api/capsule?type=rounded&color=6a0dad,b19cd9&text=Violet%20Neon&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=flash&enableGlow=true
```
![Violet Rounded](https://capsule-x-nu.vercel.app/api/capsule?type=rounded&color=6a0dad,b19cd9&text=Violet%20Neon&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=flash&enableGlow=true)

#### Emerald Rounded
```
https://capsule-x-nu.vercel.app/api/capsule?type=rounded&color=00b09b,96c93d&text=Emerald%20Bars&fontSize=40&fontColor=ffffff&width=1200&height=240&density=1.8&speed=1.1
```
![Emerald Rounded](https://capsule-x-nu.vercel.app/api/capsule?type=rounded&color=00b09b,96c93d&text=Emerald%20Bars&fontSize=40&fontColor=ffffff&width=1200&height=240&density=1.8&speed=1.1)

## 🎬 Text Animation Showcase

### Bounce Animation
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=667eea,764ba2&text=Bounce%20Effect&fontSize=42&fontColor=ffffff&width=1000&height=200&textAnim=bounce&speed=1.2
```
![Bounce Animation](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=667eea,764ba2&text=Bounce%20Effect&fontSize=42&fontColor=ffffff&width=1000&height=200&textAnim=bounce&speed=1.2)

### Wave Animation
```
https://capsule-x-nu.vercel.app/api/capsule?type=blob&color=2193b0,6dd5ed&text=Wave%20Motion&fontSize=42&fontColor=ffffff&width=1000&height=200&textAnim=wave
```
![Wave Animation](https://capsule-x-nu.vercel.app/api/capsule?type=blob&color=2193b0,6dd5ed&text=Wave%20Motion&fontSize=42&fontColor=ffffff&width=1000&height=200&textAnim=wave)

### Flash Animation
```
https://capsule-x-nu.vercel.app/api/capsule?type=rounded&color=eb3349,f45c43&text=Flash%20Alert&fontSize=42&fontColor=ffffff&width=1000&height=200&textAnim=flash&enableGlow=true
```
![Flash Animation](https://capsule-x-nu.vercel.app/api/capsule?type=rounded&color=eb3349,f45c43&text=Flash%20Alert&fontSize=42&fontColor=ffffff&width=1000&height=200&textAnim=flash&enableGlow=true)

### Typewriter Animation
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave2&color=11998e,38ef7d&text=Typewriter%20Text&fontSize=42&fontColor=ffffff&width=1000&height=200&textAnim=typewriter&speed=0.7
```
![Typewriter Animation](https://capsule-x-nu.vercel.app/api/capsule?type=wave2&color=11998e,38ef7d&text=Typewriter%20Text&fontSize=42&fontColor=ffffff&width=1000&height=200&textAnim=typewriter&speed=0.7)

## 🎯 Special Effects Combinations

### Maximum Glow + Fast Animation
```
https://capsule-x-nu.vercel.app/api/capsule?type=rounded&color=00f2fe,4facfe&text=MAXIMUM%20GLOW&fontSize=48&fontColor=ffffff&width=1200&height=280&enableGlow=true&speed=2&density=2&textAnim=flash
```
![Maximum Glow](https://capsule-x-nu.vercel.app/api/capsule?type=rounded&color=00f2fe,4facfe&text=MAXIMUM%20GLOW&fontSize=48&fontColor=ffffff&width=1200&height=280&enableGlow=true&speed=2&density=2&textAnim=flash)

### Slow Motion Blob
```
https://capsule-x-nu.vercel.app/api/capsule?type=blob&color=5f27cd,8854d0&text=Slow%20Motion&fontSize=45&fontColor=ffffff&width=1200&height=260&speed=0.3&textAnim=wave
```
![Slow Motion](https://capsule-x-nu.vercel.app/api/capsule?type=blob&color=5f27cd,8854d0&text=Slow%20Motion&fontSize=45&fontColor=ffffff&width=1200&height=260&speed=0.3&textAnim=wave)

### Dense Bubbles Wave
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=007991,78ffd6&text=Dense%20Bubbles&fontSize=42&fontColor=ffffff&width=1200&height=240&density=2&textAnim=bounce&enableGlow=true
```
![Dense Bubbles](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=007991,78ffd6&text=Dense%20Bubbles&fontSize=42&fontColor=ffffff&width=1200&height=240&density=2&textAnim=bounce&enableGlow=true)

### Minimal Animation
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=1e293b,334155&text=Minimal%20Style&fontSize=36&fontColor=ffffff&width=1200&height=200&gradientAnim=false&speed=0.5&density=0.5
```
![Minimal Animation](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=1e293b,334155&text=Minimal%20Style&fontSize=36&fontColor=ffffff&width=1200&height=200&gradientAnim=false&speed=0.5&density=0.5)

## 🎨 Creative Color Combinations

### Cyberpunk
```
https://capsule-x-nu.vercel.app/api/capsule?type=rounded&color=ff006e,8338ec&text=CYBERPUNK%202077&fontSize=45&fontColor=ffffff&width=1200&height=250&enableGlow=true&textAnim=flash&speed=1.5&density=1.8
```
![Cyberpunk](https://capsule-x-nu.vercel.app/api/capsule?type=rounded&color=ff006e,8338ec&text=CYBERPUNK%202077&fontSize=45&fontColor=ffffff&width=1200&height=250&enableGlow=true&textAnim=flash&speed=1.5&density=1.8)

### Retro Synthwave
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave2&color=f72585,7209b7&text=SYNTHWAVE&fontSize=50&fontColor=ffffff&width=1200&height=260&textAnim=wave&speed=1.2
```
![Synthwave](https://capsule-x-nu.vercel.app/api/capsule?type=wave2&color=f72585,7209b7&text=SYNTHWAVE&fontSize=50&fontColor=ffffff&width=1200&height=260&textAnim=wave&speed=1.2)

### Matrix Green
```
https://capsule-x-nu.vercel.app/api/capsule?type=blob&color=00ff41,00d82d&text=THE%20MATRIX&fontSize=44&fontColor=000000&width=1200&height=240&textAnim=typewriter&speed=0.8
```
![Matrix](https://capsule-x-nu.vercel.app/api/capsule?type=blob&color=00ff41,00d82d&text=THE%20MATRIX&fontSize=44&fontColor=000000&width=1200&height=240&textAnim=typewriter&speed=0.8)

### Fire Gradient
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=ff4e00,fc9700&text=FIRE%20BANNER&fontSize=48&fontColor=ffffff&width=1200&height=250&textAnim=bounce&enableGlow=true&density=1.6
```
![Fire](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=ff4e00,fc9700&text=FIRE%20BANNER&fontSize=48&fontColor=ffffff&width=1200&height=250&textAnim=bounce&enableGlow=true&density=1.6)

### Ice Cold
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave2&color=74ebd5,acb6e5&text=ICE%20COLD&fontSize=46&fontColor=0b1021&width=1200&height=240&speed=0.6
```
![Ice Cold](https://capsule-x-nu.vercel.app/api/capsule?type=wave2&color=74ebd5,acb6e5&text=ICE%20COLD&fontSize=46&fontColor=0b1021&width=1200&height=240&speed=0.6)

## 📏 Different Sizes

### Compact Badge (800x180)
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=667eea,764ba2&text=Compact&fontSize=32&fontColor=ffffff&width=800&height=180
```
![Compact](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=667eea,764ba2&text=Compact&fontSize=32&fontColor=ffffff&width=800&height=180)

### Standard Banner (1000x200)
```
https://capsule-x-nu.vercel.app/api/capsule?type=blob&color=11998e,38ef7d&text=Standard%20Size&fontSize=36&fontColor=ffffff&width=1000&height=200
```
![Standard](https://capsule-x-nu.vercel.app/api/capsule?type=blob&color=11998e,38ef7d&text=Standard%20Size&fontSize=36&fontColor=ffffff&width=1000&height=200)

### Large Hero (1200x300)
```
https://capsule-x-nu.vercel.app/api/capsule?type=rounded&color=0f172a,1e293b&text=LARGE%20HERO&fontSize=60&fontColor=ffffff&width=1200&height=300&enableGlow=true
```
![Large Hero](https://capsule-x-nu.vercel.app/api/capsule?type=rounded&color=0f172a,1e293b&text=LARGE%20HERO&fontSize=60&fontColor=ffffff&width=1200&height=300&enableGlow=true)

### Ultra Wide (1400x200)
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave2&color=2193b0,6dd5ed&text=Ultra%20Wide%20Banner&fontSize=38&fontColor=ffffff&width=1400&height=200
```
![Ultra Wide](https://capsule-x-nu.vercel.app/api/capsule?type=wave2&color=2193b0,6dd5ed&text=Ultra%20Wide%20Banner&fontSize=38&fontColor=ffffff&width=1400&height=200)

## 🎯 Ready-to-Use Profile Banners

### Developer Profile
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=0f172a,1e293b&text=Full%20Stack%20Developer&fontSize=45&fontColor=ffffff&width=1200&height=250&textAnim=bounce&gradientAnim=true&enableGlow=true
```
![Developer](https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=0f172a,1e293b&text=Full%20Stack%20Developer&fontSize=45&fontColor=ffffff&width=1200&height=250&textAnim=bounce&gradientAnim=true&enableGlow=true)

### Open Source Contributor
```
https://capsule-x-nu.vercel.app/api/capsule?type=blob&color=11998e,38ef7d&text=Open%20Source%20Contributor&fontSize=42&fontColor=ffffff&width=1200&height=240&textAnim=wave
```
![Open Source](https://capsule-x-nu.vercel.app/api/capsule?type=blob&color=11998e,38ef7d&text=Open%20Source%20Contributor&fontSize=42&fontColor=ffffff&width=1200&height=240&textAnim=wave)

### Creative Designer
```
https://capsule-x-nu.vercel.app/api/capsule?type=rounded&color=f093fb,f5576c&text=Creative%20Designer&fontSize=44&fontColor=ffffff&width=1200&height=240&enableGlow=true&textAnim=flash&density=1.5
```
![Designer](https://capsule-x-nu.vercel.app/api/capsule?type=rounded&color=f093fb,f5576c&text=Creative%20Designer&fontSize=44&fontColor=ffffff&width=1200&height=240&enableGlow=true&textAnim=flash&density=1.5)

### Data Scientist
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave2&color=5f27cd,8854d0&text=Data%20Scientist&fontSize=46&fontColor=ffffff&width=1200&height=250&textAnim=typewriter&speed=0.8
```
![Data Scientist](https://capsule-x-nu.vercel.app/api/capsule?type=wave2&color=5f27cd,8854d0&text=Data%20Scientist&fontSize=46&fontColor=ffffff&width=1200&height=250&textAnim=typewriter&speed=0.8)

## 🔧 Quick Copy Templates

### Dark Professional
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave&color=0f172a,1e293b&text=YOUR%20TEXT&fontSize=40&fontColor=ffffff&width=1200&height=240
```

### Colorful Creative
```
https://capsule-x-nu.vercel.app/api/capsule?type=blob&color=667eea,764ba2&text=YOUR%20TEXT&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=bounce
```

### Neon Gaming
```
https://capsule-x-nu.vercel.app/api/capsule?type=rounded&color=00f2fe,4facfe&text=YOUR%20TEXT&fontSize=40&fontColor=ffffff&width=1200&height=240&enableGlow=true&textAnim=flash
```

### Nature Theme
```
https://capsule-x-nu.vercel.app/api/capsule?type=wave2&color=11998e,38ef7d&text=YOUR%20TEXT&fontSize=40&fontColor=ffffff&width=1200&height=240&textAnim=wave
```

## 📝 Parameter Quick Reference

Replace values in any URL above:

- **Shapes**: `wave`, `wave2`, `blob`, `rounded`
- **Text Animations**: `none`, `bounce`, `wave`, `flash`, `typewriter`
- **Speed**: `0.25` to `3` (default: `1`)
- **Density**: `0.5` to `2` (default: `1`)
- **Enable Glow**: `true` or `false`
- **Gradient Animation**: `true` or `false`
- **Font Size**: `18` to `72` (recommended)
- **Width**: Any positive number (common: `800`, `1000`, `1200`)
- **Height**: Any positive number (common: `180`, `200`, `240`, `300`)

Remember to URL-encode your text (spaces = `%20`) and add `&v=1` (increment number) to bust GitHub's cache when updating!

