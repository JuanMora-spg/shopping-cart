import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { CartItem } from "./CartItem";
import "../styles/CartDetail.scss";

function CartDetail({ handleClose }) {
  return (
    <section className="cart-detail">
      <button
        type="button"
        className="cart-detail__close"
        onClick={handleClose}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <h3 className="cart-detail__title">Cart</h3>
      <div className="cart-detail__body">
        {[1, 2, 3, 4].map((item) => (
          <CartItem key={item} />
        ))}
      </div>
      <div className="cart-detail__footer">
        <p className="cart-detail__text cart-detail__text--bolder">
          Total: $9,000
        </p>
        <button className="cart-detail__btn cart-detail__btn--danger">
          Clear cart
        </button>
        <button className="cart-detail__btn cart-detail__btn--success">
          Continue to pay
        </button>
      </div>
    </section>
  );
}

export { CartDetail };
