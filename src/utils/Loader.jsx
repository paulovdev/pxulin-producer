import React from 'react'
import { motion } from 'framer-motion'
import './Loader.scss'

const Loader = ({ section }) => {
    return (
        <>
            <motion.div
                animate={{ y: '100%', background: "#000" }}
                transition={{
                    delay: 1,
                    type: "spring",
                }}
                className="preloader">
                <div className='noise'>
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: "0", transition: 2 }}

                    >

                        <h1> {section}</h1>

                    </motion.div>
                </div>
            </motion.div>

        </>
    )
}

export default Loader
