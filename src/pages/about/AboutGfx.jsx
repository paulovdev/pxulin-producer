import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import './AboutGfx.scss';
import '../../styles/Globals.scss';

const AboutGfx = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
    const gfx = [
        { title: '/gfx-1.png' },
        { title: '/gfx-2.png' },
        { title: '/gfx-3.jpg' },
        { title: '/gfx-4.png' },
        { title: '/gfx-1.png' },
        { title: '/gfx-2.png' },
        { title: '/gfx-3.jpg' },
        { title: '/gfx-4.png' },
        { title: '/gfx-1.png' },
        { title: '/gfx-2.png' },
        { title: '/gfx-3.jpg' },
        { title: '/gfx-4.png' },
        { title: '/gfx-1.png' },
        { title: '/gfx-2.png' },
        { title: '/gfx-3.jpg' },
        { title: '/gfx-4.png' },
    ]

    return (

        <div className="text-center" ref={targetRef}>

            <h1>ALSO A GFX DESIGNER</h1>
            <img src="/scroll.gif" width={40} alt="" />

            <div ref={targetRef} className="group-text">
                <motion.div style={{ x }} className="left">
                    {gfx.map((item) => {
                        return <img src={item.title} />;
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default AboutGfx;
