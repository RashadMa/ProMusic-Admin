import * as actionTypes from "./actionTypes";

export function getInformationSuccess(information) {
  return { type: actionTypes.GET_INFORMATION_SUCCESS, payload: information };
}

export const getInformation = () => (dispatch) => {
  let url = "https://localhost:5001/member/api/Informations?page=1";
  return fetch(url)
  .then((response) => response.json())
  .then((result) => dispatch(getInformationSuccess(result)))
  };