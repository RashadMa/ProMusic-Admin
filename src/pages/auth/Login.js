import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Col, Form, Input, Label, Row } from "reactstrap";
import { signIn } from "../../redux/actions/authActions";
import jwtDecode from "jwt-decode";

function Login() {
  // let [token] = React.useState(localStorage.getItem("token"));
  // if (token !== null) {
  //   token = jwtDecode(token);
  // }
  // let result;
  // let admin;
  // let isAdmin;
  // token && (result = Object.keys(token).map((key) => token[key]));
  // if (token !== null) {
  //   admin = result[0];
  // }
  // isAdmin = admin === "Admin";

  // console.log(admin);

  ////
  const auth = useSelector((state) => state);
  const dispatch = useDispatch();
  const { push } = useHistory();
  const [creds, setCreds] = useState({
    name: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(creds, push)(dispatch);
    setCreds({ name: "", password: "" });
  };

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setCreds({ ...creds, [name]: value });
  };

  if (auth._id) return <Redirect to="/dashboard" />;
  return (
    <div className="background-picture">
      <Row className="align-items-center justify-content-center">
        <Col lg="4">
          <h1>ProMusic Admin login</h1>
          <div className="login-section">
            <Form onSubmit={handleSubmit}>
              <Label />
              <Input
                className="email-input"
                type="email"
                name="name"
                id="email"
                placeholder="admin@admin.com"
                autoComplete="off"
                defaultValue={creds.email}
                onChange={handleChangeLogin}
              />
              <Label />
              <Input
                className="password-input mb-4"
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                placeholder="Passowrd"
                defaultValue={creds.password}
                onChange={handleChangeLogin}
              />
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
