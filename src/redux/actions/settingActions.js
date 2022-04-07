import * as actionTypes from "./actionTypes";

export function getSettingsSuccess(setting) {
  return { type: actionTypes.GET_SETTING_SUCCESS, payload: setting };
}

export const getSettings = () => (dispatch) => {
  let url = "https://localhost:5001/member/api/Settings?page=1";
  return fetch(url)
    .then((response) => response.json())
    .then((result) => dispatch(getSettingsSuccess(result)));
};
