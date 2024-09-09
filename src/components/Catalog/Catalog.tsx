import { useState } from "react";
import "./styles.css";
import Card from "./Card/Card";
import Filters from "./Filters/Filters";
import products from "../../assets/db.json";

export default function Catalog() {
  // Estado para los filtros seleccionados
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  // Función para filtrar productos
  const filteredProducts = products.data.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchesSize = selectedSize
      ? product.sizes.includes(selectedSize)
      : true;
    const matchesColor = selectedColor
      ? product.colors.includes(selectedColor)
      : true;
    return matchesCategory && matchesSize && matchesColor;
  });

  // Función para limpiar filtros
  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedSize(null);
    setSelectedColor(null);
  };

  return (
    <div className="catalog__container">
      <div className="catalogo__content">
        <div className="catalog__filters">
          <Filters
            setSelectedCategory={setSelectedCategory}
            setSelectedSize={setSelectedSize}
            setSelectedColor={setSelectedColor}
            clearFilters={clearFilters}
          />
        </div>
        <div className="catalog__products-layout">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div key={index} className="product-card">
                <Card
                  key={index}
                  url={product.url}
                  title={product.title}
                  price={product.price}
                />
              </div>
            ))
          ) : (
            <p>No hay productos que coincidan con los filtros.</p>
          )}
        </div>
      </div>
    </div>
  );
}
