/**
 * Canonical origin, used for `metadataBase` (OG/Twitter image URLs), the
 * sitemap and robots. GitHub Pages (divyo-argha.github.io) is the one
 * indexed, canonical host — NEXT_PUBLIC_SITE_URL exists only as an escape
 * hatch for a future custom domain.
 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://divyo-argha.github.io";

export const siteConfig = {
  name: "Argha Pratim Saha",
  alternateNames: ["Argha Saha", "Divyo Argha", "divyo-argha"],
  title: "Argha Pratim Saha · Researcher in Human-Centered Security & Privacy",
  shortTitle: "Argha Pratim Saha",
  description:
    "Argha Pratim Saha (Divyo). Researcher in human-centered security and privacy, usable security, and qualitative HCI. Co-author of CyQured (USENIX SOUPS 2026).",
  keywords: [
    "Argha Pratim Saha",
    "Argha Saha",
    "Divyo Argha",
    "divyo-argha",
    "CyQured",
    "USENIX SOUPS 2026",
    "Usable Security & Privacy",
    "Human-Computer Interaction",
    "HCI",
    "Security Education",
    "Tabletop Security Game",
    "Shahjalal University of Science and Technology",
    "SUST CSE",
    "BRAC University",
    "ShellBeeHaken",
    "Phishing Perception",
    "PhD Applicant",
  ],
  url: siteUrl,
  /** Single switch for search visibility. Both `robots.ts` and the `robots`
   * metadata in `app/layout.tsx` read this, so launching is a one-word change
   * and cannot half-fail. */
  indexable: true,
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  bingSiteVerification:
    process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "",
  navLinks: [
    { label: "About", href: "#top" },
    { label: "Research", href: "#research" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Problem Solving", href: "#problem-solving" },
    { label: "Skills", href: "#skills" },
  ],
};
