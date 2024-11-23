import Image from "next/image";

import "./head.css";

export default function Head() {
  return (
    <section
      id="head"
      className="Section Header flex flex-col justify-center items-center relative text-white "
    >
      <div className="Header-overlay"></div>
      <div className="flex flex-col md:flex-row items-center content-between pt-9 md:pt-20 pb-2 md:pb-6 md:space-x-8">
        <div className=" z-10 ">
          <Image
            alt="Picture of the author in 8-bit style"
            src="/avatar-01.jpg"
            width="270"
            height="270"
            className=" Header__avatar "
          />
        </div>
        <div className=" flex items-center z-10">
          <h2 className=" pt-2 text-center md:pt-0 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-wider">
            Soroush Jolai
          </h2>
        </div>
        <div className="flex flex-col self-center z-10 tracking-wide lg:border-l-2 lg:pl-2 border-gray-400">
          <h3 className="md:text-2xl md:py-2">Software Engineer</h3>
          <h3 className="md:text-2xl md:py-2">Game Programmer</h3>
        </div>
      </div>
    </section>
  );
}
