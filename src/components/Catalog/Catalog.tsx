import { useState, useMemo } from "react";
import "./styles.css";
import Card from "./Card/Card";
import Filters from "./Filters/Filters";
import SelectedFilters from "./Filters/SelectedFilters/SelectedFilters";
import products from "../../assets/db.json";

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const isMatchingProduct = (product: (typeof products.data)[number]) => {
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory;
    const matchesSize = !selectedSize || product.sizes.includes(selectedSize);
    const matchesColor =
      !selectedColor || product.colors.includes(selectedColor);
    return matchesCategory && matchesSize && matchesColor;
  };

  const filteredProducts = useMemo(
    () => products.data.filter(isMatchingProduct),
    [selectedCategory, selectedSize, selectedColor]
  );

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedSize(null);
    setSelectedColor(null);
  };

  return (
    <div className="catalog__container">
      <div className="catalogo__content">
        <div className="catalog__filters">
          <SelectedFilters
            selectedCategory={selectedCategory}
            selectedSize={selectedSize}
            selectedColor={selectedColor}
          />
          <Filters
            setSelectedCategory={setSelectedCategory}
            setSelectedSize={setSelectedSize}
            setSelectedColor={setSelectedColor}
            clearFilters={clearFilters}
            selectedCategory={selectedCategory}
            selectedSize={selectedSize}
            selectedColor={selectedColor}
          />
        </div>
        <div className="catalog__products-layout">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <Card
                  url={product.url}
                  title={product.title}
                  price={product.price}
                />
              </div>
            ))
          ) : (
            <NotFoundProduct />
          )}
        </div>
      </div>
    </div>
  );
}

function NotFoundProduct() {
  return (
    <div className="not-found-product">
      <p>No hay productos que coincidan con los filtros.</p>
    </div>
  );
}
