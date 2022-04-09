import axios from "axios";
import { categoryService } from "../../api/services/categoryService";
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

export const deleteCategory = (id) => (dispatch) => {
  categoryService.deleteCategory(id).then(() => {
    getCategories()(dispatch);
  });
};

const postCategorySuccess = () => ({
  type: actionTypes.POST_CATEGORY_SUCCESS,
});

export const postCategory = (category) => (dispatch) => {
  let url = "https://localhost:5001/admin/api/Categories";
  var formData = new FormData();
  for (let property in category) {
    if (property === "image") {
      formData.append("photo", category[property]);
      break;
    }
    formData.append(property, category[property]);
  }

  axios
    .post(`${url}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log(response);
      dispatch(postCategorySuccess);
      dispatch(getCategories);
    })
    .catch((error) => console.log(error));
};

export const editCategory = (id, category) => (dispatch) => {
  const formData = new FormData();

  for (let property in category) {
    if (property === "photo") {
      formData.append("photo", category[property]);
      break;
    }
    formData.append(property, category[property]);
  }

  categoryService.putCategory(formData, id).then(() => {
    getCategories()(dispatch);
  });
};
