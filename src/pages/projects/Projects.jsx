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
          <Fade className="animation" cascade direction="down" duration={800} triggerOnce>
            <h1>Projects</h1>
            <h3>select works.</h3>
          </Fade>
        </div>
        <ul className="slider">

          {releases.map((release, index) => (
            <Fade
              key={index}

              cascade
              direction="down"
              duration={800}
              triggerOnce
              delay={index * 100}
            >
              <li className="photo-projects-after">
                <img src={release.image} alt="" />
                <div class="logo-overlay">
                  <button>See</button>
                  <button>GitHub</button>
                </div>
              </li>
            </Fade>
          ))}

        </ul>
      </main>


    </section >
  );
};

export default Projects;
