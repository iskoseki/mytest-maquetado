import { useState, useEffect, useCallback } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css";
import { FilterProps } from "./FilterType";

export default function Filter({
  name,
  options,
  onChange,
  selectedOption,
}: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleOptionClick = useCallback(
    (option: string) => {
      onChange(option === selectedOption ? null : option);
    },
    [onChange, selectedOption]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const drawer = document.querySelector(".drawer-content");
      if (drawer && !drawer.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            {options.map((option) => (
              <li
                key={option}
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
