import SectionHead from "@/components/home/head";
import SectionContactMe from "@/components/home/contact";
import SectionSkills from "@/components/home/skills";
import SectionPortfolio from "@/components/home/portfolio";

import "./home.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SectionHead />
      <SectionPortfolio />
      <SectionSkills />
      <SectionContactMe />
    </main>
  );
}
