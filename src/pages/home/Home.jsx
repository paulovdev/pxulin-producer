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
            <h1>Paulo Vitor </h1>
            <h1>Desenvolvedor front-end</h1>
          </div>

          <div className="bottom-content">
            <Link to="about" smooth={true} className="scroll-down">
              <img src="/rounded-text-2.png" width={150} height={150} alt="" />
              <GoArrowDown size={44} />
            </Link>

            <p className="sub-text">
            Um designer digital qualificado e diretor de arte especializado em webdesign, UX/UI, Framer e ferramentas sem código.
            </p>
          </div>
        </main>
      </section>
    </>
  );
};

export default Home;
