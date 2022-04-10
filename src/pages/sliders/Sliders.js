import { Stack, Pagination } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Table } from "reactstrap";
import { deleteSlider, getSliders } from "../../redux/actions/sliderActions";
import "../hey.css";

function Sliders() {
  const { items } = useSelector((state) => state.sliderListReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  React.useEffect(() => {
    getSliders()(dispatch);
  }, [dispatch]);
  return (
    <>
      <h2 className="page-header">Sliders</h2>
      <Button
        onClick={() => history.push("/postslider")}
        color="primary"
        className="mb-4"
      >
        Create
      </Button>
      <Table hover dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Button Text</th>
            <th>Button Url</th>
            <th>Order</th>
            <th>Image</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.title}</td>
              <td>{item.btnText}</td>
              <td>{item.btnUrl}</td>
              <td>{item.order}</td>
              <td className="image-cont">
                <img
                  className="imaqe"
                  src={"https://localhost:5001/images/slider/" + item.image}
                  alt=""
                />
              </td>
              <td>
                <Button
                  onClick={() => history.push(`/putslider/${item.id}`, item)}
                  color="warning"
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => deleteSlider(item.id)(dispatch)}
                  color="danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Stack spacing={2}>
        <Pagination count={10} shape="rounded" />
      </Stack>
    </>
  );
}

export default Sliders;
