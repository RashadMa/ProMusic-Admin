import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function informationListReducer(
  state = initialState.informations,
  action
) {
  switch (action.type) {
    case actionTypes.GET_INFORMATION_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
