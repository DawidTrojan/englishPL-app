import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = ({ closeMenu }) => {
  return (
    <>
      <li>
        <NavLink onClick={closeMenu} className="auth_link" to="/signin">
          <span>Login</span>
        </NavLink>
      </li>
      <li>
        <NavLink onClick={closeMenu} className="auth_link" to="/signup">
          <span>Signup</span>
        </NavLink>
      </li>
    </>
  );
};

export default SignedOutLinks;
