import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css";

type FilterProps = {
  name: string;
  options: string[];
};

export default function Filter({ name, options }: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="filter-drawer">
      <button onClick={toggleDrawer} className="drawer-toggle">
        {name}
      </button>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="drawer"
        unmountOnExit
      >
        <div className="drawer-content">
          <ul>
            {options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      </CSSTransition>
    </div>
  );
}
