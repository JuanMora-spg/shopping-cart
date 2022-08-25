import { Link } from "react-router-dom";
import { NumberInput } from "./";
import "../styles/ProductItem.scss";

function ProductItem({ id, image, price }) {
  return (
    <article className="product-item">
      <img className="product-item__img" src={image} alt="product image" />
      <p>$ {price}</p>
      <Link to={`product/${id}`} className="product-item__link">
        View
      </Link>
      <button className="product-item__btn">Add to cart</button>
      <div className="product-item__number-input">
        <NumberInput />
      </div>
    </article>
  );
}

export { ProductItem };
