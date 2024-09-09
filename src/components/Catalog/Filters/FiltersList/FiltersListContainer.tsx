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

const FiltersListContainer: React.FC = () => {
  const { options } = filters as { options: Filters };

  return (
    <>
      {Object.keys(options).map((key) => (
        <Filter
          key={key}
          name={options[key as keyof Filters].name}
          options={options[key as keyof Filters].options}
        />
      ))}
    </>
  );
};

export default FiltersListContainer;
