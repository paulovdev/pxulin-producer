import React from 'react'
import { motion } from 'framer-motion';
import './Services.scss'
import '../../styles/Globals.scss';

const Services = () => {
    return (
        <section id='services'>
            <main className='grid-layout'>
                <div className="text-content">
                    <motion.h1>
                        I can help you with ...
                    </motion.h1>
                </div>

                <div className="cards">
                    <div className="card">
                        <div className="order">
                            01
                        </div>
                        <div className="text-card">
                            <h1>Design
                            </h1>
                            <p>
                                With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website.
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="order">
                            02

                        </div>
                        <div className="text-card">
                            <h1>Development</h1>
                            <p>
                                I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. For content management I use Kirby CMS.

                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="order">
                            03
                        </div>
                        <div className="text-card">
                            <h1>The full package</h1>
                            <p>
                                A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Services
