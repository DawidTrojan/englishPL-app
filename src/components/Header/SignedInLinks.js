import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = ({ signOut }) => {
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
        <NavLink className="link" to="/">
          <button>Show</button>
        </NavLink>
      </li>
    </>
  );
};

export default SignedInLinks;
