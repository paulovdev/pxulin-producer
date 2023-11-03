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
            <h1>A web developer & ux/ui designer</h1>
          </div>

          <div className="bottom-content">
            <p>
              I assist companies in creating human ✧ focused online interactions
              via ✺︎ design
            </p>

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
