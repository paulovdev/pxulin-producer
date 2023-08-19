import React from "react";
import "./Music.scss";
import { Fade } from "react-awesome-reveal";

const Music = () => {
  return (
    <section id="music">
      <main className="grid-layout">
        <div className="music-content">
          <Fade
            className="animation"
            cascade
            direction="down"
            duration={400}
            triggerOnce
          >
            <h1>MUSIC</h1>
            <p>SOON</p>
          </Fade>
        </div>
        <div className="slider">
          <h1>SOON SOON SOON SOON SOON SOON</h1>
          <h1>SOON SOON SOON SOON SOON SOON</h1>
        </div>
      </main>
    </section>
  );
};

export default Music;
