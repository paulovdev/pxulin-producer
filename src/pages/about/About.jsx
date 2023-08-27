import React from 'react';
import './About.scss';
import { Fade } from 'react-awesome-reveal';

const About = () => {
    return (
        <section id='about'>
            <main className="grid-layout">
                <div className="text-content">
                    <Fade cascade direction='down' duration={800} triggerOnce>
                        <h1>ABOUT</h1>
                        <p>
                            I am a Frontend developer who is passionate about developing beautiful and joyful digital experiences. Besides Programming, I love design, music and travelling.
                        </p>
                        <div className='border-bottom'></div>
                    </Fade>
                </div>
            </main>
        </section>
    );
};

export default About;
