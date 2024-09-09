import "./styles.css";

import NavigationList from "./NavigationList";
import NavigationHead from "./NavigationHead";
export default function Navigation() {
  return (
    <header className="nav">
      <nav className="nav__container">
        <NavigationHead />
        <NavigationList />
      </nav>
    </header>
  );
}
