import ModalFooter from "@/components/modals/modal-footer";
import ModalHeader from "@/components/modals/modal-header";
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
            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
              I always felt like I could do anything. That’s the main thing
              people are controlled by! Thoughts- their perception of
              themselves! I always felt like I could do anything. That’s the
              main thing people are controlled by! Thoughts- their perception of
              themselves!I always felt like I could do anything. That’s the main
              thing people are controlled by! Thoughts- their perception of
              themselves!I always felt like I could do anything. That’s the main
              thing people are controlled by! Thoughts- their perception of
              themselves!I always felt like I could do anything. That’s the main
              thing people are controlled by! Thoughts- their perception of
              themselves!I always felt like I could do anything. That’s the main
              thing people are controlled by! Thoughts- their perception of
              themselves!I always felt like I could do anything. That’s the main
              thing people are controlled by! Thoughts- their perception of
              themselves!I always felt like I could do anything. That’s the main
              thing people are controlled by! Thoughts- their perception of
              themselves!I always felt like I could do anything. That’s the main
              thing people are controlled by! Thoughts- their perception of
              themselves!I always felt like I could do anything. That’s the main
              thing people are controlled by! Thoughts- their perception of
              themselves!I always felt like I could do anything. That’s the main
              thing people are controlled by! Thoughts- their perception of
              themselves!I always felt like I could do anything. That’s the main
              thing people are controlled by! Thoughts- their perception of
              themselves!I always felt like I could do anything. That’s the main
              thing people are controlled by! Thoughts- their perception of
              themselves!I always felt like I could do anything. That’s the main
              thing people are controlled by! Thoughts- their perception of
              themselves!I always felt like I could do anything. That’s the main
              thing people are controlled by! Thoughts- their perception of
              themselves!
            </p>
          </div>
          <ModalFooter onCloseClick={onCloseClick} />
        </div>
      </div>
      <div className="Modal__overlay" />
    </>
  );
};

export default Traveller;
