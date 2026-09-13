/**
 * Canonical origin, used for `metadataBase` (OG/Twitter image URLs), the
 * sitemap and robots. GitHub Pages (divyo-argha.github.io) is the one
 * indexed, canonical host — NEXT_PUBLIC_SITE_URL exists only as an escape
 * hatch for a future custom domain.
 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://divyo-argha.github.io";

export const siteConfig = {
  name: "Argha Pratim Saha",
  url: siteUrl,
  /** Single switch for search visibility. Both `robots.ts` and the `robots`
   * metadata in `app/layout.tsx` read this, so launching is a one-word change
   * and cannot half-fail. */
  indexable: true,
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
