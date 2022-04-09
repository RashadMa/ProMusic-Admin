import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Table } from "reactstrap";
import {
  deleteCategory,
  getCategories,
} from "../../redux/actions/categoryActions";
import "../hey.css";

function Categories() {
  const { items } = useSelector((state) => state.categoryListReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  React.useEffect(() => {
    getCategories()(dispatch);
  }, [dispatch]);

  return (
    <>
      <h2 className="page-header">Categories</h2>

      <Button
        onClick={() => history.push("/postcategory")}
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
              <td className="image-cont">
                <img
                  className="imaqe"
                  src={"https://localhost:5001/images/categories/" + item.image}
                  alt=""
                />
              </td>
              <td>
                <Button
                  onClick={() => history.push(`/putcategory/${item.id}`, item)}
                  color="warning"
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => deleteCategory(item.id)(dispatch)}
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

export default Categories;
