import React from 'react'
import './Footer.scss'
import { AiOutlineArrowUp } from 'react-icons/ai'
const Footer = () => {
    return (
        <footer>
            <section id='footer'>
                <p>© 2023 PXULIN</p>
                <AiOutlineArrowUp size={42} onClick={() => scrollTo({ top: 0 })} />
            </section>
        </footer>
    )
}

export default Footer
