import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { NumberInput } from "./";
import "../styles/CartItem.scss";

function CartItem() {
  return (
    <div className="cart-item">
      <button type="button" title="remove" className="cart-item__delete">
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <h4 className="cart-item__title">Article name</h4>
      <img
        className="cart-item__img"
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="item photo"
      />
      <p className="cart-item__text cart-item__text--center">
        $900 x 2 = <span className="cart-item__text--bold">$18,000</span>
      </p>
      <div className="cart-item__number-input">
        <NumberInput />
      </div>
    </div>
  );
}

export { CartItem };
