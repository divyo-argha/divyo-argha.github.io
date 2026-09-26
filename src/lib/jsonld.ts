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
    additionalName: "Divyo",
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
    disambiguatingDescription:
      "Human-Centered Security and Privacy researcher, co-author of CyQured at USENIX SOUPS 2026, also known as Divyo Argha and Argha Saha.",
    gender: "https://schema.org/Male",
    nationality: {
      "@type": "Country",
      name: "Bangladesh",
    },
    subjectOf: [
      {
        "@type": "ScholarlyArticle",
        name: "CyQured: Design, Development, and Empirical Evaluation of a Tabletop Game for Personal Cybersecurity Education",
        url: `${siteConfig.url}/publications/cyqured/`,
      },
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
    alternateName: siteConfig.alternateNames,
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
      alternateName:
        publication.slug === "cyqured"
          ? ["SOUPS 2026", "SOUPS26", "SOUPS '26", "USENIX SOUPS 2026"]
          : publication.venueShort,
    },
    url: `${siteConfig.url}/publications/${publication.slug}/`,
    keywords: [
      ...publication.tags,
      ...(publication.slug === "cyqured"
        ? ["cyqured soups", "soups26", "soups 2026", "SOUPS26", "USENIX SOUPS 2026"]
        : []),
    ].join(", "),
    publisher: {
      "@type": "Organization",
      name: publication.venueShort,
    },
    ...(publication.slug === "cyqured"
      ? {
          about: {
            "@type": "Game",
            "@id": `${siteConfig.url}/cyqured/#game`,
            name: "CyQured",
            url: `${siteConfig.url}/cyqured/`,
          },
        }
      : {}),
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

export function breadcrumbsJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http") ? item.path : `${siteConfig.url}${item.path}`,
    })),
  };
}

export function cyquredGameJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Game", "LearningResource"],
    "@id": `${siteConfig.url}/cyqured/#game`,
    name: "CyQured",
    alternateName: [
      "cyQured",
      "Cyqured",
      "CyQured Game",
      "CyQured Board Game",
      "CyQured Tabletop Game",
    ],
    headline: "CyQured: A Tabletop Game for Personal Cybersecurity Education",
    description:
      "CyQured is a tangible tabletop serious board game designed to educate people on personal cybersecurity and domestic IoT threat modeling, evaluated in a 50-participant empirical study at USENIX SOUPS 2026.",
    url: `${siteConfig.url}/cyqured/`,
    image: `${siteConfig.url}/media/publications/cyqured/board.webp`,
    genre: [
      "Cybersecurity",
      "Educational Game",
      "Tabletop Game",
      "Serious Game",
      "Board Game",
    ],
    gameItem: [
      "28-Cell Smart Home Cyclic Board Track",
      "16 Connected Domestic Devices",
      "68 Action Cards (34 Attack, 34 Defense)",
      "30 Chance Cards",
      "20 Scenario Incident Challenge Cards",
    ],
    numberOfPlayers: {
      "@type": "QuantitativeValue",
      minValue: 2,
      maxValue: 4,
    },
    author: [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: "Argha Pratim Saha",
        alternateName: ["Divyo Argha", "Argha Saha", "divyo-argha"],
        url: `${siteConfig.url}/`,
      },
      {
        "@type": "Person",
        name: "Utsho Das",
      },
      {
        "@type": "Person",
        name: "Md Sadek Ferdous",
      },
      {
        "@type": "Person",
        name: "Md Masum",
      },
      {
        "@type": "Person",
        name: "Farida Chowdhury",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "USENIX Association",
      url: "https://www.usenix.org",
    },
    educationalLevel: "University / General Public",
    about: [
      "Personal Cybersecurity Education",
      "STRIDE Threat Model",
      "Smart Home IoT Security",
      "Usable Privacy & Security",
    ],
    sameAs: [
      "https://www.usenix.org/conference/soups2026/presentation/das",
      "https://www.usenix.org/system/files/soups2026-das.pdf",
    ],
    subjectOf: [
      {
        "@type": "ScholarlyArticle",
        "@id": `${siteConfig.url}/publications/cyqured/#article`,
        name: "CyQured: Design, Development, and Empirical Evaluation of a Tabletop Game for Personal Cybersecurity Education",
        url: `${siteConfig.url}/publications/cyqured/`,
        isPartOf: {
          "@type": "PublicationVolume",
          name: "Twenty-Second Symposium on Usable Privacy and Security (SOUPS 2026)",
          alternateName: ["SOUPS 2026", "SOUPS26", "USENIX SOUPS 2026"],
        },
      },
    ],
  };
}

export function cyquredSiteNavJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: [
      "CyQured Overview",
      "Game Assets & Cards",
      "Rules & Mechanics",
      "SOUPS 2026 Research Paper",
      "Empirical Study & Evaluation",
    ],
    url: [
      `${siteConfig.url}/cyqured/`,
      `${siteConfig.url}/cyqured/assets/`,
      `${siteConfig.url}/cyqured/mechanics/`,
      `${siteConfig.url}/cyqured/publication/`,
      `${siteConfig.url}/publications/cyqured/`,
    ],
  };
}

