# Ashbi Design — Homepage Redesign

Redesign of [ashbi.ca](https://www.ashbi.ca) — CPG & DTC branding agency, Toronto.

## Stack
React 18 + TypeScript + Vite + Tailwind CSS

## Features
- 9 case studies with full-screen overlays (no page change, ESC/backdrop close, next-project flow)
- Booking overlay form triggered from every CTA
- Portfolio & journal content layer in `src/content/` — local data with optional live CMS fetch (`api.ts` + `useContent.ts`); set `VITE_CMS_URL` at build time to connect the Ashbi CMS backend
- Word-by-word hero reveal, clip-path image masks, parallax, hide-on-scroll nav
- Images served from the ashbi.ca media library

## Develop
```bash
npm install
npm run build        # add VITE_CMS_URL=https://cms.ashbi.ca to enable live CMS
```

Deployed automatically to GitHub Pages via `.github/workflows/deploy.yml` on push to `main`.
(Site: https://camster91.github.io/ashbi-redesign/)
