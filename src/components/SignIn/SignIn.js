import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SignIn = () => {
  const [signIn, setSignIn] = useState({
    email: "",
    password: ""
  });

  const handleOnChange = e => {
    setSignIn({
      ...signIn,
      [e.target.id]: e.target.value
    });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    console.log(signIn);
  };

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
    </Form>
  );
};

export default SignIn;
