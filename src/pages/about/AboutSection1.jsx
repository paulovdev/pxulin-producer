import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.scss';
import '../../styles/Globals.scss';

const AboutSection1 = () => {
    const BoxVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, x: -500 },
    };

    const BoxVariants2 = {
        visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1 } },
        hidden: { opacity: 0, x: 500, scale: 4 },
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
                <div className='text-content-left' ref={ref1}>

                    <motion.h1 animate={controls1} initial="hidden" variants={BoxVariants}>
                        THE VISION
                    </motion.h1>
                    <motion.p animate={controls1} initial="hidden" variants={BoxVariants}>
                        MY VISION IS TO USE MY SKILLS AND ABILITIES TO HELP PEOPLE AND MAKE THE WORLD A BETTER PLACE.
                    </motion.p>

                    <div className="sub-text-content">

                        <motion.p animate={controls2} initial="hidden" variants={BoxVariants2}>
                            The fusion of heavy metal, rap, and scream, paired with PXULIN's futuristic identity, offers dark creative works that are unmatched and lead to their most unexpected yet quintessentially PXULIN project so far - PXULIN.
                        </motion.p>
                        <motion.p animate={controls2} initial="hidden" variants={BoxVariants2}>
                            PXULIN is a curated collection that encapsulates PXULIN's honesty, expression, and vibrant energy. PXULIN is an independent project unlike anything previously released by PXULIN. It offers you the opportunity to physically absorb PXULIN's energy for the first time.
                        </motion.p>
                    </div>

                </div>
            </main>
        </section>
    );
};

export default AboutSection1;




{/*         <div className="go-home">
                        <a href="#">Web design</a>
                        <a href="#">Product design</a>
                        <a href="#">Digital experiences</a>
                        <a href="#">UI/UX</a>
                    </div> */}