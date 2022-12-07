import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="menuicon">
        <ul className="navbar-list">
          <li>
            <NavLink to="/" id="li">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" id="li">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/service" id="li">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" id="li">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
