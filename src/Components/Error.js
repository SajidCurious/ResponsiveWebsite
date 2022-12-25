import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      <img src="../images/error.jpg" alt="error" className="error-image" />
      <NavLink to="/">
        <button className="goback">Go Back</button>
      </NavLink>
    </div>
  );
};

export default Error;
