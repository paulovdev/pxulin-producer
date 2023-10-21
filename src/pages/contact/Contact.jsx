import { useState } from "react";
import { motion } from "framer-motion";

import Loader from "../../utils/Loader/Loader";

import "./Contact.scss";
import "../../styles/Globals.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://backend-ogzx-6fhrvu64t-pxulin.vercel.app/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  };

  return (
    <>
      <Loader />

      <section id="contact">
        <main className="grid-layout">
          <div className="text-content">
            <motion.h1>Entre em contato.</motion.h1>
            <p>
              Tem uma pergunta ou proposta ou apenas quer dizer olá? Vá em
              frente.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="name">Qual o seu nome?</label>
              <input
                id="name"
                type="text"
                placeholder="Paulo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="email">Qual o seu email?</label>
              <input
                id="email"
                type="email"
                placeholder="Paulo@example.com "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="textarea-wrapper">
              <label htmlFor="message">Me mande uma mensagem!</label>
              <textarea
                id="message"
                rows="10"
                placeholder="Message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button type="submit">Enviar</button>
          </form>
        </main>
      </section>
    </>
  );
};

export default Contact;
