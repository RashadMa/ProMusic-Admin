import axios from "axios";
import { sliderService } from "../../api/services/sliderService";
import * as actionTypes from "./actionTypes";

export function getSlidersSuccess(slider) {
  return { type: actionTypes.GET_SLIDER_SUCCESS, payload: slider };
}

export const getSliders = () => (dispatch) => {
  let url = "https://localhost:5001/member/api/Sliders?page=1";
  return fetch(url)
    .then((response) => response.json())
    .then((result) => dispatch(getSlidersSuccess(result)));
};

const postSliderSuccess = () => ({
  type: actionTypes.POST_SLIDER_SUCCESS,
});

export const postSlider = (slider) => (dispatch) => {
  let url = "https://localhost:5001/admin/api/sliders";
  var formData = new FormData();
  for (let property in slider) {
    if (property === "image") {
      formData.append("photo", slider[property]);
      break;
    }
    formData.append(property, slider[property]);
  }

  axios
    .post(`${url}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log(response);
      dispatch(postSliderSuccess);
      dispatch(getSliders);
    })
    .catch((error) => console.log(error));
};

export const editSlider = (id, slider) => (dispatch) => {
  const formData = new FormData();

  for (let property in slider) {
    if (property === "photo") {
      formData.append("photo", slider[property]);
      break;
    }
    formData.append(property, slider[property]);
  }

  sliderService.putSlider(formData, id).then(() => {
    getSliders()(dispatch);
  });
};

export const deleteSlider = (id) => (dispatch) => {
  sliderService.deleteSlider(id).then(() => {
    getSliders()(dispatch);
  });
};
