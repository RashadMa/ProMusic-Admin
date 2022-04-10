import { Stack, Pagination } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Table } from "reactstrap";
import { getSubCategories } from "../../redux/actions/categoryActions";
import "../hey.css";

function SubCategories() {
  const { items } = useSelector((state) => state.subCategoryListReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  React.useEffect(() => {
    getSubCategories()(dispatch);
  }, [dispatch]);
  return (
    <>
      <h2 className="page-header">Sub Categories</h2>
      <Button
        onClick={() => history.push("/postsubcategory")}
        color="primary"
        className="mb-4"
      >
        Create
      </Button>
      <Table dark hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category to which it belongs</th>
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
              <td>{item.category.name}</td>
              <td className="image-cont">
                <img
                  className="imaqe"
                  src={
                    "https://localhost:5001/images/subcategories/" + item.image
                  }
                  alt=""
                />
              </td>
              <td>
                <Button
                  onClick={() =>
                    history.push(`/putsubcategory/${item.id}`, item)
                  }
                  color="warning"
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button onClick={() => item.id(dispatch)} color="danger">
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

export default SubCategories;
