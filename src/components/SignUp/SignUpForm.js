import React from "react";
import Options from "./Options";
import { Form, Button, Col } from "react-bootstrap";

const SignUpForm = ({ onSubmit, onChange, error, success }) => (
  <Form onSubmit={onSubmit} className="signup_form">
    <h2>Sign Up</h2>
    <Form.Group controlId="email" className="signup_group">
      <Col xl="5" lg="6" md="9">
        <Form.Label>Email</Form.Label>
        <Form.Control
          className="form_control_signup"
          type="email"
          placeholder="Enter email"
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
        />
      </Col>
    </Form.Group>
    <Form.Group controlId="myTeam" className="signup_group">
      <Col xl="5" lg="6" md="9">
        <Form.Control
          as="select"
          defaultValue="-1"
          className="form-control dropdown_option"
          onChange={onChange}
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
    <div className="signup_error">
      {error ? <p>{error}</p> : <p>{success}</p>}
    </div>
  </Form>
);

export default SignUpForm;
