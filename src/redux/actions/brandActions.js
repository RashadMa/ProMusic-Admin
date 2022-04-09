import * as actionTypes from "./actionTypes";
import { brandsService } from "../../api/services/brandsService";
import axios from "axios";

export function getBrandsSuccess(brand) {
  return { type: actionTypes.GET_BRAND_SUCCESS, payload: brand };
}

export function deleteBrandSuccess(id) {
  return { type: actionTypes.DELETE_BRAND_SUCCESS, payload: id };
}

const postBrandSuccess = () => ({
  type: actionTypes.POST_BRAND_SUCCESS,
});
const putBrandSuccess = () => ({
  type: actionTypes.PUT_BRAND_SUCCESS,
});

export const getBrands = () => (dispatch) => {
  let url = "https://localhost:5001/admin/api/Brands?page=1";
  return fetch(url)
    .then((response) => response.json())
    .then((result) => dispatch(getBrandsSuccess(result)));
};

export const deleteBrands = (id) => (dispatch) => {
  brandsService.deleteBrand(id).then(() => {
    getBrands()(dispatch);
  });
};

export const postBrand = (brand) => (dispatch) => {
  let url = "https://localhost:5001/admin/api/Brands";
  var formData = new FormData();
  for (let property in brand) {
    if(property == "image") {
      formData.append("photo", brand[property])
      break;
    }
    formData.append(property, brand[property])
  }

  axios
      .post(`${url}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(postBrandSuccess);
        dispatch(getBrands);
      })
      .catch((error) => console.log(error));
};

export const editBrand = (id, brand) => (dispatch) => {

  const formData = new FormData();


  for (let property in brand) {
    if(property === "photo") {
      formData.append("photo", brand[property])
      break;
    }
    formData.append(property, brand[property])
  }

  // console.log(brand);

  brandsService.putBrand(formData, id).then(()=>{
    getBrands()(dispatch)
  })
}

export const putBrand = (brand) => (dispatch) => {
  let url = "https://localhost:5001/admin/api/Brands";
  var formData = new FormData();
  for (let property in brand) {
    if(property == "image") {
      formData.append("photo", brand[property])
      break;
    }
    formData.append(property, brand[property])
  }

  axios
      .put(`${url}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(putBrandSuccess);
        dispatch(getBrands);
      })
      .catch((error) => console.log(error));
};
