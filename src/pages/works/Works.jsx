import React from "react";

import "./Works.scss";
import "../../styles/Globals.scss";

const Works = () => {
  return (
    <section id="works">
      <div className="about-content">
        <div className="my-projects-text">
          <h1>My Projects</h1>
        </div>
        <span>(03)</span>
      </div>
      <div className="worksContent">
        {works.map((item) => (
          <>
            <div key={item.id} className="project">
              <img src={item.image} alt="" />
              <div className="text-project">
                <h1>{item.title}</h1>
                <h2>{item.subTitle}</h2>
              </div>
            </div>
            <div className="border"></div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Works;

const works = [
  {
    id: 1,
    title: "Innovatex",
    subTitle: "Landing Page, Web Design",
    link: "/worksc1",
    image: "/projects/image-1.webp",
  },
  {
    id: 2,
    title: "InnovateX",
    subTitle: "Landing Page, Web Design",
    link: "/worksc1",
    image: "/projects/image-1.webp",
  },
  {
    id: 3,
    title: "TechVenture",
    subTitle: "Landing Page, Web Design",
    link: "/worksc1",
    image: "/projects/image-1.webp",
  },
];
