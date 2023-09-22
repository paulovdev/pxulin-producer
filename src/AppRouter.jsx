import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import { Route, Routes } from 'react-router-dom';

import Cursor from "./utils/Cursor/Cursor";
import AppLeader from './AppLeader';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Contact from './pages/contact/Contact';
import Expertises from './pages/expertises/Expertises';

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
      <div onLoad={function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }}>
        <Cursor />
        <Nav />
        <Routes>
          <Route path="/" element={<AppLeader />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/expertises" element={<Expertises />} />
          <Route path="/recent1" element={<RecentContent1 />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default AppRouter;