
interface FilterOption {
  name: string;
  options: string[];
}

export interface Filters {
  categories: FilterOption;
  sizes: FilterOption;
  colors: FilterOption;
}

export type FiltersListTitleProps = {
  onClick?: () => void;
  title: string;
};
