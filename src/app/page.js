import Image from "next/image";
import SectionHead from "@/components/home/head";
import SectionContactMe from "@/components/home/contact";

import "./home.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SectionHead />
      <section id="about" className="Section Section--white">
        <h3 className="Title">About me</h3>
        <div className=" grid grid-cols-2 justify-center">
          <div className=" text-justify">
            <p>Hi, it’s Soroush</p>
            <p>
              I’m a software engineer eager about game development. I worked as
              a software engineer in different teams in the tech industry for
              about 2 years. I’m currently studying for a master’s in computer
              games technology with an expected end date of August 2024. The
              focus of my course is on C++ programming and learning the
              essential math skills to build high-quality games, I’ve also
              completed an in-depth Udemy course on C++ and Unreal engine,
              therefore I have a robust understanding of C++. Based on my
              experience I can learn new programming languages fast and can
              easily understand and work on top of others’ codes. Also, I’m
              comfortable using company-specific engines to build a game as I
              did in my course. On top of that, I’m working on the game engine
              we used at the university and improving it. I have had a passion
              for games from a young age and Now I can’t wait to face new
              challenges in game programming.
            </p>
            <p>
              I’m always open to talk and I like to collaborate on different
              projects.Feel free to reach me by email. Our links below
            </p>
            <ul>Linkedin link, github</ul>
          </div>
          <div>
            <h4>Interests</h4>
            <ul className="flex flex-col">
              <li>interest 1</li>
              <li>interest 2</li>
              <li>interest 3</li>
              <li>interest 4</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="projects" className="Section">
        <h3 className="Title col-span-2 h-min">Projects</h3>
        Showcase works
      </section>
      <section id="skills" className="Section Section--white">
        <h3 className="Title col-span-2 h-min">Skills</h3>
      </section>
      <SectionContactMe />
    </main>
  );
}
