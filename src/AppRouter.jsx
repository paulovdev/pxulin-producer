import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import { Route, Routes } from 'react-router-dom';

import Cursor from "./utils/Cursor/Cursor";
import AppLeader from './AppLeader';


import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Gfx from './pages/gfx/Gfx';

const AppRouter = () => {
  const lenis = new Lenis()

  useEffect(() => {
    //lenis cursor:
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, []);

  return (
    <>
      <Cursor />
      <Nav />
      <Routes>
        <Route path="/" element={<AppLeader />} />
        <Route path="/gfx" element={<Gfx />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
