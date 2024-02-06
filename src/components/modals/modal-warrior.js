import ModalFooter from "@/components/modals/modal-footer";
import ModalHeader from "@/components/modals/modal-header";
import Image from "next/image";
import { warriorData } from "@/utils/data-modals";

const Warrior = ({ onCloseClick }) => {
  return (
    <>
      <div className="Modal">
        <div className="Modal__content">
          <ModalHeader
            title={warriorData.title}
            position={warriorData.position}
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
                <b>Date: </b>2023 - present
              </p>
              <p>
                <b>Duration: </b>2 months and going
              </p>
            </div>
            <p className="my-4 text-blueGray-500 md:text-lg leading-relaxed">
              <b>Description:</b> This a Third-person action RPG game still in
              prgoress. Unreal engine is used to create this game. The game is
              being created by only writing C++ (blueprints not corporated as
              much as possible). This game is a big presonal project and has all
              aspects of a AAA game, also, I will be comfortable with ins and
              outs
            </p>
            <span className="my-4 text-blueGray-500 md:text-lg leading-relaxed font-semibold">
              Features & skills:{" "}
            </span>
            <ul className=" text-sm md:text-base ml-2 list-disc list-inside text-gray-600">
              <li>
                Created an enviroment using Unreal features like landscape and
                foliage.
              </li>
              {/* <li dangerouslySetInnerHTML={{ __html: bokeh.f1 }}></li> */}
            </ul>
          </div>
          <ModalFooter onCloseClick={onCloseClick} />
        </div>
      </div>
      <div className="Modal__overlay" />
    </>
  );
};

export default Warrior;
