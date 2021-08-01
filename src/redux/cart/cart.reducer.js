/** @format */
import CartActionType from './cart.types';
import {
  AddItemToCart,
  removeCartItem,
  removeItem as removeItemFromCart,
} from './cart.util';
const INITAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartRedeucer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case CartActionType.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case CartActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: AddItemToCart(state.cartItems, action.payload),
      };
    case CartActionType.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, action.payload),
      };
    case CartActionType.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartRedeucer;
