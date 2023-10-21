import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Loader from "../../utils/Loader/Loader";
import Services from "../services/Services";
import FramerMagnetic from "../../utils/MagneticButton/MagneticButton";

import "../../styles/Globals.scss";
import "../about/About.scss";
import "./Expertises.scss";

const Expertises = () => {
  const [rotation, setRotation] = useState([]);

  function rotate(i) {
    const newRotation = [...rotation];
    newRotation[i] = !newRotation[i];
    setRotation(newRotation);
  }

  return (
    <>
      <Loader />
      <section id="expertises">
        <main className="grid-layout">
          <div className="content-field">
            <div className="left">
              <div className="text-content">
                <h1>Especializações</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloremque delectus ex nam labore quisquam enim nisi quasi
                  dicta necessitatibus.
                </p>

                <p>
                  Amet consectetur adipisicing elit. Minima animi praesentium
                  commodi maiores hic sunt perspiciatis assumenda! Repudiandae,
                  mollitia? Vitae rem repellendus iste voluptatem aspernatur
                  ducimus eaque accusantium quia quidem!
                </p>
              </div>
            </div>
            <div className="right">
              {expertise.map((item, i) => (
                <details key={i}>
                  <motion.summary onClick={() => rotate(i)}>
                    {item.title}
                    <FramerMagnetic>
                      <div
                        className={`plusminus ${rotation[i] ? "active" : ""}`}
                      ></div>
                    </FramerMagnetic>
                  </motion.summary>
                  <AnimatePresence>
                    <ul>
                      {rotation[i] &&
                        item.items.map((itemName, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            {itemName}
                          </motion.li>
                        ))}{" "}
                    </ul>
                  </AnimatePresence>
                </details>
              ))}
            </div>
          </div>
        </main>
      </section>
      <Services />
    </>
  );
};

export default Expertises;

const expertise = [
  {
    title: "Design de Experiência do Usuário (UX)",
    items: [
      "Pesquisa de Usuários",
      "Wireframes",
      "Prototipagem",
      "Testes de Usabilidade",
      "Arquitetura de Informação",
      "Design de Interação",
    ],
  },
  {
    title: "Tecnologias Principais",
    items: [
      "JavaScript",
      "React",
      "CSS",
      "Sass",
      "Node.js",
      "Webpack",
      "Redux",
      "APIs RESTful",
      "Git",
      "Design Web Responsivo",
    ],
  },
  {
    title: "Desenvolvimento com Webflow",
    items: ["Webflow CMS", "Interações do Webflow", "Hospedagem no Webflow"],
  },
];
