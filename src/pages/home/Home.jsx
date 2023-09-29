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
            <h1>Paulin</h1>
            <p>©2023</p>
            <div className="border"></div>

          </motion.div>

          <motion.div
            variants={bottomContent}
            initial="initial"
            animate="animate"
            transition='transition'
            className="bottom-content"
          >
            <p>Front-end • UX/UI Designer • Musical Producer • Game Developer</p>
            <p>Highly skilled at progressive enhancement, design systems & UI Engineering.</p>
            <p>Highly skilled at progressive enhancement, design systems & UI Engineering.</p>
            <FramerMagnetic>
              <Link to="about" smooth={true} className="arrow">
                <RiArrowRightDownLine />
              </Link>
            </FramerMagnetic>
          </motion.div>
        </main>
      </section>
    </>
  );
};

export default Home;