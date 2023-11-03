import React from "react";
import FramerMagnetic from "../../utils/MagneticButton/MagneticButton";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Nav.scss";

const Nav = ({ isOpen, toggleMenu, scrollToTop }) => {
  const section = document.querySelectorAll("section");

  section.forEach((e) => {
    if (isOpen) {
      e.classList.add("blur");
    } else {
      e.classList.remove("blur");
    }
  });
  return (
    <>
      <motion.ul
        animate={{
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : 500,
         
        }}
        className="menu-opened"
      >
        {navigation.map((nav, index) => (
          <>
            <li key={index}>
              <FramerMagnetic>
                <Link
                  to={nav.href}
                  onClick={() => {
                    toggleMenu();
                    scrollToTop();
                  }}
                >
                  {nav.title}
                </Link>
              </FramerMagnetic>
            </li>
          </>
        ))}

        <div className="text-nav">
          {textsNav.map((text, index) => (
            <motion.div
              key={index}
              initial={{ x: 1000 }}
              animate={{ x: isOpen ? 0 : 1000 }}
              transition={{ duration: 0.5, delay: isOpen ? index * 0.1 : 0 }}
            >
              <p>{text.p}</p>
            </motion.div>
          ))}
        </div>
      </motion.ul>
    </>
  );
};

export default Nav;

const navigation = [
  { title: "home", href: "/" },
  { title: "contact", href: "/contact" },
  { title: "expertises", href: "/expertises" },
];

const textsNav = [
  { p: "Instagram" },
  { p: "Facebook " },
  { p: "Linkedin" },
  { p: "Behance" },
];
