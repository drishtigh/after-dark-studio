# After Dark Studio — Landing site

This repository contains the landing page for After Dark Studio — a small, portfolio‑style site built with Astro (static) to present a rental‑friendly interior design service.

Key features
- Branded landing page with hero, services, pricing, FAQ and contact CTA
- Responsive layouts and light/dark themed sections
- Accessible accordions for process and FAQ

Tech
- Astro (static site) + Vite
- Plain CSS (single `src/styles/global.css`)

Getting started (local)
1. Install dependencies
```bash
npm install
```
2. Start dev server (live reload)
```bash
npm run dev
# Open http://localhost:4321
```
3. Build for production
```bash
npm run build
```
4. Preview the production build locally
```bash
npm run preview
```

Project structure (important files)
- `src/pages/index.astro` — home page and all sections
- `src/layouts/Layout.astro` — shared header/footer and site shell
- `src/styles/global.css` — design tokens and component styles
- `src/assets/` — image assets and logos

Deployment
- This is a static site. Deploy the contents of the `dist/` folder to any static host (GitHub Pages, Netlify, Vercel, etc.).

Notes
- Contact form and CTAs point to a Google Form used for enquiries.
- If you want me to wire up CI (GitHub Actions) or deploy to a specific provider, I can add a simple pipeline.

Contributing
- Small changes are welcome. Open a PR with a short description.

Contact
- Email: Drishti9@gmail.com

---
Generated and edited in this workspace.
