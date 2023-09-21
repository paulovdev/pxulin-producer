import React from 'react'
import { motion } from 'framer-motion';

import './Contact.scss'
import '../../styles/Globals.scss';
import Loader from "../../utils/Loader/Loader";

const Contact = () => {
    return (
        <>
            <Loader />

            <section id='contact'>
                <main className='grid-layout'>
                    <div className="text-content">
                        <motion.h1>
                            Send me a message!
                        </motion.h1>
                        <p>Got a question or proposal, or just want
                            to say hello? Go ahead.</p>
                    </div>
                </main>
            </section >
        </>
    )
}

export default Contact;
