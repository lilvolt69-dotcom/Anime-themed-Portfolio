---
name: Neo-Cyber Bloom Light
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
  tertiary: '#aa2f20'
  on-tertiary: '#ffffff'
  tertiary-container: '#cb4735'
  on-tertiary-container: '#fffbff'
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
  tertiary-fixed: '#ffdad4'
  tertiary-fixed-dim: '#ffb4a7'
  on-tertiary-fixed: '#400100'
  on-tertiary-fixed-variant: '#8b190d'
  background: '#fff8f8'
  on-background: '#2e1320'
  surface-variant: '#ffd8e6'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 76px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
---

## Brand & Style

The design system is a high-energy, anime-inspired aesthetic that blends futuristic technology with organic, floral motifs. It transitions the "Cyber Bloom" narrative from a neon-on-black midnight vibe to a "High Noon" clarity—clean, vibrant, and ultra-legible while retaining its digital edge.

The design style is a hybrid of **High-Contrast / Bold** and **Minimalism**. It utilizes sharp editorial layouts, massive typography, and high-saturation accents against a stark, off-white floral background. The target audience is tech-forward enthusiasts who appreciate Japanese-inspired UI, gaming aesthetics, and precision. The emotional response should be one of "Radiant Energy"—feeling optimistic, precise, and distinctly modern.

## Colors

The palette is anchored by a soft, cherry-blossom-tinted background (`#fef1f7`) that prevents the sterile feel of pure white. 

- **Primary (#ef1570):** A vivid magenta used for critical actions, active states, and branding elements.
- **Secondary (#f6807e):** A soft coral for supportive graphics, secondary buttons, and hover states.
- **Accent (#f3644f):** A warm vermillion for warnings, highlights, and status indicators.
- **Neutral (#130109):** A deep, near-black plum used for all text to ensure maximum contrast against the light background.

Avoid gradients; use flat color blocks to maintain the "anime cell" look.

## Typography

This design system uses a dual-font strategy to balance technical precision with approachability. 

**Space Grotesk** is used for headings and UI labels. Its geometric, slightly "glitchy" letterforms provide the cybernetic character required for the brand. Headlines should be set with tight tracking to feel impactful.

**Plus Jakarta Sans** handles all long-form body text and interface values. Its soft, humanist curves provide a necessary contrast to the sharp headlines, ensuring readability during extended use. Use the `label` roles for technical data or navigational elements to maintain the tech-focused vibe.

## Layout & Spacing

The layout follows a **Fluid Grid** model based on a 12-column structure for desktop and a 4-column structure for mobile. 

The spacing rhythm is strictly based on a 4px baseline. Use generous `xl` and `xxl` padding to create a "gallery" feel where elements have room to breathe, preventing the high-contrast colors from feeling cluttered. Gutters are kept wide at 24px to emphasize the separation of "data modules." Align text to the grid strictly to reinforce the systematic, tech-oriented nature of the interface.

## Elevation & Depth

In this light mode system, depth is achieved through **Tonal Layers** and **Low-contrast outlines** rather than traditional shadows. 

Avoid drop-shadows entirely to keep the "flat anime" aesthetic. Instead, use a 1px solid border of `#130109` at 10% opacity for cards. For high-priority elements, use a "Hard Shadow"—a solid offset block of color (typically the Secondary or Primary color) shifted 4px down and 4px right, creating a 2D depth effect common in graphic novels. 

Background blurs (Glassmorphism) may be used sparingly on navigation bars using a semi-transparent white (`rgba(255, 255, 255, 0.8)`) to maintain context while scrolling.

## Shapes

The design system utilizes **Soft** roundedness. While the aesthetic is tech-focused, the "Bloom" aspect of the brand requires organic touches. 

- Standard components (inputs, buttons) use a 0.25rem radius.
- Large containers and cards use a 0.5rem (Large) radius.
- Interactive elements like "Tags" or "Status Chips" can use a 0.75rem (Extra Large) radius to differentiate them from functional inputs.

The combination of sharp 90-degree grid layouts with slightly softened component corners creates a "high-tech but tactile" user experience.

## Components

### Buttons
- **Primary:** Solid `#ef1570` background with white text. No border. On hover, shift to a 4px solid "Hard Shadow" offset.
- **Secondary:** Solid `#f6807e` with `#130109` text.
- **Ghost:** 1px border of `#130109` (20% opacity) with Space Grotesk Bold text.

### Inputs & Forms
Fields should have a background of `#ffffff` (pure white) to pop against the `#fef1f7` page background. Use a 1px border that turns Primary Magenta on focus. Labels should always be `label-sm` in Space Grotesk.

### Cards
Cards are white containers with no shadow. Use a 1px `#130109` (10% opacity) border. To signify an interactive card, add a 4px top-border in the Primary or Secondary color.

### Chips & Badges
Small, pill-shaped elements using `label-sm`. Use high-contrast combinations, such as an Accent background (`#f3644f`) with white text, or a neutral light-grey background with `#130109` text.

### Data Lists
Zebra striping is discouraged. Use thin, 1px horizontal dividers in Neutral (5% opacity) and ensure row heights are generous (min 56px) to maintain the airy, premium feel.