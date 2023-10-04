import React from "react";
import FramerMagnetic from "../../utils/MagneticButton/MagneticButton";

import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import "./Nav.scss";

const Nav = ({ isOpen, toggleMenu, isVisible }) => {
    return (
        <>

            <motion.ul
                initial={{ opacity: 0, x: 3000 }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    x: isVisible ? 0 : 1000,
                }}
                transition={{ duration: 1 }}

                className={`menu-list ${isOpen ? "open" : ""}`}>
                {navigation.map((nav, index) => (
                    <>
                        <motion.li
                            key={index}
                            initial={{ x: 500 }}
                            animate={{ x: isOpen ? 0 : 500 }}
                            transition={{ duration: 1, delay: isOpen ? index * 0.3 : 0 }}
                        >
                            <FramerMagnetic>

                                <Link to={nav.href} onClick={toggleMenu}>
                                    {nav.title}
                                </Link>

                            </FramerMagnetic>
                        </motion.li></>
                ))}

                <div className="text-nav">

                    {textsNav.map((text, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: 1000 }}
                            animate={{ x: isOpen ? 0 : 1000 }}
                            transition={{ duration: 1, delay: isOpen ? index * 0.1 : 0 }}
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
    { title: "Home", href: "/" },
    { title: "Contact", href: "/contact" },
    { title: "Expertises", href: "/expertises" }
];

const textsNav = [
    { p: "Instagram" },
    { p: "Facebook " },
    { p: "Linkedin" },
    { p: "Behance" },
];
