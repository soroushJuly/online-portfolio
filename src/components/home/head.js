import Image from "next/image";

import "./head.css";

export default function Head() {
  return (
    <section
      id="head"
      className="Section Header flex flex-col justify-center items-center relative text-white "
    >
      <div className="Header-overlay"></div>
      <div className=" z-10 pt-9 md:pt-20 pb-2 md:pb-6">
        <Image
          alt="Picture of the author in 8-bit style"
          src="/avatar-01.jpg"
          width="270"
          height="270"
          className=" Header__avatar "
        />
      </div>
      <div className=" z-10">
        <h2 className=" text-3xl md:text-7xl py-5 font-extrabold tracking-wider ">
          Soroush Jolai
        </h2>
      </div>
      <div className=" z-10 tracking-wide">
        <h3 className=" text-lg md:text-3xl md:py-2">Software Engineer</h3>
        <h3 className=" text-lg md:text-3xl md:py-2">Game Programmer</h3>
      </div>
    </section>
  );
}
