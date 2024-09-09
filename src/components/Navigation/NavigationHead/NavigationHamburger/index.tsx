import "./styles.css";
import { useState } from "react";
import HamburgerIcon from "/assets/iconos/hamburguesa.svg";

export const NavigationHamburger = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <button className="nav__hamburger" onClick={toggleMenu}>
        <img className="nav__hamburger-icon" src={HamburgerIcon} alt="Menu" />
      </button>
      <div className={`nav__menu ${menuOpen ? "show" : ""}`}>
        <div className="nav__hamburger__head">
          <button className="nav__close-button" onClick={toggleMenu}>
            X
          </button>
          <h6 className="nav__actualPage">SALE</h6>
        </div>
        <a href="#">E-SHOP</a>
        <a href="#">LOOKBOOK</a>
        <a href="#">CAMPAÑA</a>
        <a href="#">LOCALES</a>
      </div>
    </div>
  );
};
