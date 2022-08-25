import {
  ADD_TO_CART,
  REMOVE_ONE_ITEM_FROM_CART,
  REMOVE_ALL_ITEMS_FROM_CART,
  CLEAR_CART,
} from "./cart.actionTypes";

function addToCart(product) {
  return { type: ADD_TO_CART, payload: product };
}

function deleteFromCart(id, all = false) {
  return all
    ? { type: REMOVE_ALL_ITEMS_FROM_CART, payload: id }
    : { type: REMOVE_ONE_ITEM_FROM_CART, payload: id };
}

function clearCart() {
  return { type: CLEAR_CART };
}

export { addToCart, deleteFromCart, clearCart };
