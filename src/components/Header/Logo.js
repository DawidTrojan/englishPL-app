import React from "react";
import mainLogo from "./logo.png";
import { Link } from "react-router-dom";

const Logo = () => (
  <div className="logo_image">
    <Link to="/">
      <img src={mainLogo} alt="" />
    </Link>
  </div>
);

export default Logo;
