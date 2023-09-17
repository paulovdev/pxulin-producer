import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlinePlus } from 'react-icons/ai'
import '../../styles/Globals.scss';
import '../about/About.scss';
import './Expertises.scss'

const Expertises = () => {
    return (
        <section id='expertises'>
            <main className="grid-layout">
                <div className="text-content">
                    <motion.h1>
                        Expertises
                    </motion.h1>
                </div>

                <div className="bottom-content">
                    <h1>UX Design</h1>
                    <AiOutlinePlus fill='#fff' size={32} />

                </div>
                <div className="border"></div>
                <div className="bottom-content">
                    <h1>Branding</h1>
                    <AiOutlinePlus fill='#fff' size={32} />


                </div>
                <div className="border"></div>
                <div className="bottom-content">
                    <h1>Webflow Development</h1>
                    <AiOutlinePlus fill='#fff' size={32} />

                </div>
                <div className="border"></div>
            </main>
        </section>
    )
}

export default Expertises;
