import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { Container, Col } from "react-bootstrap";
import Options from "./Options";

const SignUp = ({ auth, signUp, authError, authSuccess }) => {
  const [register, setRegister] = useState({
    email: "",
    password: "",
    firstName: "",
    myTeam: ""
  });

  const handleOnChange = e => {
    setRegister({
      ...register,
      [e.target.id]: e.target.value
    });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    signUp(register);
  };

  if (auth.uid) return <Redirect to="/" />;

  return (
    <Container>
      <Form onSubmit={handleOnSubmit} className="signup_form">
        <h2>Sign Up</h2>
        <Form.Group controlId="email" className="signup_group">
          <Col xl="5" lg="6" md="9">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="form_control_signup"
              type="email"
              placeholder="Enter email"
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
        <Form.Group controlId="password" className="signup_group">
          <Col xl="5" lg="6" md="9">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="form_control_signup"
              type="password"
              placeholder="Password"
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
        <Form.Group controlId="firstName" className="signup_group">
          <Col xl="5" lg="6" md="9">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              className="form_control_signup"
              type="text"
              placeholder="First Name"
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
        <Form.Group controlId="lastName" className="signup_group">
          <Col xl="5" lg="6" md="9">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              className="form_control_signup"
              type="text"
              placeholder="Last Name"
              onChange={handleOnChange}
            />
          </Col>
        </Form.Group>
        <Form.Group controlId="myTeam" className="signup_group">
          <Col xl="5" lg="6" md="9">
            <Form.Label>My team</Form.Label>
            <Form.Control
              as="select"
              className="form-control players_form"
              onChange={handleOnChange}
            >
              <Options />
            </Form.Control>
          </Col>
        </Form.Group>
        <div className="signup_button_container">
          <Button variant="primary" type="submit" className="signup_button">
            SignUp
          </Button>
        </div>
        <div className="login_error">
          {authError ? <p>{authError}</p> : <p>{authSuccess}</p>}
        </div>
      </Form>
    </Container>
  );
};

export default SignUp;
