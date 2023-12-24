import Image from "next/image";
import SectionHead from "@/components/home/head";
import SectionContactMe from "@/components/home/contact";
import SectionSkills from "@/components/home/skills";

import { about } from "@/utils/data";

import "./home.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SectionHead />
      <section id="about" className="Section Section--white">
        <h3 className="Title">About me</h3>
        <div className=" grid grid-cols-2 justify-center">
          <div className=" text-justify">
            <p className=" text-lg mb-2">{about.p1}</p>
            <p className=" text-lg mb-2">{about.p2}</p>
            <p className=" text-lg mb-2">
              I’m always open to talk and I like to collaborate on different
              projects.Feel free to reach me by{" "}
              <a className=" text-blue-500 underline" href="#contact">
                email
              </a>
              . Our links below
            </p>
            <ul className="flex">
              <li className="mr-3 hover:bg-orange-200">
                <a
                  href="http://www.linkedin.com/in/soroush-july-jolai"
                  target="blank"
                >
                  <Image
                    alt="LinkedIn Icon"
                    width="30"
                    height="30"
                    src="/linkedin.svg"
                  />
                </a>
              </li>
              <li className="hover:bg-orange-200 rounded-full">
                <a href="https://github.com/soroushJuly" target="blank">
                  <Image
                    alt="Github Icon"
                    width="30"
                    height="30"
                    src="/github.svg"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="md:ml-8">
            <h4 className=" text-xl font-semibold mb-4">My Interests:</h4>
            <ul className="flex flex-col text-lg pl-6">
              <li className=" list-disc list-inside">interest 1</li>
              <li className="list-disc list-inside">interest 2</li>
              <li className="list-disc list-inside">interest 3</li>
              <li className="list-disc list-inside">interest 4</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="projects" className="Section">
        <h3 className="Title col-span-2 h-min">Projects</h3>
        Showcase works
      </section>
      <SectionSkills />
      <SectionContactMe />
    </main>
  );
}
