import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import "./Nav.scss";
import { Cross as Hamburger } from 'hamburger-react'
import { motion } from "framer-motion";

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
                            size={24}
                            color='#000'
                            duration={1}
                            toggled={isOpen}
                            toggle={toggleMenu}
                        />
                    </motion.div>
                </nav>
            </header >


            <div className='noise'>
                <ul className={`menu-list ${isOpen ? "open" : ""}`} >
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
                            <Link to={nav.href} onClick={toggleMenu}>
                                {nav.title}
                            </ Link>
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
            </div>
        </>
    );
};

export default Nav;


const navigation = [
    { title: "HOME", href: "/" },
    { title: "GFX WORKS", href: "/gfx" },
];


const textsNav = [
    { p: "TYPOGRAPHY:", span: "GOOGLE FONTS" },
    { p: "MADE BY:", span: "PXULIN" },
    { p: "IMAGES:", span: "FREEPIK, ENVATO" },
    { p: "PRIVACY POLICY TERMS & CONDITIONS" },
]