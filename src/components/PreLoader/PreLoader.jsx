import React, { useState, useEffect } from "react";
import "./PreLoader.scss";
import { motion } from 'framer-motion';

const PreLoader = () => {
  const [visibleNumber, setVisibleNumber] = useState(0);

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
    <motion.div
      animate={{ y: '100%', background: "#000" }}
      transition={{
        delay: 1,
        type: "spring",
      }}
      className="preloader">
      <div className='noise'>

        <h1>{transitionText}</h1>

      </div>
    </motion.div>
  );
};

export default PreLoader;
