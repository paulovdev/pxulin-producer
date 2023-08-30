import "./Home.scss";
import '../../styles/Globals.scss';
import '../../components/Arrows.scss';

import { MdKeyboardArrowDown } from "react-icons/md";
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
            <h1>FRONT-END <span>developer</span>  <span>and</span></h1>
            <h1>UX/UI  <span>designer</span></h1>
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
                <MdKeyboardArrowDown size={32} fill="#000" />
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

            <Fade
              cascade
              direction="down"
              className="animation"
              duration={800}
              delay={3300}
              triggerOnce
            >
              <p>
                I present to you my "external contents", dedicated spaces to share my music and games. Your presence is valued, so I cordially invite you to follow me on this journey. Here you'll have access to engaging melodies. For a unique experience, don't hesitate to explore the links below.
              </p>

            </Fade>
          </div>

        </Fade>

      </main>
    </section>
  );
};

export default Home;