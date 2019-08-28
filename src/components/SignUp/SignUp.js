import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

const SignUp = ({ auth, signUp, authError, authSuccess }) => {
  const [register, setRegister] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: ""
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
    <Form onSubmit={handleOnSubmit}>
      <h5>Sign Up</h5>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        SignUp
      </Button>
      <div className="login_error">
        {authError ? <p>{authError}</p> : <p>{authSuccess}</p>}
      </div>
    </Form>
  );
};

export default SignUp;
