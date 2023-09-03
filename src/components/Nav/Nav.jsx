import React, { useState } from "react";
import "./Nav.scss";
import { Cross as Hamburger } from 'hamburger-react'
import { Fade } from "react-awesome-reveal";

const Nav = () => {
    const [isOpen, setOpen] = useState(false);

    const navigation = [
        { position: "1.", title: "Home", href: "#home" },
        { position: "2.", title: "About", href: "#about" },
        { position: "3.", title: "Projects", href: "#projects" },
    ];

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    return (
        <header className={`header ${isOpen ? "removeBlend" : ""}`}>
            <nav className="nav">

                <div>
                </div>

                <Fade
                    direction="down"
                    duration={400}
                    delay={400}
                    className="animation"
                    triggerOnce={true}
                >
                    <div className="bars" onClick={toggleMenu}>
                        <Hamburger
                            size={34}
                            color='#000000'
                            duration={0.5}
                            toggled={isOpen}
                            toggle={toggleMenu}
                        />
                    </div>
                </Fade>
                <ul className={`menu ${isOpen ? "open" : ""}`}>
                    {navigation.map((nav, index) => (
                        <Fade
                            key={nav.position}
                            direction="down"
                            duration={400}

                            delay={index * 100}
                            triggerOnce={!isOpen}
                        >

                            <li>
                                <span>{nav.position}</span>
                                <a href={nav.href} onClick={toggleMenu}>
                                    {nav.title}
                                </a>
                            </li>
                        </Fade>
                    ))}
                </ul>

            </nav>
        </header >
    );
};

export default Nav;