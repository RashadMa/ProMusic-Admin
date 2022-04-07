import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { getBrands } from "../../redux/actions/brandActions";
import { deleteBrands } from "../../redux/actions/brandActions";
import "../hey.css";

function Brands() {
  const { items } = useSelector((state) => state.brandListReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    getBrands()(dispatch);
  }, [dispatch]);

  return (
    <>
      <a class="btn btn-primary mb-4" href="/">
        Create
      </a>
      <Table hover dark>
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
              <td>{item.image}</td>
              <td>
                <a class="btn btn-warning" href="/">
                  Edit
                </a>
              </td>
              <td>
                <Button onClick={()=> deleteBrands(item.id)(dispatch)} color="danger">
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
