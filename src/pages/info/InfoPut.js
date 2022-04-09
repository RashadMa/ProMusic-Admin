import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editInfo } from "../../redux/actions/informationActions";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

function InfoPut() {
  const { state: infoItem } = useLocation();
  const [state, setState] = useState({
    title: infoItem.title,
    desc: infoItem.desc,
    photo: infoItem.image,
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
    editInfo(infoItem.id, state)(dispatch);
    history.push("/info");
    setError("");
  };
  return (
    <>
      <div>
        <h3 className="d-flex justify-content-center align-items-center mb-3">
          Create
        </h3>
      </div>
      <Button onClick={() => history.push("/info")} color="danger mb-4">
        Go back
      </Button>
      {error && <h3>{error}</h3>}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Row>
            <Col lg="3">
              <Label for="title">Title</Label>
              <Input
                onChange={handleInputChange}
                id="title"
                label="title"
                defaultValue={infoItem.title}
                type="text"
              />
            </Col>
            <Col lg="6">
              <Label for="desc">Desc</Label>
              <Input
                id="desc"
                label="Desc"
                onChange={handleInputChange}
                defaultValue={infoItem.desc}
                type="textarea"
              />
            </Col>
            <Col lg="3">
              <Label for="photo">Image</Label>
              <Input
                id="photo"
                label="photo"
                onChange={handleInputChange}
                defaultValue={infoItem.photo}
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

export default InfoPut;
