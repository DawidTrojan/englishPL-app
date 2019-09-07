import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = ({ closeMenu }) => {
  return (
    <>
      <li>
        <NavLink onClick={closeMenu} className="auth_link" to="/signin">
          <span>Sign in</span>
        </NavLink>
      </li>
      <li>
        <NavLink onClick={closeMenu} className="auth_link" to="/signup">
          <span>Sign up</span>
        </NavLink>
      </li>
    </>
  );
};

export default SignedOutLinks;
