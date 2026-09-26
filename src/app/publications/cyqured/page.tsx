import type { Metadata } from "next";
import Link from "next/link";
import { Chakra_Petch } from "next/font/google";
import { DetailLayout } from "@/components/detail/DetailLayout";
import { BlockRenderer } from "@/components/detail/BlockRenderer";
import { Tabs } from "@/components/detail/Tabs";
import { Hero } from "@/components/cyqured/Hero";
import { getPublicationDetail } from "@/lib/detail";
import { publications } from "@/content/publications";
import { scholarlyArticleJsonLd, breadcrumbsJsonLd } from "@/lib/jsonld";
import { getPublicationMetadata } from "@/lib/publicationSeo";
import { IconArrowUpRight } from "@/components/primitives/Icons";
import { overviewBlocks, howToPlayBlocks, studyBlocks } from "./content";
import styles from "./cyqured.module.css";

const display = Chakra_Petch({
  variable: "--font-cyq-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export function generateMetadata(): Metadata {
  const publication = publications.find((p) => p.slug === "cyqured");
  if (!publication) return {};
  const baseMeta = getPublicationMetadata(publication, "/publications/cyqured/");

  return {
    ...baseMeta,
    title: {
      absolute: "CyQured · USENIX SOUPS 2026 (SOUPS26) Research Publication",
    },
    description:
      "Official USENIX SOUPS 2026 (SOUPS26) publication: 'CyQured: Design, Development, and Empirical Evaluation of a Tabletop Game for Personal Cybersecurity Education' by Argha Pratim Saha, Utsho Das, et al.",
    keywords: [
      "cyqured soups",
      "soups26",
      "soups 2026",
      "SOUPS 2026",
      "SOUPS26",
      "USENIX SOUPS 2026",
      "USENIX SOUPS",
      "SOUPS '26",
      "CyQured",
      "cyqured",
      "Argha Pratim Saha",
      "Utsho Das",
      "personal cybersecurity education",
      "STRIDE board game",
    ],
    openGraph: {
      ...baseMeta.openGraph,
      title: "CyQured · USENIX SOUPS 2026 (SOUPS26) Research Publication",
      description:
        "Official USENIX SOUPS 2026 (SOUPS26) study on personal cybersecurity education through tabletop gaming.",
    },
    twitter: {
      ...baseMeta.twitter,
      title: "CyQured · USENIX SOUPS 2026 (SOUPS26) Research Publication",
      description:
        "Official USENIX SOUPS 2026 (SOUPS26) study on personal cybersecurity education through tabletop gaming.",
    },
  };
}

export default function CyQuredPage() {
  const detail = getPublicationDetail("cyqured");
  const publication = publications.find((p) => p.slug === "cyqured");
  if (!detail || !publication) return null;

  const breadcrumbs = breadcrumbsJsonLd([
    { name: "Home", path: "/" },
    { name: "Publications", path: "/#research" },
    { name: "CyQured", path: "/publications/cyqured/" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarlyArticleJsonLd(publication)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <DetailLayout
        detail={detail}
        customBody={
          <div className={`${display.variable} ${styles.brandScope}`}>
            <div className={styles.heroBand}>
              <Link
                href="/cyqured"
                className={styles.cornerGameButton}
                title="Explore all 84 cards and interactive game mechanics"
              >
                <span className={styles.cornerPulse} />
                <span className={styles.cornerText}>
                  <span className={styles.cornerEyebrow}>Interactive Game Details</span>
                  <span className={styles.cornerLabel}>Explore the Game & Rules</span>
                </span>
                <span className={styles.cornerArrow}>
                  <IconArrowUpRight size={18} />
                </span>
              </Link>
              <Hero />
            </div>

            <Tabs
              panels={[
                { id: "overview", label: "Overview", content: <BlockRenderer blocks={overviewBlocks} /> },
                { id: "how-to-play", label: "How to Play", content: <BlockRenderer blocks={howToPlayBlocks} /> },
                { id: "study", label: "Study & Results", content: <BlockRenderer blocks={studyBlocks} /> },
              ]}
            />
          </div>
        }
      />
    </>
  );
}
