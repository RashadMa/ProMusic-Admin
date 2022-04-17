import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editSubCategory,
  getCategories,
} from "../../redux/actions/categoryActions";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SubCategoryPut() {
  const { items: categories } = useSelector(
    (state) => state.categoryListReducer
  );
  const { state: subCategoryItem } = useLocation();
  const [state, setState] = useState({
    name: subCategoryItem.name,
    categoryId: subCategoryItem.categoryId,
    photo: subCategoryItem.image,
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
    editSubCategory(subCategoryItem.id, state)(dispatch);
    history.push("/subcategories");
    setError("");
  };

  React.useEffect(() => {
    getCategories()(dispatch);
  }, [dispatch]);

  return (
    <>
      <div>
        <h3 className="d-flex justify-content-center align-items-center mb-3">
          Edit
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
                defaultValue={subCategoryItem.name}
                type="text"
              />
            </Col>
            <Col lg="3">
              <Label for="categoryId">Categories</Label>
              <Input
                onChange={handleInputChange}
                id="categoryId"
                label="categoryId"
                name="categoryId"
                type="select"
                defaultValue={subCategoryItem.categoryId}
              >
                {categories?.map((item) => (
                  <option key={item.id} name={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Input>
            </Col>
            <Col lg="3">
              <Label for="image">Image</Label>
              <Input
                id="photo"
                label="Image"
                onChange={handleInputChange}
                defaultValue={subCategoryItem.photo}
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

export default SubCategoryPut;
