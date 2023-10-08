import React from 'react';
import { Link } from 'react-router-dom';
import { animate, motion } from 'framer-motion'
import './Several.scss';

const Several = () => {
    return (
        <>
            <section id="several">

                <main className="grid-layout">
                    <div className="several-content">
                        <h1>Our Creative Hub</h1>
                        <h1>Explore, Push Boundaries &</h1>
                        <h1>Find Solutions</h1>

                    </div>

                    <motion.div
                        onMouseEnter={{ scale: 1.2 }}
                        className="bottom-content">
                        <Link to='expertises'>
                            <img src="/rounded-text.png" width={200} height={180} alt="" />
                        </Link >
                    </motion.div>
                    <div className="border"></div>
                </main>
            </section>
        </>
    )
}

export default Several;