import React from 'react';


import './About.scss';
import '../../styles/Globals.scss';

const About = () => {


    return (
        <>
            <section id='about'>
                <main className="grid-layout">
                    <div className="about-content">
                        <div className="left">
                            <span>About me</span>
                            <button>Links</button>
                        </div>
                        <div className="right">
                            <h3>Building a digital landscape that’s meaningful, future proof & aesthetically pleasing.</h3>
                            <p>I have been on a journey of learning and growing, with 9 years of experience working remotely with creative individuals from agencies, startups, and small businesses on various design projects.</p>
                        </div>
                    </div>
                </main>
            </section>
        </>

    );
};

export default About;