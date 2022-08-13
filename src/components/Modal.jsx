import ReactDOM from "react-dom";
import "../styles/Modal.scss";

const domContainer = document.getElementById("modal");

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal-container">{children}</div>,
    domContainer
  );
}

export { Modal };
