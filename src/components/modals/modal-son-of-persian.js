import ModalFooter from "@/components/modals/modal-footer";
import ModalHeader from "@/components/modals/modal-header";
import Image from "next/image";
import { persia } from "@/utils/data-modals";

const SonOfPersia = ({ onCloseClick }) => {
  return (
    <>
      <div className="Modal">
        <div className="Modal__content">
          <ModalHeader
            title={persia.title}
            position={persia.position}
            onCloseClick={onCloseClick}
          />
          {/*body*/}
          <div className="Modal__body">
            <div className="Modal__body__image-container">
              <Image
                src="/persia/01.png"
                alt="a screenshot of the Son of Persia game"
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
                <b>Date: </b>2024
              </p>
              <p>
                <b>Duration: </b>4 months
              </p>
              <p className="underline text-blue-400 ">
                <b>
                  <a href={persia.linkDownload} target="blank">
                    {persia.download}
                  </a>
                </b>
              </p>
              <p className="underline text-blue-400">
                <b>
                  <a href={persia.linkToGithub} target="blank">
                    {persia.github}
                  </a>
                </b>
              </p>
            </div>
            <p className="my-4 text-blueGray-500 md:text-lg leading-relaxed">
              <b>Description:</b>
              &quot;Son of Peria&quot; is the game that I designed and
              coded using Unity (C#) and Meta Quest 2 headsets. It&apos;s an
              action-adventure game based on a Persian myth.
            </p>
            <span className="my-4 text-blueGray-500 md:text-lg leading-relaxed font-semibold">
              Features & skills:{" "}
            </span>
            <ul className=" text-sm md:text-base ml-2 list-disc list-inside text-gray-600">
              <li>
                Worked with Unity <b>XR toolkit</b> to develop a fully
                functional VR game.
              </li>
              <li>Implemented bow and arrow physics and mechanics in C#.</li>
              <li>
                Created a nice environment and atmosphere using Unity Engine.
              </li>
            </ul>
          </div>
          <ModalFooter onCloseClick={onCloseClick} />
        </div>
      </div>
      <div className="Modal__overlay" />
    </>
  );
};

export default SonOfPersia;
