import "./Home.scss";
import '../../styles/Globals.scss';
import '../../components/Arrows.scss';
import { motion } from "framer-motion";
import { BsArrowDown } from "react-icons/bs";
import { Link } from 'react-scroll'
import Loader from '../../utils/Loader/Loader'
import FramerMagnetic from "../../utils/MagneticButton/MagneticButton";


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
        duration: 1,
        delay: 3,
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
        duration: 1,
        delay: 3,
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
            <h1>Front-end</h1>
            <h1>Developer.</h1>

            <p>I like to craft solid and scalable frontend products with great user experiences.</p>
          </motion.div>

          <div className="bottom-content">
            <motion.div
              variants={bottomContent}
              initial="initial"
              animate="animate"
              transition='transition'
              className="text-content"
            >
              <p>
                Highly skilled at progressive enhancement, design systems & UI Engineering.
              </p>

              <p>Proven experience building successful products for clients across several countries.</p>
            </motion.div>


            <FramerMagnetic>
              <motion.div
                variants={bottomContent}
                initial="initial"
                animate="animate"
                className="arrow-container"
                whileHover={{ scale: 1.1 }}
              >
                <div className="arrow">
                  <Link to="about" smooth={true} className="arrow">
                    <BsArrowDown fill="#636363" />
                  </Link>
                </div>
              </motion.div>
            </FramerMagnetic>


          </div>
        </main>
      </section>
    </>
  );
};

export default Home;