import ModalFooter from "@/components/modals/modal-footer";
import ModalHeader from "@/components/modals/modal-header";
import Image from "next/image";

const Traveller = ({ onCloseClick }) => {
  return (
    <>
      <div className="Modal">
        <div className="Modal__content">
          <ModalHeader
            title="The Traveller"
            position="Software developer / Game Designer"
            onCloseClick={onCloseClick}
          />
          {/*body*/}
          <div className="Modal__body">
            <div className="Modal__body__image-container">
              <Image
                src="/the-traveller/01.png"
                alt="a screenshot of the traveller game"
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
              <b>Description:</b> The Traveller is a 3D Platformer game I
              developed using <b>a custom game engine</b>. The game has a
              cartoony theme and several gameplay elements. Right now the game
              has only level. The goal of the game is to reach the village on
              time and save the village by defeating the final boss. The game is
              fully coded in C++. I developed almost all the features only using
              low-level code without the help of any extra libraries.
            </p>
            <span className=" my-4 text-blueGray-500 md:text-lg leading-relaxed font-semibold">
              Features & skills:{" "}
            </span>
            <ul className=" text-sm md:text-base ml-2 list-disc list-inside text-gray-600">
              <li>
                Developed <b>Finite State Machine</b> for enemies.
              </li>
              <li>
                Developed <b>Seek</b>, and an <b>advanced Wander</b> behaviour
                for NPCs.
              </li>
              <li>
                Implemented a <b>collision detection system</b> (AABB) for
                receiving and causing damage.
              </li>
              <li>
                Developed a <b>lively HUD</b> using OpenGL 2D renderer.
              </li>
              <li>
                Implemented four primitive-based(triangle) meshes by defining
                and coding the{" "}
                <b>
                  indices, vertices, surface normals, and texture coordinates.
                </b>
              </li>
              <li>
                Imported static and skeleton-based meshes in the game and
                <b> scaled</b>, <b>rotated</b>, and <b>transformed</b> them to
                match the needs of the game.
              </li>
              <li>
                Worked with <b>animations</b> of the characters.
              </li>
              <li>
                Implemented three different <b>lights</b> in the game. Point
                light, directional light, and spot light using OpenGL.
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

export default Traveller;
