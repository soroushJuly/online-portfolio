import ModalFooter from "@/components/modals/modal-footer";
import ModalHeader from "@/components/modals/modal-header";
import EmbedYoutube from "@/components/embed-youtube"
import Image from "next/image";
import { rally } from "@/utils/data-modals";

const Rally = ({ onCloseClick }) => {
  return (
    <>
      <div className="Modal">
        <div className="Modal__content">
          <ModalHeader
            title={rally.title}
            position={rally.position}
            onCloseClick={onCloseClick}
          />
          {/*body*/}
          <div className="Modal__body">
            <div className="Modal__body__image-container">
              {/* <EmbedYoutube embedId="nQ5V7zPAlDY?si=0n-4GAYiscPksCtt"></EmbedYoutube> */}
              <p>
                <b>Date: </b>2024
              </p>
              <p>
                <b>Duration: </b>4 months
              </p>
              <p className=" underline text-blue-400 ">
                <b>
                  <a href={rally.linkDownload} target="blank">
                    {rally.download}
                  </a>
                </b>
              </p>
              <p className=" underline text-blue-400 ">
                <b>
                  <a href={rally.linkToGithub} target="blank">
                    {rally.github}
                  </a>
                </b>
              </p>
            </div>
            <p className="my-4 text-blueGray-500 md:text-lg leading-relaxed">
              <b>Description:</b>
            </p>
            <span className="my-4 text-blueGray-500 md:text-lg leading-relaxed font-semibold">
              Features & skills:{" "}
            </span>
            <ul className=" text-sm md:text-base ml-2 list-disc list-inside text-gray-600">
              <li>
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

export default Rally;
