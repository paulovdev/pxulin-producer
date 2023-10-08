import "./Home.scss";
import '../../styles/Globals.scss';

import { Link } from 'react-scroll'

import Loader from '../../utils/Loader/Loader'

const Home = () => {

  return (
    <>
      <Loader section='Home section' />

      <section id="home">

        <main className="grid-layout">
          <div className="header-content">
            <p>©2023</p>
            <h1>Paulin</h1>
            <h1>Web Designer</h1>
          </div>
          <div className="bottom-content">

            <div>
              <Link to="about" smooth={true} className="scroll-down">
                <div className="line"></div>
                <p>SCROLL</p>

              </Link>
            </div>


            <p className="sub-text">A skilled digital designer and artdirector who specializes in webdesign, UX/UI, Framer, and no-codetools.</p>

          </div>


        </main>
      </section>
    </>
  );
};

export default Home;
