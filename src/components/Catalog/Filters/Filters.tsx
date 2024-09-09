import "./styles.css";
import FiltersHead from "./FiltersHead/FiltersHead";
import FiltersListContainer from "./FiltersList/FiltersListContainer";

interface FiltersProps {
  setSelectedCategory: (category: string | null) => void;
  setSelectedSize: (size: string | null) => void;
  setSelectedColor: (color: string | null) => void;
  clearFilters: () => void;
  selectedCategory: string | null;
  selectedSize: string | null;
  selectedColor: string | null;
}

export default function Filters({
  setSelectedCategory,
  setSelectedSize,
  setSelectedColor,
  clearFilters,
  selectedCategory,
  selectedSize,
  selectedColor,
}: FiltersProps) {
  return (
    <div className="filters__container">
      <FiltersHead />
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
  );
}
