import { useState } from "react";
import "../Navbar/navbarMain.css";
import User from "../../img/User.png";
import { Link } from "react-router-dom";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalClose, setModalClose] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleModal = () => {
    setModalClose(modalClose);
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="app-main__header--logo">
        <Link to="/">
          <i className="bx bxs-plane-alt"></i>
          My Tinerary
        </Link>
      </div>
      <nav className="app-main__header--nav">
        <div onClick={handleModal}>
          <i className={` ${menuOpen ? "none" : "bx bx-menu"}`}></i>
        </div>

        <ul className={` ${menuOpen ? "nav-items" : "none"}`}>
          <li>
            <div onClick={handleClick}>
              <i className={` ${menuOpen ? " bx bx-x" : "none"}`}></i>
            </div>
          </li>
          <li onClick={handleClick}>
            <Link to="/">
              <i className="bx bxs-home"></i> Home
            </Link>
          </li>
          <li onClick={handleClick}>
            <Link to="/cities">
              <i className="bx bxs-briefcase-alt"></i> Cities
            </Link>
          </li>

            <li className="app-login">
              <Link to={`/Login/`}>
                <img className="user-icon" src={User} alt="" />
                Login
              </Link>
            </li>
        </ul>
      </nav>

      <div
        onClick={handleModal}
        className={` ${menuOpen ? "modalBackground" : "modalBackgroundNone"}`}
      ></div>
    </>
  );
};

export default NavbarMain;
