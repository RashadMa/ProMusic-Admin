import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProduct, getProducts } from "../../redux/actions/productActions";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getBrands } from "../../redux/actions/brandActions";
import { getSubCategories } from "../../redux/actions/categoryActions";

function ProductPut() {
  const { items: brands } = useSelector((state) => state.brandListReducer);
  const { items: subCategories } = useSelector(
    (state) => state.subCategoryListReducer
  );
  const { state: productItem } = useLocation();
  const [state, setState] = useState({
    name: productItem.name,
    salePrice: productItem.salePrice,
    costPrice: productItem.costPrice,
    discountPercent: productItem.discountPercent,
    desc: productItem.desc,
    brandId: productItem.brandId,
    subCategoryId: productItem.subCategoryId,
    photo: productItem.photo,
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    let { id, value, files } = e.target;
    if (id === "photo") {
      value = files[0];
    }
    setState({ ...state, [id]: value });
    console.log(e.target.value);
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    editProduct(productItem.id, state)(dispatch);
    history.push("/products");
    setError("");
  };

  React.useEffect(() => {
    getProducts()(dispatch);
  }, [dispatch]);
  React.useEffect(() => {
    getBrands()(dispatch);
  }, [dispatch]);
  React.useEffect(() => {
    getSubCategories()(dispatch);
  }, [dispatch]);

  return (
    <>
      <div>
        <h3 className="d-flex justify-content-center align-items-center mb-3">
          Edit
        </h3>
      </div>
      <Button onClick={() => history.push("/products")} color="danger mb-4">
        Go back
      </Button>
      {error && <h3>{error}</h3>}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Row>
            <Col lg="4">
              <Label for="name">Name</Label>
              <Input
                onChange={handleInputChange}
                id="name"
                label="Name"
                defaultValue={productItem.name}
                type="text"
              />
            </Col>
            <Col lg="4">
              <Label for="salePrice">Sale price</Label>
              <Input
                onChange={handleInputChange}
                id="salePrice"
                label="salePrice"
                defaultValue={productItem.salePrice}
                type="number"
              />
            </Col>
            <Col lg="4">
              <Label for="costPrice">Cost price</Label>
              <Input
                onChange={handleInputChange}
                id="costPrice"
                label="costPrice"
                defaultValue={productItem.costPrice}
                type="number"
              />
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <Label for="discountPercent">Discount percent</Label>
              <Input
                onChange={handleInputChange}
                id="discountPercent"
                label="discountPercent"
                defaultValue={productItem.discountPercent}
                type="number"
              />
            </Col>
            <Col lg="4">
              <Label for="desc">Description</Label>
              <Input
                onChange={handleInputChange}
                id="desc"
                label="description"
                defaultValue={productItem.desc}
                type="textarea"
              />
            </Col>
            <Col lg="4">
              <Label for="brandId">Brand</Label>
              <Input
                onChange={handleInputChange}
                id="brandId"
                label="brandId"
                name="brandId"
                type="select"
                defaultValue={productItem.brandId}
              >
                {brands?.map((item) => (
                  <option key={item.id} name={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Input>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Label for="subCategoryId">Sub category</Label>
              <Input
                onChange={handleInputChange}
                id="subCategoryId"
                label="subCategoryId"
                name="subCategoryId"
                type="select"
                defaultValue={productItem.subCategoryId}
              >
                {subCategories?.map((item) => (
                  <option key={item.id} name={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Input>
            </Col>
            <Col lg="6">
              <Label for="photo">Image</Label>
              <Input
                id="photo"
                label="photo"
                onChange={handleInputChange}
                defaultValue={productItem.photo}
                type="file"
              />
            </Col>
          </Row>
        </FormGroup>
        <Button color="primary" type="submit">
          Smash
        </Button>
      </Form>
    </>
  );
}

export default ProductPut;
