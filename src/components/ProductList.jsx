import { useSelector } from "react-redux";
import { ProductItem } from "./ProductItem";
import "../styles/ProductList.scss";

function ProductList() {
  const { products } = useSelector((state) => state.shop);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
}

export { ProductList };
