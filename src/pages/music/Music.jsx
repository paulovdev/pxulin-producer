import React from "react";
import "./Music.scss";
import { Fade } from "react-awesome-reveal";
import { AiFillPlayCircle, AiFillAmazonCircle } from 'react-icons/ai'
import { BsApple } from 'react-icons/bs'

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
            <h1>MUSIC 音樂</h1>
          </Fade>
        </div>

        <ul className="slider">

          {releases.map((release, index) => (
            <Fade
              key={index}

              cascade
              direction="down"
              duration={400}
              triggerOnce
              delay={index * 100}
            >
              <li className="photo-music-after">
                <img src={release.image} alt="" />
                <div class="logo-overlay">
                  <BsApple size={48} />
                  <AiFillPlayCircle size={48} />
                  <AiFillAmazonCircle size={48} />
                </div>
              </li>
            </Fade>
          ))}

        </ul>


      </main>
    </section >
  );
};

export default Music;
