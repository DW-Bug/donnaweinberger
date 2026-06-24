// -----------------------------------------------------------------------------
// Organizations & ventures founded.
//
// NOTE: Descriptions below are written to be professional and broadly accurate
// based on each venture's apparent focus. Please review and refine the copy,
// links, and `category` tags so they precisely match each organization.
// -----------------------------------------------------------------------------

export type Venture = {
  name: string;
  role: string;
  category:
    | "Behavioral Health"
    | "Nonprofit Leadership"
    | "Technology"
    | "Community Initiatives"
    | "AI-Enabled Innovation";
  description: string;
  url?: string; // optional external link
  status?: "Active" | "Ongoing" | "Past"; // optional badge
};

export const VENTURES: Venture[] = [
  {
    name: "Inspire Recovery",
    role: "Founder & CEO",
    category: "Behavioral Health",
    description:
      "An LGBTQ+ affirming addiction treatment and behavioral health program built on the conviction that recovery works best when people are seen for exactly who they are.",
    status: "Active",
  },
  {
    name: "Transpire Help",
    role: "Founder",
    category: "Nonprofit Leadership",
    description:
      "A nonprofit dedicated to support, resources, and dignity for the transgender community — meeting people where they are and removing barriers to care.",
    status: "Active",
  },
  {
    name: "Q Space Detox",
    role: "Founder",
    category: "Behavioral Health",
    description:
      "Affirming, medically supported detox designed as a safe entry point into recovery for LGBTQ+ individuals.",
    status: "Active",
  },
  {
    name: "Pride Detox",
    role: "Founder",
    category: "Behavioral Health",
    description:
      "A detox program built around identity-affirming care, lowering the threshold for people seeking the first step toward sobriety.",
    status: "Active",
  },
  {
    name: "TownTek",
    role: "Founder (past venture)",
    category: "Technology",
    description:
      "An earlier founder-led venture combining digital web services, design, animated digital invitations (evites), and printing — part of Donna's foundation in technology and digital media.",
    status: "Past",
  },
  {
    name: "Webstetic",
    role: "Founder (past venture)",
    category: "Technology",
    description:
      "A past web and design venture focused on digital presence, web development, branding, and creative services — reflecting deep hands-on roots in digital craft.",
    status: "Past",
  },
  {
    name: "SpanScout",
    role: "Founder",
    category: "AI-Enabled Innovation",
    description:
      "A wellness discovery platform and provider directory that helps people find healthspan, longevity, functional medicine, hormone, GLP-1 / weight loss, and related wellness providers by category and location.",
    status: "Active",
  },
  {
    name: "Pride on the Block",
    role: "Creator",
    category: "Community Initiatives",
    description:
      "A community initiative bringing visibility, celebration, and connection to the streets — building belonging in public, shared space.",
    status: "Ongoing",
  },
];
