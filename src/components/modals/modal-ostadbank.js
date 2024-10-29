import ModalFooter from "@/components/modals/modal-footer";
import ModalHeader from "@/components/modals/modal-header";
import Image from "next/image";
import { ostadbank } from "@/utils/data-modals";

const Ostadbank = ({ onCloseClick }) => {
  const link = "https://www.ostadbank.com/";
  return (
    <>
      <div className="Modal">
        <div className="Modal__content">
          <ModalHeader
            title="Ostadbank"
            position="Software developer"
            onCloseClick={onCloseClick}
          />
          {/*body*/}
          <div className="Modal__body">
            <div className="Modal__body__image-container">
              <Image
                src="/ostadbank/01.png"
                alt="a screenshot of the Ostadbank website"
                className="mx-auto"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={300}
                height={150}
              />
              <p>
                <b>Date: </b>2021 - 2022
              </p>
              <p>
                <b>Duration: </b>9 months
              </p>
            </div>
            <p className="my-4 text-blueGray-500 md:text-lg leading-relaxed">
              <b>Description:</b> Ostadbank is a platform for students to find
              an online tutor. I worked on this project for 9 months as a
              Front-end developer part of a team of three. I was responsible for
              doing front-end tasks and working on the website to improve the{" "}
              <b>UI, performance, and interactability</b>. I used Vue.js &
              Nuxt.js in this project.&nbsp;
              <a href={link} target="blank" className=" text-sm text-blue-700">
                Link to the website
              </a>
            </p>
            <span className="my-4 text-blueGray-500 md:text-lg leading-relaxed font-semibold">
              Features & skills:{" "}
            </span>
            <ul className=" text-sm md:text-base ml-2 list-disc list-inside text-gray-600">
              <li dangerouslySetInnerHTML={{ __html: ostadbank.f1 }} />
              <li>
                Worked on a <b>large code base</b>.
              </li>
              <li>Worked in professional teams.</li>
              <li>
                Handled <b>Restful APIs</b> on the client side.
              </li>
              <li>Managed time perfectly to meet the deadlines.</li>
              <li>Optimized the code for the best performance.</li>
            </ul>
          </div>
          <ModalFooter onCloseClick={onCloseClick} />
        </div>
      </div>
      <div className="Modal__overlay" />
    </>
  );
};

export default Ostadbank;
