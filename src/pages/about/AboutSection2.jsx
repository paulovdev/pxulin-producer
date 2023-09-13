import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import './About.scss';
import '../../styles/Globals.scss';




const AboutSection2 = () => {
    const controls = useAnimation();
    const subTextControls = useAnimation();

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, x: 0, transition: { duration: 0.5 } });
            subTextControls.start({ opacity: 1, x: 0, });
        }
    }, [inView, controls, subTextControls]);

    return (
        <section id='about' ref={ref}>
            <main className="grid-layout">
                <div className='text-content-right'>
                    <motion.h1
                        initial={{ opacity: 0, x: -1000 }}
                        animate={controls}
                    >ABOUT ME
                    </motion.h1>

                    <div className="sub-text-content">
                        <motion.p
                            initial={{ opacity: 0, x: 1000 }}
                            animate={subTextControls}
                            transition={{ duration: 1 }}
                        >My name is Paulo Vitor, I'm 20 years old. I'm a front-end developer with a passion for creating beautiful and joyful digital experiences. In addition to programming, I love design, games, and travel.</motion.p >

                        <motion.p
                            initial={{ opacity: 0, x: 1000 }}
                            animate={subTextControls}
                            transition={{ duration: 1, delay: 0.1 }}
                        >PXULIN is a curated collection that encapsulates PXULIN's honesty, expression, and vibrant energy. PXULIN is an independent project unlike anything previously released by PXULIN. It offers you the opportunity to physically absorb PXULIN's energy for the first time.</motion.p >
                    </div>
                </div>
            </main>
        </section>
    );
};

export default AboutSection2;





