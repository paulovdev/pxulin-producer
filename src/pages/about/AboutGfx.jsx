import React from 'react';
import './AboutGfx.scss';
import '../../styles/Globals.scss';
import { Fade } from 'react-awesome-reveal';

const AboutGfx = () => {
    const gfx = [
        { title: "SICKEE / 2022", image: "/gfx-1.png" },
        { title: "AZ / 2023", image: "/gfx-2.png" },
        { title: "BERZERK - HEARTLSS / 2023", image: "/gfx-3.jpg" },
        { title: "NEVERMIND / 2022", image: "/gfx-4.png" },
    ]
    return (
        <section id='aboutgfx'>
            <main className="grid-layout">
                <div className="text-center">
                    <Fade
                        cascade
                        direction='down'
                        duration={800}
                        triggerOnce>
                        <h1><span>also a </span>GFX<span> designer</span> </h1>
                        <p>
                            I like to make gfx's for any kind of thing, mainly for singers, music producers etc.
                        </p>
                    </Fade>

                    <div className="group-text">
                        <Fade
                            cascade
                            direction='left'
                            duration={800}
                            triggerOnce>
                            {gfx.map((item) => (
                                <div className="gfx-content">

                                    <h1>{item.title}</h1>


                                    <img src={item.image} alt="" />
                                </div>
                            ))}
                        </Fade>
                    </div>


                </div>
            </main>
        </section >
    );
};

export default AboutGfx;
