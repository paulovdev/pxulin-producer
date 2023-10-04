import { useState, useRef, useEffect } from 'react';
/* import { Link } from 'react-router-dom'; */
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import './Recent.scss';
import '../../styles/Globals.scss';

const Recent = () => {

    const scaleAnimation = {
        initial: { scale: 0, x: "-50%", y: "-50%" },
        enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
        closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
    }

    const cursor = useRef(null);
    const cursorLabel = useRef(null);
    const [active, setActive] = useState(false);


    useEffect(() => {
        let xMoveCursor = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
        let yMoveCursor = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })
        //Move cursor label
        let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" })
        let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" })

        window.addEventListener('mousemove', (e) => {
            const { pageX, pageY } = e;
            xMoveCursor(pageX)
            yMoveCursor(pageY)
            xMoveCursorLabel(pageX)
            yMoveCursorLabel(pageY)
        })
    }, [])

    return (
        <div>
            <section id="recent">
                <motion.div ref={cursor} className='cursor' variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
                <motion.div ref={cursorLabel} className='cursorLabel' variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
                <div className="image-container">
                    {works.map((item, index) => (
                        <motion.div
                            key={index}
                            className="project"
                            onMouseEnter={() => {
                                setActive(true)
                            }}
                            onMouseLeave={() => {
                                setActive(false)
                            }}
                        >
                            <div className="text">
                                <div className="a">
                                    <h1>{item.title}</h1>
                                    <h2>{item.year}</h2>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Recent;

const works = [
    {
        year: '2022',
        title: 'Kapa99',
        link: '/recent3',
    },
    {
        year: '2021',
        title: 'Wellness House',
        link: '/recent3',
    },
    {
        year: '2022',
        title: 'Gatha',
        link: '/recent3',
    },
    {
        year: '2020',
        title: 'Circular Systems',
        link: '/recent3',
    },
];
