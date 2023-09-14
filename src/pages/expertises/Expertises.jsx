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
                
                <div className="bottom-content">

                    <div className="first-layout">
                        <h2>1</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>

                    <div className="second-layout">
                        <h2>2</h2>
                        <ul >
                            <li><a href="#">Web Designer</a></li>
                            <li><a href="#">UX/UI Designer</a></li>
                            <li><a href="#">Free-lance</a></li>
                            <li><a href="#">Producer</a></li>
                        </ul>
                    </div>

                    <div className="third-layout">
                        <h2>3</h2>
                        <div className="icons">
                            <img src="/icons/insta.png" alt="" />
                            <img src="/icons/figma.png" alt="" />
                            <img src="/icons/behance.png" alt="" />
                        </div>
                    </div>
                </div>


            </main>
        </section>
    )
}

export default Expertises;
