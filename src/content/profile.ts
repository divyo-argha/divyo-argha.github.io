import type { Link, NewsItem } from "./types";

export const profile = {
  name: "Argha Pratim Saha",
  subtitle: "Research Assistant @ BRAC University",
  focusLine: "Usable security & privacy · Human-computer interaction · AI & IoT Security",
  status: "PhD applicant · Fall 2027",
  bioParagraphs: [
    "Hi, I'm Argha, pronounced as Or + gho [think as \"ghost\" without the \"st\" :) ].",
    "I am a part-time Research Assistant at BRAC University, where I am advised by Dr. Farida Chowdhury. I graduated from Shahjalal University of Science and Technology (SUST) in July 2025, where my undergraduate thesis focused on HCI, more specifically, usable security education, under the supervision of Dr. Farida Chowdhury, Dr. Md Sadek Ferdous, and Md Masum.",
    "I'm interested in Usable Security & Privacy and Human-Computer Interaction, where I want to understand the human factors behind security and privacy decisions, and how context and circumstances shape their security behavior. I'm also interested in designing more effective and engaging interventions for users who may be more vulnerable to security and privacy risks, and in exploring security problems from both human-centered and technical perspectives.",
    "I’m currently looking for PhD opportunities for Fall 2027.",
  ],
  closingStatement: "",
  bio: "Hi, I'm Argha, pronounced as Or + gho [think as \"ghost\" without the \"st\" :) ]. I am a part-time Research Assistant at BRAC University advised by Dr. Farida Chowdhury. I graduated from SUST in July 2025 and focus on Usable Security & Privacy and Human-Computer Interaction, exploring security problems from both human-centered and technical perspectives. Currently looking for PhD opportunities for Fall 2027.",
  location: "Dhaka, Bangladesh",
  email: "arghapratimsaha00@gmail.com",
  university: "BRAC University",
  cvUrl: "/cv.pdf",
} as const;

export const researchFocus = {
  note: "The thread through my work is security and privacy for people systems were never really built around: no training, no device of their own, no vocabulary for what happened to them. I build interventions for that group, then test whether they actually hold up. What I want to work on next is human-AI security, how people trust or get fooled by decisions an AI makes for them, a question CyQured pointed me toward but I haven't published on yet.",
  tags: [
    "Human-centered security",
    "Security & privacy in everyday contexts",
    "Security education",
    "Human-AI security",
    "Applied machine learning",
  ],
};

export const socialLinks: Link[] = [
  { label: "CV (PDF)", href: "/cv.pdf" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=EKrGm9UAAAAJ&hl=en" },
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "GitHub", href: "https://github.com/divyo-argha" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/argha-pratim-saha-a25b502b5/" },
];

export const news: NewsItem[] = [
  {
    date: "Jul 2026",
    badge: "USENIX SOUPS 2026",
    title: "Paper Published at USENIX SOUPS 2026",
    description:
      "Our paper 'CyQured: Design, Development, and Empirical Evaluation of a Tabletop Game for Personal Cybersecurity Education' was published at the 22nd USENIX Symposium on Usable Privacy and Security in Hanover, Germany.",
    link: { label: "CyQured SOUPS 2026 Paper", href: "/publications/cyqured" },
    secondaryLink: { label: "Paper (PDF)", href: "https://www.usenix.org/system/files/soups2026-das.pdf" },
  },
  {
    date: "Jan 2026",
    badge: "BRAC University",
    title: "Joined BRAC University as a Research Assistant",
    description:
      "Joined Dr. Farida Chowdhury's group part-time to study how young adults in Bangladesh read phishing and smishing attempts. I am also a founding member of the new Human-Centered Computing and Society (HCCS) research group.",
    link: { label: "Experience", href: "#experience" },
  },
  {
    date: "Oct 2025",
    badge: "ShellBeeHaken",
    title: "Joined ShellBeeHaken Ltd. as an Associate Software Engineer",
    description:
      "Joined the team building KriyaKarak, working on front-end modules and a Bengali-English code-switching framework for a real-time conversational voice agent, plus the WebSocket layer carrying its audio.",
    link: { label: "Experience", href: "#experience" },
  },
  {
    date: "Jul 2025",
    badge: "SUST",
    title: "Graduated with B.Sc. in Computer Science & Engineering",
    description:
      "Completed B.Sc. (Engg.) in CSE at Shahjalal University of Science and Technology with a CGPA of 3.71 / 4.00. My undergraduate thesis grew into CyQured.",
    link: { label: "Education Details", href: "#education" },
  },
  {
    date: "Nov 2024",
    badge: "IEEE ICCIT 2024",
    title: "Presented & Published at IEEE ICCIT 2024",
    description:
      "Presented and published 'A Deep Learning Approach to Automate Classification of Arsenic-Affected Skin using EfficientNet-B1' at the 27th International Conference on Computer and Information Technology.",
    link: { label: "Arsenic Write-up", href: "/publications/arsenic" },
    secondaryLink: { label: "IEEE Xplore", href: "https://doi.org/10.1109/ICCIT64611.2024.11022014" },
  },
  {
    date: "Jun 2024",
    badge: "NAACL 2024",
    title: "Presented PRIMUS Online at NAACL Clinical NLP Workshop",
    description:
      "Presented 'Project PRIMUS at EHRSQL 2024: Text-to-SQL Generation using Large Language Models for EHR Analysis' online at the 6th Clinical NLP Workshop (NAACL 2024).",
    link: { label: "PRIMUS Write-up", href: "/publications/ehrsql-primus-text-to-sql" },
    secondaryLink: { label: "ACL Anthology", href: "https://aclanthology.org/2024.clinicalnlp-1.46/" },
  },
];
