import "./Home.scss";
import '../../styles/Globals.scss';
import '../../components/Arrows.scss';
import { BsArrowDown, BsFillArrowRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Home = () => {
  const homeHeader = {
    y: -100,
    opacity: 0,
  };

  const bottomContent = {
    opacity: 0,
    y: 100,
  };

  const arrowContainer = {
    opacity: 0,
    y: 100,
  };

  return (
    <section id="home">
      <main className="grid-layout">
        <div className="home-header">
          <motion.div
            initial={homeHeader}
            animate={{
              y: 0,
              opacity: 1,
              duration: 5000,

            }}
          >

            <h1>A WEB DEVELOPER AND UX/UI DESIGNER</h1>
            <button><a href="#projects">SEE MY WORKS</a><BsFillArrowRightCircleFill size={26} /></button>
          </motion.div>
        </div>

        <div className="bottom-content">
          <motion.ul
            initial={bottomContent}
            animate={{
              y: 0,
              opacity: 1,
              duration: 100,

            }}
          >
            <li><img src="/icons/insta.png" width={42} alt="" /></li>
            <li><img src="/icons/figma.png" width={42} alt="" /></li>
            <li><img src="/icons/behance.png" width={42} alt="" /></li>
          </motion.ul>

          <motion.div
            initial={arrowContainer}
            animate={{
              y: 0,
              opacity: 1,
              duration: 100,

            }}
            className="arrow-container"
          >
            <p>SCROLL DOWN</p>
            <div className="arrow">
              <a href="#about">
                <BsArrowDown size={32} fill="#fff" />
              </a>
            </div>

          </motion.div>

        </div>
      </main>
    </section>
  );
};

export default Home;