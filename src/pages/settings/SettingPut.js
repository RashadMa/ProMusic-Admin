import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editSetting } from "../../redux/actions/settingActions";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SettingPut() {
  const { state: settingItem } = useLocation();
  const [state, setState] = useState({
    key: settingItem.key,
    value: settingItem.value,
    // value: settingItem.image,
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
    editSetting(settingItem.id, state)(dispatch);
    history.push("/settings");
    setError("");
  };
  return (
    <>
      <div>
        <h3 className="d-flex justify-content-center align-items-center mb-3">
          Edit
        </h3>
      </div>
      <Button onClick={() => history.push("/settings")} color="danger mb-4">
        Go back
      </Button>
      {error && <h3>{error}</h3>}
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Row>
            <Col lg="3">
              <Label for="key">Key</Label>
              <Input
                onChange={handleInputChange}
                id="key"
                label="Key"
                defaultValue={settingItem.key}
                type="text"
              />
            </Col>
            <Col lg="6">
              <Label for="value">Value</Label>
              <Input
                id="value"
                label="Value"
                onChange={handleInputChange}
                defaultValue={settingItem.value}
                type="text"
              />
            </Col>
            <Col lg="3">
              <Label for="photo">Image</Label>
              <Input
                id="photo"
                label="photo"
                onChange={handleInputChange}
                defaultValue={settingItem.photo}
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

export default SettingPut;
