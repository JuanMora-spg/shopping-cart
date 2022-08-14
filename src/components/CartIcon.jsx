import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "../hooks/useModal";
import { Modal } from "./";
import { CartDetail } from "./";
import "../styles/CartIcon.scss";

function CartIcon() {
  const { isOpen: isOpenCartModal, handleOpen, handleClose } = useModal(false);

  return (
    <>
      <div className="cart-icon" onClick={handleOpen}>
        <p className="cart-icon__text">Cart</p>
        <button type="button" title="shopping cart" className="cart-icon__btn">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
        <span className="cart-icon__notification">3</span>
      </div>
      {isOpenCartModal && (
        <Modal>
          <CartDetail handleClose={handleClose} />
        </Modal>
      )}
    </>
  );
}

export { CartIcon };
