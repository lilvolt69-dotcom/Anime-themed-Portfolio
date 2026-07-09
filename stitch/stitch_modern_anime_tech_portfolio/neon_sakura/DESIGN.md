---
name: Neon Sakura
colors:
  surface: '#fff8f8'
  surface-dim: '#fdcddf'
  surface-bright: '#fff8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f4'
  surface-container: '#ffe8ef'
  surface-container-high: '#ffe0eb'
  surface-container-highest: '#ffd8e6'
  on-surface: '#2e1320'
  on-surface-variant: '#5b3f45'
  inverse-surface: '#452735'
  inverse-on-surface: '#ffecf1'
  outline: '#906e75'
  outline-variant: '#e4bdc3'
  surface-tint: '#bb0055'
  primary: '#b70052'
  on-primary: '#ffffff'
  primary-container: '#e40069'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb1c2'
  secondary: '#a03e3f'
  on-secondary: '#ffffff'
  secondary-container: '#fd8583'
  on-secondary-container: '#741d21'
  tertiary: '#006b27'
  on-tertiary: '#ffffff'
  tertiary-container: '#008734'
  on-tertiary-container: '#f7fff2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9df'
  primary-fixed-dim: '#ffb1c2'
  on-primary-fixed: '#3f0018'
  on-primary-fixed-variant: '#8f003f'
  secondary-fixed: '#ffdad8'
  secondary-fixed-dim: '#ffb3b0'
  on-secondary-fixed: '#410006'
  on-secondary-fixed-variant: '#812729'
  tertiary-fixed: '#86fb94'
  tertiary-fixed-dim: '#6ade7b'
  on-tertiary-fixed: '#002107'
  on-tertiary-fixed-variant: '#00531c'
  background: '#fff8f8'
  on-background: '#2e1320'
  surface-variant: '#ffd8e6'
  accent-orange: '#f3644f'
  bg-light: '#fef1f7'
  bg-dark: '#0e0107'
  primary-dark: '#ea106b'
  secondary-dark: '#810b09'
  accent-dark: '#b0220c'
  text-dark: '#feecf4'
typography:
  headline-xl:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style

This design system draws inspiration from modern anime aesthetics, specifically the "tech-wear" and "cyber-pastel" subcultures. The brand personality is energetic, optimistic, and technically proficient, mirroring the vibrant character art provided. 

The design style is a hybrid of **Minimalist Glassmorphism** and **Bold Tech**. It utilizes the airy, translucent qualities of glassmorphism to handle complex information layers while anchoring the experience with heavy, brutalist-inspired typography and high-contrast color pops. The goal is to create a digital environment that feels like a futuristic HUD (Heads-Up Display) filtered through a soft, contemporary lens.

Key visual pillars include:
- **Translucency:** Using frosted surfaces to maintain a sense of depth and light.
- **Vibrant Precision:** Sharp geometric layouts paired with high-saturation accent colors.
- **Anime Influence:** Subtle nods to manga through star motifs, thin-stroke iconography, and "speed-line" inspired layout containers.

## Colors

The color palette is built on a high-energy pink foundation, moving away from corporate blues toward a more "Electric Sakura" theme. 

- **Light Mode:** Uses a soft pink-tinted background (`#fef1f7`) to reduce eye strain while maintaining the brand's warmth. The primary pink (`#ef1570`) provides a strong call-to-action anchor.
- **Dark Mode:** Transitions into a deep, "ink-cherry" black (`#0e0107`). The secondary and accent colors shift toward blood-orange and deep reds to evoke a more serious, technical "night-ops" anime feel.
- **Application:** Use the Primary color for interactive states and brand-heavy elements. Use the Accent color sparingly for notifications, warnings, or high-priority highlights.

## Typography

The typography strategy pairs the expressive, geometric forms of **Syne** with the clean, modern readability of **Plus Jakarta Sans**.

- **Headlines:** Syne should be used with tight tracking and heavy weights. For XL headlines, use the "Extra Bold" weight to create a striking, editorial impact reminiscent of anime title cards.
- **Body:** Plus Jakarta Sans provides a friendly, approachable contrast. It maintains high legibility even in dense technical layouts.
- **Labels:** Use uppercase for small labels and buttons to reinforce the "tech" aesthetic. Ensure letter spacing is slightly increased (5%) for all-caps labels to maintain clarity.

## Layout & Spacing

The layout follows a **fluid grid system** with an 8px base unit. 

- **Desktop:** A 12-column grid with generous 64px outer margins. Use asymmetrical layouts (e.g., a 4-column sidebar and 7-column content area with 1-column offset) to create a more dynamic, "unrefined" feel characteristic of anime UI.
- **Mobile:** A 4-column grid with 16px margins.
- **Rhythm:** Vertical spacing should be aggressive. Use large gaps (64px+) between major sections to emphasize the minimalist aesthetic. Elements within a group should stay tight (8px or 16px) to maintain a logical association.

## Elevation & Depth

Hierarchy is achieved through **Glassmorphic Layers** rather than traditional shadows.

1.  **Background:** The base tint (`#fef1f7` or `#0e0107`).
2.  **Surface:** Semi-transparent panels with a 20px backdrop blur and a thin, 1px white (or light pink) inner border at 10% opacity.
3.  **Floating Elements:** Use a subtle, tinted ambient shadow (e.g., a 15% opacity primary color shadow) for high-level components like modals or primary action buttons.
4.  **Flat Tiers:** For list items or secondary cards, use low-contrast outlines (1px solid) without any background fill to maintain a clean look.

## Shapes

The design system uses a **Rounded** shape language to balance the aggressive typography and bold colors.

- **Standard Components:** Buttons and inputs use a 0.5rem (8px) radius.
- **Large Containers:** Cards and glass panels use a 1.5rem (24px) radius to create a soft, inviting frame for content.
- **Iconography:** Icons should feature consistent stroke weights (1.5px - 2px) with slightly rounded terminals to match the body font.

## Components

### Buttons
- **Primary:** Solid `#ef1570` with white text. On hover, apply a slight scale (1.02) and a glow effect using a drop-shadow of the primary color.
- **Secondary:** Glassmorphic background with `#ef1570` text and a 1px border.

### Input Fields
- Underlined style or fully enclosed with a 1px soft border. The active state should trigger a neon glow in the primary color.

### Cards
- Always use the glassmorphic style. Backgrounds should be `rgba(255, 255, 255, 0.4)` in light mode and `rgba(14, 1, 7, 0.6)` in dark mode. 

### Chips & Tags
- Pill-shaped with high-contrast backgrounds. Use the Accent color (`#f3644f`) for status-related tags.

### Special Anime Flourishes
- **Decorative Ornaments:** Use small 4-pointed stars (sparkles) as accent marks near headings or in the corners of primary cards.
- **Progress Bars:** Use thick, solid blocks rather than smooth gradients for a more "retro-tech" feel.