import * as actionTypes from "./actionTypes";

export function getSlidersSuccess(slider) {
  return { type: actionTypes.GET_SLIDER_SUCCESS, payload: slider };
}

export const getSliders = () => (dispatch) => {
  let url = "https://localhost:5001/member/api/Sliders?page=1";
  return fetch(url)
    .then((response) => response.json())
    .then((result) => dispatch(getSlidersSuccess(result)));
};