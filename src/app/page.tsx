import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { News } from "@/components/sections/News";
import { Publications } from "@/components/sections/Publications";
import { OngoingWork } from "@/components/sections/OngoingWork";
import { ResearchFocus } from "@/components/sections/ResearchFocus";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { ProblemSolving } from "@/components/sections/ProblemSolving";
import { Skills } from "@/components/sections/Skills";
import { HashScrollHandler } from "@/components/HashScrollHandler";

// Explicit even though it's "/" — the two live deployments (GitHub Pages,
// Vercel) serve byte-identical output, so this canonical tag is what tells
// search engines which host is authoritative.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HashScrollHandler />
      <Hero />
      <News />
      <Publications />
      <OngoingWork />
      <ResearchFocus />
      <Experience />
      <Education />
      <Projects />
      <ProblemSolving />
      <Skills />
    </>
  );
}
