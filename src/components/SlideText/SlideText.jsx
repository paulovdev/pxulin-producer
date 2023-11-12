import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./SlideText.scss";

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
          type: "spring",
          damping: 100,
          stiffness: 550,
        },
      });
    };

    handleAnimation();
  }, [scrollY, controls]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="slideText">
      <div className="sliderContainer">
        <motion.div ref={slider} className="slider" animate={controls}>
          <img src="/logos/vs.png" width={50} height={50} alt="" />
          <img src="/logos/react.png" width={70} height={60} alt="" />
          <img src="/logos/win.png" width={70} height={60} alt="" />
          <img src="/logos/google.png" width={150} height={50} alt="" />
          <img src="/logos/framer.png" width={50} height={50} alt="" />
          <img src="/logos/netlify.png" width={180} height={50} alt="" />
          {/*  */}
          <img src="/logos/vs.png" width={50} height={50} alt="" />
          <img src="/logos/react.png" width={70} height={60} alt="" />
          <img src="/logos/win.png" width={70} height={60} alt="" />
          <img src="/logos/google.png" width={150} height={50} alt="" />
          <img src="/logos/framer.png" width={50} height={50} alt="" />
          <img src="/logos/netlify.png" width={180} height={50} alt="" />
        </motion.div>
      </div>
    </section>
  );
};

export default SlideText;

/* const logos = [
  { img: "/logos/vs.png" },
  { img: "/logos/react.png" },
  { img: "/logos/win.png" },
  { img: "/logos/google.png" },
  { img: "/logos/framer.png" }
]; */
