import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../styles/CartDetail.scss";

function CartDetail({ handleClose }) {
  return (
    <section className="cart-container">
      <button type="button" className="btn-close" onClick={handleClose}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <p>Cart Details</p>
    </section>
  );
}

export { CartDetail };
