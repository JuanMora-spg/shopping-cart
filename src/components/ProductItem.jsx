import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/cart/cart.actions";
import { NumberInput } from "./";
import "../styles/ProductItem.scss";

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const { id, image, price } = product;

  const { cartItems } = useSelector((state) => state.cart);

  const productInCart = cartItems.find((item) => item.id === id);

  const handleAddToCart = () => dispatch(addToCart(product));

  return (
    <article className="product-item">
      <img className="product-item__img" src={image} alt="product image" />
      <p>$ {price}</p>
      <Link to={`product/${id}`} className="product-item__link">
        View
      </Link>
      <button
        className={`product-item__btn ${
          !!productInCart && "product-item__btn--disabled"
        }`}
        onClick={handleAddToCart}
        disabled={!!productInCart}
      >
        Add to cart
      </button>
      {!!productInCart && (
        <div className="product-item__number-input">
          <NumberInput num={productInCart.quantity} />
        </div>
      )}
    </article>
  );
}

export { ProductItem };
