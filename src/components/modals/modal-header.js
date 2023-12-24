const Header = ({ onCloseClick, title }) => {
  return (
    <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
      <h3 className="text-3xl font-semibold">{title}</h3>
      <button
        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
        onClick={onCloseClick}
      >
        <span className="bg-transparent text-black h-6 w-6 text-3xl block outline-none focus:outline-none">
          ×
        </span>
      </button>
    </div>
  );
};

export default Header;
