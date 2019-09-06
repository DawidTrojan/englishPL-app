import React, { useState } from "react";
import SignInForm from "./SignInForm";
import Loading from "../Loading";
import { Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";

const SignIn = ({ signIn, authError, authSuccess, auth }) => {
  const [sign, setSignIn] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleOnChange = e => {
    setSignIn({
      ...sign,
      [e.target.id]: e.target.value
    });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    signIn(sign.email, sign.password);
    setLoading(true);
  };

  if (auth.uid) return <Redirect to="/" />;
  if (authError)
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

  return (
    <Container className="signin_container">
      {loading ? (
        <Loading></Loading>
      ) : (
        <SignInForm
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
          error={authError}
          success={authSuccess}
        ></SignInForm>
      )}
    </Container>
  );
};

export default SignIn;
