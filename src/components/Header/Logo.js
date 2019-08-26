import React from "react";
import mainLogo from "./logo.png";
import { NavLink } from "react-router-dom";

const Logo = () => (
  <div className="logo_image">
    <NavLink to="/">
      <img src={mainLogo} alt="" />
    </NavLink>
  </div>
);

export default Logo;
