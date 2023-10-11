import "./Home.scss";
import "../../styles/Globals.scss";

import { GoArrowDown } from "react-icons/go";
 import { Link } from "react-scroll";

import Loader from "../../utils/Loader/Loader";

const Home = () => {
  return (
    <>
      <Loader section="Home section" />

      <section id="home">
        <main className="grid-layout">
          <div className="header-content">
            <p>©2023</p>
            <h1>Paulin</h1>
            <h1>Web Designer</h1>
          </div>

          <div className="bottom-content">
            <Link to="about" smooth={true} className="scroll-down">
              <img src="/rounded-text-2.png" width={150} height={150} alt="" />
              <GoArrowDown size={44} />
            </Link>

            <p className="sub-text">
              A skilled digital designer and artdirector who specializes in
              webdesign, UX/UI, Framer, and no-codetools.
            </p>
          </div>
        </main>
      </section>
    </>
  );
};

export default Home;
