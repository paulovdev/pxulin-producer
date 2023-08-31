import React from 'react';
import './AboutGfx.scss';
import '../../styles/Globals.scss';
import { Fade } from 'react-awesome-reveal';


const AboutGfx = () => {
    return (
        <section id='aboutgfx'>
            <main className="grid-layout">
                <div className="text-center">
                    <Fade
                        cascade
                        direction='down'
                        duration={800}
                        triggerOnce>
                        <h1><span>I'm also a </span>GFX<span> designer</span> </h1>

                        <p>
                            I like to make gfx's for any kind of thing, mainly for singers, music producers etc.
                        </p>
                        <div className="group-text">
                            <img src="/gfx-1.webp" alt="" />
                            <img src="/gfx-2.webp" alt="" />
                            <img src="/gfx-3.webp" alt="" />
                        </div>
                    </Fade>

                </div>
            </main>
        </section >
    );
};

export default AboutGfx;
