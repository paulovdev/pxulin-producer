import React from 'react'
import './LogoSlide.scss'
import { Fade } from 'react-awesome-reveal';
const LogoSlide = () => {
     return (
          <section id="gang">
               <Fade className='animation' direction='down' duration={800} triggerOnce>
                    <div className="pxulin-music-1">
                         <h1>GANG</h1>
                    </div>
                    <div className="carousel-container">

                         <section>
                              <img src="/logos/flstudio.webp" width={250} height={150}
                                   alt="" />
                              <img src="/logos/sc.webp" width={250} height={150}
                                   alt="" />
                              <img src="/logos/spotify.webp" width={250} height={150}
                                   alt="" />
                         </section>

                         <section>
                              <img src="/logos/flstudio.webp" width={250} height={150}
                                   alt="" />
                              <img src="/logos/sc.webp" width={250} height={150}
                                   alt="" />
                              <img src="/logos/spotify.webp" width={250} height={150}
                                   alt="" />
                         </section>

                         <section>
                              <img src="/logos/flstudio.webp" width={250} height={150}
                                   alt="" />
                              <img src="/logos/sc.webp" width={250} height={150}
                                   alt="" />
                              <img src="/logos/spotify.webp" width={250} height={150}
                                   alt="" />
                         </section>

                    </div>
               </Fade>
          </section >
     )
}

export default LogoSlide
