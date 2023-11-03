import { useState } from "react";
import { animateScroll } from "react-scroll";

import Nav from "./Nav";

import "./Header.scss";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const scrollToTop = () => {
    animateScroll.scrollTo(0, options);
  };

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <header>
        <nav className="nav">
          <div id="bars" onClick={toggleMenu}>
            <div className="bar-1"></div>
            <div className="bar-2"></div>
          </div>
        </nav>
      </header>

      <Nav isOpen={isOpen} toggleMenu={toggleMenu} scrollToTop={scrollToTop} />
    </>
  );
};

export default Header;
