import React from "react";
import AnimatedCursor from "react-animated-cursor";
import './Cursor.scss'
const Cursor = () => {


  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={10}
      color='323, 232,323'
      outerAlpha={0.3}
      innerScale={0.7}
      outerScale={5}
    />

  );
};

export default Cursor;