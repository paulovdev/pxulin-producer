import "./Home.scss";
import '../../styles/Globals.scss';
import '../../components/Arrows.scss';
import { motion } from "framer-motion";
import HomeText from "../../components/HomeText/HomeText";
import Loader from '../../utils/Loader'

const Home = () => {
  const bottomContent = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1,
      },
    }
  };

  return (
    <>
      <Loader section='HOME SECTION' />
      <section id="home">
        <div className="background"></div>
        <HomeText />
        <main className="grid-layout">
          <div className="bottom-content">
            <motion.div
              variants={bottomContent}
              initial="initial"
              animate="animate"
              transition='transition'
              className="text-content"
            >
              <p>
                PXULIN® ― Design for digital solutions, specialized in building brands, websites and interactive applications. Work by Paulo Vitor, Web Dev and UX/UI Designer.
              </p>
            </motion.div>

            <motion.div
              variants={bottomContent}
              initial="initial"
              animate="animate"
              className="arrow-container"
            >
              <p>SCROLL DOWN</p>
              <div className="arrow">
                <img src="/scroll.gif" width={50} alt="" />
              </div>
            </motion.div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Home;