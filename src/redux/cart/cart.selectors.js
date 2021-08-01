/** @format */

import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    console.log('cart Items', cartItems);
    return cartItems.reduce((count, cartItem) => count + cartItem.quantity, 0);
  }
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (totalValue, item) => totalValue + item.price * item.quantity,
    0
  )
);
