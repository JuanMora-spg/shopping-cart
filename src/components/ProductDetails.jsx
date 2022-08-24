import { NumberInput } from "../components/NumberInput";
import "../styles/ProductDetails.scss";

function ProductDetails() {
  return (
    <article className="product-details">
      <picture className="product-details__img-container">
        <img
          className="product-details__img"
          src="https://images.unsplash.com/photo-1509913841876-b8a297b4e240?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="product image"
        />
      </picture>
      <div className="product-details__content">
        <h2 className="product-details__title">Clothe name</h2>
        <p className="product-details__description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus a
          aut eaque neque fugiat asperiores, repellendus facere ut nobis? Ad eum
          officia ex impedit eius alias praesentium quasi itaque sunt!
        </p>
        <p className="product-details__price">$ price</p>
        <div className="product-details__actions">
          <button className="product-details__btn">Add to Cart</button>
          <div className="product-details__number-input">
            <NumberInput />
          </div>
        </div>
      </div>
    </article>
  );
}

export { ProductDetails };
