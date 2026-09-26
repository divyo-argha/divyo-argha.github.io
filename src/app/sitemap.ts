import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { publicationSlugs, projectSlugs } from "@/lib/detail";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}/`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/cyqured/`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/cyqured/publication/`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/cyqured/mechanics/`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/cyqured/assets/`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...publicationSlugs.map((slug) => ({
      url: `${siteConfig.url}/publications/${slug}/`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: slug === "cyqured" ? 0.9 : 0.8,
    })),
    ...projectSlugs.map((slug) => ({
      url: `${siteConfig.url}/work/${slug}/`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return routes;
}
