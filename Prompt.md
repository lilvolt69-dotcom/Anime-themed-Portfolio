Create a modern, clean, single-page anime-inspired portfolio website using the following structural layout, typography rules, and custom CSS color variables. 

### 1. Typography Strategy
- Primary Headings (H1, H2, H3): Use "Outfit" or "Space Grotesk" or "Syne" for a bold, modern, energetic anime/tech aesthetic.
- Body Text (p, tags, UI elements): Use "Plus Jakarta Sans" or "Inter" for clean, highly legible technical readability.

### 2. Color System Configuration
Implement these design tokens for light and dark modes:

:root[data-theme="light"] {
  --text: #130109;
  --background: #fef1f7;
  --primary: #ef1570;
  --secondary: #f6807e;
  --accent: #f3644f;
}
:root[data-theme="dark"] {
  --text: #feecf4;
  --background: #0e0107;
  --primary: #ea106b;
  --secondary: #810b09;
  --accent: #b0220c;
}

### 3. Page Structure & Sections
Generate a single-page scrolling portfolio containing the following precise sections:

- Navigation Bar: Sticky, minimalist glassmorphism effect overlaying the top. Includes links to: Hero, About, Tools, Services, Connect, and a primary CTA button "Get in Touch".
- Hero Section: Designed to showcase a prominent vertical image slot on one side for the main character illustration. Bold text layout on the opposite side with an overarching tagline like "Welcome to My Tech Universe!" alongside a primary action button.
- About Section: A clean section featuring a smaller character avatar slot next to an energetic introduction paragraph highlighting creative technology, development, and innovation. Include spaces for short skill badges.
- Tools Section: A grid-based presentation showcase area designed to feature icon blocks of modern web technologies, design software, and development tools with soft hover border effects matching the --primary color.
- Services Section: Beautifully spaced card components detailing professional service offerings (e.g., Frontend Development, UI/UX Design, Creative Engineering).
- Let's Connect Section: A stylized social integration row displaying clean icon links to external professional profiles (GitHub, LinkedIn, ArtStation, Instagram) alongside a prominent "Book a Chat" button.
- Gets in Touch Section / Footer: A sleek, functional contact form with input fields for Name, Email, and Message. The entire section must sit directly above a low-profile footer, leaving the lower portion open for a seamless, minimalist landscape footer background image.

### 4. Code & Visual Guidelines
- Use modern CSS Grid and Flexbox for clean spacing and responsiveness.
- Apply high-contrast text rendering using the --text variable over the --background variable.
- Ensure all button designs use the striking --primary or --accent colors to highlight actionable user paths.