import { ProductItem } from "./ProductItem";
import "../styles/ProductList.scss";

function ProductList() {
  return (
    <div className="product-list">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((product) => (
        <ProductItem key={product} />
      ))}
    </div>
  );
}

export { ProductList };
