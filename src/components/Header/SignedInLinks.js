import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = ({ signOut, profile }) => {
  return (
    <>
      <li>
        <div className="user_greeting_box">
          <span>Hello! {profile.initials}</span>
        </div>
      </li>
      <li>
        <a
          className="auth_link"
          href="/"
          style={{
            color: "white",
            cursor: "pointer",
            textTransform: "uppercase"
          }}
          onClick={signOut}
        >
          Log Out
        </a>
      </li>
      <li>
        <NavLink className="auth_link" to="/favourites">
          Favourites
        </NavLink>
      </li>
    </>
  );
};

export default SignedInLinks;
