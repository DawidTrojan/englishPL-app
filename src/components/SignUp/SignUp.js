import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import Loading from "../Loading";
import { Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";

const SignUp = ({ auth, signUp, authError, authSuccess }) => {
  const [register, setRegister] = useState({
    email: "",
    password: "",
    firstName: "",
    myTeam: ""
  });

  const [loading, setLoading] = useState(false);

  const handleOnChange = e => {
    setRegister({
      ...register,
      [e.target.id]: e.target.value
    });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    signUp(register);
    setLoading(true);
  };

  if (auth.uid) return <Redirect to="/" />;
  if (authError)
    return (
      <Container className="signup_container">
        <SignUpForm
          onSubmit={handleOnSubmit}
          onChange={handleOnChange}
          error={authError}
          success={authSuccess}
        />
      </Container>
    );

  return (
    <Container className="signup_container">
      {loading ? (
        <Loading></Loading>
      ) : (
        <SignUpForm
          onSubmit={handleOnSubmit}
          onChange={handleOnChange}
          error={authError}
          success={authSuccess}
        />
      )}
    </Container>
  );
};

export default SignUp;
