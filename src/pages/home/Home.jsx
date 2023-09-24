import "./Home.scss";
import '../../styles/Globals.scss';
import { motion } from "framer-motion";
import { RiArrowRightDownLine } from "react-icons/ri";
import { Link } from 'react-scroll'

import Loader from '../../utils/Loader/Loader'
import FramerMagnetic from "../../utils/MagneticButton/MagneticButton";
import "../../components/Arrows.scss";

const Home = () => {
  const headerContent = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 2,
      },
    }
  };


  const bottomContent = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 2,
      },
    }
  };

  return (
    <>
      <Loader section='Home section' />

      <section id="home">
        <main className="grid-layout">

          <motion.div
            variants={headerContent}
            initial="initial"
            animate="animate"
            transition='transition'
            className="header-content">


            <div className="home-title">
              <h1>Paulo</h1>
              <h1>Pirocao.</h1>
            </div>
            <p>Hey, I'm Paulo, a Front-end Developer, UX/UI Designer, Music Producer & Game Developer.</p>
          </motion.div>

          <div className="border"></div>

          <motion.div
            variants={bottomContent}
            initial="initial"
            animate="animate"
            transition='transition'
            className="bottom-content"
          >
            <div className="left-content">
              <div className="text-available">
                Available for freelance <span></span>
              </div>
              <div className="icons">
                <img src="/public/icons/instagram.png" width={40} height={40} alt="" />
                <img src="/public/icons/facebook.png" width={40} height={40} alt="" />
                <img src="/public/icons/linkedin.png" width={40} height={40} alt="" />
              </div>
            </div>

            <FramerMagnetic>
              <Link to="about" smooth={true} className="arrow">
                < RiArrowRightDownLine fill="#fff" size={64} />
              </Link>
            </FramerMagnetic>
          </motion.div>

        </main>
      </section>
    </>
  );
};

export default Home;