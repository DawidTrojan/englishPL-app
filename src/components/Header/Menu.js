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
        <NavLink className="link" activeClassName="active" to="/standings">
          Standings
        </NavLink>
      </li>
      <li>
        <NavLink className="link" activeClassName="active" to="/fixtures">
          Fixtures
        </NavLink>
      </li>
      <li>
        <NavLink className="link" activeClassName="active" to="/scorers">
          Scorers
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Menu;
