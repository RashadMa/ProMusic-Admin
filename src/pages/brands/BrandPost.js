import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postBrand } from "../../redux/actions/brandActions";
import { useHistory } from "react-router-dom";

function BrandPost() {
  const [state, setState] = useState({
    name: "",
    desc: "",
    photo: "",
  });
  const [error, setError] = useState("");
  const { name, desc, photo } = state;

  const handleInputChange = (e) => {
    let { id, value } = e.target;
    if (id === "photo") {
      value = e.target.files[0];
    }
    setState({ ...state, [id]: value });
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !desc || !photo) {
      setError("Please input all input field");
    } else {
      postBrand(state)(dispatch);
      history.push("/brands");
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
      <Button onClick={() => history.push("/brands")} color="danger mb-4">
        Go back
      </Button>
      {error && <h3>{error}</h3>}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Row>
            <Col lg="3">
              <Label for="name">Name</Label>
              <Input
                onChange={handleInputChange}
                id="name"
                label="Name"
                defaultValue={name}
                type="text"
              />
            </Col>
            <Col lg="6">
              <Label for="desc">Description</Label>
              <Input
                onChange={handleInputChange}
                id="desc"
                label="Desc"
                defaultValue={desc}
                type="textarea"
              />
            </Col>
            <Col lg="3">
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

export default BrandPost;
