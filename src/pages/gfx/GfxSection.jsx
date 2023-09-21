import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import './Gfx.scss';
import '../../styles/Globals.scss';
import Loader from "../../utils/Loader/Loader";


const GfxSection = () => {
    const controls = useAnimation();
    const controls1 = useAnimation();

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0, transition: { duration: 1, delay: 3 } });
            controls1.start({ opacity: 1, y: 0, transition: { duration: 1 } });
        }

    }, [inView, controls, controls1]);

    const gfxHeader = {
        initial: {
            opacity: 0,
            x: -1000,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                delay: 3,
            },
        }
    };

    return (
        <>
            <Loader />
            <main id="gfx" ref={ref}>
                <div className="grid-layout">
                    <div className="text-center">
                        <motion.h1
                            variants={gfxHeader}
                            initial="initial"
                            animate="animate"
                            transition='transition'
                        >GFX Works
                        </motion.h1>
                    </div>

                    <div className="sub-text-content">
                        <motion.h2
                            variants={gfxHeader}
                            initial="initial"
                            animate="animate"
                            transition='transition'>Here, I flex my skills and show off my epic projects. I'm all about pushing boundaries, thinking outside the box, and making waves in the digital realm.

                        </motion.h2>
                    </div>

                    <div className="group-text"  >

                        <motion.div className="gfx-content"
                            initial={{ opacity: 0, y: 1000 }}
                            animate={controls1} >
                            <img src='/gfx-3.jpg' alt="" />
                            <div className="gfx-text" >
                                <h4>BERZERK</h4>
                                <h5>2023"</h5>
                            </div>
                        </motion.div>

                        <motion.div className="gfx-content"
                            initial={{ opacity: 0, y: 1000 }}
                            animate={controls}>
                            <img src='/gfx-1.png' alt="" />
                            <div className="gfx-text" >
                                <h4>SICKEE </h4>
                                <h5>2022"</h5>
                            </div>
                        </motion.div>

                        <motion.div className="gfx-content"
                            initial={{ opacity: 0, y: 1000 }}
                            animate={controls1} >
                            <img src='/gfx-2.png' alt="" />
                            <div className="gfx-text" >
                                <h4>AZ </h4>
                                <h5>2021"</h5>
                            </div>
                        </motion.div>

                        <motion.div className="gfx-content"
                            initial={{ opacity: 0, y: 1000 }}
                            animate={controls1} >
                            <img src='/gfx-4.png' alt="" />
                            <div className="gfx-text" >
                                <h4>AZ </h4>
                                <h5>2021"</h5>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </main >
        </>
    );
};

export default GfxSection;