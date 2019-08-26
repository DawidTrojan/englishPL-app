import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <>
      <li>
        <NavLink className="link" to="/">
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink className="link" to="/">
          Favourites
        </NavLink>
      </li>
      <li>
        <NavLink className="link" to="/">
          <button>Show</button>
        </NavLink>
      </li>
    </>
  );
};

export default SignedInLinks;
