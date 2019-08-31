import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = ({ closeMenu }) => {
  return (
    <>
      <li>
        <NavLink onClick={closeMenu} className="auth_link" to="/signin">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink onClick={closeMenu} className="auth_link" to="/signup">
          Signup
        </NavLink>
      </li>
    </>
  );
};

export default SignedOutLinks;
