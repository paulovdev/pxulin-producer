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
                <div className="sub-text-content">
                    <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        animate={subTextControls}
                        transition={{ duration: 1 }}
                    >
                        I'm Paulo Vitor, 20 years old,  of my passion for design, code & interaction positions me in a unique place in the web design world.
                    </motion.p >
                    <div className="other-text">
                        <p>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</p>
                        <span>Available to freelance</span>
                    </div>
                </div>

            </main>
        </section>
    );
};

export default About;





{/*                     <div className="text-available">
                        <p>
                            AVAILABLE FOR <b>FREELANCE</b></p>
                        <span></span>
                    </div> */}