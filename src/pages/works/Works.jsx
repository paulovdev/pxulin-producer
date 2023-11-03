import React from "react";

import { Link } from "react-router-dom";
import "./Works.scss";
import "../../styles/Globals.scss";

const Works = () => {
  return (
    <section id="works">
      <div className="about-content">
        <div className="my-projects-text">
          <h1>My Projects</h1>
        </div>
        <span>(05)</span>
      </div>
      <div className="worksContent">
        {works.map((item) => (
          <>
            <div className="project">
              <img src="/innovatex.webp" alt="" />
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
    title: "Innovatex",
    subTitle: "Landing Page, Web Design",
    link: "/worksc1",
    image: "/gfx-4.png",
  },
  {
    title: "InnovateX",
    subTitle: "Landing Page, Web Design",
    link: "/worksc1",
    image: "/gfx-1.png",
  },
  {
    title: "TechVenture",
    subTitle: "Landing Page, Web Design",
    link: "/worksc1",
    image: "/gfx-2.png",
  },
];
