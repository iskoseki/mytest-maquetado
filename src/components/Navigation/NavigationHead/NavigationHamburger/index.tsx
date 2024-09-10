import "./styles.css";
import { useState } from "react";
import HamburgerIcon from "/assets/iconos/hamburguesa.svg";

//harcoded data
const NavOptions = ["E-SHOP", "LOOKBOOK", "CAMPAÑA", "LOCALES"];

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
        {NavOptions.map((option, index) => (
          <a href="/" key={index} className="nav__option">
            {option}
          </a>
        ))}
      </div>
    </div>
  );
};
