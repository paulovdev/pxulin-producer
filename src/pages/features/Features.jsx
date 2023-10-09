import React from 'react'
import './Features.scss'

const Features = () => {
    return (
        <>
            <section id='features'>
                <main className="grid-layout">
                    <div className="title">
                        <h1>When showcasing a portfolio as a web designer and UX/UI specialist, we emphasize several key attributes</h1>
                    </div>
                    <div className="border"></div>

                    {features.map((item) => (
                        <>
                            <div className="feat-header" key={item.order}>
                                <h1>{item.order}</h1>
                                <div className="subtitle">
                                    <p>{item.text}</p>
                                </div>
                                <div className="border"></div>
                            </div>
                        </>
                    ))}
                </main>
            </section>
        </>
    )
}

export default Features;

const features = [
    { order: '01.', text: 'Crafting visually stunning and user-friendly websites that leave a lasting impression.' },
    { order: '02.', text: 'Designing intuitive user interfaces that enhance user experiences and engagement.' },
    { order: '03.', text: 'Optimizing web performance and ensuring responsive designs for various devices.' },
]
