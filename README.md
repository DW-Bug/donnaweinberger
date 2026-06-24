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

## Contact form

The Contact page shows a contact form (name, email, organization, topic, and message). It posts JSON to `/api/contact`, handled by the Cloudflare Pages Function at `functions/api/contact.js`, which delivers the message by email through [Resend](https://resend.com).

The form shows a success message **only** when the API confirms the email was sent. If delivery isn't configured or the send fails, it shows a clear error instead. The destination address is kept server-side and is never displayed on the site.

### Required Cloudflare environment variables

Set all three in **Cloudflare dashboard → your Pages project → Settings → Environment variables** (add them to the Production environment, and Preview too if you use preview deployments):

| Variable         | Required | Example                                      | Notes |
| ---------------- | -------- | -------------------------------------------- | ----- |
| `RESEND_API_KEY` | Yes      | `re_xxxxxxxxxxxxxxxxxxxxxxxx`                 | Create at [resend.com](https://resend.com) → API Keys. |
| `CONTACT_TO`     | Yes      | `admin@inspirerecovery.com`                  | Inbox that receives submissions. Stays server-side. |
| `CONTACT_FROM`   | Yes      | `Donna Weinberger <noreply@donnaweinberger.com>` | Must be a **verified** sender/domain in Resend. |

If any of these are missing, the function returns HTTP 503 and the form displays an error rather than a false success. After adding or changing variables, redeploy (or trigger a new deployment) for them to take effect.

For local testing of the Function with Wrangler, create a `.dev.vars` file in the project root (it's git-ignored):

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_TO=admin@inspirerecovery.com
CONTACT_FROM=Donna Weinberger <noreply@donnaweinberger.com>
```

then run `npm run build && npx wrangler pages dev ./dist`.

To swap in a different email provider, edit the `fetch(...)` call in `functions/api/contact.js`.

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
