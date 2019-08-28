import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

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
    <Form onSubmit={handleOnSubmit}>
      <h5>Sign In</h5>
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
      <Button variant="primary" type="submit">
        Login
      </Button>
      <div className="login_error">
        {authError ? <p>{authError}</p> : <p>{authSuccess}</p>}
      </div>
    </Form>
  );
};

export default SignIn;
