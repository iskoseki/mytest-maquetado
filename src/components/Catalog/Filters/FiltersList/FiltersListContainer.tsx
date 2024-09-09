import React from "react";
import "./styles.css";
import filters from "../../../../assets/db.json";
import Filter from "../Filter";

interface FilterOption {
  name: string;
  options: string[];
}

interface Filters {
  categories: FilterOption;
  sizes: FilterOption;
  colors: FilterOption;
}

interface FiltersListProps {
  setSelectedCategory: (category: string | null) => void;
  setSelectedSize: (size: string | null) => void;
  setSelectedColor: (color: string | null) => void;
  selectedCategory: string | null;
  selectedSize: string | null;
  selectedColor: string | null;
}

const FiltersListContainer: React.FC<FiltersListProps> = ({
  setSelectedCategory,
  setSelectedSize,
  setSelectedColor,
  selectedCategory,
  selectedSize,
  selectedColor,
}) => {
  const { options } = filters as { options: Filters };

  return (
    <>
      <Filter
        name={options.categories.name}
        options={options.categories.options}
        onChange={setSelectedCategory}
        selectedOption={selectedCategory}
      />
      <Filter
        name={options.sizes.name}
        options={options.sizes.options}
        onChange={setSelectedSize}
        selectedOption={selectedSize}
      />
      <Filter
        name={options.colors.name}
        options={options.colors.options}
        onChange={setSelectedColor}
        selectedOption={selectedColor}
      />
    </>
  );
};

export default FiltersListContainer;
