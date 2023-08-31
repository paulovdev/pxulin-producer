import "./Home.scss";
import '../../styles/Globals.scss';
import '../../components/Arrows.scss';

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
            <h1>FRONT-END <span>developer</span></h1>
            <h1>UX/UI <span>designer</span></h1>
            <p>© 2023 PXULIN</p>
          </Fade>
        </div>

        <Fade
          cascade
          direction="down"
          duration={800}
          delay={1200}
          triggerOnce
        >
          <div className="arrow-container">
            <p>SCROLL DOWN</p>
            <div className="arrow">
              <a href="#about">
                <BsArrowDown size={32} fill="#000" />
              </a>

            </div>
          </div>


          <div className="social-list">
            <Fade
              cascade
              direction="right"
              duration={800}
              delay={1600}
              triggerOnce
            >
              <ul>

                <li><a href="#">instagram</a></li>
                <li><a href="#">facebook</a></li>
                <li><a href="#">twitter</a></li>
                <li><a href="#">linkedin</a></li>

              </ul>
            </Fade>
          </div>

        </Fade>

      </main>
    </section>
  );
};

export default Home;