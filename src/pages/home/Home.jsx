import React from "react";
import "./Home.scss";
import { BsArrowDownShort } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Home = () => {
  return (
    <section id="home">
      <main className="grid-layout">

        <div class="home-background"></div>

        <div className="home-content">
          <Fade
            cascade
            direction="down"
            duration={800}
            delay={600}
            triggerOnce>
            <h1 id="pxulin">
              男人 pxulin 人男
            </h1>
            <p>
              is a music artist who has uploaded songs, albums, and
              playlists on soundcloud.
            </p>
          </Fade>

        </div>

        <Fade
          cascade
          direction="down"
          duration={800}
          delay={1200}
          triggerOnce
        >
          <div className="home-bottom-content">
            <Fade
              cascade
              direction="left"
              duration={800}
              delay={1600}
              triggerOnce
            >
              <ul>
                <li><a href="#"> INSTAGRAM</a></li>
                <li><a href="#">FACEBOOK</a></li>
                <li><a href="#">YOUTUBE</a></li>
                <li><a href="#">SOUNDCLOUD</a></li>
              </ul>
            </Fade>

            <div className="arrow">
              <a href="#about">
                <BsArrowDownShort color="#fff" size={32} />
              </a>
            </div>
            <Fade
              cascade
              direction="right"
              duration={800}
              delay={1800}
              triggerOnce
            >
              <div className="check-out">
                <a href="https://soundcloud.com/pxulin/infernal-drum-kit" target="__blank" data-tooltip-id="my-tooltip-1">INFERNAL DRUM KIT OUT NOW!</a>
              </div>
            </Fade>
          </div>
        </Fade>
      </main>

      <ReactTooltip
        id="my-tooltip-1"
        place="bottom"
        content="CHECK-OUT"
      />
    </section >
  );
};

export default Home;
