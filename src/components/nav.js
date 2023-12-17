const Nav = () => {
    return(
        <nav className="flex bg-fuchsia-950 p-6 text-center text-white justify-between">
            {/* <Logo></Logo> */}
            <div className=" pr-80">
                Soroush Jolai
            </div>
            <nav className="flex flex-grow">
                <ul className="flex flex-grow justify-between">
                    <li><a href="#">links</a></li>
                    <li><a href="#">links</a></li>
                    <li><a href="#">links</a></li>
                </ul>
            </nav>
        </nav>
    );
};

export default Nav;