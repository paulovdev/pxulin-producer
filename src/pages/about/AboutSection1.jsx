import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ImArrowDownRight2 } from 'react-icons/im'

import './About.scss';
import '../../styles/Globals.scss';

const AboutSection1 = () => {
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
                <div className="text-content-left">
                    <motion.h1
                        initial={{ opacity: 0, x: 1000 }}
                        animate={controls}
                    >Design < ImArrowDownRight2 fill='#000' size={60} />
                    </motion.h1>



                    <div className="sub-text-content">
                        <h2> I build & design stuff </h2>
                        <motion.p
                            initial={{ opacity: 0, x: -1000 }}
                            animate={subTextControls}
                            transition={{ duration: 1 }}
                        >I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable.</motion.p >

                        <motion.p
                            initial={{ opacity: 0, x: -1000 }}
                            animate={subTextControls}
                            transition={{ duration: 1, delay: 0.1 }}
                        >PXULIN is a curated collection that encapsulates PXULIN's honesty, expression, and vibrant energy. PXULIN is an independent project unlike anything previously released by PXULIN. It offers you the opportunity to physically absorb PXULIN's energy for the first time.</motion.p >

                    </div>
                </div>
            </ main>
        </section >
    );
};

export default AboutSection1;