"use client";

import Traveller from "@/components/modals/modal-the-traveller";
import Bokeh from "@/components/modals/modal-bokeh";
import Portfolio from "@/components/modals/modal-portfolio";
import CatGame from "@/components/modals/modal-cat";
import Monsterfall from "@/components/modals/modal-monsterfall";
import Rally from "@/components/modals/modal-rally";
import SonOfPersia from "@/components/modals/modal-son-of-persian";
import SpaceConnector from "@/components/modals/modal-space-connector";
import { useRouter } from "next/navigation";

// import { projectList } from "@/utils/data";

export default function Modal({ activeModal, isShowModal, onCloseClick }) {
  const router = useRouter();

  const getCurrentModal = (activeModal) => {
    switch (activeModal.modal) {
      case "Traveller":
        return <Traveller onCloseClick={onCloseClick} />;
      case "Bokeh":
        return <Bokeh onCloseClick={onCloseClick} />;
      case "Portfolio":
        return <Portfolio onCloseClick={onCloseClick} />;
      case "CatGame":
        return <CatGame onCloseClick={onCloseClick} />;
      case "Monsterfall":
        return <Monsterfall onCloseClick={onCloseClick} />;
      case "Rally":
        return <Rally onCloseClick={onCloseClick} />;
      case "SonOfPersia":
        return <SonOfPersia onCloseClick={onCloseClick} />;
      case "SpaceConnector":
        return <SpaceConnector onCloseClick={onCloseClick} />;
      case "EndlessRunner":
        router?.push("/endless_runner_engine");
        break;

      default:
        break;
    }
  };
  return <>{isShowModal ? getCurrentModal(activeModal) : null}</>;
}
