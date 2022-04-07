import * as actionTypes from "./actionTypes";

export const changeCategory = (category) => (dispatch) => {
  dispatch({
    type: actionTypes.CHANGE_CATEGORY,
    payload: category,
  });
};

function getCategoriesSuccess(categories) {
  return { type: actionTypes.GET_CATEGORY_SUCCESS, payload: categories };
}

export const getCategories = () => (dispatch) => {
  let url = "https://localhost:5001/member/api/Categories?page=1";
  return fetch(url)
    .then((response) => response.json())
    .then((result) => dispatch(getCategoriesSuccess(result)));
};

export function getSubCategoriesSuccess(subCategories) {
  return { type: actionTypes.GET_SUBCATEGORY_SUCCESS, payload: subCategories };
}

export const getSubCategories = () => (dispatch) => {
  let url = "https://localhost:5001/member/api/subCategories?page=1";
  return fetch(url)
    .then((response) => response.json())
    .then((result) => dispatch(getSubCategoriesSuccess(result)));
};
