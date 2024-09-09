import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css";

type FilterProps = {
  name: string;
  options: string[];
  onChange: (selected: string | null) => void;
};

export default function Filter({ name, options, onChange }: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onChange(option);
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
              <li
                key={index}
                className={selectedOption === option ? "selected" : ""}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </CSSTransition>
    </div>
  );
}
