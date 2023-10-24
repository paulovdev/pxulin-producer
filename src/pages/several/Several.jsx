import React from "react";
import { Link } from "react-router-dom";
import { animate, motion } from "framer-motion";
import "./Several.scss";

const Several = () => {
  return (
    <>
      <section id="several">
        <main className="grid-layout">
          <div className="several-content">
            <h1>Centro Criativo</h1>
            <h1>Explorar, ampliar e</h1>
            <h1>Encontrar soluções</h1>
          </div>

          <motion.div onMouseEnter={{ scale: 1.2 }} className="bottom-content">
            <Link to="expertises">
              <img src="/rounded-text.png" width={200} height={180} alt="" />
            </Link>
          </motion.div>
        </main>
      </section>
    </>
  );
};

export default Several;
