import React from 'react'
import './Footer.scss'
import { SiNike, SiAdidas, SiBmw, SiAudi } from 'react-icons/si'
import { AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>

            <div className="wrapper">
                <SiNike size={62} color='fff' />
                <SiAdidas size={62} color='fff' />
                <SiBmw size={62} color='fff' />
                <SiAudi size={62} color='fff' />
            </div>
            <AiOutlineArrowUp size={62} onClick={() => scrollTo({ top: 0 })} />

        </footer>
    )
}

export default Footer
