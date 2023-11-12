import React from "react";
import "./About.scss";
import "../../styles/Globals.scss";

const About = () => {
  return (
    <>
      <section id="about">
        <main className="grid-layout">
          <div className="border-home"></div>

          <div className="about-content">
            <div className="located">
              <span>Located in Rio de Janeiro</span>
              <div className="globe">
                <img src="/globe.png" width={30} height={30} alt="" />
              </div>
            </div>
            <div className="availabe">
              <div className="green"></div>
              <span>Available for new projects</span>
            </div>
            <div className="sub-title-about-2">
              <p>
                ✺︎ I'm Paulo, a dedicated Front-End Developer, Game Developer,
                and Creative Musical Producer. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Sequi illo rerum veritatis alias
                dolorem. Nisi recusandae debitis rem totam laborum quibusdam
                esse repellendus, sequi aliquid quaerat ad tenetur similique
                eligendi.
              </p>

              <p>
                ✧ Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, sunt magni, accusantium fugiat aperiam cupiditate
                tenetur necessitatibus qui beatae dolor non vero aut velit
                incidunt mollitia, ea est? Magnam, nostrum?
              </p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default About;
