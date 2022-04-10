import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getCategories,
  postSubCategory,
} from "../../redux/actions/categoryActions";

function SubCategoryPost() {
  const { items } = useSelector((state) => state.categoryListReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    getCategories()(dispatch);
  }, [dispatch]);
  const [state, setState] = useState({
    name: "",
    image: "",
    categoryId: "",
  });
  const [error, setError] = useState("");
  const { name, image, categoryId } = state;

  const handleInputChange = (e) => {
    let { id, value } = e.target;
    if (id === "image") {
      value = e.target.files[0];
    }
    setState({ ...state, [id]: value });
    console.log(value);
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !image || !categoryId) {
      setError("Please input all input field");
    } else {
      postSubCategory(state)(dispatch);
      history.push("/subcategories");
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
      <Button
        onClick={() => history.push("/subcategories")}
        color="danger mb-4"
      >
        Go back
      </Button>
      {error && <h3>{error}</h3>}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Row>
            <Col lg="6">
              <Label for="name">Name</Label>
              <Input
                onChange={handleInputChange}
                id="name"
                label="Name"
                defaultValue={name}
                type="text"
              />
            </Col>
            <Col lg="3">
              <Label for="categoryId">Categories</Label>
              <Input
                onChange={(e) => console.log(e.target.value)}
                id="categoryId"
                label="categoryId"
                name="categoryId"
                type="select"
                defaultValue={categoryId}
              >
                <option disabled selected={true}>
                  Select category
                </option>
                {items?.map((item) => (
                  <option key={item.id} name={item.id} value={item.id}>
                    {item.id}
                  </option>
                ))}
              </Input>
            </Col>
            <Col lg="3">
              <Label for="image">Image</Label>
              <Input
                id="image"
                label="Image"
                onChange={handleInputChange}
                defaultValue={image}
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

export default SubCategoryPost;
