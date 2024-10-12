import ModalFooter from "@/components/modals/modal-footer";
import ModalHeader from "@/components/modals/modal-header";
import Image from "next/image";
import { spaceConnectorData } from "@/utils/data-modals";

const SpaceConnector = ({ onCloseClick }) => {
  return (
    <>
      <div className="Modal">
        <div className="Modal__content">
          <ModalHeader
            title={spaceConnectorData.title}
            position={spaceConnectorData.position}
            onCloseClick={onCloseClick}
          />
          {/*body*/}
          <div className="Modal__body">
            <div className="Modal__body__image-container">
              <Image
                src="/space-connector/01.png"
                alt="screenshot of the space connector game"
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
                <b>Date: </b>2024 (Kenney Game Jam)
              </p>
              <p>
                <b>Duration: </b>3 days
              </p>
              <p className=" underline text-blue-400 ">
                <b>
                  <a href={spaceConnectorData.linkDownload} target="blank">
                    {spaceConnectorData.download}
                  </a>
                </b>
              </p>
              <p className=" underline text-blue-400 ">
                <b>
                  <a href={spaceConnectorData.linkPage} target="blank">
                    {spaceConnectorData.page}
                  </a>
                </b>
              </p>
              <p className=" underline text-blue-400 ">
                <b>
                  <a href={spaceConnectorData.linkToGithub} target="blank">
                    {spaceConnectorData.github}
                  </a>
                </b>
              </p>
            </div>
            <p className="my-4 text-blueGray-500 md:text-lg leading-relaxed">
              <b>Description:</b> Defend the rocket by placing defence nodes and making connection between them.
               First build up your defence by clicking desired node from menu on the bottom of screen.
                Then by clicking a parent node and clicking a location, place them on the space..
            </p>
            <span className="my-4 text-blueGray-500 md:text-lg leading-relaxed font-semibold">
              Features & skills:{" "}
            </span>
            <ul className=" text-sm md:text-base ml-2 list-disc list-inside text-gray-600">
              <li>Worked in a team to make a game from scratch in a tight schedule.</li>
              {/* <li dangerouslySetInnerHTML={{ __html: bokeh.f1 }}></li> */}
              <li>
                Developed many gameplay and UI features in <b>Unity</b>.
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

export default SpaceConnector;
