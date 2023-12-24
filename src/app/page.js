import SectionHead from "@/components/home/head";
import SectionContactMe from "@/components/home/contact";
import SectionSkills from "@/components/home/skills";
import SectionAbout from "@/components/home/about";

import "./home.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SectionHead />
      <SectionAbout />
      <section id="projects" className="Section">
        <h3 className="Title col-span-2 h-min">Projects</h3>
        Showcase works
      </section>
      <SectionSkills />
      <SectionContactMe />
    </main>
  );
}
