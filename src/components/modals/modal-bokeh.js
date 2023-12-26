import ModalFooter from "@/components/modals/modal-footer";
import ModalHeader from "@/components/modals/modal-header";
import Image from "next/image";
import { bokeh } from "@/utils/data-modals";

const Bokeh = ({ onCloseClick }) => {
  return (
    <>
      <div className="Modal">
        <div className="Modal__content">
          <ModalHeader
            title="Bokeh"
            position="Software developer / Game Designer"
            onCloseClick={onCloseClick}
          />
          {/*body*/}
          <div className="Modal__body">
            <div className=" w-1/2 mx-auto">
              <Image
                src="/bokeh/01.png"
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
                <b>Date: </b>2023
              </p>
              <p>
                <b>Duration: </b>3 months
              </p>
            </div>
            <p className="my-4 text-blueGray-500 md:text-lg leading-relaxed">
              <b>Description:</b> Bokeh is the name of the game prototype that I
              developed during the Game Development Process module. I wrote a
              Game Design Document for this game then using Unreal Engine and
              blueprints I made a prototype of the game. Bokeh is a serious game
              about photography. I have implemented an in-game camera that
              players can take pictures with. Also, they can review the pictures
              in the gallery and save the one you like on your hard drive
            </p>
            <span className="my-4 text-blueGray-500 md:text-lg leading-relaxed font-semibold">
              Features & skills:{" "}
            </span>
            <ul className=" text-sm md:text-base ml-2 list-disc list-inside text-gray-600">
              <li>Wrote an industry-standard Game Design Document.</li>
              <li dangerouslySetInnerHTML={{ __html: bokeh.f1 }}></li>
              <li>Used blueprints to make a timer, interactable areas, etc.</li>
              <li>
                Developed a HUD using the <b>UMG UI</b> system in Unreal Engine.
              </li>
              <li>
                Developed a <b>lively HUD</b> using OpenGL 2D renderer.
              </li>
              <li>
                Made the environment with the <b>Landscape System</b> in Unreal
                Engine.
              </li>
              <li>
                Made realistic grass and flowers using the <b>Foliage System</b>{" "}
                in Unreal Engine
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

export default Bokeh;
