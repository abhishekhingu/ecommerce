/** @format */
import { ShopActionTypes } from './shop.types';

const shopReducer = (state = { collections: null }, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return { ...state, collections: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
