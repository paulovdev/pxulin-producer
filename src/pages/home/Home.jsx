import React from "react";
import "./Home.scss";

import { MdKeyboardArrowDown } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Home = () => {
  return (
    <section id="home">
      <main className="grid-layout">
        <div className="home-content">
          <Fade
            cascade
            direction="down"
            duration={400}
            delay={600}
            triggerOnce>
            <h1>
              Pxulin is a music artist who has uploaded songs, albums, and
              playlists on soundcloud.
            </h1>
          </Fade>

        </div>

        <Fade
          cascade
          direction="down"
          duration={500}
          delay={800}
          triggerOnce
        >
          <div className="home-bottom-content">
            <h1>© 2023 pxulin</h1>
            <br />
            <a href="https://soundcloud.com/pxulin/infernal-drum-kit" target="__blank" data-tooltip-id="my-tooltip-1">INFERNAL DRUM KIT OUT NOW!</a>
          </div>
        </Fade>

        <Fade
          cascade
          direction="down"
          duration={500}
          delay={1000}
          triggerOnce
        >

          <a href="#about" className="arrow">
            <MdKeyboardArrowDown color="#fff" size={42} />
          </a>

        </Fade>
      </main>

      <ReactTooltip
        id="my-tooltip-1"
        place="bottom"
        content="LISTEN TO THIS?"
      />
    </section >
  );
};

export default Home;
