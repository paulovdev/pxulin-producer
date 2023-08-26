import React from "react";
import "./Home.scss";
import { BsArrowDownShort } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <section id="home">
      <main className="grid-layout">
        <div className="home-content">
          <Fade
            cascade
            direction="down"
            duration={800}
            delay={600}
            triggerOnce>
            <h1>pxulin</h1>
            <p>
              is a music artist who has uploaded songs, albums, and
              playlists on soundcloud.
            </p>
            <div className='border-bottom'></div>
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

            <div className="arrow">
              <a href="#about">
                <BsArrowDownShort color="#fff" size={32} />
              </a>
            </div>

            <Fade
              cascade
              direction="right"
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
          </div>
        </Fade>
      </main>
    </section >
  );
};

export default Home;
