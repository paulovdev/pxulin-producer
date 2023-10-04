import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './SlideText.scss';

const SlideText = () => {
  const slider = useRef(null);
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    const handleAnimation = async () => {

      await controls.start({
        x: -scrollY * 0.4,
        transition: {
          type: 'spring',
          damping: 100,
          stiffness: 550,
        },
      });
    };

    handleAnimation();
  }, [scrollY, controls]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="slideText">
      <div className="sliderContainer">
        <motion.div
          ref={slider}
          className='slider'
          animate={controls}>
          <h1>
            • Works • <b>Design</b> • Projects • <b>UX/UI </b>
            • Works • <b>Design</b> • Projects • <b>UX/UI </b>
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default SlideText;
