import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../store/cart/cart.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { NumberInput } from "./";
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
        {price} x {quantity} =
        <span className="cart-item__text--bold"> $ {calculatePrice()}</span>
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
