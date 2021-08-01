/** @format */

export const AddItemToCart = (cartItems, cartItem) => {
  const existingCartItem = cartItems.find((item) => item.id === cartItem.id);
  if (existingCartItem) {
    return cartItems.map((item) => {
      return item.id === cartItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }
  return [...cartItems, { ...cartItem, quantity: 1 }];
};

export const removeCartItem = (cartItems, cartItem) => {
  const updateCartItems = cartItems.filter((item) => item.id !== cartItem.id);
  return updateCartItems;
};

export const removeItem = (cartItems, item) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== item.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : { ...cartItem }
  );
};
