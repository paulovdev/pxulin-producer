import React from 'react'
import './RecentContent.scss'
import Loader from '../../../utils/Loader/Loader'

const RecentContent2 = () => {
    return (
        <>
            <Loader />
            <section id='recent1'>
                <div className="text-content">
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
                        <p>EDLERAN</p>
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

export default RecentContent2;
