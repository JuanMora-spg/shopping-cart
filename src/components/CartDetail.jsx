import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ShoppingCartItem } from "./ShoppingCartItem";
import "../styles/CartDetail.scss";

function CartDetail({ handleClose }) {
  return (
    <section className="cart-container">
      <button
        type="button"
        className="cart-container__close"
        onClick={handleClose}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <p className="cart-container__title">Cart</p>
      <div className="cart-container__body">
        {[1, 2, 3, 4].map((item) => (
          <ShoppingCartItem key={item} />
        ))}
      </div>
      <div className="cart-container__footer">
        <p className="cart-container__text cart-container__text--bolder">
          Total: $9,000
        </p>
        <button className="cart-container__btn cart-container__btn--danger">
          Clear cart
        </button>
        <button className="cart-container__btn cart-container__btn--success">
          Continue to pay
        </button>
      </div>
    </section>
  );
}

export { CartDetail };
