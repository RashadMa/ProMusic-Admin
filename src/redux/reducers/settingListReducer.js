import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function settingListReducer(
  state = initialState.settings,
  action
) {
  switch (action.type) {
    case actionTypes.GET_SETTING_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
