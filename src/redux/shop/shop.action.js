/** @format */

import { ShopActionTypes } from './shop.types';
export const updatecollection = (collectionMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionMap,
});
