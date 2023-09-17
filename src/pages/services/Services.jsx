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
                        Services
                    </motion.h1>
                </div>

                <div className="cards">
                    <div className="card">
                        <div className="img-card">
                            <img src="/icons/figma.png" alt="" />
                        </div>
                        <div className="text-card">
                            <h1>UI/UX Design
                            </h1>
                            <p>
                                Boost your website with an eye-catching design, backed up by smooth UX and creativity.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="img-card">
                            <img src="/icons/insta.png" alt="" />

                        </div>
                        <div className="text-card">
                            <h1>React Dev.</h1>
                            <p>You coming in for an amazing custom Webflow website, crafted with expertise and attention to detail.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="img-card">
                            <img src="/icons/behance.png" alt="" />
                        </div>
                        <div className="text-card">
                            <h1>Behance Content</h1>
                            <p>Get a pixel-perfect, beautifully animated, and well-structured Webflow site based on your hi-fi prototype.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="img-card">
                            <img src="/icons/nft.png" alt="" />
                        </div>
                        <div className="text-card">
                            <h1>NFT Creator</h1>
                            <p>Explosions of color, flashy collisions of pixels, sensory overload – our NFTs are different. The courage to pare things down and embrace original concepts is what makes them come alive.</p>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Services
