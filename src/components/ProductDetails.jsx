import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, deleteFromCart } from "../store/cart/cart.actions";
import { NotFound } from "../pages";
import { NumberInput } from "../components/NumberInput";
import "../styles/ProductDetails.scss";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.shop);
  const { cartItems } = useSelector((state) => state.cart);

  const selectedProduct = products.find((product) => product.id === Number(id));

  if (!selectedProduct) {
    return <NotFound />;
  }

  const productInCart = cartItems.find((item) => item.id === Number(id));
  const { image, title, description, price } = selectedProduct;

  const handleRemoveFromCart = () => dispatch(deleteFromCart(Number(id)));
  const handleAddToCart = () => dispatch(addToCart(selectedProduct));

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
          <button
            className={`product-details__btn ${
              !!productInCart && "product-details__btn--disabled"
            }`}
            onClick={handleAddToCart}
            disabled={!!productInCart}
          >
            Add to Cart
          </button>
          {!!productInCart && (
            <div className="product-details__number-input">
              <NumberInput
                num={productInCart.quantity}
                handleMinusBtn={handleRemoveFromCart}
                handlePlusBtn={handleAddToCart}
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export { ProductDetails };
