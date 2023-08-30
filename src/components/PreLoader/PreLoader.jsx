import React, { useState, useEffect } from "react";
import "./PreLoader.scss";
import { Fade } from 'react-awesome-reveal';

const PreLoader = () => {
  const [visibleNumber, setVisibleNumber] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (visibleNumber < 100) {
        setVisibleNumber(prevNumber => prevNumber + 1);
      } else {
        clearInterval(timer);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [visibleNumber]);

  return (
    <div className="preloader">
        <div>
          <h1 key={visibleNumber}>{visibleNumber}%</h1>
        </div>
    </div>
  );
};

export default PreLoader;
