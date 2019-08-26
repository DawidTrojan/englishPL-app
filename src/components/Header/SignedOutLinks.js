import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <>
      <li>
        <NavLink className="link" to="/signup">
          Signup
        </NavLink>
      </li>
      <li>
        <NavLink className="link" to="/signin">
          Login
        </NavLink>
      </li>
    </>
  );
};

export default SignedOutLinks;
