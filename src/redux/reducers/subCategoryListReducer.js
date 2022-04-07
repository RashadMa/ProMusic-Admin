import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function subCategoryListReducer(
  state = initialState.subCategories,
  action
) {
  switch (action.type) {
    case actionTypes.GET_SUBCATEGORY_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
