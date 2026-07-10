# Anime-Themed Tech Portfolio

> A modern, single-page portfolio **template** blending clean tech UI with vibrant anime-inspired design tokens and a custom character mascot across every section.

<img src="./public/banner.png" alt="Project Banner" width="100%" style="border-radius: 8px;" />

---

## Demo presentation

Presentation slides for the project demo: [View on Canva](https://canva.link/7zclano2slbt766)

---

## Customise this template

All copy, links, stats, and character paths live in one file:

```text
src/data/siteContent.js
```

Replace placeholders there (brand name, project cards, social URLs, resume PDF path, etc.) before publishing. Drop your resume at `public/resume.pdf` to match the Hero “Resume” button.

### Character assets (`public/Charaters/`)

| File | Used in |
|------|---------|
| `Hero.png` | Hero |
| `about.png` | About |
| `tools.png` | Tools |
| `services.png` | Services |
| `lets-connect.png` | Connect |
| `thankyou.png` | Contact |
| `background.png` | Footer landscape |
| `intro.mp4` | Optional hero video (`HERO.showIntroVideo`) |
| `background2.png` | Spare landscape — swap into `FOOTER.backgroundSrc` if you prefer |

---

## Design tokens

```css
:root[data-theme="light"] {
  --text: #130109;
  --background: #fef1f7;
  --primary: #ef1570;
  --secondary: #f6807e;
  --accent: #f3644f;
}
```

| Role | Font |
|------|------|
| Headings | Space Grotesk |
| Body | Plus Jakarta Sans |

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | Hero | Tagline + character + Explore / Resume CTAs |
| 2 | About | Bio, skill badges, placeholder stats |
| 3 | Tools | Tech stack grid + character |
| 4 | Services | Three service cards (middle featured) |
| 5 | Works | Featured project placeholders |
| 6 | Connect | Socials + Book a Chat |
| 7 | Contact | Transmission form + thank-you character |
| 8 | Footer | Brand + links over landscape art |

---

## Getting started

```bash
git clone https://github.com/your-username/Anime-themed-Portfolio.git
cd Anime-themed-Portfolio
npm install
npm run dev
```

---

## Deploy on Vercel

This is a Vite + React SPA. Config is in `vercel.json` (`build` → `dist`).

### Option A — Vercel Dashboard (recommended)

1. Push this repo to GitHub (include your latest `src/` changes).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Leave defaults (Framework: Vite, Build: `npm run build`, Output: `dist`).
4. Click **Deploy**.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

After deploy, set your custom domain under **Project → Settings → Domains** if needed.

---

<div align="center">

Made with care as an open portfolio template

<sub>© 2026 · MIT License · Replace brand & links in <code>siteContent.js</code></sub>

</div>
