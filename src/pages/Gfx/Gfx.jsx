import React from "react";
import './Gfx.scss';
import '../../styles/Globals.scss';
import Loader from "../../utils/Loader";

const Gfx = () => {
    return (
        <>            <Loader section='GFX WORKS SECTION' />
            <main id="gfx">

                <div className="grid-layout">
                    <div className="text-center">
                        <h1>ALSO A GFX DESIGNER</h1>
                        <div className="group-text">
                            {gfx.map((item) => (
                                <div className="gfx-content">
                                    <img src={item.image} alt="" />
                                    <div className="gfx-text">
                                        <a href="#">{item.title}</a>
                                        <a href="#">{item.year}</a>
                                        <a href="#">see full project</a>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main ></>
    );
};

export default Gfx;

const gfx = [
    { title: "SICKEE  ", year: "2022", image: "/gfx-1.png" },
    { title: "AZ ", year: "2023", image: "/gfx-2.png" },
    { title: "BERZERK - HEARTLSS ", year: "2019", image: "/gfx-3.jpg" },
    { title: "NEVERMIND ", year: "2020", image: "/gfx-4.png" },
]