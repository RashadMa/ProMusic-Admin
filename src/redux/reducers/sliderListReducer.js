import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function sliderListReducer(
  state = initialState.sliders,
  action
) {
  switch (action.type) {
    case actionTypes.GET_SLIDER_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
