import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import Hero from "./Hero";
import Services from "./Services";
import Contact from "./Contact";

const Home = () => {
  const data = {
    image: "./images/homeimage.jpg",
  };
  const { updateHomePage } = useGlobalContext();
  useEffect(() => {
    updateHomePage();
  }, []);

  return (
    <>
      <Hero {...data} />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
