import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.scss';
import '../../styles/Globals.scss';

const AboutSection3 = () => {
    const BoxVariants = {
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, y: 300 },
    };

    const controls1 = useAnimation();


    const [ref1, inView1] = useInView();

    useEffect(() => {
        if (inView1) {
            controls1.start("visible");

        }
    }, [controls1, inView1]);

    return (
        <section id='about'>
            <main className="grid-layout">
                <div className='text-content-center' ref={ref1}>
                    <motion.h1 animate={controls1} initial="hidden" variants={BoxVariants}>
                        EXPERTISES
                    </motion.h1>
                    <motion.p animate={controls1} initial="hidden" variants={BoxVariants}>
                        I HAVE A WEALTH OF EXPERIENCE IN A VARIETY OF FIELDS, INCLUDING MARKETING, SALES, AND CUSTOMER SERVICE.
                    </motion.p>
                </div>
            </main>
        </section>
    );
};

export default AboutSection3;
