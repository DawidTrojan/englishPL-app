import React from "react";
import { NavLink } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

const Dashboard = () => (
  <div className="dashboard_box">
    <div className="dashboard_title">
      <h1>Welcome to English Premier League!</h1>
    </div>
    <div className="dashboard_content">
      <p>
        You can check the standings, results, scorers and players. The content
        is updated regularly after each match.
      </p>
      <i className="fa fa-chevron-down"></i>
      <NavLink className="dashboard_link" to="/signup">
        <span>Register and choose your favorite team!</span>
      </NavLink>
    </div>
  </div>
);

export default Dashboard;
