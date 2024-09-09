import "./styles.css";

interface SelectedFiltersProps {
  selectedCategory: string | null;
  selectedSize: string | null;
  selectedColor: string | null;
}

const SelectedFilters: React.FC<SelectedFiltersProps> = ({
  selectedCategory,
  selectedSize,
  selectedColor,
}) => {
  return (
    <div className="selected-filters-container">
      <div className="selected-filters">
        {selectedCategory && (
          <span className="selected-filter">Categoría: {selectedCategory}</span>
        )}
        {selectedSize && (
          <span className="selected-filter">Talle: {selectedSize}</span>
        )}
        {selectedColor && (
          <span className="selected-filter">Color: {selectedColor}</span>
        )}
      </div>
    </div>
  );
};

export default SelectedFilters;
