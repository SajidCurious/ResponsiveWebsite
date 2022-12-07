import React from "react";
import Button from "./Button";

const Home = () => {
  return (
    <div className="home-parent">
      <div className="home">
        <p>WELCOME TO</p>
        <h1>
          CENTURY
          <br /> SOFTWARE
          <br />
          SOLUTIONS
        </h1>
        <p>
          We're a Software Solutions Company. We offer
          <br /> Solutions in Web, Android and Native Domain.
          <br />
          Reputated Company since 1990's.
        </p>
        <Button />
      </div>
      <div className="heroimage">
        <img src="./images/heroimage.jpg" alt="image" />
      </div>
    </div>
  );
};

export default Home;
