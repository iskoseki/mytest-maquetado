import "./styles.css";
import Card from "./Card/Card";
import Filters from "./Filters/Filters";
import products from "../../assets/db.json";

export default function Catalog() {
  return (
    <div className="catalog__container">
      <div className="catalogo__content">
        <div className="catalog__filters">
          <Filters />
        </div>
        <div className="catalog__products-layout">
          {products.data.map((product, index) => (
            <div key={index} className="product-card">
              <Card
                key={index}
                url={product.url}
                title={product.title}
                price={product.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
