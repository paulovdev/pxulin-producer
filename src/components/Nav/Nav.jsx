import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "./Nav.scss";
import { Cross as Hamburger } from 'hamburger-react'
import { motion } from "framer-motion";

const Nav = () => {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    const navEffect = {
        initial: {
            opacity: 0,
            x: 100
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: 1.3,
            }
        }
    }

    return (
        <>
            <header>
                <nav className="nav" >
                    <div className="wrap"></div>
                    <motion.div
                        variants={navEffect}
                        initial='initial'
                        animate='animate'
                        triggerOnce={true}
                        id="bars"
                        onClick={toggleMenu}>
                        <Hamburger
                            size={22}
                            color='#000'
                            duration={0.5}
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
                            initial={{ opacity: 0, x: -1000 }}
                            animate={{
                                opacity: isOpen ? 1 : 0,
                                x: isOpen ? 0 : 1000,
                            }}
                            transition={{ duration: 0.5, delay: isOpen ? index * 0.1 : 0 }}
                        >
                            < Link to={nav.href} onClick={toggleMenu}>
                                {nav.title}
                            </ Link>
                        </motion.li>
                    ))}
                    <div className="text-nav">
                        {textsNav.map((text, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: -1000 }}
                                animate={{
                                    opacity: isOpen ? 1 : 0,
                                    y: isOpen ? 0 : 1000,
                                }}
                                transition={{ duration: 0.3, delay: isOpen ? index * 0.1 : 0 }}
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