import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";

const SignedInLinks = ({ signOut, profile, closeAfterClick }) => {
  const [logout, setLogout] = useState(false);

  if (logout) {
    return <Redirect to="/" />;
  }

  const handleOnClick = () => {
    setLogout(true);
    signOut();
  };

  return (
    <>
      <li>
        <div className="user_greeting_box">
          <span>Hello {profile.initials}!</span>
        </div>
      </li>
      <li>
        <span className="auth_link" onClick={handleOnClick}>
          Sign Out
        </span>
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
