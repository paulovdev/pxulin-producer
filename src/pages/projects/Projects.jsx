import React from "react";
import "./Projects.scss";
import { Fade } from "react-awesome-reveal";


const releases = [
  { image: "/music/ph1.png", title: "CONVULSION" },
  { image: "/music/ph1.png", title: "WALK NIGHT" },
  { image: "/music/ph1.png", title: "CURSED" },
  { image: "/music/ph1.png", title: "PSYCHO" },
];

const Projects = () => {
  return (
    <section id="projects">
      <main className="grid-layout">
        <div className="projects-content">
          <Fade
            cascade
            direction='down'
            duration={800}
            triggerOnce>
            <h4>PROJECTS</h4>
            <h1><span>selected </span>WORKS</h1>
          </Fade>
        </div>
      </main>


    </section >
  );
};

export default Projects;
