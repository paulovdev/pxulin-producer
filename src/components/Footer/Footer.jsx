import './Footer.scss'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { Link } from 'react-scroll'

import ScrollTop from '../ScrollTop/ScrollTop'

const Footer = () => {
    return (
        <footer>
            <ScrollTop />
            <Link to="home" smooth={true}>
                <AiOutlineArrowUp size={62} />
            </Link>
        </footer>
    )
}

export default Footer
