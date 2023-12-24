import ModalFooter from "@/components/modals/modal-footer";
import ModalHeader from "@/components/modals/modal-header";
const Traveller = ({ onCloseClick }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <ModalHeader title="Modal Title" onCloseClick={onCloseClick} />
            {/*body*/}
            <div className="relative p-6 flex-auto overflow-y-auto Modal__body">
              <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                I always felt like I could do anything. That’s the main thing
                people are controlled by! Thoughts- their perception of
                themselves! They're slowed down by their perception of
                themselves. If you're taught you can’t do anything, you won’t do
                anything. I was taught I could do everything. I always felt like
                I could do anything. That’s the main thing people are controlled
                by! Thoughts- their perception of themselves! They're slowed
                down by their perception of themselves. If you're taught you
                can’t do anything, you won’t do anything. I was taught I could
                do everything. I always felt like I could do anything. That’s
                the main thing people are controlled by! Thoughts- their
                perception of themselves! They're slowed down by their
                perception of themselves. If you're taught you can’t do
                anything, you won’t do anything. I was taught I could do
                everything. I always felt like I could do anything. That’s the
                main thing people are controlled by! Thoughts- their perception
                of themselves! They're slowed down by their perception of
                themselves. If you're taught you can’t do anything, you won’t do
                anything. I was taught I could do everything. I always felt like
                I could do anything. That’s the main thing people are controlled
                by! Thoughts- their perception of themselves! They're slowed
                down by their perception of themselves. If you're taught you
                can’t do anything, you won’t do anything. I was taught I could
                do everything. I always felt like I could do anything. That’s
                the main thing people are controlled by! Thoughts- their
                perception of themselves! They're slowed down by their
                perception of themselves. If you're taught you can’t do
                anything, you won’t do anything. I was taught I could do
                everything.
              </p>
            </div>
            <ModalFooter onCloseClick={onCloseClick} />
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Traveller;
