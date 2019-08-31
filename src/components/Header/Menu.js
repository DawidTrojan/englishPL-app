import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SignInLinks from "../../containers/SignedInLinks";
import SignOutLinks from "./SignedOutLinks";

const Menu = ({ auth, profile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const hide = e => {
    if (e && e.relatedTarget) {
      e.relatedTarget.click();
    }
    setIsOpen(false);
  };

  const links = auth.uid ? (
    <SignInLinks profile={profile} closeMenu={hide}></SignInLinks>
  ) : (
    <SignOutLinks closeMenu={hide}></SignOutLinks>
  );

  return (
    <>
      <nav className={isOpen ? "toggle_nav" : "header_nav"}>
        <ul className={isOpen ? "toggle_nav_list" : "header_nav_list"}>
          <li onClick={hide}>
            <NavLink className="link" activeClassName="active" to="/standings">
              Standings
            </NavLink>
          </li>
          <li onClick={hide}>
            <NavLink className="link" activeClassName="active" to="/fixtures">
              Fixtures
            </NavLink>
          </li>
          <li onClick={hide}>
            <NavLink className="link" activeClassName="active" to="/scorers">
              Scorers
            </NavLink>
          </li>
          <li onClick={hide}>
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
    </>
  );
};

export default Menu;
