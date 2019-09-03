import React from "react";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Image from "./Image";

const Dashboard = () => (
  <Row className="dashboard_box">
    <Col className="dashboard_image" lg="4">
      <Image />
    </Col>
    <Col className="dashboard_title">
      <h2>Welcome to English Football League!</h2>
    </Col>
    <Col className="dashboard_arrow">
      <i className="material-icons">keyboard_arrow_down</i>
    </Col>
    <Col className="dashboard_content">
      <span>
        You can check the tables, results, scorers and players. The content is
        updated regularly after each match.
      </span>
    </Col>
    <Col className="dashboard_arrow">
      <i className="material-icons">keyboard_arrow_down</i>
    </Col>
    <Col className="dashboard_register">
      <NavLink className="link" to="/signup">
        <span>
          Register and choose your favorite team, to discover more about your
          football team!
        </span>
      </NavLink>
    </Col>
  </Row>
);

export default Dashboard;
