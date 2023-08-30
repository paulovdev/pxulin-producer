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
                        <h1 style={{ fontWeight: '900' }}>ABOUT</h1>
                        <h1>Can <span> we make it</span> better?</h1>
                        <p>
                            My name is Paulo Vitor, I have 20 years old.
                            I am a Frontend developer who is passionate about developing beautiful and joyful digital experiences. Besides Programming, I love design, music and travelling.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ut esse autem debitis nihil magnam quisquam exercitationem numquam nisi ad, eos voluptatibus accusamus dolorum illo adipisci eveniet culpa. Iste, porro!
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ut esse autem debitis nihil magnam quisquam exercitationem numquam nisi ad, eos voluptatibus accusamus dolorum illo adipisci eveniet culpa. Iste, porro!
                        </p>

                        <div className="text-center">
                            <Fade
                                cascade
                                direction='down'
                                duration={800}
                                triggerOnce>
                                <h1><span>I'm also a </span>GFX<span> designer</span> </h1>

                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores ut esse autem debitis nihil magnam quisquam exercitationem numquam nisi ad, eos voluptatibus accusamus dolorum illo adipisci eveniet culpa. Iste, porro!
                                </p>

                                <div className="group-text">
                                    <img src="/city.webp" width={800} alt="" />
                                </div>
                            </Fade>
                        </div>

                    </Fade>
                </div>
            </main>

        </section>
    );
};

export default About;
