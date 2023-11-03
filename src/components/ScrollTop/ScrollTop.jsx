import { Link } from 'react-scroll'

import { AiOutlineArrowUp } from 'react-icons/ai'
import './ScrollTop.scss';


const ScrollTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0
        });
    };


    return (
        <div className='scroll-top'
            onClick={scrollToTop}>
            <Link to='root' smooth={true}>
                <button>
                    <AiOutlineArrowUp size={22} />
                </button>
            </Link>
        </div>
    );
};

export default ScrollTop;
