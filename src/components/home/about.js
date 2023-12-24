import { about } from "@/utils/data";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="Section Section--white">
      <h3 className="Title">About me</h3>
      <div className=" grid md:grid-cols-2 justify-center">
        <div className=" text-justify mb-2 md:mb-0">
          <p className=" md:text-lg mb-2">{about.p1}</p>
          <p className=" md:text-lg mb-2">{about.p2}</p>
          <p className=" md:text-lg mb-2">
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
          <h4 className=" text-lg md:text-xl font-semibold mb-2 md:mb-4">
            My Interests:
          </h4>
          <ul className="flex flex-col text-lg pl-3 md:pl-6">
            <li className="list-disc list-inside">interest 1</li>
            <li className="list-disc list-inside">interest 2</li>
            <li className="list-disc list-inside">interest 3</li>
            <li className="list-disc list-inside">interest 4</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
