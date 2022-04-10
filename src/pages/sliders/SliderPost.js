import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postSlider } from "../../redux/actions/sliderActions";
import { useHistory } from "react-router-dom";

function SliderPost() {
  const [state, setState] = useState({
    btnText: "",
    btnUrl: "",
    order: "",
    title: "",
    image: "",
  });
  const [error, setError] = useState("");
  const { btnText, btnUrl, order, title, image } = state;

  const handleInputChange = (e) => {
    let { id, value } = e.target;
    if (id === "image") {
      value = e.target.files[0];
    }
    setState({ ...state, [id]: value });
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !btnText || !btnUrl || !order || !image) {
      setError("Please input all input field");
    } else {
      postSlider(state)(dispatch);
      history.push("/sliders");
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
      <Button onClick={() => history.push("/sliders")} color="danger mb-4">
        Go back
      </Button>
      {error && <h3>{error}</h3>}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Row>
            <Col lg="6">
              <Label for="title">Title</Label>
              <Input
                onChange={handleInputChange}
                id="title"
                label="title"
                defaultValue={title}
                type="text"
              />
            </Col>
            <Col lg="6">
              <Label for="btnText">Button Text</Label>
              <Input
                onChange={handleInputChange}
                id="btnText"
                label="btnText"
                defaultValue={btnText}
                type="text"
              />
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Label for="btnUrl">Button Url</Label>
              <Input
                id="btnUrl"
                label="btnUrl"
                onChange={handleInputChange}
                defaultValue={btnUrl}
                type="text"
              />
            </Col>
            <Col lg="3">
              <Label for="order">Order</Label>
              <Input
                id="order"
                label="order"
                onChange={handleInputChange}
                defaultValue={image}
                type="number"
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
    </>
  );
}

export default SliderPost;
