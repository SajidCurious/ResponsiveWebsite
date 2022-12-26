import React from "react";
import { NavLink } from "react-router-dom";

const Services = () => {
  const serviceData = [
    {
      id: "1",
      name: "Web Applications",
      image: "./images/webdevelopment.png",
      description: "Websites using latest Technologies",
    },
    {
      id: "2",
      name: "Mobile Applications",
      image: "./images/Appdevelopment.jpg",
      description: "Mobile Apps using latest Technologies",
    },
    {
      id: "3",
      name: "AI and ML",
      image: "./images/aiandml.png",
      description: "AI and ML using latest Technologies",
    },
    {
      id: "4",
      name: "Web Analytics",
      image: "./images/webanalytics.jpg",
      description: "Analytics using latest Technologies",
    },
    {
      id: "5",
      name: "Web Scrapping",
      image: "./images/webscrapping.webp",
      description: "Scrapping using latest Technologies",
    },
    {
      id: "6",
      name: "Bussiness Software",
      image: "./images/bussinesssoftware.png",
      description: "Softwares using latest Technologies",
    },
  ];
  return (
    <div className="serviceParent">
      <h2 className="serviceHeading">Our Services</h2>
      <div className="serviceParentData">
        {serviceData.map((data) => (
          <div className="card">
            <h3 className="serviceName">{data.name}</h3>
            <figure>
              <img src={data.image} alt="name" />
            </figure>
            <p className="serviceAbout">{data.description}</p>
            <NavLink to="/service" id="ser">
              <button className="button_Ser">Know More</button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
