import React from 'react';
import './About.scss';
import { Fade } from 'react-awesome-reveal';


const About = () => {
    return (
        <section id='about'>
            <main className="grid-layout">

                <div className="text-content">
                    <Fade cascade direction='down' duration={800} triggerOnce>
                        <h1>ABOUT </h1>
                        <h3>
                            a bit about me.
                        </h3>
                        <p>MY NAME IS PAULO VITOR AND I HAVE 20 YEARS OLD.</p>
                        <p>
                            I am a Frontend developer who is passionate about developing beautiful and joyful digital experiences. Besides Programming, I love design, music and travelling.
                        </p>
                    </Fade>
                </div>
            </main>

        </section>
    );
};

export default About;
