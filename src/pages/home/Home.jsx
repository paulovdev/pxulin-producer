import "./Home.scss";
import "../../styles/Globals.scss";

import { Link } from "react-scroll";

import Loader from "../../utils/Loader/Loader";

const Home = () => {
  return (
    <>
      <Loader section="Home section" />

      <section id="home">
        <main className="grid-layout">
          <div className="header-content">
            <h1>
              A <span>web</span> developer & <span>ux/ui</span> designer
            </h1>

            <Link to="about" smooth={true} className="scroll-down">
              <img
                className="round-text"
                src="/round-text.png"
                width={150}
                height={160}
                alt=""
              />
            </Link>
          </div>

          <div className="bottom-content">
            <p>
              I assist companies in creating human ✧ focused online interactions
              via ✺︎ design
            </p>
          </div>
        </main>
      </section>
    </>
  );
};

export default Home;
