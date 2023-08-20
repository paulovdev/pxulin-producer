import React from "react";
import "./Music.scss";
import { Fade } from "react-awesome-reveal";

const releases = [
  { image: "/music/ph3.png", title: "CONVULSION" },
  { image: "/music/ph2.png", title: "WALK NIGHT" },
  { image: "/music/ph4.png", title: "CURSED" },
  { image: "/music/ph1.png", title: "PSYCHO" },
];

const Music = () => {
  return (
    <section id="music">
      <main className="grid-layout">
        <div className="music-content">
          <Fade className="animation" cascade direction="down" duration={400} triggerOnce>
            <h1>RELEASES</h1>
          </Fade>
        </div>
        <div className="slider">
          <div className="photo-music">
            {releases.map((release, index) => (
              <Fade
                key={index}
                className="animation"
                cascade
                direction="down"
                duration={400}
                triggerOnce
                delay={index * 100}
              >

                <img src={release.image} alt="" />
                <h1>{release.title}</h1>
              </Fade>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Music;
