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
                            <div className="text">
                                <div className="a">
                                    <h1>{item.title}</h1>
                                    <h2>{item.year}</h2>
                                </div>
                                <div className="b">
                                    <h2>{item.subTitle}</h2>
                                    <Link to={item.link}><BsFillArrowUpRightCircleFill size={32} fill='#121212' />View </Link>
                                </div>

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

        year: '2022',
        title: 'Berserk',
        subTitle: 'Web Design, Webflow Development',
        link: '/recent3'
    },
    {

        year: '2021',
        title: 'Vivetic',
        subTitle: 'Web Design, Webflow Development',
        link: '/recent3'
    },
    {

        year: '2022',
        title: 'Kinin',
        subTitle: 'Web Design, Webflow Development',
        link: '/recent3'
    },

    {

        year: '2020',
        title: 'Chiriguita',
        subTitle: 'Web Design, Webflow Development',
        link: '/recent3'
    },
];