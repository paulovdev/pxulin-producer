import React, { useState, useEffect } from 'react';
import { motion, useScroll } from "framer-motion"
import Lenis from '@studio-freight/lenis'
import { Route, Routes } from 'react-router-dom';

import Cursor from "./utils/Cursor";
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import PreLoader from './components/PreLoader/PreLoader';
import AppLeader from './AppLeader';
import Gfx from './pages/Gfx/Gfx';

const AppRouter = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const lenis = new Lenis()

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };

    fakeDataFetch();

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, []);

  return isLoading ? (
    <PreLoader />
  ) : (
    <>
      <Cursor />
      <Nav />
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
      <Routes>
        <Route path="/" element={<AppLeader />} />
        <Route path="/gfx" element={<Gfx />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
