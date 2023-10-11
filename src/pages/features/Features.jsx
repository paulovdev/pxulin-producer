import React from "react";
import { FaAsterisk } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Features.scss";

const Features = () => {
  const animation = {
    initial: { y: "100%", opacity: 0 },
    enter: (i) => ({
      y: "0",
      opacity: 1,
      transition: { duration: 0.75, ease: [0.4, 1, 0.6, 1], delay: 0.2 * i },
    }),
  };

  const animation2 = {
    initial: { y: "100%", opacity: 0 },
    enter: (i) => ({
      y: "0",
      opacity: 1,
      transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.5 * i },
    }),
  };

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.4,
    triggerOnce: false,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <>
      <section id="features">
        <div className="title" ref={ref1}>
          {text.map((text, index) => {
            return (
              <div key={index}>
                <motion.h1
                  custom={index}
                  variants={animation}
                  initial="initial"
                  animate={inView1 ? "enter" : ""}
                >
                  {text}
                </motion.h1>
              </div>
            );
          })}
        </div>

        <div className="border"></div>
        <main className="grid-layout">
          <div className="feat-content" ref={ref2}>
            <div className="left-title">
              <h1>
                {" "}
                <FaAsterisk size={22} />
                The combination of my passion for design
              </h1>
            </div>

            <div className="right-texts">
              {features.map((item, index) => {
                return (
                  <div className="feat-header" key={item.order}>
                    <div className="subtitle">
                      <motion.p
                        custom={index}
                        variants={animation2}
                        initial="initial"
                        animate={inView2 ? "enter" : ""}
                      >
                        {item.text}
                      </motion.p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Features;

const text = [
  "When showcasing a portfolio as",
  "a web designer and UX/UI specialist,",
  "we emphasize several key attributes",
];

const features = [
  {
    text: "Crafting visually stunning and user-friendly websites that leave a lasting impression.",
  },
  {
    text: "Designing intuitive user interfaces that enhance user experiences and engagement.",
  },
  {
    text: "Optimizing web performance and ensuring responsive designs for various devices.",
  },
];
