import ModalFooter from "@/components/modals/modal-footer";
import ModalHeader from "@/components/modals/modal-header";
import Image from "next/image";
import { catData } from "@/utils/data-modals";

const Cat = ({ onCloseClick }) => {
  return (
    <>
      <div className="Modal">
        <div className="Modal__content">
          <ModalHeader
            title={catData.title}
            position={catData.position}
            onCloseClick={onCloseClick}
          />
          {/*body*/}
          <div className="Modal__body">
            <div className="Modal__body__image-container">
              <Image
                src="/cat/01.png"
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
                <b>Date: </b>2024 (Global Game Jam)
              </p>
              <p>
                <b>Duration: </b>3 days
              </p>
              <p className=" underline text-blue-400 ">
                <b>
                  <a href={catData.linkDownload} target="blank">
                    {catData.download}
                  </a>
                </b>
              </p>
              <p className=" underline text-blue-400 ">
                <b>
                  <a href={catData.linkPage} target="blank">
                    {catData.page}
                  </a>
                </b>
              </p>
              <p className=" underline text-blue-400 ">
                <b>
                  <a href={catData.linkToGithub} target="blank">
                    {catData.github}
                  </a>
                </b>
              </p>
            </div>
            <p className="my-4 text-blueGray-500 md:text-lg leading-relaxed">
              <b>Description:</b> Cat with a Vengence is the name of the game
              that I participated in creating during Global Game Jam 2024. From
              idea generation to UI and gameplay programming. I worked in a team
              of six people to create this indie game in just three days. We
              used Unreal Engine and mostly blueprints.
            </p>
            <span className="my-4 text-blueGray-500 md:text-lg leading-relaxed font-semibold">
              Features & skills:{" "}
            </span>
            <ul className=" text-sm md:text-base ml-2 list-disc list-inside text-gray-600">
              <li>Worked in a team to make a game from scratch.</li>
              {/* <li dangerouslySetInnerHTML={{ __html: bokeh.f1 }}></li> */}
              <li>Used blueprints to make a timer, interactable areas, etc.</li>
              <li>
                Developed a lively HUD using the <b>UMG UI</b> system in Unreal
                Engine.
              </li>
              <li>Worked with the fracture system in Unreal Engine.</li>
              <li>Worked with the animation system in Unreal Engine.</li>
            </ul>
          </div>
          <ModalFooter onCloseClick={onCloseClick} />
        </div>
      </div>
      <div className="Modal__overlay" />
    </>
  );
};

export default Cat;
