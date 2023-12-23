import "./header.css";

const Header = () => {
  return (
    <nav className="flex bg-fuchsia-950 p-6 text-center text-white justify-between">
      {/* <Logo></Logo> */}
      <div className=" pr-80">Soroush Jolai</div>
      <nav>
        <ul className="flex">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Header;
