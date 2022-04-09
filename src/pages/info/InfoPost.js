import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postInfo } from "../../redux/actions/informationActions";
import { useHistory } from "react-router-dom";

function InfoPost() {
  const [state, setState] = useState({
    title: "",
    desc: "",
    image: "",
  });
  const [error, setError] = useState("");
  const { title, desc, image } = state;

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
    if (!title || !desc || !image) {
      setError("Please input all input field");
    } else {
      postInfo(state)(dispatch);
      history.push("/info");
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
                defaultValue={title}
                type="text"
              />
            </Col>
            <Col lg="6">
              <Label for="desc">Desc</Label>
              <Input
                id="desc"
                label="Desc"
                onChange={handleInputChange}
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
    </>
  );
}

export default InfoPost;
