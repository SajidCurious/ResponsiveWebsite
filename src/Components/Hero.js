import React from "react";
import Button from "./Button";
import { useGlobalContext } from "../context";

const Hero = (props) => {
  const { intro, about1, about2, about3 } = useGlobalContext();

  return (
    <div className="home-parent">
      <div className="home">
        <p>{intro}</p>
        <h1>
          CENTURY
          <br /> SOFTWARE
          <br />
          SOLUTIONS
        </h1>
        <p>
          {about1}
          <br />
          {about2}
          <br />
          {about3}
        </p>
        <Button />
      </div>
      <div className="heroimage">
        <img src={props.image} alt="image" />
      </div>
    </div>
  );
};

export default Hero;
