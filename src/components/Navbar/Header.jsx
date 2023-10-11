import { useState, useEffect } from "react";
import { Pivot as Hamburger } from "hamburger-react";
import { animateScroll } from "react-scroll";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FramerMagnetic from "../../utils/MagneticButton/MagneticButton";
import Nav from "./Nav";

import "./Header.scss";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 700) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const options = {
    duration: 500,
    smooth: true,
  };

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
          <motion.div
            id="bars"
            onClick={toggleMenu}
            initial={{ opacity: 0, x: 3000 }}
            animate={{
              opacity: isVisible ? 0 : 1,
              x: isVisible ? 1000 : 0,
            }}
            transition={{ duration: 1 }}
          >
            <Hamburger
              size={42}
              duration={0.5}
              toggled={isOpen}
              toggle={toggleMenu}
              color="#000"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 3000 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              x: isVisible ? 0 : 500,
            }}
            transition={{ duration: 1 }}
          >
            <ul className="desktop">
              {navigation.map((nav, index) => (
                <>
                  <li key={index}>
                    <FramerMagnetic>
                      <Link to={nav.href}>
                        {nav.title}
                        <div className="block"></div>
                      </Link>
                    </FramerMagnetic>
                  </li>
                </>
              ))}
            </ul>
          </motion.div>
        </nav>
      </header>

      <Nav isOpen={isOpen} toggleMenu={toggleMenu} scrollToTop={scrollToTop} />
    </>
  );
};

export default Header;

const navigation = [
  { title: "Home", href: "/" },
  { title: "Contact", href: "/contact" },
  { title: "Expertises", href: "/expertises" },
];
