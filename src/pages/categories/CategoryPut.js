import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editCategory } from "../../redux/actions/categoryActions";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

function CategoryPut() {
  const { state: categoryItem } = useLocation();
  const [state, setState] = useState({
    name: categoryItem.name,
    photo: categoryItem.image,
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    let { id, value, files } = e.target;
    if (id === "photo") {
      value = files[0];
    }
    setState({ ...state, [id]: value });
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    editCategory(categoryItem.id, state)(dispatch);
    history.push("/categories");
    setError("");
  };
  return (
    <>
      <div>
        <h3 className="d-flex justify-content-center align-items-center mb-3">
          Create
        </h3>
      </div>
      <Button onClick={() => history.push("/categories")} color="danger mb-4">
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
                defaultValue={categoryItem.name}
                type="text"
              />
            </Col>
            <Col lg="6">
              <Label for="photo">Image</Label>
              <Input
                id="photo"
                label="Image"
                onChange={handleInputChange}
                defaultValue={categoryItem.photo}
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

export default CategoryPut;
