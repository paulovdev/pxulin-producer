import React, { useState, useEffect } from "react";
import "./PreLoader.scss";
import { Fade } from 'react-awesome-reveal';
import { FaChrome, FaFirefox, FaEdge } from 'react-icons/fa'
const PreLoader = () => {
  const [visibleNumber, setVisibleNumber] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (visibleNumber < 100) {
        setVisibleNumber(prevNumber => prevNumber + 1);
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setShowWelcome(true);
        }, 500);
      }
    }, 20);

    return () => {
      clearInterval(timer);
      clearTimeout();
    };
  }, [visibleNumber]);

  const transitionText = `${visibleNumber}%`;

  return (
    <div className="preloader">
      <div className='noise'>
        <Fade triggerOnce>
          <h1>{transitionText}</h1>
        </Fade>
        <Fade direction="down"
          duration={400}
          delay={2000}
          className="animation" triggerOnce>
          <div className="better-experience">
            <h1>better experience using</h1>
            <div className="logos">
              <FaChrome fill="#000" size={70} />
              <FaFirefox fill="#000" size={70} />
              <FaEdge fill="#000" size={70} />
            </div></div>
        </Fade>
      </div>
    </div>
  );
};

export default PreLoader;
