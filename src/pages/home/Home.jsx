import React from "react";
import "./Home.scss";
import '../../Arrows.scss'
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
            <h1>paulo vitor.</h1>
            <p>front-end developer and UI designer</p>
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

          <div className="arrows-content">
            <p>scroll down</p>
            <div className="arrow">
              <a href="#about">
                <BsArrowDownShort size={32} />
              </a>
            </div>
          </div>

          <div className="home-bottom-content-2">
            <Fade
              cascade
              direction="right"
              duration={800}
              delay={1600}
              triggerOnce
            >
              <ul>
                <li><a href="#">INSTAGRAM</a></li>
                <li><a href="#">FACEBOOK</a></li>
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
