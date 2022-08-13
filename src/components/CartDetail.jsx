import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ShoppingCartItem } from "./ShoppingCartItem";
import "../styles/CartDetail.scss";

function CartDetail({ handleClose }) {
  return (
    <section className="cart-container">
      <button type="button" className="btn-close" onClick={handleClose}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <p>Cart Details</p>
      <ShoppingCartItem />
    </section>
  );
}

export { CartDetail };
