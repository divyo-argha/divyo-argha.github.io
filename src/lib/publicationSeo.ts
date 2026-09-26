import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import type { Publication } from "@/content/types";

export function getPublicationMetadata(publication: Publication, canonicalPath: string): Metadata {
  const authorsList = publication.authors.map((a) => a.name);
  const pdfLink = publication.links?.find((l) =>
    l.label.toLowerCase().includes("pdf") ||
    l.label.toLowerCase().includes("paper") ||
    l.href.endsWith(".pdf"),
  )?.href;

  const absolutePdfUrl = pdfLink
    ? pdfLink.startsWith("http")
      ? pdfLink
      : `${siteConfig.url}${pdfLink}`
    : undefined;

  const citationOther: Record<string, string | string[]> = {
    citation_title: publication.title,
    citation_publication_date: String(publication.year),
    citation_conference_title: publication.venue,
    citation_author: authorsList,
  };

  if (publication.doi) {
    citationOther.citation_doi = publication.doi;
  }

  if (absolutePdfUrl) {
    citationOther.citation_pdf_url = absolutePdfUrl;
  }

  return {
    title: publication.title,
    description: publication.summary,
    keywords: [
      publication.title,
      ...publication.tags,
      publication.venueShort,
      publication.venue,
      "Argha Pratim Saha",
      "Divyo Argha",
      "Argha Saha",
      "divyo-argha",
      "research paper",
    ],
    authors: publication.authors.map((a) => ({ name: a.name, url: a.url })),
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${publication.title} · ${publication.venueShort}`,
      description: publication.summary,
      url: `${siteConfig.url}${canonicalPath}`,
      type: "article",
      publishedTime: `${publication.year}-01-01`,
      authors: authorsList,
    },
    twitter: {
      card: "summary_large_image",
      title: `${publication.title} · ${publication.venueShort}`,
      description: publication.summary,
    },
    other: citationOther,
  };
}
