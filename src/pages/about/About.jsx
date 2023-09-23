import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import './About.scss';
import '../../styles/Globals.scss';

const About = () => {
    const controls = useAnimation();
    const subTextControls = useAnimation();

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, x: 0, transition: { duration: 1 } });
            subTextControls.start({ opacity: 1, x: 0, });
        }
    }, [inView, controls, subTextControls]);

    return (
        <section id='about' ref={ref}>
            <main className="grid-layout">
                <div className='text-content'>
                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        animate={controls}
                    >A BIT ABOUT ME
                    </motion.h1>


                    <div className="sub-text-content">
                        <motion.h2
                            initial={{ opacity: 0, x: 100 }}
                            animate={subTextControls}
                            transition={{ duration: 1 }}>
                            My name is Paulo Vitor i'm 20 years old.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: 100 }}
                            animate={subTextControls}
                            transition={{ duration: 1 }}
                        >
                            I'm a front-end developer with a passion for creating beautiful and joyful digital experiences. In addition to programming, I love design, games, and travel.

                        </motion.p >
                    </div>
                </div>
            </main>
        </section>
    );
};

export default About;





