import { useSelector } from "react-redux";
import { ProductItem } from "./ProductItem";

import "../styles/ProductList.scss";

function ProductList() {
  const { products } = useSelector((state) => state.shop);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export { ProductList };
