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

                <div className="logo">
                    <Fade
                        direction="down"
                        duration={400}
                        delay={200}
                        triggerOnce={true}
                    >
                        <img src="/globe.gif" width={50} alt="" />
                    </Fade>
                </div>

                <div className="bars" onClick={toggleMenu}>
                    <Fade
                        direction="down"
                        duration={400}
                        delay={400}
                        className="animation"
                        triggerOnce={true}
                    >
                        <Hamburger
                            size={38}
                            duration={0.5}
                            toggled={isOpen}
                            toggle={toggleMenu}
                        />
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
                        <h1>a;slodk</h1>
                    </ul>
                </div>
            </nav>
        </header >
    );
};

export default Nav;