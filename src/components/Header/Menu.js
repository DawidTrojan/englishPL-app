import React from "react";
import { NavLink } from "react-router-dom";
import SignInLinks from "../../containers/SignedInLinks";
import SignOutLinks from "./SignedOutLinks";

const Menu = ({ auth, profile }) => {
  const links = auth.uid ? (
    <SignInLinks profile={profile}></SignInLinks>
  ) : (
    <SignOutLinks></SignOutLinks>
  );

  return (
    <nav className="header_nav">
      <ul className="header_nav_list">
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
        <li>
          <NavLink className="link" activeClassName="active" to="/players">
            Players
          </NavLink>
        </li>
        {auth.isLoaded && links}
      </ul>
    </nav>
  );
};

export default Menu;
