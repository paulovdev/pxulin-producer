import React from "react";

import "./Services.scss";
import "../../styles/Globals.scss";

const Works = () => {
  return (
    <section id="services">
      <div className="servicesContent">
        {works.map((item) => (
          <>
            <div key={item.order} className="service">
              <img src={item.image} alt="" />
              <div className="text-services">
                <span>{item.order}</span>
                <h1>{item.title}</h1>
                <p>{item.subTitle}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Works;

const works = [
  {
    order: "01",
    title: "Branding",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veritatis architecto autem possimus totam libero non",
    image: "/roll.svg",
  },
  {
    order: "02",
    title: "Design",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veritatis architecto autem possimus totam libero non",
    image: "/design.svg",
  },
  {
    order: "03",
    title: "Development",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus veritatis architecto autem possimus totam libero non",
    image: "/dev.svg",
  },
];
