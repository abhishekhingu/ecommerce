/** @format */
import { UserActionTypes as actions } from './user.types';
const INITIAL_STATE = {
  currentUser: null,
};
export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
}
