export interface FiltersProps {
  setSelectedCategory: (category: string | null) => void;
  setSelectedSize: (size: string | null) => void;
  setSelectedColor: (color: string | null) => void;
  clearFilters?: () => void;
  selectedCategory: string | null;
  selectedSize: string | null;
  selectedColor: string | null;
}


