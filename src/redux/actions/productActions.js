import axios from "axios";
import Swal from "sweetalert2";
import { productService } from "../../api/services/productService";
import * as actionTypes from "./actionTypes";

export function getProductsSuccess(slider) {
  return { type: actionTypes.GET_PRODUCT_SUCCESS, payload: slider };
}

const postProductSuccess = () => ({
  type: actionTypes.POST_BRAND_SUCCESS,
});

export const postProduct = (product) => (dispatch) => {
  let url = "https://localhost:5001/admin/api/Products";
  var formData = new FormData();
  for (let property in product) {
    formData.append(property, product[property]);
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
        type: actionTypes.POST_PRODUCT_SUCCESS,
        payload: data,
      });
      getProducts()(dispatch);
    })
    .catch((error) => console.log(error));
};

export const getProducts = () => (dispatch) => {
  let url = "https://localhost:5001/admin/api/Products?page=1";
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => response.json())
    .then((result) => dispatch(getProductsSuccess(result)));
};

export const editProduct = (id, product) => (dispatch) => {
  const formData = new FormData();

  formData.append("photo", product.photo);
  for (let property in product) {
    formData.append(property, product[property]);
  }

  productService.putProduct(formData, id, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then(() => {
    getProducts()(dispatch);
  });
};

export const deleteProduct = (id) => (dispatch) => {
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
      productService.deleteProduct(id).then(() => {
        getProducts()(dispatch);
      });
    }
  });
};
