import "../styles/CartDetail.scss";

function CartDetail({ handleClose }) {
  return (
    <section className="cart-container">
      <button type="button" className="btn-close" onClick={handleClose}>
        Close
      </button>
      <p>Cart Details</p>
    </section>
  );
}

export { CartDetail };
