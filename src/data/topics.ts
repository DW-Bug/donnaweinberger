// -----------------------------------------------------------------------------
// Speaking topics & advisory focus areas. Edit freely.
// -----------------------------------------------------------------------------

export type Topic = {
  title: string;
  description: string;
};

export const SPEAKING_TOPICS: Topic[] = [
  {
    title: "Affirming Care as a Business Model",
    description:
      "Why building behavioral health around identity and dignity isn't just ethical — it's how you reach the people other programs miss.",
  },
  {
    title: "Founding for Mission and Margin",
    description:
      "Lessons from launching across nonprofit and for-profit ventures, and holding both impact and sustainability at once.",
  },
  {
    title: "Advocacy That Builds",
    description:
      "Turning visibility and community organizing into durable institutions — from a street celebration to standing programs.",
  },
  {
    title: "AI for Small, Mission-Driven Teams",
    description:
      "A grounded look at where AI-enabled tooling actually creates leverage for lean organizations — and where it doesn't.",
  },
  {
    title: "The Serial Founder's Operating System",
    description:
      "How to start, staff, and steward multiple organizations across very different domains without losing the thread.",
  },
  {
    title: "LGBTQ+ Health Equity",
    description:
      "Closing real gaps in access, trust, and outcomes for LGBTQ+ communities in treatment and recovery.",
  },
];

export const ADVISORY_AREAS: Topic[] = [
  {
    title: "Behavioral Health & Treatment",
    description:
      "Program design, affirming care standards, and operational strategy for treatment and recovery organizations.",
  },
  {
    title: "Nonprofit Strategy & Governance",
    description:
      "Founding, scaling, and stewarding mission-driven organizations and the boards that guide them.",
  },
  {
    title: "Technology & AI Adoption",
    description:
      "Practical roadmaps for bringing modern and AI-enabled tooling into organizations that aren't tech-first.",
  },
  {
    title: "Founder & Executive Coaching",
    description:
      "Support for early founders navigating the leap from idea to organization, and from operator to leader.",
  },
];

export type Initiative = {
  name: string;
  category: string;
  description: string;
};

export const INITIATIVES: Initiative[] = [
  {
    name: "Inspire Recovery",
    category: "Behavioral Health",
    description:
      "Leading affirming treatment and behavioral health as Founder & CEO — the anchor of the broader body of work.",
  },
  {
    name: "SpanScout",
    category: "AI-Enabled Innovation",
    description:
      "Building a wellness discovery platform and provider directory that helps people find healthspan, longevity, functional medicine, hormone, GLP-1 / weight loss, and related wellness providers by category and location.",
  },
  {
    name: "Pride on the Block",
    category: "Community",
    description:
      "Sustaining a recurring community initiative that turns public space into belonging, celebration, and connection.",
  },
  {
    name: "Transpire Help",
    category: "Advocacy",
    description:
      "Advancing direct support and resources for the transgender community through ongoing nonprofit work.",
  },
];
