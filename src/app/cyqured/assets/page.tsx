import type { Metadata } from "next";
import Link from "next/link";
import { Chakra_Petch } from "next/font/google";
import { AssetsTabs } from "@/components/cyqured/AssetsTabs";
import { IconArrowUpRight } from "@/components/primitives/Icons";
import styles from "../game.module.css";

import { breadcrumbsJsonLd } from "@/lib/jsonld";

const display = Chakra_Petch({
  variable: "--font-cyq-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CyQured Game Assets · 28-Cell Board & 84 Playable Cards",
  description:
    "Explore all physical CyQured game assets: the 28-cell smart home board, 16 connected devices, and 84 playable action, chance, and scenario cards.",
  keywords: [
    "CyQured",
    "CyQured cards",
    "CyQured board",
    "CyQured assets",
    "STRIDE action cards",
    "cybersecurity tabletop game assets",
  ],
  alternates: { canonical: "/cyqured/assets/" },
  openGraph: {
    title: "CyQured Game Assets · 28-Cell Board & 84 Playable Cards",
    description:
      "Explore all physical CyQured game assets: the 28-cell smart home board, 16 connected devices, and 84 playable action, chance, and scenario cards.",
    url: "https://divyo-argha.github.io/cyqured/assets/",
  },
};

export default function CyQuredAssetsPage() {
  const breadcrumbs = breadcrumbsJsonLd([
    { name: "Home", path: "/" },
    { name: "CyQured", path: "/cyqured/" },
    { name: "Game Assets", path: "/cyqured/assets/" },
  ]);

  return (
    <div className={`${display.variable} ${styles.page}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <div className={styles.grain} aria-hidden="true" />
      <div className={styles.glowWhite} aria-hidden="true" />
      <div className={styles.glowA} aria-hidden="true" />
      <div className={styles.glowB} aria-hidden="true" />

      <div className={styles.inner}>
        <h1 className="visually-hidden">CyQured: Game Assets &amp; Cards</h1>

        {/* Floating Tab Menu for Game Cards & Game Board (Managed by URL Query Param) */}
        <AssetsTabs />

        {/* Bottom Bridge: Research Paper */}
        <footer className={styles.bottomBridge}>
          <div className={styles.bridgeCard}>
            <div className={styles.bridgeInfo}>
              <span className={styles.bridgeEyebrow}>SOUPS 2026 Research Publication</span>
              <h3 className={styles.bridgeTitle}>Read the Full Scientific Study</h3>
              <p className={styles.bridgeDesc}>
                Explore the empirical evaluation with 50 participants, System Usability Scale (SUS) analysis, learning effect sizes, and full BibTeX citation.
              </p>
            </div>
            <Link href="/publications/cyqured" className={styles.bridgeButton}>
              <span>Research Overview</span>
              <IconArrowUpRight size={16} />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
