import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css";

type FilterProps = {
  name: string;
  options: string[];
  onChange: (selected: string | null) => void;
  selectedOption: string | null;
};

export default function Filter({
  name,
  options,
  onChange,
  selectedOption,
}: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    if (option === selectedOption) {
      onChange(null); // Deselecciona si se hace clic en la opción ya seleccionada
    } else {
      onChange(option); // Selecciona la nueva opción
    }
    // No cerrar el menú aquí
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false); // Cierra el menú si se hace clic fuera del menú
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
        <div className="drawer-content" ref={drawerRef}>
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
