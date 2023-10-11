import React from "react";
import "./About.scss";
import "../../styles/Globals.scss";

const About = () => {
  return (
    <>
      <section id="about">
        <main className="grid-layout">
          <div className="about-content">
            <div className="left">
              <span>
                <div className="line"></div> About me
              </span>
            </div>
            <div className="right">
              <p>
                My name is Paulo Vitor, and I'm a 19 year old I have a passion
                for creating beautiful and joyful digital experiences. Besides
                programming, I have a deep love for design, games, and
                traveling. Over the past few years, I've had the privilege of
                working with creative individuals from agencies, startups, and
                small businesses on various design and development projects.
              </p>

              <p>
                I have a passion for creating beautiful and joyful digital
                experiences. Besides programming, I have a deep love for design,
                games, and traveling. Over the past few years, I've had the
                privilege of working with creative individuals from agencies,
                startups, and small businesses on various design and development
                projects.
              </p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default About;
