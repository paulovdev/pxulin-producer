import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Nav.scss";

const Nav = ({ isOpen, toggleMenu, scrollToTop }) => {
  return (
    <>
      <motion.ul
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -1000,
        }}
        className="menu-opened"
      >
        {navigation.map((nav, index) => (
          <>
            <li key={index}>
              <Link
                to={nav.href}
                onClick={() => {
                  toggleMenu();
                  scrollToTop();
                }}
              >
                {nav.title}
                <span> {nav.subTitle}</span>
              </Link>
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
              <p>{text.p} </p>
            </motion.div>
          ))}
        </div>
      </motion.ul>
    </>
  );
};

export default Nav;

const navigation = [
  { title: "Home", subTitle: "Home Page", href: "/" },
  { title: "Contact", subTitle: "Send me a message", href: "/contact" },
  { title: "Expertises", subTitle: "My expertises", href: "/expertises" },
];

const textsNav = [
  { p: "Instagram" },
  { p: "Facebook " },
  { p: "Linkedin" },
  { p: "Behance" },
];
