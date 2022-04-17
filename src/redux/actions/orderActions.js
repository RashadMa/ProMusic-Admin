import * as actionTypes from "./actionTypes";

function getOrdersSuccess(orders) {
  return { type: actionTypes.GET_ORDERS_SUCCESS, payload: orders };
}

export const getOrders = () => (dispatch) => {
  let url = "https://localhost:5001/member/api/Orders?page=1";
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => response.json())
    .then((result) => dispatch(getOrdersSuccess(result)));
};
