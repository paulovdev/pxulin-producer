import React from 'react';
import './AboutGfx.scss';
import '../../styles/Globals.scss';
import { Fade } from 'react-awesome-reveal';

const AboutGfx = () => {
    const gfx = [
        { title: "SICKEE  ", year: "2022", image: "/gfx-1.png" },
        { title: "AZ ", year: "2023", image: "/gfx-2.png" },
        { title: "BERZERK - HEARTLSS ", year: "2019", image: "/gfx-3.jpg" },
        { title: "NEVERMIND ", year: "2020", image: "/gfx-4.png" },
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
                        <h1>ALSO A GFX DESIGNER</h1>
                    </Fade>

                    <div className="group-text">
                        <Fade
                            cascade
                            direction='left'
                            duration={800}
                            triggerOnce>
                            {gfx.map((item) => (
                                <div className="gfx-content">
                                    <img src={item.image} alt="" />
                                    <div className="gfx-text">
                                        <a href="#">{item.title}</a>
                                        <a href="#">{item.year}</a>
                                        <a href="#">alternate</a>
                                        <a href="#">see project</a>

                                    </div>
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
