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
            position="Software developer"
            onCloseClick={onCloseClick}
          />
          {/*body*/}
          <div className="Modal__body">
            <div className="Modal__body__image-container">
              <Image
                src="/ezreez/01.jpg"
                alt="a screenshot of the ezreez website"
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
                <b>Date: </b>2020
              </p>
              <p>
                <b>Duration: </b>12 months
              </p>
            </div>
            <p className="my-4 text-blueGray-500 md:text-lg leading-relaxed">
              <b>Description:</b> Ezreez was a platform to facilitate the
              process of transferring money abroad. I developed everything from
              scratch. I implemented landing pages and a dashboard for the users
              to work and manage their money with. I used Vue.js & Nuxt.js in
              this project.&nbsp;
            </p>
            <span className="my-4 text-blueGray-500 md:text-lg leading-relaxed font-semibold">
              Features & skills:{" "}
            </span>
            <ul className=" text-sm md:text-base ml-2 list-disc list-inside text-gray-600">
              <li>Developed a complete web application from scratch.</li>
              <li>Worked on a professional project.</li>
              <li>
                Handled <b>Restful APIs</b> on the client side.
              </li>
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

export default Ezreez;
