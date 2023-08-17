import React from 'react';
import './Music.scss';
import { Fade } from 'react-awesome-reveal';


const Music = () => {

    return (

        <div id='music'>
            <div className="grid-layout">
                <div className="pxulin-music-1">
                    <Fade className='animation' cascade direction='down' duration={400} triggerOnce>
                        <h1>MUSIC</h1>
                        <p>
                            Pxulin's music spans across different genres and styles, including hip-hop, trap, and electronic music.
                        </p>
                    </Fade>
                </div>
                <div className="slider">
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Music;
