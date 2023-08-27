import React from 'react';
import './About.scss';
import { Fade } from 'react-awesome-reveal';
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

const About = () => {
    return (
        <section id='about'>
            <main className="grid-layout">
                <div className="text-content">
                    <Fade cascade direction='down' duration={800} triggerOnce>
                        <h1>ABOUT </h1>
                        <h3>
                            my name is paulo vitor and i have 20 years old.
                        </h3>
                        <p>
                            I am a Frontend developer who is passionate about developing beautiful and joyful digital experiences. Besides Programming, I love design, music and travelling.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum in ducimus sint, iste odit ea, illo a corrupti doloremque vero optio voluptatem aspernatur quo amet consequatur cumque voluptatum dolores voluptatibus!
                        </p>
                    </Fade>
                </div>
                <div className="arrows-content">
                    <div className="arrow">

                        <a href="#home">
                            <BsArrowUpShort size={32} />
                        </a>
                    </div>

                    <div className="arrow">

                        <a href="#projects">
                            < BsArrowDownShort size={32} />
                        </a>
                    </div>
                </div>
            </main>

        </section>
    );
};

export default About;
