import React from "react";
import "./Home.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GiDaemonSkull } from "react-icons/gi"
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
              男人 <GiDaemonSkull /> pxulin <GiDaemonSkull />  人男
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
          duration={500}
          delay={800}
          triggerOnce
        >
          <div className="home-bottom-content">

            <div className="arrow">
              <a href="#about">
                <MdKeyboardArrowDown color="#fff" size={32} />
              </a>
            </div>

            <a href="https://soundcloud.com/pxulin/infernal-drum-kit" target="__blank" data-tooltip-id="my-tooltip-1">INFERNAL DRUM KIT OUT NOW!</a>

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
