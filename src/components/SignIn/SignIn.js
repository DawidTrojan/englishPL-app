import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { Container, Col } from "react-bootstrap";

const SignIn = ({ signIn, authError, authSuccess, auth }) => {
  const [sign, setSignIn] = useState({
    email: "",
    password: ""
  });

  const handleOnChange = e => {
    setSignIn({
      ...sign,
      [e.target.id]: e.target.value
    });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    signIn(sign.email, sign.password);
  };

  if (auth.uid) return <Redirect to="/" />;

  return (
    <Container className="signin_form_container">
      <Form onSubmit={handleOnSubmit} className="signin_form">
        <h2>Sign In</h2>
        <Form.Group controlId="email" className="signin_group">
          <Col xl="5" lg="6" md="9">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="form_control_signin"
              type="email"
              placeholder="Enter email"
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
        <Form.Group controlId="password" className="signin_group">
          <Col xl="5" lg="6" md="9">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="form_control_signin"
              type="password"
              placeholder="Password"
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
        <div className="signin_button_container">
          <Button variant="primary" type="submit" className="signin_button">
            Login
          </Button>
        </div>
        <div className="login_error">
          {authError ? <p>{authError}</p> : <p>{authSuccess}</p>}
        </div>
      </Form>
    </Container>
  );
};

export default SignIn;
