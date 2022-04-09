import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editBrand } from "../../redux/actions/brandActions";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function BrandPut() {
  const { state: brandItem } = useLocation();
  const [state, setState] = useState({
    name: brandItem.name,
    desc: brandItem.desc,
    photo: brandItem.image,
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
    editBrand(brandItem.id, state)(dispatch);
    history.push("/brands");
    setError("");
  };
  return (
    <>
      <div>
        <h3 className="d-flex justify-content-center align-items-center mb-3">
          Edit
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
                defaultValue={brandItem.name}
                type="text"
              />
            </Col>
            <Col lg="6">
              <Label for="desc">Description</Label>
              <Input
                onChange={handleInputChange}
                id="desc"
                label="Desc"
                defaultValue={brandItem.desc}
                type="textarea"
              />
            </Col>
            <Col lg="3">
              <Label for="photo">Image</Label>
              <Input
                id="photo"
                label="Image"
                onChange={handleInputChange}
                defaultValue={brandItem.photo}
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

export default BrandPut;
