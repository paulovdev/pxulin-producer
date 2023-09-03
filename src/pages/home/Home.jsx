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
            <div className="t-1">
              <h1>WEB</h1>
              <span>DEVELOPER</span>
            </div>
            <div className="t-2">
              <h1>UX/UI  </h1>
              <span>DESIGNER</span>
            </div>

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
          <div className="middle-content">

            <div className="logos">
              <img src="/awr.webp" width={50} alt="" />
              <img src="/r.webp" width={50} alt="" />
              <img src="/c.webp" width={50} alt="" />
            </div>
            <div className="arrow-container">
              <p>SCROLL DOWN</p>
              <div className="arrow">
                <a href="#about">
                  <BsArrowDown size={32} fill="#ffffff" />
                </a>

              </div>
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

              <p>All original content on the site, including <span> texts, images, videos, graphics, music</span> and any other <span>creative work</span> , is automatically <span>copyrighted</span> as soon as it is created and published on the site. <span>Unauthorized</span> use of this content may result in <span>copyright infringement</span>.</p>
            </Fade>
          </div>
        </Fade>

      </main >
    </section >
  );
};

export default Home;