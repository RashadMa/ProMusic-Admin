import axios from "axios";
import Swal from "sweetalert2";
import { categoryService } from "../../api/services/categoryService";
import { subCategoryService } from "../../api/services/subCategoryService";
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
  let url = "https://localhost:5001/admin/api/Categories?page=1";
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => response.json())
    .then((result) => dispatch(getCategoriesSuccess(result)));
};

export function getSubCategoriesSuccess(subCategories) {
  return { type: actionTypes.GET_SUBCATEGORY_SUCCESS, payload: subCategories };
}

export const getSubCategories = () => (dispatch) => {
  let url = "https://localhost:5001/admin/api/subCategories?page=1";
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      dispatch(getSubCategoriesSuccess(result));
    });
};

export const deleteCategory = (id) => (dispatch) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
      categoryService.deleteCategory(id).then(() => {
        getCategories()(dispatch);
      });
    }
  });
};

export const deleteSubCategory = (id) => (dispatch) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
      subCategoryService.deleteSubCategory(id).then(() => {
        getSubCategories()(dispatch);
      });
    }
  });
};

const postCategorySuccess = () => ({
  type: actionTypes.POST_CATEGORY_SUCCESS,
});

export const postCategory = (category) => (dispatch) => {
  let url = "https://localhost:5001/admin/api/Categories";
  var formData = new FormData();
  for (let property in category) {
    formData.append(property, category[property]);
  }

  axios
    .post(`${url}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then(({ data }) => {
      dispatch({
        type: actionTypes.POST_SUB_CATEGORY_SUCCESS,
        payload: data,
      });
      getCategories()(dispatch);
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

export const editSubCategory = (id, subCategory) => (dispatch) => {
  const formData = new FormData();

  formData.append("photo", subCategory.photo);
  for (let property in subCategory) {
    formData.append(property, subCategory[property]);
  }

  subCategoryService.putSubCategory(formData, id).then(() => {
    getSubCategories()(dispatch);
  });
};

export const postSubCategory = (subCategory, push) => (dispatch) => {
  let url = "https://localhost:5001/admin/api/subcategories";
  var formData = new FormData();
  for (let property in subCategory) {
    formData.append(property, subCategory[property]);
  }
  axios
    .post(`${url}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",

        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then(({ data }) => {
      dispatch({
        type: actionTypes.POST_SUB_CATEGORY_SUCCESS,
        payload: data,
      });
      getSubCategories()(dispatch);
      push("/subcategories");
    })
    .catch((error) => console.log(error));
};
