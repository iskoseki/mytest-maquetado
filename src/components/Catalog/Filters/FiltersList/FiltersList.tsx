import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Filter from "../Filter/Filter";
import "./styles.css";

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
      <FiltersListTitle onClick={toggleFilters} />

      {isDesktop ? (
        <FiltersListContainer />
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
      <FiltersListTitle />
      <button onClick={onClose} className="close-button">
        X
      </button>
      <Filter />
      <Filter />
      <Filter />
    </div>
  );
};
const FiltersListContainer: React.FC = () => {
  return (
    <div className="filters__list-desktop">
      <Filter />
      <Filter />
      <Filter />
    </div>
  );
};

const FiltersListTitle: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <h5 className="filters__list-title" onClick={onClick}>
      Filtrar
    </h5>
  );
};

export default FiltersList;
