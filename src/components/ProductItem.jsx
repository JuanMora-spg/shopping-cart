import { NumberInput } from "./";
import "../styles/ProductItem.scss";

function ProductItem() {
  return (
    <article className="product-item">
      <img
        className="product-item__img"
        src="https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="product"
      />
      <p>$ Price</p>
      <a className="product-item__link" href="">
        View
      </a>
      <button className="product-item__btn">Add to cart</button>
      <div className="product-item__number-input">
        <NumberInput />
      </div>
    </article>
  );
}

export { ProductItem };
