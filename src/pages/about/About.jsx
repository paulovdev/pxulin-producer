import React from "react";
import "./About.scss";
import "../../styles/Globals.scss";

const About = () => {
  return (
    <>
      <section id="about">
        <main className="grid-layout">
          <div className="about-content">
            <div className="left">
              <span>Sobre mim</span>
            </div>
            <div className="right">
              <p>
                Meu nome é Paulo Vitor, tenho 19 anos e tenho uma paixão para
                criar experiências digitais bonitas e alegres. Além do mais
                programação, tenho um profundo amor por design, jogos e
                viajando. Nos últimos anos, tive o privilégio de trabalhando com
                indivíduos criativos de agências, startups e pequenas empresas
                em vários projetos de design e desenvolvimento.
              </p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default About;
