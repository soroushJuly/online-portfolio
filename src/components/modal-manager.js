import Traveller from "@/components/modals/modal-the-traveller";
import Bokeh from "@/components/modals/modal-bokeh";
// import { projectList } from "@/utils/data";

export default function Modal({ activeModal, isShowModal, onCloseClick }) {
  const getCurrentModal = () => {
    switch (activeModal.modal) {
      case "Traveller":
        return <Traveller onCloseClick={onCloseClick} />;
      case "Bokeh":
        return <Bokeh onCloseClick={onCloseClick} />;
        break;

      default:
        break;
    }
  };
  return <>{isShowModal ? getCurrentModal(activeModal) : null}</>;
}
