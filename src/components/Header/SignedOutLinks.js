import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <>
      <li>
        <NavLink className="auth_link" to="/signin">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink className="auth_link" to="/signup">
          Signup
        </NavLink>
      </li>
    </>
  );
};

export default SignedOutLinks;
