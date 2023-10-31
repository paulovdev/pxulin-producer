import { Route, Routes } from "react-router-dom";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import AppLeader from "./AppLeader";

import Header from "./components/Navbar/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/contact/Contact";

import WorksC1 from "./pages/works/WorksContent/WorksC1";
import WorksC2 from "./pages/works/WorksContent/WorksC2";
import WorksC3 from "./pages/works/WorksContent/WorksC3";

const AppRouter = () => {
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 500);
  });

  gsap.ticker.lagSmoothing(0);
  return (
    <>
    
      <div
        onLoad={function scrollToTop() {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<AppLeader />} />
          <Route path="/contact" element={<Contact />} />
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
