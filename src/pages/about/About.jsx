import React from "react";
import "./About.scss";
import "../../styles/Globals.scss";

const About = () => {
  return (
    <>
      <section id="about">
        <main className="grid-layout">
          <div className="border-home"></div>

          <div className="about-content">
            <div className="title-about">
              <h1>
                A little bit <span>about me</span>
              </h1>
            </div>


              <div className="located">
                <span>Located in Rio de Janeiro</span>
                <div className="globe">
                  <img src="/globe.png" width={30} height={30} alt="" />
                </div>
              </div>
         

            <div className="sub-title-about-2">
              <p>
                Welcome to Knut Studio, a leading branding and design agency
                that ignites brands with captivating creativity and strategic
                vision. Our mission is to craft extraordinary brand experiences
                that leave a lasting impression.
              </p>
              <p>
                Our talented team of designers, strategists, and digital experts
                collaborate seamlessly to deliver holistic solutions tailored to
                your unique needs. From creating compelling logos and visually
                stunning websites to curating engaging social media campaigns,
                we leverage the power of storytelling to connect your brand with
                its audience on a profound level.
              </p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default About;
