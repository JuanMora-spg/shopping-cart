import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addToCart, deleteFromCart } from "../store/cart";
import { NumberInput } from "./";
import { currencyFormat } from "../utils/currencyFormat";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../styles/CartItem.scss";

function CartItem({ item }) {
  const { id, title, image, price, quantity } = item;
  const dispatch = useDispatch();

  const calculatePrice = () => {
    return price * quantity;
  };

  const handleRemoveFromCart = () => dispatch(deleteFromCart(id));
  const handleAddToCart = () => dispatch(addToCart(item));
  const handleRemoveAllItemsFromCart = () => dispatch(deleteFromCart(id, true));

  return (
    <div className="cart-item">
      <button
        type="button"
        title="remove"
        className="cart-item__delete"
        onClick={handleRemoveAllItemsFromCart}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <h4 className="cart-item__title">{title}</h4>
      <img className="cart-item__img" src={image} alt="item photo" />
      <p className="cart-item__text cart-item__text--center">
        {currencyFormat(price)} x {quantity} =
        <span className="cart-item__text--bold">
          {currencyFormat(calculatePrice())}
        </span>
      </p>
      <div className="cart-item__number-input">
        <NumberInput
          num={quantity}
          handleMinusBtn={handleRemoveFromCart}
          handlePlusBtn={handleAddToCart}
        />
      </div>
    </div>
  );
}

export { CartItem };
