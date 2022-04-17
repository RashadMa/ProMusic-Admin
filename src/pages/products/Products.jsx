import { Stack } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Table, Button, Pagination } from "reactstrap";
import { getProducts, deleteProduct } from "../../redux/actions/productActions";

const Products = () => {
  const { items: products } = useSelector((state) => state.productListReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    getProducts()(dispatch);
  }, [dispatch]);
  return (
    <>
      <h2 className="page-header">Products</h2>
      <Button
        onClick={() => history.push("/postproduct")}
        color="primary"
        className="mb-4"
      >
        Create
      </Button>
      <Table hover dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Sale Price</th>
            <th>Cost Price</th>
            <th>Discount Percent</th>
            <th>Description</th>
            <th>Brand</th>
            <th>Sub Category</th>
            <th>Image</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.salePrice}</td>
              <td>{item.costPrice}</td>
              <td>{item.discountPercent}</td>
              <td className="desc">{item.desc}</td>
              <td>{item.brand.name}</td>
              <td>{item.subCategory.name}</td>
              <td className="image-cont">
                <img
                  className="imaqe"
                  src={"https://localhost:5001/images/products/" + item.image}
                  alt=""
                />
              </td>
              <td>
                <Button
                  onClick={() => history.push(`/putproduct/${item.id}`, item)}
                  color="warning"
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => deleteProduct(item.id)(dispatch)}
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
};

export default Products;
