import axios from "axios";
import Swal from "sweetalert2";
import { infoService } from "../../api/services/infoService";
import * as actionTypes from "./actionTypes";

export function getInformationSuccess(information) {
  return { type: actionTypes.GET_INFORMATION_SUCCESS, payload: information };
}

export const getInformation = () => (dispatch) => {
  let url = "https://localhost:5001/admin/api/Informations?page=1";
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => response.json())
    .then((result) => dispatch(getInformationSuccess(result)));
};

export const deleteInfo = (id) => (dispatch) => {
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
      infoService.deleteInfo(id).then(() => {
        getInformation()(dispatch);
      });
    }
  });
};

const postInfoSuccess = () => ({
  type: actionTypes.POST_INFO_SUCCESS,
});

export const postInfo = (info) => (dispatch) => {
  let url = "https://localhost:5001/admin/api/informations";
  var formData = new FormData();
  for (let property in info) {
    formData.append(property, info[property]);
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
        type: actionTypes.POST_INFO_SUCCESS,
        payload: data,
      });
      getInformation()(dispatch);
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
