import React from 'react';
import './Recent.scss';
import '../../styles/Globals.scss';

import { RiArrowRightDownLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import SlideText from '../../components/SlideText/SlideText';
const Recent = () => {
    return (<>
        <SlideText />
        <section id="recent">

            <div className="wrap">

                {works.map((item) => (
                    <>
                        <div className="project">
                            <div className="left">
                                <span>{item.order}</span>
                                <h1>{item.title}</h1>
                                <h2>{item.subTitle}</h2>
                                <h3>{item.year}</h3>
                                <Link to={item.link}>See full project  <RiArrowRightDownLine /></Link>
                            </div>

                            <div className="right">

                                <img src={item.img} alt="" />
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </section>
    </>
    )
}

export default Recent;

const works = [
    { img: '/gfx-1.png', year: '2023', title: 'SICKEE', subTitle: 'by @edleran', order: '1-3', link: '/recent1' },
    { img: '/gfx-2.png', year: '2021', title: 'AZ', subTitle: 'by @edleran', order: '2-3', link: '/recent2' },
    { img: '/gfx-4.png  ', year: '2022', title: 'NEVERMINE', subTitle: 'by @edleran', order: '3-3', link: '/recent3' },
]
