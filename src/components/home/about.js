import { about, interests } from "@/utils/data";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="Section Section--white">
      <h3 className="Title">About Me</h3>
      <div className=" grid md:grid-cols-2 justify-center">
        <div className=" md:text-base mb-2 md:mb-0">
          <p
            className=" md:text-lg  mb-2"
            dangerouslySetInnerHTML={{ __html: about.p1 }}
          ></p>
          <p className=" mb-2" dangerouslySetInnerHTML={{ __html: about.p2 }} />
          <p className=" mb-2" dangerouslySetInnerHTML={{ __html: about.p3 }} />
          <p className=" mb-2" dangerouslySetInnerHTML={{ __html: about.p4 }} />
          <p className=" mb-2" dangerouslySetInnerHTML={{ __html: about.p5 }} />
          <p className="mb-2">
            I am enthusiastically open to diverse projects. Please feel free
            to&nbsp;
            <a className=" text-blue-500 underline" href="#contact">
              connect with me
            </a>
            .
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
          <h4 className=" text-lg md:text-xl font-semibold mb-2 md:mb-4">
            My Interests:
          </h4>
          <ul className="flex flex-col text-base pl-3 md:pl-6">
            <li className="list-disc list-inside">
              I love coding game-related subjects. Topics like Programming{" "}
              <b>Game Engines</b>, <b>AI</b>, and <b>Graphics</b> always catch
              my attention.
            </li>
            <li
              className="list-disc list-inside"
              dangerouslySetInnerHTML={{ __html: interests.i2 }}
            />
            <li
              className="list-disc list-inside"
              dangerouslySetInnerHTML={{ __html: interests.i3 }}
            />
            <li
              className="list-disc list-inside"
              dangerouslySetInnerHTML={{ __html: interests.i4 }}
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
