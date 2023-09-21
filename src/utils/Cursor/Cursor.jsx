import React from "react";
import AnimatedCursor from "react-animated-cursor";
import './Cursor.scss'
const Cursor = () => {


  return (
    <AnimatedCursor
      color="255,255,255"
      innerSize={3}
      outerSize={33}
      innerScale={1}
      outerScale={2}
      outerAlpha={1}
      hasBlendMode={true}
      outerStyle={{
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        mixBlendMode: 'exclusion'
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        '#bars',
        'p',
        '.image',
        'summary'
      ]}
    />

  );
};

export default Cursor;