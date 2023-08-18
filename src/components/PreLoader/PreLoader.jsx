import React from "react";
import "./PreLoader.scss";
import { Fade } from 'react-awesome-reveal';

const PreLoader = () => {

  return (

      <div className="preloader">
          <Fade cascade direction='down' duration={600} >
            <h1 style={{ opacity: '0.1' }} >P</h1>
            <h1 style={{ opacity: '0.2' }} >X</h1>
            <h1 style={{ opacity: '0.3' }} >U</h1>
            <h1 style={{ opacity: '0.4' }} >L</h1>
            <h1 style={{ opacity: '0.5' }} >I</h1>
            <h1 style={{ opacity: '0.6' }} >N</h1>
          </Fade>
        </div>

  );
};

export default PreLoader;