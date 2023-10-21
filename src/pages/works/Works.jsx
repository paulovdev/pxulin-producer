import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import "./Works.scss";
import "../../styles/Globals.scss";

const Works = () => {
  const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };

  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  }, []);

  const handleProjectHover = (item) => {
    setActive(true);
  };

  return (
    <section id="works">
      <motion.div
        ref={cursor}
        className="cursor"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        className="cursorLabel"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        Ver
      </motion.div>
      <div className="about-content">
        <span>Projetos</span>
        <span>(05)</span>
      </div>
      <div className="worksContent">
        {works.map((item, index) => (
          <Link to={item.link} key={index} className="project-link">
            <motion.div
              className="project"
              onMouseEnter={() => handleProjectHover(item)}
              onMouseLeave={() => {
                setActive(false);
              }}
            >
              <h1>{item.title}</h1>
              <h2>{item.subTitle}</h2>
            </motion.div>
            <div className="border"></div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Works;

const works = [
  {
    title: "Project Alpha",
    subTitle: "Explorando Novos Horizontes",
    link: "/worksc1",
    image: "/gfx-4.png",
  },
  {
    title: "InnovateX",
    subTitle: "Revolucionando o bem-estar",
    link: "/worksc1",
    image: "/gfx-1.png",
  },
  {
    title: "TechVenture",
    subTitle: "A Jornada de Gatha",
    link: "/worksc1",
    image: "/gfx-2.png",
  },
  {
    title: "EcoSolutions",
    subTitle: "Sustentabilidade em Ação",
    link: "/worksc1",
    image: "/gfx-5.png",
  },
];
