import { useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { NumberInput } from "../components/NumberInput";
import { NotFound } from "../pages";
import "../styles/ProductDetails.scss";

function ProductDetails() {
  const { id } = useParams();

  //Checking wether with this id exists
  const { products } = useSelector((state) => state.shop);

  const selectedProduct = products.find((product) => product.id === Number(id));

  if (!selectedProduct) {
    return <NotFound />;
  }

  const { image, title, description, price } = selectedProduct;

  return (
    <article className="product-details">
      <picture className="product-details__img-container">
        <img className="product-details__img" src={image} alt="product image" />
      </picture>
      <div className="product-details__content">
        <h2 className="product-details__title">{title}</h2>
        <p className="product-details__description">{description}</p>
        <p className="product-details__price">$ {price}</p>
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
