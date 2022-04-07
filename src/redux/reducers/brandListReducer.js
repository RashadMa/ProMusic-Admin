import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function brandListReducer(state = initialState.brands, action) {
  switch (action.type) {
    case actionTypes.GET_BRAND_SUCCESS:
      return action.payload;
    case actionTypes.DELETE_BRAND_SUCCESS:
      const newArr = [...state.brands];
      return newArr.filter((id) => id !== action.payload);
    default:
      return state;
  }
}
