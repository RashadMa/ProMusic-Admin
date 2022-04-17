import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Col, Form, FormGroup, Input, Label, Row, Button } from "reactstrap";
import { getSubCategories } from "../../redux/actions/categoryActions";
import { postProduct } from "../../redux/actions/productActions";
import { getBrands } from "../../redux/actions/brandActions";

function ProductPost() {
  const { items: brands } = useSelector((state) => state.brandListReducer);
  const dispatch = useDispatch();
  const { items: subCategories } = useSelector(
    (state) => state.subCategoryListReducer
  );
  React.useEffect(() => {
    getSubCategories()(dispatch);
  }, [dispatch]);
  React.useEffect(() => {
    getBrands()(dispatch);
  }, [dispatch]);
  const [state, setState] = React.useState({
    name: "",
    salePrice: "",
    costPrice: "",
    discountPercent: "",
    desc: "",
    brandId: "",
    subCategoryId: "",
    photo: "",
  });
  const [error, setError] = React.useState("");
  const {
    name,
    salePrice,
    costPrice,
    discountPercent,
    desc,
    brandId,
    subCategoryId,
    photo,
  } = state;
  const history = useHistory();

  const handleInputChange = (e) => {
    let { id, value } = e.target;
    if (id === "photo") {
      value = e.target.files[0];
    }
    setState({ ...state, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name ||
      !salePrice ||
      !costPrice ||
      !discountPercent ||
      !desc ||
      !brandId ||
      !subCategoryId ||
      !photo
    ) {
      setError("Please input all input field");
    } else {
      postProduct(state)(dispatch);
      history.push("/products");
      setError("");
    }
  };

  return (
    <>
      <div>
        <h3 className="d-flex justify-content-center align-items-center mb-3">
          Create
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
                defaultValue={name}
                type="text"
              />
            </Col>
            <Col lg="4">
              <Label for="salePrice">Sale price</Label>
              <Input
                onChange={handleInputChange}
                id="salePrice"
                label="salePrice"
                defaultValue={salePrice}
                type="number"
              />
            </Col>
            <Col lg="4">
              <Label for="costPrice">Cost price</Label>
              <Input
                onChange={handleInputChange}
                id="costPrice"
                label="costPrice"
                defaultValue={costPrice}
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
                defaultValue={discountPercent}
                type="number"
              />
            </Col>
            <Col lg="4">
              <Label for="desc">Description</Label>
              <Input
                onChange={handleInputChange}
                id="desc"
                label="description"
                defaultValue={desc}
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
                defaultValue={brandId}
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
                defaultValue={subCategoryId}
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
                defaultValue={photo}
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

export default ProductPost;
