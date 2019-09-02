import React, { useState } from "react";
import SignInForm from "./SignInForm";
import { Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";

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
    <Container className="signin_container">
      <SignInForm
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
        error={authError}
        success={authSuccess}
      ></SignInForm>
    </Container>
  );
};

export default SignIn;
