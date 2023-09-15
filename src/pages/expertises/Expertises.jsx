import React from 'react';
import { motion } from "framer-motion";
import '../../styles/Globals.scss';
import '../about/About.scss';
import './Expertises.scss'

const Expertises = () => {
    return (
        <section id='expertises'>
            <main className="grid-layout">
                <div className="bottom-content">

                    <div className="first-layout">
                        <h2>Career</h2>
                        <p>2022</p>
                        <p>UX Design Intern</p>
                        <p>Amazon</p>
                    </div>

                    <div className="second-layout">
                        <h2>Expertises</h2>
                        <ul >
                            <li><a href="#">Web designer</a></li>
                            <li><a href="#">UX/UI designer</a></li>
                            <li><a href="#">Free-lance</a></li>
                            <li><a href="#">Producer</a></li>
                        </ul>
                    </div>

                    <div className="third-layout">
                        <h2>Socials</h2>
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
