import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "../hooks/useModal";
import { Modal } from "./";
import { CartDetail } from "./";
import "../styles/CartIcon.scss";

function CartIcon() {
  const { isOpen: isOpenCartModal, handleOpen, handleClose } = useModal(false);

  const { cartItems } = useSelector((state) => state.cart);

  const totalItemsInCart = cartItems.reduce((acc, current) => {
    return acc + current.quantity;
  }, 0);

  return (
    <>
      <div className="cart-icon" onClick={() => handleOpen()}>
        <p className="cart-icon__text">Cart</p>
        <button type="button" title="shopping cart" className="cart-icon__btn">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
        <span className="cart-icon__notification">{totalItemsInCart}</span>
      </div>
      <Modal isOpen={isOpenCartModal}>
        <CartDetail handleClose={handleClose} />
      </Modal>
    </>
  );
}

export { CartIcon };
