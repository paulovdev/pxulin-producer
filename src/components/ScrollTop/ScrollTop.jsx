import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

import { AiOutlineArrowUp } from 'react-icons/ai'
import './ScrollTop.scss';


const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 700) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0
        });
    };


    return (
        <div
            className='scroll-top'
            onClick={scrollToTop}>
            <Link to='noise' smooth={true}>
                <motion.button
                    initial={{ opacity: 0, x: 500 }}
                    animate={{
                        opacity: isVisible ? 1 : 0,
                        x: isVisible ? 0 : 500,
                    }}
                    transition={{ duration: 1 }}
                >
                    <AiOutlineArrowUp size={22} />
                </motion.button>
            </Link>
        </div>
    );
};

export default ScrollTop;
