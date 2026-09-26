import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailLayout } from "@/components/detail/DetailLayout";
import { getPublicationDetail, publicationSlugs } from "@/lib/detail";
import { publications } from "@/content/publications";
import { scholarlyArticleJsonLd, breadcrumbsJsonLd } from "@/lib/jsonld";
import { getPublicationMetadata } from "@/lib/publicationSeo";

export function generateStaticParams() {
  // "cyqured" has its own literal route at app/publications/cyqured/page.tsx
  // (a bespoke page, not this shared template) — excluded here so the static
  // export doesn't try to generate the same path twice. It stays in
  // publicationSlugs itself since sitemap.ts still needs to list it.
  return publicationSlugs.filter((slug) => slug !== "cyqured").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const publication = publications.find((p) => p.slug === slug);
  if (!publication) return {};

  return getPublicationMetadata(publication, `/publications/${slug}/`);
}

export default async function PublicationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const detail = getPublicationDetail(slug);
  const publication = publications.find((p) => p.slug === slug);
  if (!detail || !publication) notFound();

  const breadcrumbs = breadcrumbsJsonLd([
    { name: "Home", path: "/" },
    { name: "Research", path: "/#research" },
    { name: publication.title, path: `/publications/${slug}/` },
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
      <DetailLayout detail={detail} />
    </>
  );
}
