import React, { useState, useEffect } from "react";
import "./PreLoader.scss";
import { Fade } from 'react-awesome-reveal';

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

  const transitionText = showWelcome ? 'Welcome' : `${visibleNumber}%`;

  return (
    <div className="preloader">
      <div>
        <Fade triggerOnce>
          <h1>{transitionText}</h1>
        </Fade>
      </div>
    </div>
  );
};

export default PreLoader;
