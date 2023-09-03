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
          >  <p>© 2023 PXULIN</p>
            <h1>WEB DEVELOPER</h1>
            <span>UX/UI DESIGNER</span>

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
              <div className="arrow-container">
                <div className="arrow">
                  <a href="#about">
                    <BsArrowDown size={32} fill="#ffffff" />
                  </a>

                </div>
              </div>
              <p>All original content on the site, including  texts, images, videos, graphics, music and any other creative work , is automatically copyrighted as soon as it is created and published on the site. Unauthorized use of this content may result in copyright infringement.</p>
            </Fade>
          </div>
        </Fade>

      </main >
    </section >
  );
};

export default Home;