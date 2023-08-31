import React from 'react';
import './About.scss';
import '../../styles/Globals.scss';
import { Fade } from 'react-awesome-reveal';

const About = () => {
    return (
        <section id='about' name="about">
            <main className="grid-layout">
                <div className="text-content">
                    <Fade
                        cascade
                        direction='down'
                        duration={800}
                        triggerOnce>
                        <h1>About me:</h1>
                        <p>
                            My name is Paulo Vitor, I'm 20 years old. I'm a front-end developer with a passion for creating beautiful and joyful digital experiences. In addition to programming, I love design, music and travel.
                        </p>
                        <div className="social-list">
                            <Fade
                                cascade
                                direction="right"
                                duration={800}
                                triggerOnce
                            >
                                <ul>
                                    <li><a href="#projects">my projects</a></li>
                                    <li><a href="#home">go to home</a></li>
                                </ul>
                            </Fade>
                        </div>
                    </Fade>
                </div>
            </main>
        </section >
    );
};

export default About;
