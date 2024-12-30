import Image from "next/image";
import { about, interests } from "@/utils/data";

import "./head.css";

export default function Head() {
  return (
    <section
      id="head"
      className="Section Header flex flex-col justify-center items-center relative"
    >
      <h1 className="md:text-3xl text-center mb-12 max-w-4xl" dangerouslySetInnerHTML={{ __html: about.p1 }}></h1>
      <div className=" grid lg:grid-cols-12 justify-center max-w-5xl z-10">
        <div className="lg:col-span-8 xl:col-span-9 md:text-base mb-2 md:mb-0">
          <div className="flex mb-3">
            <Image
              alt="Picture of the author in 8-bit style"
              src="/me.png"
              width="270"
              height="270"
              className="Header__avatar "
            />
            <ul className="flex flex-col justify-center lg:gap-2 ml-4">
              <li className="hover:bg-orange-200">
                <a
                  href="http://www.linkedin.com/in/soroush-july-jolai"
                  target="blank"
                >
                  <Image
                    alt="LinkedIn Icon"
                    width="40"
                    height="40"
                    src="/linkedin.svg"
                  />
                </a>
              </li>
              <li className="hover:bg-orange-200 rounded-full">
                <a href="https://github.com/soroushJuly" target="blank">
                  <Image
                    alt="Github Icon"
                    width="40"
                    height="40"
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
                    width="40"
                    height="40"
                    src="/youtube.svg"
                  />
                </a>
              </li>
            </ul>
          </div>
          <p className="md:text-lg mb-2" dangerouslySetInnerHTML={{ __html: about.p2 }} />
          <p className="md:text-lg mb-2" dangerouslySetInnerHTML={{ __html: about.p3 }} />
          <p className="md:text-lg mb-2">
            I am enthusiastically open to diverse projects. Please feel free
            to&nbsp;
            <a className=" text-blue-500 underline" href="#contact">
              connect with me
            </a>
            .
          </p>
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 self-center lg:ml-7">
          <h4 className=" text-lg md:text-xl font-semibold mb-2">
            My Interests:
          </h4>
          <ul className="flex flex-col text-base pl-3 lg:pl-0">
            <li className="list-disc list-inside">
              Coding game-related subjects. Topics like Programming{" "}
              <b>Game Engines</b>, <b>Gameplay</b>, <b>AI</b>, <b>UI</b>, and <b>Graphics</b> always catch
              my attention.
            </li>
            <li
              className="list-disc list-inside"
              dangerouslySetInnerHTML={{ __html: interests.i3 }}
            />
            <li
              className="list-disc list-inside"
              dangerouslySetInnerHTML={{ __html: interests.i4 }}
            />
            <li
              className="list-disc list-inside"
              dangerouslySetInnerHTML={{ __html: interests.i5 }}
            />
          </ul>
        </div>
      </div>
    </section>
  );
}
