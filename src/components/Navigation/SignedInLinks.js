import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = ({ signOut, profile, closeAfterClick }) => {
  return (
    <>
      <li>
        <div className="user_greeting_box">
          <span>Hello {profile.initials}! How are you?</span>
        </div>
      </li>
      <li>
        <a className="auth_link" href="/" onClick={signOut}>
          <span>Sign Out</span>
        </a>
      </li>
      <li>
        <NavLink onClick={closeAfterClick} className="auth_link" to="/myteam">
          <span>My Team</span>
        </NavLink>
      </li>
    </>
  );
};

export default SignedInLinks;
