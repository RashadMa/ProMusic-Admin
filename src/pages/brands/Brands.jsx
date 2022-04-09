import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Table } from "reactstrap";
import { getBrands } from "../../redux/actions/brandActions";
import { deleteBrands } from "../../redux/actions/brandActions";
import "../hey.css";

function Brands() {
  const { items } = useSelector((state) => state.brandListReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  React.useEffect(() => {
    getBrands()(dispatch);
  }, [dispatch]);

  return (
    <>
      <Button
        onClick={() => history.push("/postbrand")}
        color="primary"
        className="mb-4"
      >
        Create
      </Button>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
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
              <td>{item.name}</td>
              <td className="desc">{item.desc}</td>
              <td className="image-cont">
                <img
                  className="imaqe"
                  src={"https://localhost:5001/images/brands/" + item.image}
                  alt=""
                />
              </td>
              <td>
                <Button
                  onClick={() => history.push(`/putbrand/${item.id}`, item)}
                  color="warning"
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => deleteBrands(item.id)(dispatch)}
                  color="danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Brands;
