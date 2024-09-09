import "./styles.css";

import Logo from "../../../assets/logo.svg";
import { NavigationHamburger } from "./NavigationHamburger";
import { NavigationHeadButtons } from "../NavigationHeadButtons";

export default function NavigationHead() {
  return (
    <div className="nav__head-container">
      <div className="nav__hamburger--desktop">
        <NavigationHamburger />
      </div>

      <div className="nav__brand">
        <img className="nav__logo" src={Logo} alt="Logo" />
      </div>
      <NavigationHeadButtons />
    </div>
  );
}
