import React, { useState } from "react";
import "./Nav.scss";
import { Sling as Hamburger } from "hamburger-react";
import { Fade } from "react-awesome-reveal";

const Nav = () => {
    const [isOpen, setOpen] = useState(false);

    const navigation = [
        { position: "1.", title: "home", href: "#home" },
        { position: "2.", title: "about", href: "#about" },
        { position: "3.", title: "releases", href: "#music" },
        { position: "4.", title: "store", href: "#store" },
    ];

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    return (
        <header className={`header ${isOpen ? "removeBlend" : ""}`}>
            <nav className="nav">
                <div className="logo">
                    <Fade
                        cascade
                        direction="down"
                        duration={400}
                        triggerOnce={true}
                    >
                        <img src="/logo.webp" width={100} alt="" />
                    </Fade>
                </div>
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
                <div className="bars">
                    <Fade
                        direction="down"
                        duration={400}
                        delay={400}
                        className="animation"
                        triggerOnce={true}
                    >
                        <h3
                            onClick={toggleMenu}
                            style={{ color: isOpen ? "#000" : "#fff" }}
                        >
                            MENU
                        </h3>
                        <Hamburger
                            color={isOpen ? "#000" : "#fff"}
                            size={30}
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

                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Nav;