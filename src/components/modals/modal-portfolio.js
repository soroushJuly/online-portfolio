import ModalFooter from "@/components/modals/modal-footer";
import ModalHeader from "@/components/modals/modal-header";
import Image from "next/image";

const Ezreez = ({ onCloseClick }) => {
  const link = "https://www.ostadbank.com/";
  return (
    <>
      <div className="Modal">
        <div className="Modal__content">
          <ModalHeader
            title="Ezreez"
            position="Software developer / Designer"
            onCloseClick={onCloseClick}
          />
          {/*body*/}
          <div className="Modal__body">
            <div className=" w-1/2 mx-auto">
              <Image
                src="/portfolio/01.png"
                alt="screenshot of the online portfolio website"
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
                <b>Duration: </b>1 week
              </p>
            </div>
            <p className="my-4 text-blueGray-500 md:text-lg leading-relaxed">
              <b>Description:</b> I put this project here because I wanted to
              test my abilities to learn a new framework. I developed this
              website using React.js and Next.js. I have not worked with any of
              these tools before. But, I managed to create a website with medium
              complexity using these tools in a short period. And, I am happy
              that I learned something new. <br /> My plan is to add a game
              written in JavaScript to this website.
            </p>
            <span className="my-4 text-blueGray-500 md:text-lg leading-relaxed font-semibold">
              Features & skills:{" "}
            </span>
            <ul className=" text-sm md:text-base ml-2 list-disc list-inside text-gray-600">
              <li>
                Learned a new library and a new framework in a small time frame.
              </li>
              <li>Implemented a form.</li>
              <li>Implemented Modals.</li>
            </ul>
          </div>
          <ModalFooter onCloseClick={onCloseClick} />
        </div>
      </div>
      <div className="Modal__overlay" />
    </>
  );
};

export default Ezreez;
