import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/Globals.scss';
import '../about/About.scss';
import './Expertises.scss';
import FramerMagnetic from '../../utils/MagneticButton/MagneticButton'

const Expertises = () => {
    const [rotation, setRotation] = useState([]);

    function rotate(i) {
        const newRotation = [...rotation];
        newRotation[i] = !newRotation[i];
        setRotation(newRotation);
    }

    return (
        <section id='expertises'>
            <main className="grid-layout">
                <div className="text-content">
                    <motion.h1>
                        Expertises
                    </motion.h1>
                </div>

                {expertise.map((item, i) => (
                    <details key={i}>
                        <motion.summary onClick={() => rotate(i)}>
                            {item.title}
                            <FramerMagnetic>
                                <div className={`plusminus ${rotation[i] ? 'active' : ''}`}></div>
                            </FramerMagnetic>
                        </motion.summary>
                        <AnimatePresence>
                            <ul>
                                {rotation[i] && (
                                    item.items.map((itemName, index) => (

                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                        >
                                            {itemName}
                                        </motion.li>

                                    ))
                                )}  </ul>
                        </AnimatePresence>
                    </details>
                ))}
            </main>
        </section>
    );
};

export default Expertises;

const expertise = [
    {
        title: 'UX Design',
        items: [
            'User Research',
            'Wireframing',
            'Prototyping',
            'Usability Testing',
            'Information Architecture',
            'Interaction Design'
        ]
    },
    {
        title: 'Core Technologies',
        items: [
            'JavaScript',
            'React',
            'CSS',
            'Sass',
            'Node.js',
            'Webpack',
            'Redux',
            'RESTful APIs',
            'Git',
            'Responsive Web Design'
        ]
    },
    {
        title: 'Webflow Development',
        items: [
            'Webflow CMS',
            'Webflow Interactions',
            'Webflow Hosting'
        ]
    }
];
