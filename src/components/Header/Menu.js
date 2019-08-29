import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SignInLinks from "../../containers/SignedInLinks";
import SignOutLinks from "./SignedOutLinks";
import { ClickAwayListener } from "@material-ui/core";

const Menu = ({ auth, profile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const links = auth.uid ? (
    <SignInLinks profile={profile}></SignInLinks>
  ) : (
    <SignOutLinks></SignOutLinks>
  );

  return (
    <div className="nav_container">
      <nav className={isOpen ? "toggle_nav" : "header_nav"}>
        <ul className={isOpen ? "toggle_nav_list" : "header_nav_list"}>
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
      <i onClick={toggle} className="material-icons burger_menu">
        menu
      </i>
    </div>
  );
};

export default Menu;
