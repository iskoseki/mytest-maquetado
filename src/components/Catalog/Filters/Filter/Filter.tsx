import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css";

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="filter-drawer">
      <button onClick={toggleDrawer} className="drawer-toggle">
        Categoría
      </button>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="drawer"
        unmountOnExit
      >
        <div className="drawer-content">
          <ul>
            <li>
              <label htmlFor="option1">Opción 1</label>
            </li>
            <li>
              <label htmlFor="option2">Opción 2</label>
            </li>
            <li>
              <label htmlFor="option3">Opción 3</label>
            </li>
          </ul>
        </div>
      </CSSTransition>
    </div>
  );
}
