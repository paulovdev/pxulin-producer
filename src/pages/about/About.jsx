import React from 'react';
import './About.scss';
import '../../styles/Globals.scss';
import { Fade } from 'react-awesome-reveal';
import { FaHome } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'
import { GoProject } from 'react-icons/go'
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
                        <h4>ABOUT</h4>
                        <h1><span>a little </span>ABOUT ME</h1>
                        <p>
                            My name is <span>Paulo Vitor</span>, I'm 20 years old. I'm a <span>front-end developer</span> with a passion for creating beautiful and joyful digital experiences. In addition to programming, I love  <span> design</span>,  <span> games</span> and  <span> travel</span>.
                        </p>

                        <p>changing the subject, I also really like <span> music</span> and making music so much that I have a <span>soundcloud</span> where I post them</p>
                        <div className="go-home">
                            <Fade
                                cascade
                                direction="right"
                                duration={800}
                                triggerOnce
                            >
                                <a href="#home"><FaHome size={24} />go to home </a>
                            </Fade>
                        </div>

                    </Fade>
                </div>
            </main>
        </section >
    );
};

export default About;
