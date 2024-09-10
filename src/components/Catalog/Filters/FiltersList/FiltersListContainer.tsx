import React from "react";
import "./styles.css";
import filters from "../../../../assets/db.json";
import Filter from "../Filter";
import { Filters } from "./FilterListTypes";
import { FiltersProps } from "../FiltersTypes";

const FiltersListContainer: React.FC<FiltersProps> = ({
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
