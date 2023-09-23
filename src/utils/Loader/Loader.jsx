import React from 'react'
import { motion } from 'framer-motion'
import './Loader.scss'

const Loader = () => {
    return (
        <>
            <motion.div
                animate={{ y: '100%', background: "#000" }}
                transition={{
                    delay: 2,
                    type: "spring",
                }}
                className="loader">
                <div className='noise'>
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: "0", transition: 1 }}
                        className='loading'
                    >
                        <img src="/loading.gif" width={50} alt="" />
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}

export default Loader
