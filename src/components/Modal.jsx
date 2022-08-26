import ReactDOM from "react-dom";
import "../styles/Modal.scss";

const domContainer = document.getElementById("modal");

function Modal({ children, isOpen, handleClose }) {
  const modalStatus = isOpen ? "shown" : "hidden";

  const handleModalContainerClick = (e) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <div className={`modal ${modalStatus}`} onClick={handleClose}>
      <div onClick={handleModalContainerClick}>{children}</div>
    </div>,
    domContainer
  );
}

export { Modal };
