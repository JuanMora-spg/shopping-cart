import {
  ADD_TO_CART,
  REMOVE_ONE_ITEM_FROM_CART,
  REMOVE_ALL_ITEMS_FROM_CART,
  CLEAR_CART,
} from "./cart.actionTypes";

const initialState = {
  cartItems: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;

      const isNewItemInCart = state.cartItems.some(
        (cartItem) => cartItem.id === newItem.id
      );

      return isNewItemInCart
        ? {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === newItem.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            ),
          }
        : {
            ...state,
            cartItems: [...state.cartItems, { ...newItem, quantity: 1 }],
          };
    case REMOVE_ONE_ITEM_FROM_CART:
      const id = action.payload;

      const itemToRemove = state.cartItems.find((item) => item.id === id);

      return itemToRemove.quantity > 1
        ? {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === itemToRemove.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cartItems: state.cartItems.filter(
              (item) => item.id !== itemToRemove.id
            ),
          };
    case REMOVE_ALL_ITEMS_FROM_CART:
      return state;
    case CLEAR_CART:
      return initialState;
    default:
      return state;
  }
}

export { cartReducer };
