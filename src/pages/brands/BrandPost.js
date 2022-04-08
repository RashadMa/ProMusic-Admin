import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postBrand } from "../../redux/actions/brandActions";
import { useHistory } from "react-router-dom";

function BrandPost() {
  const [state, setState] = useState({
    name: "",
    desc: "",
    image: "",
  });
  const [error, setError] = useState("");
  const { name, desc, image } = state;

  const handleInputChange = (e) => {
    let { id, value } = e.target;
    console.log(id);
    if (id == "image") {
      value = e.target.files[0];
    }
    setState({ ...state, [id]: value });
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !desc || !image) {
      setError("Please input all input field");
    } else {
      postBrand(state)(dispatch);
      history.push("/");
      setError("");
    }
  };
  return (
    (
      <div>
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
      </div>
    )
  );
}

export default BrandPost;
