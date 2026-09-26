import { profile, socialLinks, researchFocus } from "@/content/profile";
import { siteConfig } from "@/lib/site";
import type { Publication, Project } from "@/content/types";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: profile.name,
    alternateName: siteConfig.alternateNames,
    givenName: "Argha Pratim",
    familyName: "Saha",
    url: `${siteConfig.url}/`,
    image: `${siteConfig.url}/media/people/argha.jpeg`,
    email: `mailto:${profile.email}`,
    jobTitle: profile.subtitle,
    description: profile.bio,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Shahjalal University of Science and Technology",
      alternateName: "SUST",
      url: "https://www.sust.edu",
    },
    affiliation: [
      {
        "@type": "Organization",
        name: "ShellBeeHaken Ltd.",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "BRAC University",
        department: "Human-Centered Computing and Society (HCCS) Research Group",
      },
    ],
    knowsAbout: [
      ...researchFocus.tags,
      "Usable Security & Privacy",
      "Human-Computer Interaction",
      "Security Education",
      "STRIDE Threat Modeling",
      "Qualitative HCI",
      "Bengali NLP",
    ],
    sameAs: socialLinks
      .filter((l) => l.href.startsWith("http"))
      .map((l) => l.href),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: `${siteConfig.url}/`,
    name: siteConfig.name,
    alternateName: "Argha Saha",
    description: siteConfig.description,
    author: {
      "@id": `${siteConfig.url}/#person`,
    },
    inLanguage: "en-US",
  };
}

export function profilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteConfig.url}/#webpage`,
    url: `${siteConfig.url}/`,
    name: `${siteConfig.name} — Research Portfolio`,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#person`,
    },
    mainEntity: {
      "@id": `${siteConfig.url}/#person`,
    },
    inLanguage: "en-US",
  };
}

export function rootGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      personJsonLd(),
      websiteJsonLd(),
      profilePageJsonLd(),
    ],
  };
}

export function scholarlyArticleJsonLd(publication: Publication) {
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

  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "@id": `${siteConfig.url}/publications/${publication.slug}/#article`,
    headline: publication.title,
    name: publication.title,
    description: publication.summary,
    author: publication.authors.map((a) => ({
      "@type": "Person",
      name: a.name,
      ...(a.url ? { url: a.url } : {}),
    })),
    datePublished: String(publication.year),
    isPartOf: {
      "@type": "PublicationVolume",
      name: publication.venue,
      alternateName: publication.venueShort,
    },
    url: `${siteConfig.url}/publications/${publication.slug}/`,
    keywords: publication.tags.join(", "),
    publisher: {
      "@type": "Organization",
      name: publication.venueShort,
    },
    ...(publication.doi ? { identifier: `https://doi.org/${publication.doi}` } : {}),
    ...(absolutePdfUrl
      ? {
          encoding: {
            "@type": "MediaObject",
            contentUrl: absolutePdfUrl,
            encodingFormat: "application/pdf",
          },
        }
      : {}),
  };
}

export function softwareApplicationJsonLd(project: Project) {
  const repoLink = project.links.find((l) => l.href.includes("github.com"))?.href;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteConfig.url}/work/${project.slug}/#software`,
    name: project.name,
    headline: project.tagline,
    description: project.description,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    url: `${siteConfig.url}/work/${project.slug}/`,
    author: {
      "@id": `${siteConfig.url}/#person`,
    },
    ...(repoLink ? { codeRepository: repoLink } : {}),
  };
}
