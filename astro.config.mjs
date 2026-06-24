// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Static output deploys cleanly to Cloudflare Pages.
// The contact form is handled by a Cloudflare Pages Function in /functions/api/contact.js,
// which Pages deploys automatically alongside the static build — no SSR adapter required.
export default defineConfig({
  site: "https://donnaweinberger.com",
  output: "static",
  trailingSlash: "ignore",
  integrations: [
    sitemap({
      lastmod: new Date(),
      changefreq: "monthly",
      priority: 0.7,
    }),
  ],
  build: {
    inlineStylesheets: "auto",
  },
});
