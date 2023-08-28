import "./Home.scss";
import '../../styles/Globals.scss';
import '../../components/Arrows.scss';

import { BsArrowDownShort } from "react-icons/bs";
import { SiNike } from 'react-icons/si';
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <section id="home">
      <main className="grid-layout">
        <div className="home-container">
          <Fade
            cascade
            direction="down"
            duration={800}
            delay={600}
            triggerOnce
          >
            <h1>FRONT-END DEVELOPER AND</h1>
            <h1>UI DESIGNER</h1>
            <div className='border'></div>
          
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
            <p>scroll down</p>
            <div className="arrow">
              <a href="#about">
                <BsArrowDownShort size={32} />
              </a>
            </div>
          </div>
          <div className="home-bottom-content">
            <Fade
              cascade
              direction="right"
              duration={800}
              delay={1600}
              triggerOnce
            >
              <ul>
                <li><a href="#">linkedin</a></li>
                <li><a href="#">instagram</a></li>
                <li><a href="#">soundcloud</a></li>
              </ul>
            </Fade>
            <Fade
              cascade
              direction="down"
              className="animation"
              duration={800}
              delay={1600}
              triggerOnce
            >
              <p>
                * PXULIN - I present to you my "external contents", dedicated spaces to share my music and games. Your presence is valued, so I cordially invite you to follow me on this journey. Here you'll have access to engaging melodies. For a unique experience, don't hesitate to explore the links below.
              </p>
              <p>
                Je vous présente mes "contenus externes", des espaces dédiés au partage de mes musiques et jeux. Votre présence est appréciée, c'est pourquoi je vous invite cordialement à me suivre dans ce voyage. Ici, vous aurez accès à des mélodies engageantes. Pour une expérience unique, n'hésitez pas à explorer les liens ci-dessous.
              </p>
            </Fade>
          </div>
        </Fade>
      </main>
    </section>
  );
};

export default Home;