import React from 'react';
import { motion } from "framer-motion";
import '../../styles/Globals.scss';
import '../about/About.scss';
import './Expertises.scss'

const Expertises = () => {
    return (
        <section id='expertises'>
            <main className="grid-layout">
                <div className='text-content-center'>
                    <motion.h1>EXPERTISES</motion.h1>
                </div>
                <ul id='exp'>
                    <li><a href="#">Web Designer</a></li>
                    <li><a href="#">UX/UI Designer</a></li>
                    <li><a href="#">Free-lance</a></li>
                    <li><a href="#">Producer</a></li>
                </ul>




            </main>
        </section>
    )
}

export default Expertises
