import { Stack } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Table, Button, Pagination } from "reactstrap";
import { getOrders } from "../../redux/actions/orderActions";

const Orders = () => {
  const { items: orders } = useSelector((state) => state.orderListReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    getOrders()(dispatch);
  }, [dispatch]);
  return (
    <>
      <h2 className="page-header">Orders</h2>
      <Table hover dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>User Id</th>
            <th>E-mail</th>
            <th>Address</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.status}</td>
              <td>{item.appUserId}</td>
              <td>{item.email}</td>
              <td>{item.adress}</td>
              <td>{item.phone}</td>
              <td>
                <Button
                  onClick={() => history.push(`/putorder/${item.id}`, item)}
                  color="warning"
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Orders;
