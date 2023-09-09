import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "./Nav.scss";
import { Cross as Hamburger } from 'hamburger-react'
import { motion } from "framer-motion";

const Nav = () => {
    const [isOpen, setOpen] = useState(false);

    const navigation = [
        { position: "1.", title: "HOME", href: "/" },
        { position: "2.", title: "GFX WORKS", href: "/gfx" },
    ];

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    return (
        <header className={`header ${isOpen ? "removeBlend" : ""}`}>
            <nav className="nav">

                <div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        duration: 400,
                        delay: 400,
                        easing: "easeInOutQuad",
                    }}

                    triggerOnce={true}
                    className="bars"
                    onClick={toggleMenu}>

                    <Hamburger
                        size={22}
                        color='#000000'
                        duration={0.5}
                        toggled={isOpen}
                        toggle={toggleMenu}
                    />

                </motion.div>
                <ul className={`menu ${isOpen ? "open" : ""}`} >
                    {navigation.map((nav, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                                opacity: isOpen ? 1 : 0,
                                x: isOpen ? 0 : -20,
                            }}
                            transition={{ duration: 0.2, delay: isOpen ? index * 0.1 : 0 }}
                        >
                            <span>{nav.position}</span>
                            < Link to={nav.href} onClick={toggleMenu}>
                                {nav.title}
                            </ Link>
                        </motion.li>
                    ))}
                </ul>


            </nav>
        </header >
    );
};

export default Nav;