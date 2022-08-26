import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/cart/cart.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { CartItem } from "./CartItem";
import { currencyFormat } from "../utils/currencyFormat";
import "../styles/CartDetail.scss";

function CartDetail({ handleClose }) {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalToPay = () =>
    cartItems.reduce((acc, currentItem) => {
      return acc + currentItem.price * currentItem.quantity;
    }, 0);

  const handleClearCart = () => dispatch(clearCart());

  return (
    <section className="cart-detail">
      <button
        type="button"
        title="close"
        className="cart-detail__close"
        onClick={handleClose}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      {cartItems.length === 0 ? (
        <p className="cart-detail__text cart-detail__text--center">
          Your cart is empty
        </p>
      ) : (
        <>
          <h3 className="cart-detail__title">Cart</h3>
          <div className="cart-detail__body">
            {cartItems.map((item) => (
              <CartItem key={item} item={item} />
            ))}
          </div>
          <div className="cart-detail__footer">
            <p className="cart-detail__text cart-detail__text--bolder">
              Total: {currencyFormat(totalToPay())}
            </p>
            <button
              type="button"
              className="cart-detail__btn cart-detail__btn--danger"
              onClick={handleClearCart}
            >
              Clear cart
            </button>
            <button
              type="button"
              className="cart-detail__btn cart-detail__btn--success"
            >
              Continue to pay
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export { CartDetail };
