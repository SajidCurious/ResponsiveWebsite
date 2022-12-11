import React, { useEffect } from "react";
import Hero from "./Hero";
import { useGlobalContext } from "../context";

const About = () => {
  const data = {
    image: "./images/aboutimage.png",
  };
  const { updateAboutPage } = useGlobalContext();
  useEffect(() => {
    updateAboutPage();
  }, []);
  return <Hero {...data} />;
};

export default About;
