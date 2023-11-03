import React from "react";

import "./Services.scss";
import "../../styles/Globals.scss";

const Works = () => {
  return (
    <section id="services">
      <div className="servicesContent">
        {works.map((item) => (
          <>
            <div key={item.order} className="service">
              <img src={item.image} alt="" />
              <div className="text-services">
                <span>{item.order}</span>
                <h1>{item.title}</h1>
                <p>{item.subTitle}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Works;

const works = [
  {
    order: "01",
    title: "Branding",
    subTitle:
      "Unveil your brand's essence through a meticulous blend of imagery, messaging, and strategy. Crafting identities that resonate and endure.",
    image: "/roll.svg",
  },
  {
    order: "02",
    title: "Design",
    subTitle:
      "Designing experiences that captivate users from the first click. Intuitive interfaces that lead to seamless interactions.",
    image: "/design.svg",
  },
  {
    order: "03",
    title: "Development",
    subTitle:
      "Translating visions into dynamic digital solutions. From responsive websites to interactive applications, driving innovation..",
    image: "/dev.svg",
  },
];
