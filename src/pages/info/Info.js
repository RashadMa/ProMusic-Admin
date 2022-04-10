import { Stack, Pagination } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Table } from "reactstrap";
import { deleteInfo, getInformation } from "../../redux/actions/informationActions";
import "../hey.css";

function Info() {
  const { items } = useSelector((state) => state.informationListReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  React.useEffect(() => {
    getInformation()(dispatch);
  }, [dispatch]);
  return (
    <>
      <h2 className="page-header">Informations</h2>
      <Button
        onClick={() => history.push("/postinfo")}
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
            <th>Desc</th>
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
              <td className="desc">{item.desc}</td>
              <td className="image-cont">
                <img
                  className="imaqe"
                  src={
                    "https://localhost:5001/images/information/" + item.image
                  }
                  alt=""
                />
              </td>
              <td>
                <Button
                  onClick={() => history.push(`/putinfo/${item.id}`, item)}
                  color="warning"
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button onClick={() => deleteInfo(item.id)(dispatch)} color="danger">
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

export default Info;
