import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = ({ signOut, profile }) => {
  return (
    <>
      <li>
        <a
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
        <NavLink className="link" to="/favourites">
          Favourites
        </NavLink>
      </li>
      <li>
        <div className="user_greeting_box">
          <span>Hello! {profile.initials}</span>
        </div>
      </li>
    </>
  );
};

export default SignedInLinks;
