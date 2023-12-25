import Traveller from "@/components/modals/modal-the-traveller";
import Bokeh from "@/components/modals/modal-bokeh";
import HiExchange from "@/components/modals/modal-hi-exchange";
// import { projectList } from "@/utils/data";

export default function Modal({ activeModal, isShowModal, onCloseClick }) {
  const getCurrentModal = () => {
    switch (activeModal.modal) {
      case "Traveller":
        return <Traveller onCloseClick={onCloseClick} />;
      case "Bokeh":
        return <Bokeh onCloseClick={onCloseClick} />;
      case "HiExchange":
        return <HiExchange onCloseClick={onCloseClick} />;
        break;

      default:
        break;
    }
  };
  return <>{isShowModal ? getCurrentModal(activeModal) : null}</>;
}
