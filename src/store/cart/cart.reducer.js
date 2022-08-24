import {
  ADD_TO_CART,
  REMOVE_ONE_ITEM_FROM_CART,
  REMOVE_ALL_ITEMS_FROM_CART,
  CLEAR_CART,
} from "./cart.actionTypes";

const initialState = [];

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return state;
    case REMOVE_ONE_ITEM_FROM_CART:
      return state;
    case REMOVE_ALL_ITEMS_FROM_CART:
      return state;
    case CLEAR_CART:
      return initialState;
    default:
      return state;
  }
}

export { cartReducer };
