import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/">
        <img src="./images/century-logo.png" alt="logo" id="logo" />
      </NavLink>
      <Navbar />
    </div>
  );
};

export default Header;
