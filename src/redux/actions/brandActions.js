import * as actionTypes from "./actionTypes";
import { brandsService } from "../../api/services/brandsService";
import axios from "axios";
import Swal from "sweetalert2";

export function getBrandsSuccess(brand) {
  return { type: actionTypes.GET_BRAND_SUCCESS, payload: brand };
}

export function deleteBrandSuccess(id) {
  return { type: actionTypes.DELETE_BRAND_SUCCESS, payload: id };
}

const postBrandSuccess = () => ({
  type: actionTypes.POST_BRAND_SUCCESS,
});

export const getBrands = () => (dispatch) => {
  let url = "https://localhost:5001/admin/api/Brands?page=1";
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("result", result);
      dispatch(getBrandsSuccess(result));
    });
  // axios.get(url, {
  //   "Authorization": `Bearer ${localStorage.getItem("token")}`
  // }).then(({data})=>{
  //   console.log("worked");
  //   dispatch(getBrandsSuccess(data))
  // })
};

export const deleteBrands = (id) => (dispatch) => {
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
      brandsService.deleteBrand(id).then(() => {
        getBrands()(dispatch);
      });
    }
  });
};

export const postBrand = (brand) => (dispatch) => {
  let url = "https://localhost:5001/admin/api/Brands";
  var formData = new FormData();
  for (let property in brand) {
    formData.append(property, brand[property]);
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
        type: actionTypes.POST_BRAND_SUCCESS,
        payload: data,
      });
      getBrands()(dispatch);
    })
    .catch((error) => console.log(error));
};

export const editBrand = (id, brand) => (dispatch) => {
  const formData = new FormData();

  for (let property in brand) {
    if (property === "photo") {
      formData.append("photo", brand[property]);
      break;
    }
    formData.append(property, brand[property]);
  }

  brandsService.putBrand(formData, id).then(() => {
    getBrands()(dispatch);
  });
};
