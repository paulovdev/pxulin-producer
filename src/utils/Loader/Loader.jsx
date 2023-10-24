import React from "react";
import { motion } from "framer-motion";
import "./Loader.scss";

const Loader = () => {
  return (
    <>
      <motion.div
        animate={{ y: "100%", background: "#000" }}
        transition={{
          delay: 2,
          type: "spring",
        }}
        className="loader"
      >
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0", transition: 1 }}
          className="loading"
        >
          <h1>PAULO</h1>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Loader;
