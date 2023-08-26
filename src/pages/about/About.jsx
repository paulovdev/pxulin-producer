import React from 'react';
import './About.scss';
import { Fade } from 'react-awesome-reveal';

const About = () => {
    return (
        <section id='about'>
            <main className="grid-layout">
                <div className="text-content">
                    <Fade cascade direction='down' duration={400} triggerOnce>
                        <h1>ABOUT 關於</h1>
                        <p>
                            Pxulin is a music artist who has released a variety of tracks, albums, and playlists on SoundCloud. They have collaborated with other artists such as Lvcifer, Marty Menning, and Grvnnek, and have produced drum kits such as the "Infernal Drum Kit" and the "Invocation Drum Kit Vol. 1".
                        </p>
                        <p>
                            Some of Pxulin's most popular tracks include "Cursed" featuring Marty Menning, "Psycho" featuring Lvcifer, and "Deadly War" featuring Grvnnek and ProdNikick. Their music spans a range of genres and styles, including hip-hop, trap, and electronic music.
                        </p>
                        <p>
                            Pxulin's music can be streamed for free on SoundCloud, both on desktop and mobile devices. They are a talented artist who is constantly creating new and exciting music, and I highly recommend checking them out.
                        </p>
                    </Fade>
                </div>
            </main>
        </section>
    );
};

export default About;
