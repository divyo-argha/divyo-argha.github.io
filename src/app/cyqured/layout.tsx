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
    "cyqured soups",
    "soups26",
    "soups 2026",
    "SOUPS26",
    "USENIX SOUPS 2026",
    "Cybersecurity Game",
    "Tabletop Security Game",
    "STRIDE Threat Modeling",
    "Personal Cybersecurity Education",
    "Smart Home Security",
    "Argha Pratim Saha",
    "Divyo Argha",
    "Argha Saha",
    "divyo-argha",
    "Utsho Das",
  ],
  openGraph: {
    title: "CyQured · Personal Cybersecurity Education Tabletop Game (USENIX SOUPS 2026)",
    description:
      "Explore the physical board, 84 playable cards, STRIDE mechanics, and USENIX SOUPS 2026 (SOUPS26) empirical study by Argha Pratim Saha (Divyo Argha / Argha Saha) and Utsho Das.",
    url: "https://divyo-argha.github.io/cyqured/",
    siteName: "CyQured",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CyQured · Personal Cybersecurity Education Tabletop Game (USENIX SOUPS 2026)",
    description:
      "Explore the physical board, 84 playable cards, STRIDE mechanics, and USENIX SOUPS 2026 (SOUPS26) empirical study by Argha Pratim Saha (Divyo Argha / Argha Saha) and Utsho Das.",
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
