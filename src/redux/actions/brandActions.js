import * as actionTypes from "./actionTypes";
import { brandsService } from "../../api/services/brandsService";

export function getBrandsSuccess(brand) {
  return { type: actionTypes.GET_BRAND_SUCCESS, payload: brand };
}

export function deleteBrandSuccess(id) {
  return { type: actionTypes.DELETE_BRAND_SUCCESS, payload: id };
}

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
