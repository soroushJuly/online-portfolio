import Image from "next/image";
// import Footer from '@/components/footer'
import Footer from "@/components/footer";

import "./home.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section
        href="#start"
        className="Section Header flex flex-col justify-center items-center"
      >
        <div>
          <Image
            alt="Picture of the author in 8-bit style"
            src="/avatar.png"
            width="250"
            height="250"
            className=" rounded-full"
          />
        </div>
        <div>
          <h2 className=" text-7xl py-5 text-blue-800 font-extrabold tracking-wider ">
            Soroush Jolai
          </h2>
        </div>
        <div className=" tracking-wide">
          <h3 className=" text-3xl py-2">Software Engineer</h3>
          <h3 className=" text-3xl py-2">Game Programmer</h3>
        </div>
      </section>
      <section href="#about">About</section>
      <section href="#projects">Showcase works</section>
      <section href="skills">Skills</section>
      <section href="contact">contact</section>
    </main>
  );
}
