import ModalFooter from "@/components/modals/modal-footer";
import ModalHeader from "@/components/modals/modal-header";
import EmbedYoutube from "@/components/embed-youtube";
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
              <EmbedYoutube embedId="nQ5V7zPAlDY?si=0n-4GAYiscPksCtt"></EmbedYoutube>
              {/* src={`https://www.youtube.com/embed/${embedId}`} */}
              {/* <Image
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
              /> */}
              <p>
                <b>Date: </b>2024
              </p>
              <p>
                <b>Duration: </b>4 months
              </p>
              <p className=" underline text-blue-400 ">
                <b>
                  <a href={monsterfall.linkDownload} target="blank">
                    {monsterfall.download}
                  </a>
                </b>
              </p>
              <p className=" underline text-blue-400 ">
                <b>
                  <a href={monsterfall.linkToGithub} target="blank">
                    {monsterfall.github}
                  </a>
                </b>
              </p>
            </div>
            <p className="my-4 text-blueGray-500 md:text-lg leading-relaxed">
              <b>Description:</b> Monsterfall is an isometric RPG 2D game that I
              developed during the Computer Games Architecture class. I
              developed a simple engine using monogame framework and then
              leveraging that engine, I created this game. I tried to
              incorporate best practices developing the engine and the game, for
              instance I used programming patterns like: singleton pattern,
              data-driven design, etc.
            </p>
            <span className="my-4 text-blueGray-500 md:text-lg leading-relaxed font-semibold">
              Features & skills:{" "}
            </span>
            <ul className=" text-sm md:text-base ml-2 list-disc list-inside text-gray-600">
              <li>
                Implemented <b>event-driven</b> design for input binding and
                other events like sounds in the game. (<b>Observer Pattern</b>)
              </li>
              <li>
                Implemented <b>data-driven</b> design.
              </li>
              <li>MVC architecture</li>
              Patterns used:
              <li>
                <b>Singleton Pattern</b>
              </li>
              <li>
                <b>Facade Pattern</b>
              </li>
              <li>
                <b>Composite Pattern</b>
              </li>
              <li>
                <b>State Pattern</b>
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

export default Monsterfall;
