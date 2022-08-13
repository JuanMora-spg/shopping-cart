import { useModal } from "../hooks/useModal";
import { Modal } from "./Modal";
import { CartDetail } from "./CartDetail";
import "../styles/NavBar.scss";

function NavBar() {
  const { isOpen: isOpenCartModal, handleOpen, handleClose } = useModal(false);

  return (
    <nav className="nav">
      <h1>Shopping cart</h1>
      <span onClick={handleOpen}>Cart</span>

      {isOpenCartModal && (
        <Modal>
          <CartDetail handleClose={handleClose} />
        </Modal>
      )}
    </nav>
  );
}

export { NavBar };
