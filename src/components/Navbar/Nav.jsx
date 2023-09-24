import React from "react";
import FramerMagnetic from "../../utils/MagneticButton/MagneticButton";

import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
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
                    <motion.li
                        key={index}
                        initial={{ x: 500 }}
                        animate={{ x: isOpen ? 0 : 500 }}
                        transition={{ duration: 1, delay: isOpen ? index * 0.3 : 0 }}
                    >
                        <FramerMagnetic>

                            <Link to={nav.href} onClick={toggleMenu}>
                                <span>{nav.order}</span> {nav.title}
                                <HiOutlineArrowNarrowRight className="arrow-right" />
                            </Link>
                        </FramerMagnetic>
                    </motion.li>
                ))}
                <div className="text-nav">
                    {textsNav.map((text, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: 1000 }}
                            animate={{ x: isOpen ? 0 : 1000 }}
                            transition={{ duration: 1, delay: isOpen ? index * 0.1 : 0 }}
                        >
                            <p>{text.p} <span>{text.span}</span></p>
                        </motion.div>
                    ))}
                </div>
            </motion.ul>
        </>
    );
};

export default Nav;

const navigation = [
    { order: '01', title: "HOME", href: "/" },
    { order: '02', title: "CONTACT", href: "/contact" },
    { order: '03', title: "EXPERTISES", href: "/expertises" }
];

const textsNav = [
    { p: "MADE BY:", span: "PAULO VITOR" },
    { p: "©  ALL RIGHTS RESERVED ", span: " 2023" },
    { p: "PRIVACY POLICY TERMS & CONDITIONS" },
];
