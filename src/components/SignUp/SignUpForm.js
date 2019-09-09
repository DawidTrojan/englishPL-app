import React from "react";
import Options from "./Options";
import { Form, Button, Col } from "react-bootstrap";

const SignUpForm = ({ onSubmit, onChange, error, success }) => (
  <Form onSubmit={onSubmit} className="signup_form">
    <div className="ball_icon__container">
      <i className="material-icons ball_icon">sports_soccer</i>
    </div>
    <h3>SIGN UP</h3>
    <Form.Group controlId="email" className="signup_group">
      <Col xl="10" lg="11" md="11" xs="12">
        <Form.Label className="signup_label">
          <span>Email</span>
        </Form.Label>
        <Form.Control
          className="form_control_signup"
          type="email"
          onChange={onChange}
        />
      </Col>
    </Form.Group>
    <Form.Group controlId="password" className="signup_group">
      <Col xl="10" lg="11" md="11" xs="12">
        <Form.Label className="signup_label">
          <span>Password</span>
        </Form.Label>
        <Form.Control
          className="form_control_signup"
          type="password"
          onChange={onChange}
        />
      </Col>
    </Form.Group>
    <Form.Group controlId="firstName" className="signup_group">
      <Col xl="10" lg="11" md="11" xs="12">
        <Form.Label className="signup_label">
          <span>First Name</span>
        </Form.Label>
        <Form.Control
          className="form_control_signup"
          type="text"
          onChange={onChange}
        />
      </Col>
    </Form.Group>
    <Form.Group controlId="lastName" className="signup_group">
      <Col xl="10" lg="11" md="11" xs="12">
        <Form.Label>
          <span>Last Name</span>
        </Form.Label>
        <Form.Control
          className="form_control_signup"
          type="text"
          onChange={onChange}
        />
      </Col>
    </Form.Group>
    <Form.Group controlId="myTeam" className="signup_group">
      <Col xl="10" lg="11" md="11" xs="12">
        <Form.Label className="signup_label">
          <span>My Team</span>
        </Form.Label>
        <Form.Control
          as="select"
          defaultValue="-1"
          className="form-control dropdown_option signup_select"
          onChange={onChange}
        >
          <Options />
        </Form.Control>
      </Col>
    </Form.Group>
    <div className="signup_button_container">
      <Button variant="primary" type="submit" className="signup_button">
        <span>SIGN UP</span>
      </Button>
    </div>
    <div className="signup_error">
      {error ? <span>{error}</span> : <span>{success}</span>}
    </div>
  </Form>
);

export default SignUpForm;
