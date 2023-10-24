import React from "react";
import "./ContactHome.scss";
import { Link } from "react-router-dom";
import Magnetic from "../../utils/MagneticButton/MagneticButton";

const ContactHome = () => {
  return (
    <section id="contact-home">
      <main className="grid-layout">
        <div className="text-content">
          <Magnetic>
            <Link to="/contact">
              <h1>
                Vamos conversar!
              </h1>
              <div className="border-"></div>
            </Link>
          </Magnetic>
        </div>
      </main>
    </section>
  );
};

export default ContactHome;
