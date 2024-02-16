import ModalFooter from "@/components/modals/modal-footer";
import ModalHeader from "@/components/modals/modal-header";
import Image from "next/image";
import { monsterfall } from "@/utils/data-modals";

const Monsterfall = ({ onCloseClick }) => {
  return (
    <>
      <div className="Modal">
        <div className="Modal__content">
          <ModalHeader
            title={monsterfall.title}
            position={monsterfall.position}
            onCloseClick={onCloseClick}
          />
          {/*body*/}
          <div className="Modal__body">
            <div className="Modal__body__image-container">
              <Image
                src="/monsterfall/01.png"
                alt="screenshot of the bokeh game"
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
                <b>Date: </b>2024 - present
              </p>
              <p>
                <b>Duration: </b>1 months and going
              </p>
            </div>
            <p className="my-4 text-blueGray-500 md:text-lg leading-relaxed">
              <b>Description:</b> Monsterfall is an isometric RPG 2D game that I
              developed during studying the Computer Games Architecture. I
              leveraged monogame to create this game. I tried to incorporate
              best practices developing this game, like using neat programming
              patterns like: singleton pattern, data-driven design, etc.
            </p>
            <span className="my-4 text-blueGray-500 md:text-lg leading-relaxed font-semibold">
              Features & skills:{" "}
            </span>
            <ul className=" text-sm md:text-base ml-2 list-disc list-inside text-gray-600">
              <li>
                Implemented event-driven design for input binding and other
                events like sounds in the game.
              </li>
              <li>Implemented data-driven design.</li>
              <li>MVC</li>
              <li>singleton pattern</li>
            </ul>
          </div>
          <ModalFooter onCloseClick={onCloseClick} />
        </div>
      </div>
      <div className="Modal__overlay" />
    </>
  );
};

export default Monsterfall;
