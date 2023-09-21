import React from 'react';
import './Recent.scss';
import '../../styles/Globals.scss';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SlideText from '../../components/SlideText/SlideText';
const Recent = () => {
    return (
        <div id="recent">
            <SlideText />
            <main className='grid-layout'>
                <div className="project">
                    {works.map((item) => (
                        <>

                            <div className="projects">
                                <img src={item.img} alt="" />
                                <div className="texts">
                                    <p>{item.year}</p>
                                    <p>{item.title}</p>
                                    <Link to={item.link}>See full project</Link>
                                </div>
                            </div>

                        </>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Recent;

const works = [
    { img: '/gfx-1.png', year: '2023', title: 'Cubic Harmony: Nature and Technology', link: '/recent1' },
    { img: '/gfx-2.png', year: '2021', title: 'Modern Steel Structure', link: '/recent2' },
    { img: '/gfx-4.png  ', year: '2022', title: 'Serenity by the Water', link: '/recent3' },
]
