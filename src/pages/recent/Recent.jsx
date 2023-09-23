import React from 'react';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import SlideText from '../../components/SlideText/SlideText';
import Magnetic from '../../utils/MagneticButton/MagneticButton'

import './Recent.scss';
import '../../styles/Globals.scss';

const Recent = () => {

    return (
        <>
            <SlideText />
            <section id="recent">

                <div className="wrap">

                    {works.map((item, index) => (
                        <div key={index} className="project" id={index}>
                            <div className="left">
                                <span>{item.order}</span>
                                <h1>{item.title}</h1>
                                <h2>{item.subTitle}</h2>
                                <h3>{item.year}</h3>
                                <Magnetic>
                                    <Link to={item.link}><BsFillArrowUpRightCircleFill size={32} fill='#121212' />FULL PROJECT </Link>
                                </Magnetic>
                            </div>
                            <div className="right">
                                <img src={item.img} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Recent;

const works = [
    { img: '/gfx-1.png', year: '2023', title: 'SICKEE', subTitle: 'by @edleran', order: '1 - 3', link: '/recent1' },
    { img: '/gfx-2.png', year: '2021', title: 'AZ', subTitle: 'by @edleran', order: '2 - 3', link: '/recent2' },
    { img: '/gfx-4.png', year: '2022', title: 'NEVERMINE', subTitle: 'by @edleran', order: '3 - 3', link: '/recent3' },
];