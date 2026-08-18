# Paani AI — Website

The official website of **Paani AI**, an organization empowering Nepal's water sector with data-driven innovation. It presents the organization's mission and problem areas, its roadmap, mentorship cohorts (प्रवाह / Prawaha), people, events, blog, and application forms.

Built as a multi-page single-page app with a persistent sidebar navigation.

## Tech stack

- **React 18** + **TypeScript**
- **Vite 6** (dev server + build)
- **React Router 7** (client-side routing)

## Getting started

Requires **Node.js** (18+) and npm.

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
```

### Scripts

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the local dev server with hot reload    |
| `npm run build`   | Type-check and build to `dist/`               |
| `npm run preview` | Serve the production build locally            |
| `npm run lint`    | Run ESLint                                    |

## Project structure

```
public/
  images/            # all site imagery (problem areas, people, events, logo…)
  _redirects         # SPA routing fallback for static hosts
src/
  components/
    Layout.tsx       # persistent sidebar + page shell
    GoogleFormEmbed.tsx
  data/
    site.ts          # ← most editable content lives here
  pages/             # one file per route (Home, About, Cohorts, People, …)
    apply/           # Apply landing + Mentor/Research form pages
  config.ts          # contact email + Google Form URLs
  styles/site.css    # design system + page styles
  App.tsx            # routes
```

## Editing content

Most text and listings are data-driven from [`src/data/site.ts`](src/data/site.ts):

- **Problem areas, roadmap, blog posts** — the `challenges`, `roadmapPhase1`, `services`, and `blogs` arrays.
- **People** — the `team`, `advisors`, and `mentors` arrays (name, title, photo path).
- **Events** — the `events` array (talk series with sessions, field work, showcases).
- **Cohorts** — the `cohorts` array. Adding a second cohort is a single new object; no page changes needed.

Images go in `public/images/…` and are referenced by absolute path (e.g. `/images/Logo/Paani AI.png`).

## Apply forms

The two application flows (Mentor, Research Mentorship) embed **Google Forms**, configured in [`src/config.ts`](src/config.ts):

```ts
export const GOOGLE_FORM_MENTOR_URL = 'https://docs.google.com/forms/d/e/…/viewform';
export const GOOGLE_FORM_COHORT_URL = 'https://docs.google.com/forms/d/e/…/viewform';
```

Paste the form's "viewform" link; the embed adds `?embedded=true` automatically. The Research form requires Google sign-in (it collects file uploads), so each page also shows an "open in a new tab" fallback.

## Deployment

The site is a static build — deploy the `dist/` folder to any static host.

1. Build: `npm run build` → outputs to `dist/`.
2. Host it (e.g. **Netlify** / **Vercel**): import this repo, set **build command** `npm run build` and **publish directory** `dist`.
3. `public/_redirects` (`/* /index.html 200`) ensures deep links like `/about` and `/apply/cohort` resolve correctly on static hosts.

For a quick public preview without a host connection, drag the built `dist/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

## License

© Paani AI. All rights reserved.
