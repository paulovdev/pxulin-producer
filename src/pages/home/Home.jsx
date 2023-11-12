import "./Home.scss";
import "../../styles/Globals.scss";

import { Link } from "react-scroll";

import Loader from "../../utils/Loader/Loader";

const Home = () => {
  return (
    <>
      <Loader section="Home section" />
      <div className="blur-background"></div>
      <section id="home">
        <main className="grid-layout">
          <div className="header-content">
            <h1>We integrate strategy, creativity and experience to build brands.</h1>
          </div>

          <div className="bottom-content">
            <Link to="about" smooth={true} className="scroll-down">
              <img
                className="round-text"
                src="/scroll-down.gif"
                width={40}
                height={60}
                alt=""
              />
            </Link>
          </div>
        </main>
      </section>
    </>
  );
};

export default Home;
