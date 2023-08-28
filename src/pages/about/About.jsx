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
                        <h1>ABOUT </h1>
                        <h3>can we make it better?</h3>
                    </Fade>

                    <div className="text-wrapper-about">
                        <Fade
                            cascade
                            direction="down"
                            duration={800}
                            delay={600}
                            triggerOnce>
                            <p>
                                My name is Paulo Vitor, I have 20 years old.
                                I am a Frontend developer who is passionate about developing beautiful and joyful digital experiences. Besides Programming, I love design, music and travelling.
                            </p>
                            <p>
                                Je m'appelle Paulo Vitor, j'ai 20 ans. Je suis un développeur Frontend passionné par le développement d'expériences numériques belles et joyeuses. Outre la programmation, j'aime le design, la musique et les voyages.
                            </p>
                        </Fade>
                    </div>
                </div>
            </main>

        </section>
    );
};

export default About;
