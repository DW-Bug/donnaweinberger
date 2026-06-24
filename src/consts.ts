// -----------------------------------------------------------------------------
// Central site configuration. Edit identity, navigation, and links here.
// -----------------------------------------------------------------------------

export const SITE = {
  name: "Donna Weinberger",
  domain: "donnaweinberger.com",
  url: "https://donnaweinberger.com",
  // Positioning line used across the site and in metadata.
  tagline: "Founder • Executive Leader • Entrepreneur • Advocate",
  shortDescription:
    "Donna Weinberger is a founder, executive leader, entrepreneur, and advocate building across behavioral health, nonprofit leadership, technology, community, and AI-enabled innovation.",
  // Used for Open Graph / Twitter cards.
  ogImage: "/og-image.png",
  locale: "en_US",
  // Optional — fill in real handles to power JSON-LD `sameAs` and the footer.
  // Leave a value as an empty string to hide that link.
  social: {
    linkedin: "", // e.g. "https://www.linkedin.com/in/donnaweinberger"
    x: "",
    instagram: "",
  },
  // Contact endpoint handled by the Cloudflare Pages Function.
  contactEndpoint: "/api/contact",
  contactEmail: "admin@inspirerecovery.com", // public mailto used by the contact CTA
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Organizations", href: "/organizations" },
  { label: "Speaking & Advisory", href: "/speaking" },
  { label: "Initiatives", href: "/initiatives" },
  { label: "Contact", href: "/contact" },
];

// The five domains of leadership that recur throughout the site.
export const DOMAINS = [
  "Behavioral Health",
  "Nonprofit Leadership",
  "Technology",
  "Community Initiatives",
  "AI-Enabled Innovation",
];
