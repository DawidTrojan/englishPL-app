import React from "react";
import { NavLink } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

const Dashboard = () => (
  <div className="dashboard_box">
    <div className="dashboard_title">
      <h2>Welcome to English Premier League!</h2>
    </div>
    <div className="dashboard_content">
      <span>
        You can check the standings, results, scorers and players. The content
        is updated regularly after each match.
      </span>
      <NavLink className="dashboard_link" to="/signup">
        Register and choose your favorite team!
      </NavLink>
    </div>
  </div>
);

export default Dashboard;
