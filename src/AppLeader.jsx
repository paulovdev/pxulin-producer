import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Works from "./pages/works/Works";
import Services from "./pages/services/Services";
import SlideText from "./components/SlideText/SlideText";
const AppLeader = () => {
  return (
    <>
      <Home />
      <About />
      <SlideText />
      <Services />
      <Works />
    </>
  );
};

export default AppLeader;
