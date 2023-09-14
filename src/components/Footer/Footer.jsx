import React from 'react'
import './Footer.scss'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <footer>
            <Link to="home" smooth={true}>
                <AiOutlineArrowUp size={62} />
            </Link>
        </footer>
    )
}

export default Footer
