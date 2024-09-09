import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css";
import FiltersListContainer from "./FiltersListContainer";
import { FiltersListTitle } from "./FiltersListTitle";

const FiltersList: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const closeFilters = () => {
    setShowFilters(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 845);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <FiltersListTitle title="Filtrar" onClick={toggleFilters} />
      {isDesktop ? (
        <div className="filters__list-desktop">
          <FiltersListContainer />
        </div>
      ) : (
        <CSSTransition
          in={showFilters}
          timeout={10000}
          classNames="filters__list"
          unmountOnExit
        >
          <FiltersListDrawer onClose={closeFilters} />
        </CSSTransition>
      )}
    </>
  );
};

const FiltersListDrawer: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="filters__list">
      <FiltersListTitle title="Filtrar" />
      <button onClick={onClose} className="close-button">
        X
      </button>

      <FiltersListContainer />
    </div>
  );
};

export default FiltersList;
