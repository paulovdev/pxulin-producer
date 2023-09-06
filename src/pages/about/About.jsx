import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import './About.scss';
import '../../styles/Globals.scss';

const About = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const [textRef, textInView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, inView]);

    useEffect(() => {
        if (textInView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, textInView]);

    return (
        <section id='about'>
            <main className="grid-layout">
                <div className="text-content">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 100 }}
                        animate={controls}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>A BIT ABOUT ME</h1>
                    </motion.div>

                    <motion.div
                        ref={textRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={controls}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="sub-text-content">
                            <p>
                                My name is <span>Paulo Vitor</span>, I'm 20 years old. I'm a <span>front-end developer</span> with a passion for creating beautiful and joyful digital experiences. In addition to programming, I love  <span> design</span>,  <span> games</span> and  <span> travel</span>.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rem fugiat hic totam beatae magni architecto quis ad nihil, dignissimos, nemo pariatur ea corporis, debitis minus sequi aperiam quia atque!
                            </p>
                        </div>
                    </motion.div>

                </div>
                <motion.div
                    ref={textRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="go-home">
                        <a href="#">Web design</a>
                        <a href="#">Product design</a>
                        <a href="#">Digital experiences</a>
                        <a href="#"> UI/UX</a>
                    </div>
                </motion.div>
            </main>
        </section>
    );
};

export default About;
