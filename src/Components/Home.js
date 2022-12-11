import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import Hero from "./Hero";

const Home = () => {
  const data = {
    image: "./images/homeimage.jpg",
  };
  const { updateHomePage } = useGlobalContext();
  useEffect(() => {
    updateHomePage();
  }, []);

  return <Hero {...data} />;
};

export default Home;
