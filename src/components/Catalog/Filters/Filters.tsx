import "./styles.css";
import FiltersHead from "./FiltersHead/FiltersHead";
import FiltersList from "./FiltersList/FiltersList";

interface FiltersProps {
  setSelectedCategory: (category: string | null) => void;
  setSelectedSize: (size: string | null) => void;
  setSelectedColor: (color: string | null) => void;
  clearFilters: () => void;
}

export default function Filters({
  setSelectedCategory,
  setSelectedSize,
  setSelectedColor,
  clearFilters,
}: FiltersProps) {
  return (
    <div className="filters__container">
      <FiltersHead />
      <FiltersList
        setSelectedCategory={setSelectedCategory}
        setSelectedSize={setSelectedSize}
        setSelectedColor={setSelectedColor}
      />
      <button onClick={clearFilters} className="clear-filters-button">
        Limpiar filtros
      </button>
    </div>
  );
}
