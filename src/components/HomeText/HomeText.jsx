import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import "./HomeText.scss";


const HomeText = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    requestAnimationFrame(animate);
    xPercent += 0.08 * direction;
  }

  return (
    <section id="homeText">
      <div className="sliderContainer">
        <div ref={slider} className='slider'>
          <p ref={firstText}>A <span>WEB</span> DEVELOPER AND <span>UX/UI</span> DESIGNER</p>
          <p ref={secondText}>A <span>WEB</span> DEVELOPER AND <span>UX/UI</span> DESIGNER</p>
        </div>

      </div>
    </section >
  );
};

export default HomeText;
