import React from "react";
import { Form, Button } from "react-bootstrap";
import { Col } from "react-bootstrap";

const SignInForm = ({ onSubmit, onChange, error, success }) => (
  <Form onSubmit={onSubmit} className="signin_form">
    <div className="ball_icon__container">
      <i className="material-icons ball_icon">sports_soccer</i>
    </div>
    <h2>Sign In</h2>
    <Form.Group controlId="email" className="signin_group">
      <Col xl="10" lg="11" md="11" xs="12">
        <Form.Label className="signin_label">
          <span>Email</span>
        </Form.Label>
        <Form.Control
          className="form_control_signin"
          type="email"
          onChange={onChange}
        />
      </Col>
    </Form.Group>
    <Form.Group controlId="password" className="signin_group">
      <Col xl="10" lg="11" md="11" xs="12">
        <Form.Label className="signin_label">
          <span>Password</span>
        </Form.Label>
        <Form.Control
          className="form_control_signin"
          type="password"
          onChange={onChange}
        />
      </Col>
    </Form.Group>
    <div className="signin_button__container">
      <Button variant="primary" type="submit" className="signin_button">
        SIGN IN
      </Button>
    </div>
    <div className="signin_error">
      {error ? <p>{error}</p> : <p>{success}</p>}
    </div>
  </Form>
);

export default SignInForm;
