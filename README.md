# Portfolio — Muhammad Omer Shafique

Personal portfolio site built with [Next.js](https://nextjs.org) (App Router), React, and Tailwind CSS.

**Live:** [https://omerxhafique.vercel.app](https://omerxhafique.vercel.app) · [https://omerxhafique.github.io](https://omerxhafique.github.io)

## Stack

- Next.js 16 · React 19 · TypeScript
- Tailwind CSS 4
- Framer Motion (scroll progress)
- Deployed on [Vercel](https://vercel.com) with Git integration

## Project structure

```
src/
  app/                 # Routes, layout, global styles, SEO (robots, sitemap, OG images)
  components/
    analytics/         # Optional Google Analytics
    layout/            # Header, footer, chrome
    motion/            # Scroll progress
    sections/          # Home page sections
    seo/               # JSON-LD
    ui/                # Shared UI (timeline, project cover)
  content/             # Editable copy & data (profile, projects, experience, …)
  lib/                 # Small utilities
public/
  projects/            # Project thumbnails
.github/workflows/     # CI (lint + build on push/PR to main)
```

Site copy and lists live in `src/content/` — update `profile.ts`, `projects.ts`, and `experience.ts` rather than hard-coding text in components.

## Local development

```bash
npm install
cp .env.example .env.local   # optional; see environment variables below
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Development server       |
| `npm run build`| Production build (Vercel) |
| `npm run build:pages` | Static export to `out/` for GitHub Pages |
| `npm run start`| Serve production build   |
| `npm run lint` | ESLint                   |

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical URL (no trailing slash). Used for metadata, sitemap, and JSON-LD. Example: `https://omerxhafique.vercel.app` |
| `NEXT_PUBLIC_GA_ID` | Optional | Google Analytics 4 measurement ID |

Set these in Vercel under **Project → Settings → Environment Variables** for production.

## CI/CD

- **CI:** GitHub Actions runs lint and build on pushes and pull requests to `main` (see `.github/workflows/ci.yml`).
- **Vercel CD:** Pushes to `main` deploy via Vercel Git integration (`NEXT_PUBLIC_SITE_URL` = your Vercel URL).
- **GitHub Pages CD:** On push to `main`, `.github/workflows/deploy-github-pages.yml` builds with `npm run build:pages` and publishes `out/` to [omerxhafique/omerxhafique.github.io](https://github.com/omerxhafique/omerxhafique.github.io).

### GitHub Pages setup (one-time)

1. Create a [Personal Access Token](https://github.com/settings/tokens) (classic) with **`repo`** scope for account `omerxhafique`.
2. In **FloatTechnologies/portfolio-web** → **Settings → Secrets and variables → Actions**, add **`GH_PAGES_DEPLOY_TOKEN`**: a [classic PAT](https://github.com/settings/tokens) with **`repo`** scope for `omerxhafique` (must be able to push to `omerxhafique.github.io`). *(Already configured for this repo.)*
3. On [omerxhafique.github.io](https://github.com/omerxhafique/omerxhafique.github.io) → **Settings → Pages**, set **Source** to deploy from branch **`main`** / **`/ (root)`**.
4. Push to `main` or run the **Deploy GitHub Pages** workflow manually.

Local preview of the Pages build:

```bash
NEXT_PUBLIC_SITE_URL=https://omerxhafique.github.io npm run build:pages
npx serve out
```

## Repository

[FloatTechnologies/portfolio-web](https://github.com/FloatTechnologies/portfolio-web)

## License

Private / personal portfolio — all rights reserved unless otherwise noted.
