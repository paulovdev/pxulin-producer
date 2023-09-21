import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import { Route, Routes } from 'react-router-dom';

import Cursor from "./utils/Cursor/Cursor";
import AppLeader from './AppLeader';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Gfx from './pages/gfx/Gfx';
import Contact from './pages/contact/Contact';

import RecentContent1 from './pages/recent/RecentContent/RecentContent1';

const AppRouter = () => {
  const lenis = new Lenis()

  useEffect(() => {

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
        <Route path="/contact" element={<Contact />} />
        <Route path="/recent1" element={<RecentContent1 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;