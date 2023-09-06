import React from 'react'
import './Footer.scss'
import { AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <AiOutlineArrowUp size={62} onClick={() => scrollTo({ top: 0 })} />

        </footer>
    )
}

export default Footer
