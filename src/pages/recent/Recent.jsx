import React from 'react';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';

import SlideText from '../../components/SlideText/SlideText';

import './Recent.scss';
import '../../styles/Globals.scss';

const Recent = () => {

    return (
        <>
            <SlideText />
            <section id="recent">

                <div className="image-container">

                    {works.map((item, index) => (
                        <div key={index} className="project" id={index}>
                            <div className="image">
                                <img src={item.img} alt="" />
                                <div className="text">
                                    <h1>{item.title}</h1>
                                    <h2>{item.subTitle}</h2>
                                    <h3>{item.year}</h3>

                                    <Link to={item.link}><BsFillArrowUpRightCircleFill size={32} fill='#ffffff' />FULL PROJECT </Link>

                                </div>
                            </div>
                            <div className="text">


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
    {
        img: '/gfx-2.png',
        year: '2021',
        title: 'AZ',
        subTitle: 'by pxulin',
        link: '/recent1'
    },
    {
        img: '/gfx-1.png',
        year: '2023', title: 'SICKEE',
        subTitle: 'by vivetic',
        link: '/recent2'
    },
    {
        img: '/gfx-3.jpg',
        year: '2022',
        title: 'BERZERK',
        subTitle: 'by pxulin',
        link: '/recent3'
    },
];