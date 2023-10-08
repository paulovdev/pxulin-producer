import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardReturn } from 'react-icons/md';

import './WorksContent.scss';

import Loader from '../../../utils/Loader/Loader';

const WorksC2 = () => {
    return (
        <>
            <Loader />
            <section id='recent1'>
                <div className="text-content">
                    <div className="return">
                        <Link to='/'><MdKeyboardReturn fill='#fff' size={50} /></Link>
                    </div>

                    <h1>SICKEE</h1>
                    <p>After doing some research and brainstorming with my team, we came up with a creative design</p>
                </div>

                <div
                    style={{
                        background: 'url(/gfx-1.png) no-repeat center',
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed',
                        width: '100%',
                        height: '900px',
                        margin: '5rem'
                    }}>
                </div>

                <div className="specs">
                    <div className="col">
                        <h1>CLIENT</h1>
                        <p>INER.Co</p>
                    </div>

                    <div className="col">
                        <h1>SERVICE</h1>
                        <p>GFX</p>
                    </div>

                    <div className="col">
                        <h1>YEAR</h1>
                        <p>2022</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorksC2;
