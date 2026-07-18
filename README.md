# Ashbi Design — Homepage Redesign Concept

A redesign concept for [ashbi.ca](https://www.ashbi.ca) — CPG & DTC branding agency, Toronto.

## Stack
React 18 + TypeScript + Vite + Tailwind CSS

## Features
- Portfolio CMS in `src/content/projects.ts` — edit entries, grid + overlays update
- Full-screen case-study overlays (no page change, ESC/backdrop close, next-project flow)
- Booking overlay form triggered from every CTA
- Journal (blog) index in `src/content/posts.ts`
- Word-by-word hero reveal, clip-path image masks, parallax, hide-on-scroll nav
- Real studio assets served from the ashbi.ca media library

## Develop
```bash
npm install
npm run build
```

Built output goes to `dist/`. The `gh-pages` branch holds the deployed site.
