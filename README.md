# DonnaWeinberger.com

Personal brand website for **Donna Weinberger** — Founder · Executive Leader · Entrepreneur · Advocate.

Built with [Astro](https://astro.build), optimized for static deployment on **Cloudflare Pages**, with a Pages Function powering the contact form. Fast, accessible, mobile-responsive, and SEO-ready (Open Graph + JSON-LD `Person` schema).

---

## Quick start

```bash
npm install
npm run dev          # local dev server at http://localhost:4321
npm run build        # production build to ./dist
npm run preview      # preview the production build
```

> Requires Node.js 18.20+, 20.3+, or 22+.

---

## Project structure

```
.
├── astro.config.mjs        # site URL, static output, sitemap
├── wrangler.toml           # Cloudflare Pages config (local dev)
├── functions/
│   └── api/contact.js       # contact form handler (Pages Function)
├── public/
│   ├── favicon.svg
│   ├── og-image.png / .svg  # social share card (1200×630)
│   ├── robots.txt
│   ├── _headers             # security + caching headers
│   └── _redirects
└── src/
    ├── consts.ts            # ← site identity, nav, social links
    ├── data/
    │   ├── ventures.ts      # ← organizations founded
    │   ├── milestones.ts    # ← timeline entries
    │   └── topics.ts        # ← speaking topics, advisory, initiatives
    ├── styles/global.css    # design tokens & base styles
    ├── components/          # Hero, Timeline, OrganizationsList, ContactForm, etc.
    ├── layouts/Layout.astro
    └── pages/               # index, about, organizations, speaking, initiatives, contact, 404
```

## What to edit first

All content lives in plain data files — no need to touch markup:

- **`src/consts.ts`** — name, tagline, domain, and **social links** (filling these in also populates the JSON-LD `sameAs` and the footer).
- **`src/data/ventures.ts`** — the organizations. Please review the descriptions: they were written to be broadly accurate from each venture's apparent focus, and should be refined to match reality. Add a `url` to link any org externally.
- **`src/data/milestones.ts`** — the timeline. Each entry's `period` is a placeholder (`"—"`); replace with real years (e.g. `"2016"`, `"2019–Present"`).
- **`src/data/topics.ts`** — speaking topics, advisory areas, and current initiatives.

---

## Contact

The contact page currently uses a simple **"Email Donna"** call-to-action that opens the visitor's mail app addressed to `admin@inspirerecovery.com` (set via `contactEmail` in `src/consts.ts`). No backend is required for this to work.

A full contact form is also included for later use:

- `src/components/ContactForm.astro` — the form UI (currently not imported anywhere).
- `functions/api/contact.js` — the Cloudflare Pages Function that would handle submissions.

When you're ready to switch from the mailto CTA to the form, import `ContactForm` into `src/pages/contact.astro` and set these environment variables in **Cloudflare Pages → Settings → Environment variables**:

| Variable         | Example                                   |
| ---------------- | ----------------------------------------- |
| `RESEND_API_KEY` | your [Resend](https://resend.com) API key |
| `CONTACT_TO`     | `admin@inspirerecovery.com`               |
| `CONTACT_FROM`   | `Website <noreply@donnaweinberger.com>`   |

The function will **not** report success unless email is actually configured and the send succeeds — if any of those variables are missing it returns an error, so the form can never show a false "message sent" message. To swap in a different provider, edit the `fetch(...)` call in `functions/api/contact.js`.

---

## Deploy to Cloudflare Pages

**Option A — Git (recommended).** Push to GitHub/GitLab, then in the Cloudflare dashboard create a Pages project connected to the repo:

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Build output directory:** `dist`

Cloudflare automatically deploys the static site *and* the `functions/` directory (your contact endpoint). Add the custom domain `donnaweinberger.com` under the project's **Custom domains** tab.

**Option B — Direct upload via Wrangler.**

```bash
npm run build
npx wrangler pages deploy ./dist
```

After deploying, set the production environment variables (above) and confirm the canonical URL in `astro.config.mjs` matches your domain.

---

## Notes

- Update the `site` URL in `astro.config.mjs` if the domain changes — it drives canonical URLs, the sitemap, and absolute OG image links.
- The `og-image.png` is regenerated from `og-image.svg`; edit the SVG and re-export at 1200×630 if you want to change the share card.
- Accessibility: skip link, keyboard-visible focus, reduced-motion support, and semantic landmarks are built in. Keep these in mind when adding sections.
