import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardReturn } from 'react-icons/md';

import './WorksContent.scss';

import Loader from '../../../utils/Loader/Loader';

const WorksC1 = () => {
    return (
        <>
            <Loader />
            <section id='recent1'>
                <div className="text-content">

                    <div className="return">
                        <Link to='/'><MdKeyboardReturn fill='#fff' size={50} /></Link>
                    </div>

                    <h1>THE BATMAN</h1>
                    <h1>LANDING PAGE</h1>
                    <p>Simple and beautiful, landing page for a turbine page for the batman movie</p>
                </div>

                <div
                    style={{
                        background: 'url(/gfx-2.png) no-repeat center',
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed',
                        width: '100%',
                        height: '900px',
                        margin: '5rem'
                    }}>
                </div>

                <div className="specs">
                    <div className="col">
                        <h1>TYPOGRAPH</h1>
                        <p>Poppins</p>
                    </div>

                    <div className="col">
                        <h1>COLOR PALETTE</h1>
                        <div className='color-pallete'>
                            <span>HEX #f70122</span>
                        </div>
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

export default WorksC1;
