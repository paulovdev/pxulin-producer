import React from 'react'
import './Home.scss'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Fade } from 'react-awesome-reveal';
import { Tooltip as ReactTooltip } from "react-tooltip";

const Home = () => {
  return (
    <>
      <div className="background-text-home">

      </div>
      <div id='home'>

        <div className="grid-layout">

          <div className="home-content">

            <Fade cascade direction='down' duration={400} triggerOnce>
              <h1>pxulin, music producer</h1>
              <p>Pxulin is a music artist who has uploaded songs, albums, and playlists on SoundCloud. Some of the tracks available on the platform</p>
              <p>Pxulin's music can be streamed for free on SoundCloud, both on desktop and mobile devices. The artist's profile on the platform allows users to discover followers and stream tracks, albums, and playlists</p>
            </Fade>

            <Fade cascade direction='down' duration={400} delay={800} triggerOnce>
              <a href="https://soundcloud.com/pxulin" target='__blank'>
                <div className="button-container" data-tooltip-id="my-tooltip-1">

                  <span>SOUNDCLOUD</span>
                  <BsFillArrowRightCircleFill size={32} />

                </div>
              </a>
            </Fade>

          </div>

          <Fade cascade direction='down' duration={400} delay={1800} triggerOnce>
            <div className="arrow">
              <a href="#gang">
                <MdKeyboardArrowDown color='#fff' size={42} />
              </a>
            </div>
          </Fade>

        </div>

        <ReactTooltip
          id="my-tooltip-1"
          place="bottom"
          content="Go to my SoundCloud page?"
        />
      </div >
    </>
  )
}

export default Home;