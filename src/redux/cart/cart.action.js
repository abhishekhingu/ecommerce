/** @format */

import CartActionType from './cart.types';
export const toggleCartHidden = () => {
  return { type: CartActionType.TOGGLE_CART_HIDDEN };
};
export const addItem = (item) => {
  return { type: CartActionType.ADD_ITEM, payload: item };
};
export const removeCartItem = (item) => {
  return { type: CartActionType.REMOVE_CART_ITEM, payload: item };
};
export const removeItem = (item) => {
  return { type: CartActionType.REMOVE_ITEM, payload: item };
};
