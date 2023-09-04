import "./Home.scss";
import '../../styles/Globals.scss';
import '../../components/Arrows.scss';
import { AiOutlineInstagram, AiOutlineBehance, AiOutlineGithub } from 'react-icons/ai'
import { BsArrowDown } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <section id="home">
      <main className="grid-layout">
        <div className="home-header">
          <Fade
            cascade
            direction="down"
            duration={800}
            delay={600}
            triggerOnce
          >
            <h2>PXULIN</h2>
            <h1>IS A WEB DEVELOPER AND UX/UI DESIGNER</h1>
            <button><a href="#projects">SEE MY WORKS</a></button>
          </Fade>
        </div>

        <Fade
          cascade
          direction="down"
          duration={800}
          delay={1200}
          triggerOnce
        >

          <div className="bottom-content">
            <Fade
              cascade
              direction="right"
              duration={800}
              delay={1600}
              triggerOnce
            >
              <ul>
                <li><img src="/icons/insta.png" width={42} alt="" /></li>
                <li><img src="/icons/behance.png" width={42} alt="" /></li>
                <li><img src="/icons/figma.png" width={42} alt="" /></li>
              </ul>

              <div className="arrow-container">
                <p>SCROLL DOWN</p>
                <div className="arrow">
                  <a href="#about">
                    <BsArrowDown size={32} fill="#fff" />
                  </a>
                </div>


              </div>

            </Fade>
          </div>
        </Fade>

      </main >
    </section >
  );
};

export default Home;