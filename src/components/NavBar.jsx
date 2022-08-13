import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "../hooks/useModal";
import { Modal } from "./";
import { CartDetail } from "./";
import "../styles/NavBar.scss";

function NavBar() {
  const { isOpen: isOpenCartModal, handleOpen, handleClose } = useModal(false);

  return (
    <nav className="nav">
      <h1>Shopping cart</h1>
      <div className="item" onClick={handleOpen}>
        Cart
        <button className="btn_cart item">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>

      {isOpenCartModal && (
        <Modal>
          <CartDetail handleClose={handleClose} />
        </Modal>
      )}
    </nav>
  );
}

export { NavBar };
