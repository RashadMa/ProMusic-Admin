import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editSlider } from "../../redux/actions/sliderActions";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SliderPut() {
  const { state: sliderItem } = useLocation();
  const [state, setState] = useState({
    btnText: sliderItem.btnText,
    btnUrl: sliderItem.btnUrl,
    order: sliderItem.otder,
    title: sliderItem.title,
    photo: sliderItem.image,
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
    editSlider(sliderItem.id, state)(dispatch);
    history.push("/sliders");
    setError("");
  };
  return (
    <>
      <div>
        <h3 className="d-flex justify-content-center align-items-center mb-3">
          Edit
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
                defaultValue={sliderItem.title}
                type="text"
              />
            </Col>
            <Col lg="6">
              <Label for="btnText">Button Text</Label>
              <Input
                onChange={handleInputChange}
                id="btnText"
                label="btnText"
                defaultValue={sliderItem.btnText}
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
                defaultValue={sliderItem.btnUrl}
                type="text"
              />
            </Col>
            <Col lg="3">
              <Label for="order">Order</Label>
              <Input
                id="order"
                label="order"
                onChange={handleInputChange}
                defaultValue={sliderItem.order}
                type="number"
              />
            </Col>
            <Col lg="3">
              <Label for="photo">Image</Label>
              <Input
                id="photo"
                label="photo"
                onChange={handleInputChange}
                defaultValue={sliderItem.photo}
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

export default SliderPut;
