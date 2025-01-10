"use client";

import { FC } from "react";
import Image from "next/image";

const Contact: FC = () => {
  // const pp = process.env.MY_EMAIL;

  return (
    <section id="contact" className="Section flex flex-col">
      <h3 className="Title col-span-2 h-min">Contact Me</h3>
      <div className="mb-6 mt-3 w-full text-center">
        <h4 className=" text-xl md:text-2xl underline mb-3">My Email:</h4>
        <a href="mailto:soroushdevelope@gmail.com" className="underline text-blue-800 text-lg md:text-xl">soroushdevelope@gmail.com</a>
      </div>
      <div className="w-full text-center">
        <h4 className=" text-xl md:text-2xl underline mb-3">Links:</h4>
        <ul className="flex justify-center">
          <li className="mr-3 hover:bg-orange-200">
            <a
              href="http://www.linkedin.com/in/soroush-july-jolai"
              target="blank"
            >
              <Image
                alt="LinkedIn Icon"
                width="50"
                height="50"
                src="/linkedin.svg"
                className="w"
              />
            </a>
          </li>
          <li className="hover:bg-orange-200 rounded-full mr-3">
            <a href="https://github.com/soroushJuly" target="blank">
              <Image
                alt="Github Icon"
                width="50"
                height="50"
                src="/github.svg"
              />
            </a>
          </li>
          <li className="hover:bg-orange-200 rounded-full">
            <a
              href="https://www.youtube.com/@soroush_j_developer"
              target="blank"
            >
              <Image
                alt="Youtube Icon"
                width="50"
                height="50"
                src="/youtube.svg"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
