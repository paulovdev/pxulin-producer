import React from "react";
import "./PreLoader.scss";
import { Fade } from 'react-awesome-reveal';

const PreLoader = () => {
  return (
    <div className="preloader">
      <Fade cascade direction='down' duration={600}>
        {["P", "X", "U", "L", "I", "N"].map((letters, index) => (
          <h1 key={index} style={{ opacity: (index + 1) * 0.1 }}>{letters}</h1>
        ))}
      </Fade>
    </div>
  );
};

export default PreLoader;
