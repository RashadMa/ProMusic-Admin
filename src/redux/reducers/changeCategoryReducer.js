import * as actionTypes from "../actions/actionTypes";

export default function changeCategoryReducer(
  state = {},
  action
) {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return { ...state, currentCategory: action.payload };
    default:
      return state;
  }
}
