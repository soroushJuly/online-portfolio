const Footer = ({ onCloseClick }) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-t border-solid border-blueGray-200 rounded-b">
      <span className=" text-sm text-red-500">
        Code parts available on request.
      </span>

      <button
        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={onCloseClick}
      >
        Close
      </button>
    </div>
  );
};

export default Footer;
