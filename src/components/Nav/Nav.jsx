import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import "./Nav.scss";
import { Pivot as Hamburger } from 'hamburger-react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { motion } from "framer-motion";
import FramerMagnetic from "../../utils/MagneticButton/MagneticButton";


const Nav = () => {
    const [isOpen, setOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 700) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    return (
        <>
            <header>
                <nav className="nav" >
                    <div className="wrap"></div>
                    < FramerMagnetic>
                        <motion.div
                            id="bars"
                            onClick={toggleMenu}
                            initial={{ opacity: 0, x: 3000 }}
                            animate={{
                                opacity: isVisible ? 1 : 0,
                                x: isVisible ? 0 : 1000,
                            }}
                            transition={{ duration: 1 }}
                        >
                            <Hamburger
                                size={32}
                                color='#fff'
                                duration={0.8}
                                toggled={isOpen}
                                toggle={toggleMenu}

                            />
                        </motion.div>
                    </FramerMagnetic>

                </nav>
            </header >



            <ul className={`menu-list ${isOpen ? "open" : ""}`}>
                {navigation.map((nav, index) => (

                    <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 500 }}
                        animate={{
                            opacity: isOpen ? 1 : 0,
                            x: isOpen ? 0 : 500,
                        }}
                        transition={{ duration: 1, delay: isOpen ? index * 0.5 : 0 }}
                    >


                        < FramerMagnetic >
                            <Link to={nav.href} onClick={toggleMenu}>
                                {nav.title}
                                < HiOutlineArrowNarrowRight className="arrow-right" />
                            </ Link>
                        </FramerMagnetic>



                    </motion.li>

                ))}
                <div className="text-nav">
                    {textsNav.map((text, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 1000 }}
                            animate={{
                                opacity: isOpen ? 1 : 0,
                                y: isOpen ? 0 : 1000,
                            }}
                            transition={{ duration: 1, delay: isOpen ? index * 0.1 : 0 }}
                        >
                            <p>{text.p} <span>{text.span}</span></p>
                        </motion.div>
                    ))}
                </div>
            </ul>

        </>
    );
};

export default Nav;


const navigation = [
    { title: "HOME", href: "/" },
    { title: "CONTACT", href: "/contact" },
    { title: "EXPERTISES", href: "/expertises " }
];


const textsNav = [
    { p: "TYPOGRAPHY:", span: "GOOGLE FONTS" },
    { p: "MADE BY:", span: "PXULIN" },
    { p: "IMAGES:", span: "FREEPIK, ENVATO" },
    { p: "PRIVACY POLICY TERMS & CONDITIONS" },
]