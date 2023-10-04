import "./Home.scss";
import '../../styles/Globals.scss';

import { RiArrowRightDownLine } from 'react-icons/ri'

import { Link } from 'react-scroll'

import Loader from '../../utils/Loader/Loader'

const Home = () => {

  return (
    <>
      <Loader section='Home section' />

      <section id="home">

        <main className="grid-layout">
          <div className="header-content">
            <h1>PAULIN</h1>
          </div>
          <div className="border"></div>

          <div className="middle-content">
            <h3>Rio de Janeiro, Brazil
              <br /> Local Time → 21:44 PM
            </h3>

            <h3>Monday
              <br />October 2, 2023
            </h3>

            <Link to="about" smooth={true} className="arrow">
              < RiArrowRightDownLine size={64} />
            </Link>


          </div>



        </main>
      </section>
    </>
  );
};

export default Home;


{/*          <p>©2023</p> */ }