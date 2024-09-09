import React from "react";
import "./styles.css";
import filters from "../../../../assets/db.json";
import Filter from "../Filter";

interface FilterOption {
  name: string;
  options: string[];
}

export interface Filters {
  categories: FilterOption;
  sizes: FilterOption;
  colors: FilterOption;
}

interface FiltersListProps {
  setSelectedCategory: (category: string | null) => void;
  setSelectedSize: (size: string | null) => void;
  setSelectedColor: (color: string | null) => void;
}

const FiltersListContainer: React.FC<FiltersListProps> = ({
  setSelectedCategory,
  setSelectedSize,
  setSelectedColor,
}) => {
  const { options } = filters as { options: Filters };

  return (
    <>
      <Filter
        name={options.categories.name}
        options={options.categories.options}
        onChange={setSelectedCategory}
      />
      <Filter
        name={options.sizes.name}
        options={options.sizes.options}
        onChange={setSelectedSize}
      />
      <Filter
        name={options.colors.name}
        options={options.colors.options}
        onChange={setSelectedColor}
      />
    </>
  );
};

export default FiltersListContainer;
