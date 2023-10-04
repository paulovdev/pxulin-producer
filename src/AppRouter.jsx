import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import { Route, Routes } from 'react-router-dom';

/* import Cursor from "./utils/Cursor/Cursor"; */
import AppLeader from './AppLeader';

import Header from './components/Navbar/Header';
import Footer from './components/Footer/Footer';
import Contact from './pages/contact/Contact';
import Expertises from './pages/expertises/Expertises';

import RecentContent1 from './pages/recent/RecentContent/RecentContent1';
import RecentContent2 from './pages/recent/RecentContent/RecentContent2';
import RecentContent3 from './pages/recent/RecentContent/RecentContent3';


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
        {/*    <Cursor /> */}
        <Header />
        <Routes>
          <Route path="/" element={<AppLeader />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/expertises" element={<Expertises />} />
          <Route path="/recent1" element={<RecentContent1 />} />
          <Route path="/recent2" element={<RecentContent2 />} />
          <Route path="/recent3" element={<RecentContent3 />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default AppRouter;