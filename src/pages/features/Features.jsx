import React from 'react'
import './Features.scss'

const Features = () => {
    return (
        <>
            <section id='features'>
                <main className="grid-layout">
                    <div className="title">
                        <h1>When selecting real estate, we focus on several important characteristics</h1>
                    </div>
                    <div className="border"></div>

                    {features.map((item) => (
                        <>
                            <div className="feat-header" >
                                <h1>{item.order}</h1>
                                <div className="subtitle">
                                    <p>{item.text}</p>
                                </div>
                                <div className="border"></div>
                            </div>
                        </>
                    ))}
                </main>
            </section >
        </>
    )
}

export default Features;

const features = [
    { order: '01.', text: 'If you have a large family, we will find a spacious apartment with a large dining area - for joint dinners, and with several bathrooms so that no one bothers anyone.' },
    { order: '02.', text: 'If you have a large family, we will find a spacious apartment with a large dining area - for joint dinners, and with several bathrooms so that no one bothers anyone.' },
    { order: '03.', text: 'If you have a large family, we will find a spacious apartment with a large dining area - for joint dinners, and with several bathrooms so that no one bothers anyone.' },
]