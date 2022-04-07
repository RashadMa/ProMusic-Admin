import * as actionTypes from "./actionTypes";

export function getProductsSuccess(slider) {
  return { type: actionTypes.GET_PRODUCT_SUCCESS, payload: slider };
}

export const getProducts = () => (dispatch) => {
  let url = "https://localhost:5001/member/api/Products?page=1";
  return fetch(url)
    .then((response) => response.json())
    .then((result) => dispatch(getProductsSuccess(result)));
};