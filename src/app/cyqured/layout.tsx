import type { Metadata } from "next";
import { CyquredMagneticGrid } from "@/components/cyqured/CyquredMagneticGrid";
import { CyquredThemeScope } from "@/components/cyqured/CyquredThemeScope";

import { cyquredSiteNavJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: {
    default: "CyQured: A Tabletop Game for Personal Cybersecurity Education",
    template: "%s · CyQured",
  },
  description:
    "CyQured is a tabletop serious game for personal cybersecurity education. Explore the 28-cell board, 84 playable cards, game mechanics, and SOUPS 2026 research publication.",
  keywords: [
    "CyQured",
    "cyqured",
    "Cybersecurity Game",
    "Tabletop Security Game",
    "SOUPS 2026",
    "STRIDE Threat Modeling",
    "Personal Cybersecurity Education",
    "Smart Home Security",
    "Argha Pratim Saha",
    "Utsho Das",
  ],
  openGraph: {
    title: "CyQured · Personal Cybersecurity Education Tabletop Game",
    description:
      "Explore the physical board, 84 playable cards, STRIDE mechanics, and SOUPS 2026 empirical study.",
    url: "https://divyo-argha.github.io/cyqured/",
    siteName: "CyQured",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CyQured · Personal Cybersecurity Education Tabletop Game",
    description:
      "Explore the physical board, 84 playable cards, STRIDE mechanics, and SOUPS 2026 empirical study.",
  },
};

export default function CyQuredGameLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cyquredSiteNavJsonLd()) }}
      />
      <CyquredThemeScope />
      <CyquredMagneticGrid />
      {children}
    </>
  );
}
