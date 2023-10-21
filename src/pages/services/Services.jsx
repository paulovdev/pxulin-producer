import React from "react";
import "./Services.scss";
import "../../styles/Globals.scss";

const Services = () => {
  return (
    <section id="services">
      <main className="grid-layout">
        <div className="text-content">
          <h1>Eu posso te ajudar com...</h1>
        </div>

        <div className="cards">
          {services.map((service, index) => (
            <div className="card" key={index}>
              <div className="order">0{index + 1}</div>
              <div className="text-card">
                <h1>{service.title}</h1>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Services;
const services = [
  {
    title: "Design",
    description:
      "Com um histórico sólido em design de sites e aplicativos, entrego designs digitais fortes e amigáveis ao usuário. A construção sólida de uma marca empresarial é a base de qualquer site de sucesso.",
  },
  {
    title: "Desenvolvimento",
    description:
      "Construo sites escaláveis do zero que se integram perfeitamente ao design. Meu foco está em microanimações, transições e interações. Para gerenciamento de conteúdo, utilizo o CMS Kirby.",
  },
  {
    title: "Completo",
    description:
      "Um site completo, desde o conceito até a implementação, é o que me destaca. Minha grande habilidade em design e minhas habilidades de desenvolvimento me permitem criar projetos incríveis.",
  },
];
