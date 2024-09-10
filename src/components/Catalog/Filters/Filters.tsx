import { useState } from "react";
import "./styles.css";
import FiltersHead from "./FiltersHead/FiltersHead";
import FiltersListContainer from "./FiltersList/FiltersListContainer";
import { FiltersProps } from "./FiltersTypes";

export default function Filters({
  setSelectedCategory,
  setSelectedSize,
  setSelectedColor,
  clearFilters,
  selectedCategory,
  selectedSize,
  selectedColor,
}: FiltersProps) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <div className="filters__container">
      <FiltersHead />

      <button
        className="filters-toggle-button"
        onClick={toggleDrawer}
        aria-expanded={isDrawerOpen}
        aria-controls="filtersDrawer"
      >
        {isDrawerOpen ? "Cerrar filtros" : "Abrir filtros"}
      </button>

      <div
        id="filtersDrawer"
        className={`filters__drawer ${isDrawerOpen ? "open" : ""}`}
        aria-hidden={!isDrawerOpen}
      >
        <FiltersListContainer
          setSelectedCategory={setSelectedCategory}
          setSelectedSize={setSelectedSize}
          setSelectedColor={setSelectedColor}
          selectedCategory={selectedCategory}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
        <button onClick={clearFilters} className="clear-filters-button">
          Limpiar filtros
        </button>
      </div>
    </div>
  );
}
