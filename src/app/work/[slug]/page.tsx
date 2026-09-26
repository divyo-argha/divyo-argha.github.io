import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailLayout } from "@/components/detail/DetailLayout";
import { getProjectDetail, projectSlugs } from "@/lib/detail";

import { projects } from "@/content/projects";
import { softwareApplicationJsonLd, breadcrumbsJsonLd } from "@/lib/jsonld";
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
    keywords: [
      project.name,
      ...project.stack,
      "Argha Pratim Saha",
      "Divyo Argha",
      "Argha Saha",
      "divyo-argha",
      "open source project",
    ],
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

  const breadcrumbs = breadcrumbsJsonLd([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/#projects" },
    { name: project.name, path: `/work/${slug}/` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationJsonLd(project)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />
      <DetailLayout detail={detail} />
    </>
  );
}
