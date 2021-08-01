/** @format */
import { UserActionTypes as actions } from './user.types';
export const setCurrentUser = (user) => {
  return { type: actions.SET_CURRENT_USER, payload: user };
};
