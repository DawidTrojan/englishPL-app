import React from "react";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Dashboard = () => (
  <Row className="dashboard_box">
    <Col className="dashboard_content">
      <h2>Welcome to English Premier League!</h2>
      <h4>
        You can check the standings, results, scorers and players. The content
        is updated regularly after each match.
      </h4>
      <NavLink className="dashboard_link" to="/signup">
        Register and choose your favorite team!
      </NavLink>
    </Col>
  </Row>
);

export default Dashboard;
