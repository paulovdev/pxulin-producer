import React from 'react';
import './LogoSlide.scss';
import { Fade } from 'react-awesome-reveal';

const logos = [
  { src: '/logos/flstudio.webp', width: 220, height: 120 },
  { src: '/logos/sc.webp', width: 200, height: 130 },
  { src: '/logos/spotify.webp', width: 250, height: 130 },
];

const LogoSlide = () => {
  return (
    <section id="gang">
      <Fade className='animation' direction='down' duration={800} triggerOnce>
        <div className="carousel-container">
          {[...Array(3)].map((_, sectionIndex) => (
            <section key={sectionIndex}>
              {logos.map((logo, logoIndex) => (
                <img
                  key={logoIndex}
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                  alt=""
                />
              ))}
            </section>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default LogoSlide;
