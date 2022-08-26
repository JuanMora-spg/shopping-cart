import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, deleteFromCart } from "../store/cart";
import { NotFound } from "../pages";
import { NumberInput } from "../components/NumberInput";
import { currencyFormat } from "../utils/currencyFormat";

import "../styles/ProductDetails.scss";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.shop);
  const { cartItems } = useSelector((state) => state.cart);

  const selectedProduct = products.find((product) => product.id === Number(id));

  const productInCart = cartItems.find((item) => item.id === Number(id));

  const handleRemoveFromCart = () => dispatch(deleteFromCart(Number(id)));
  const handleAddToCart = () => dispatch(addToCart(selectedProduct));

  const renderNotFoundProduct = () => <p>This product does not exist</p>;

  const renderProductDetail = () => (
    <>
      <picture className="product-details__img-container">
        <img
          className="product-details__img"
          src={selectedProduct.image}
          alt="product image"
        />
      </picture>
      <div className="product-details__content">
        <h2 className="product-details__title">{selectedProduct.title}</h2>
        <p className="product-details__description">
          {selectedProduct.description}
        </p>
        <p className="product-details__price">
          {currencyFormat(selectedProduct.price)}
        </p>
        <div className="product-details__actions">
          <button
            className={`product-details__btn ${
              !!productInCart && "product-details__btn--disabled"
            }`}
            onClick={handleAddToCart}
            disabled={!!productInCart}
          >
            Add to Cart
          </button>
          {!!productInCart && (
            <div className="product-details__number-input">
              <NumberInput
                num={productInCart.quantity}
                handleMinusBtn={handleRemoveFromCart}
                handlePlusBtn={handleAddToCart}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );

  return (
    <article className="product-details">
      {selectedProduct ? renderProductDetail() : renderNotFoundProduct()}
    </article>
  );
}

export { ProductDetails };
