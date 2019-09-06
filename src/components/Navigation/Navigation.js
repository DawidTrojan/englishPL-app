import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SignInLinks from "../../containers/SignedInLinks";
import SignOutLinks from "./SignedOutLinks";

const Navigation = ({ auth, profile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const hideMenu = e => {
    if (e && e.relatedTarget) {
      e.relatedTarget.click();
    }
    setIsOpen(false);
  };

  const links = auth.uid ? (
    <SignInLinks profile={profile} closeAfterClick={hideMenu}></SignInLinks>
  ) : (
    <SignOutLinks closeMenu={hideMenu}></SignOutLinks>
  );

  return (
    <>
      <nav className={isOpen ? "toggle_nav" : "navigation"}>
        <ul className={isOpen ? "toggle_nav_list" : "navigation_list"}>
          <li onClick={hideMenu}>
            <NavLink className="link" activeClassName="active" to="/standings">
              <span>Standings</span>
            </NavLink>
          </li>
          <li onClick={hideMenu}>
            <NavLink className="link" activeClassName="active" to="/fixtures">
              <span>Fixtures</span>
            </NavLink>
          </li>
          <li onClick={hideMenu}>
            <NavLink className="link" activeClassName="active" to="/scorers">
              <span>Scorers</span>
            </NavLink>
          </li>
          <li onClick={hideMenu}>
            <NavLink className="link" activeClassName="active" to="/players">
              <span>Players</span>
            </NavLink>
          </li>
          {auth.isLoaded && links}
        </ul>
      </nav>
      <i onClick={toggle} className="material-icons burger_menu">
        menu
      </i>
    </>
  );
};

export default Navigation;
