import React from "react";
import "./Home.scss";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Home = () => {
  return (
    <section id="home">
      <main className="grid-layout">
        <div className="home-content">
          <Fade cascade direction="down" duration={400} triggerOnce>
            <h1>
              Pxulin is a music artist who has uploaded songs, albums, and
              playlists on SoundCloud.
            </h1>
          </Fade>

          <Fade
            cascade
            direction="down"
            duration={400}
            delay={800}
            triggerOnce
          >
            <a href="https://soundcloud.com/pxulin" target="__blank">
              <div
                className="button-container"
                data-tooltip-id="my-tooltip-1"
              >
                <span>SOUNDCLOUD</span>
                <BsFillArrowRightCircleFill size={32} />
              </div>
            </a>
          </Fade>
        </div>

        <Fade
          cascade
          direction="down"
          duration={500}
          delay={1200}
          triggerOnce
        >
          <div className="botton-content">
            <div className="arrow-text">
              <p>© 2023 pxulin</p>
              <a href="#gang">
                <MdKeyboardArrowDown color="#fff" size={22} />
              </a>
            </div>

            <span>
              Pxulin's music can be streamed for free on SoundCloud, both on
              desktop and mobile devices. The artist's profile on the platform
              allows users to discover followers and stream tracks, albums,
              and playlists
            </span>
          </div>
        </Fade>
      </main>

      <ReactTooltip
        id="my-tooltip-1"
        place="bottom"
        content="Go to my SoundCloud page?"
      />
    </section>
  );
};

export default Home;
