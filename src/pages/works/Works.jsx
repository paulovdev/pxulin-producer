import React from "react";
import { motion } from "framer-motion";

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
        {works.map((item, index) => (
          <Link to={item.link} key={index} className="project-link">
            <motion.div
              className="project"
              onMouseEnter={() => handleProjectHover(item)}
              onMouseLeave={() => {
                setActive(false);
              }}
            >
              <h1>{item.title}</h1>
              <h2>{item.subTitle}</h2>
            </motion.div>
            <div className="border"></div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Works;

const works = [
  {
    title: "Project Alpha",
    subTitle: "Explorando Novos Horizontes",
    link: "/worksc1",
    image: "/gfx-4.png",
  },
  {
    title: "InnovateX",
    subTitle: "Revolucionando o bem-estar",
    link: "/worksc1",
    image: "/gfx-1.png",
  },
  {
    title: "TechVenture",
    subTitle: "A Jornada de Gatha",
    link: "/worksc1",
    image: "/gfx-2.png",
  },
  {
    title: "EcoSolutions",
    subTitle: "Sustentabilidade em Ação",
    link: "/worksc1",
    image: "/gfx-5.png",
  },
];
