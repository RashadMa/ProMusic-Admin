import axios from "axios";
import { infoService } from "../../api/services/infoService";
import * as actionTypes from "./actionTypes";

export function getInformationSuccess(information) {
  return { type: actionTypes.GET_INFORMATION_SUCCESS, payload: information };
}

export const getInformation = () => (dispatch) => {
  let url = "https://localhost:5001/member/api/Informations?page=1";
  return fetch(url)
    .then((response) => response.json())
    .then((result) => dispatch(getInformationSuccess(result)));
};

export const deleteInfo = (id) => (dispatch) => {
  infoService.deleteInfo(id).then(() => {
    getInformation()(dispatch);
  });
};

const postInfoSuccess = () => ({
  type: actionTypes.POST_INFO_SUCCESS,
});

export const postInfo = (info) => (dispatch) => {
  let url = "https://localhost:5001/admin/api/informations";
  var formData = new FormData();
  for (let property in info) {
    if (property === "image") {
      formData.append("photo", info[property]);
      break;
    }
    formData.append(property, info[property]);
  }

  axios
    .post(`${url}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log(response);
      dispatch(postInfoSuccess);
      dispatch(getInformation);
    })
    .catch((error) => console.log(error));
};

export const editInfo = (id, info) => (dispatch) => {
  const formData = new FormData();

  for (let property in info) {
    if (property === "photo") {
      formData.append("photo", info[property]);
      break;
    }
    formData.append(property, info[property]);
  }

  infoService.putInfo(formData, id).then(() => {
    getInformation()(dispatch);
  });
};
