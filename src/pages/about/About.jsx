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
                        <h1>A BIT ABOUT ME</h1>
                        <div className="sub-text-content">
                            <p>
                                My name is <span>Paulo Vitor</span>, I'm 20 years old. I'm a <span>front-end developer</span> with a passion for creating beautiful and joyful digital experiences. In addition to programming, I love  <span> design</span>,  <span> games</span> and  <span> travel</span>.
                            </p>
                        </div>


                          <div className="go-home">
                            <Fade
                                cascade
                                direction="right"
                                duration={800}
                                triggerOnce
                            >
                                <a href="#">Web design</a>
                                <a href="#">Product design</a>
                                <a href="#">Digital experiences</a>
                                <a href="#"> UI/UX</a>
                            </Fade>
                        </div> 

                    </Fade>
                </div>
            </main>
        </section >
    );
};

export default About;
