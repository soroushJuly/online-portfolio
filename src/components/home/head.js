import Image from "next/image";

import "./head.css";

export default function Head() {
  return (
    <section
      id="head"
      className="Section Header flex flex-col justify-center items-center relative text-white "
    >
      <div className="Header-overlay"></div>
      <div className=" z-10 pt-20 pb-6">
        <Image
          alt="Picture of the author in 8-bit style"
          src="/avatar.png"
          width="270"
          height="270"
          className=" border-8 border-solid border-slate-900 rounded-full"
        />
      </div>
      <div className=" z-10">
        <h2 className=" text-7xl py-5 font-extrabold tracking-wider ">
          Soroush Jolai
        </h2>
      </div>
      <div className=" z-10 tracking-wide">
        <h3 className=" text-3xl py-2">Software Engineer</h3>
        <h3 className=" text-3xl py-2">Game Programmer</h3>
      </div>
    </section>
  );
}
