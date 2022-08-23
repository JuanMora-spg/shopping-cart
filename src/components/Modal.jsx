import ReactDOM from "react-dom";
import "../styles/Modal.scss";

const domContainer = document.getElementById("modal");

function Modal({ children, isOpen }) {
  console.log("This is the modal status: ", isOpen);

  const modalStatus = isOpen ? "shown" : "hidden";

  return ReactDOM.createPortal(
    <div className={`modal-container ${modalStatus}`}>{children}</div>,
    domContainer
  );
}

export { Modal };
