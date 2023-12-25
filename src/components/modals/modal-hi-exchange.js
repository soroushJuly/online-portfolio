import ModalFooter from "@/components/modals/modal-footer";
import ModalHeader from "@/components/modals/modal-header";
import Image from "next/image";

const Hiexchange = ({ onCloseClick }) => {
  const link = "https://hi.exchange/";
  return (
    <>
      <div className="Modal">
        <div className="Modal__content">
          <ModalHeader
            title="HiExchange"
            position="Software developer"
            onCloseClick={onCloseClick}
          />
          {/*body*/}
          <div className="Modal__body">
            <div className=" w-1/2 mx-auto">
              <Image
                src="/hi-exchange/01.png"
                alt="screenshot of the game"
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
                <b>Date: </b>2021
              </p>
              <p>
                <b>Duration: </b>6 months
              </p>
            </div>
            <p className="my-4 text-blueGray-500 md:text-lg leading-relaxed">
              <b>Description:</b> HiExchange is the name a web application that
              I developed from scratch using Nuxt.js and Vue.js in 6 month. This
              website is a safe place for digital currency exchange.&nbsp;
              <a href={link} target="blank" className=" text-sm text-blue-700">
                Link to the website
              </a>
            </p>
            <span className="my-4 text-blueGray-500 md:text-lg leading-relaxed font-semibold">
              Features & skills:{" "}
            </span>
            <ul className=" text-sm md:text-base ml-2 list-disc list-inside text-gray-600">
              <li>Worked in professional teams.</li>
              <li>
                Handled <b>Restful APIs</b> on the client-side.
              </li>
              <li>
                Solved all the challenges through process of developing a
                digital currency exchange platform.
              </li>
              <li>Managed time perfectly to meet the deadlines.</li>
              <li>Optimized the code for the best performance.</li>
            </ul>
          </div>
          <ModalFooter onCloseClick={onCloseClick} />
        </div>
      </div>
      <div className="Modal__overlay" />
    </>
  );
};

export default Hiexchange;
