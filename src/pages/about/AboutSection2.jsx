import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.scss';
import '../../styles/Globals.scss';

const AboutSection2 = () => {
    const BoxVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, x: 300 },
    };

    const BoxVariants2 = {
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, x: -300 },
    };

    const controls1 = useAnimation();
    const controls2 = useAnimation();

    const [ref1, inView1] = useInView();

    useEffect(() => {
        if (inView1) {
            controls1.start("visible");
            controls2.start("visible");
        }
    }, [controls1, controls2, inView1]);



    return (
        <section id='about'>
            <main className="grid-layout">
                <div className='text-content-right' ref={ref1}>
                    <motion.h1 animate={controls1} initial="hidden" variants={BoxVariants}>ABOUT ME
                    </motion.h1>
                    <motion.p animate={controls1} initial="hidden" variants={BoxVariants}>
                        I WILL TRY MY BEST TO FOLLOW YOUR INSTRUCTIONS AND COMPLETE YOUR REQUESTS THOUGHTFULLY.
                    </motion.p>

                    <div className="sub-text-content">
                        <motion.p animate={controls2} initial="hidden" variants={BoxVariants2}>My name is Paulo Vitor, I'm 20 years old. I'm a front-end developer with a passion for creating beautiful and joyful digital experiences. In addition to programming, I love design, games, and travel.</motion.p>
                        <motion.p animate={controls2} initial="hidden" variants={BoxVariants2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rem fugiat hic totam beatae magni architecto quis ad nihil, dignissimos, nemo pariatur ea corporis, debitis minus sequi aperiam quia atque!</motion.p>
                    </div>

                </div>
            </main>
        </section>
    );
};

export default AboutSection2;





