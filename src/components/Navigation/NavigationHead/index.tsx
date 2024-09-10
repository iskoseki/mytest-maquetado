import "./styles.css";

import { NavigationHamburger } from "./NavigationHamburger";
import { NavigationHeadButtons } from "../NavigationHeadButtons";
import Brand from "../Brand";

export default function NavigationHead() {
  return (
    <div className="nav__head-container">
      <div className="nav__hamburger--desktop">
        <NavigationHamburger />
      </div>
      <Brand />
      <NavigationHeadButtons />
    </div>
  );
}
