import React from "react";
import { NavLink } from "react-router-dom";
const Menu = () => (
  <nav className="header_nav">
    <ul className="header_nav_list">
      <li>
        <NavLink className="link" activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="link" activeClassName="active" to="/Standings">
          Standings
        </NavLink>
      </li>
      <li>
        <NavLink className="link" activeClassName="active" to="/Fixtures">
          Fixtures
        </NavLink>
      </li>
      <li>
        <NavLink className="link" activeClassName="active" to="/Scorers">
          Scorers
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Menu;
