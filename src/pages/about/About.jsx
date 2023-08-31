import React from 'react';
import './About.scss';
import '../../styles/Globals.scss';
import { Fade } from 'react-awesome-reveal';


const About = () => {
    return (
        <section id='about'>
            <main className="grid-layout">
                <div className="text-content">
                    <Fade
                        cascade
                        direction='down'
                        duration={800}
                        triggerOnce>
                        <h1>ABOUT</h1>
                        <p>
                            My name is Paulo Vitor, I have 20 years old.
                            I am a Frontend developer who is passionate about developing beautiful and joyful digital experiences. Besides Programming, I love design, music and travelling.
                        </p>
                        <div className="social-list">
                            <Fade
                                cascade
                                direction="right"
                                duration={800}
                                delay={1600}
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
