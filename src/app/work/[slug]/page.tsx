import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailLayout } from "@/components/detail/DetailLayout";
import { getProjectDetail, projectSlugs } from "@/lib/detail";

import { projects } from "@/content/projects";
import { softwareApplicationJsonLd } from "@/lib/jsonld";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.name} · Projects`,
    description: project.description,
    keywords: [project.name, ...project.stack, "Argha Pratim Saha", "open source project"],
    alternates: { canonical: `/work/${slug}/` },
    openGraph: {
      title: `${project.name} — ${project.tagline}`,
      description: project.description,
      url: `${siteConfig.url}/work/${slug}/`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — ${project.tagline}`,
      description: project.description,
    },
  };
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const detail = getProjectDetail(slug);
  const project = projects.find((p) => p.slug === slug);
  if (!detail || !project) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationJsonLd(project)),
        }}
      />
      <DetailLayout detail={detail} />
    </>
  );
}
