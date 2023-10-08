import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import { Route, Routes } from 'react-router-dom';

/* import Cursor from "./utils/Cursor/Cursor"; */
import AppLeader from './AppLeader';

import Header from './components/Navbar/Header';
import Footer from './components/Footer/Footer';
import Contact from './pages/contact/Contact';
import Expertises from './pages/expertises/Expertises';

import WorksC1 from './pages/works/WorksContent/WorksC1';
import WorksC2 from './pages/works/WorksContent/WorksC2';
import WorksC3 from './pages/works/WorksContent/WorksC3';


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
          <Route path="/worksc1" element={<WorksC1 />} />
          <Route path="/worksc2" element={<WorksC2 />} />
          <Route path="/worksc3" element={<WorksC3 />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default AppRouter;