import { useState, useEffect } from "react";
import { Pivot as Hamburger } from 'hamburger-react'
import { motion } from "framer-motion";

import Nav from "./Nav";

import './Header.scss'


const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isOpen, setOpen] = useState(false);

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

                <nav className="nav">

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
                            size={42}
                            duration={0.5}
                            toggled={isOpen}
                            toggle={toggleMenu}
                            color="#fff"
                        />
                    </motion.div>
                </nav>
            </header>
            <Nav isOpen={isOpen} toggleMenu={toggleMenu} isVisible={isVisible} />
        </>
    );
};

export default Header;



