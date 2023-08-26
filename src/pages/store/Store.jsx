import React, { useState } from "react";
import "./Store.scss";
import { Fade } from "react-awesome-reveal";
const Store = () => {
  const products = [
    {
      product: "SWEATSHIRT ANGELS",
      image: "/loja/angels.webp",
      price: "£50.00",
    },
    { product: "COAT KILLER", image: "/loja/killer.webp ", price: "£35.00" },
    { product: "SHIRT SKULL", image: "/loja/skull.webp ", price: "£25.00" },
    {
      product: "SWEATSHIRT PXULIN",
      image: "/loja/px-mol.webp ",
      price: "£50.00",
    },
    { product: "SHIRT PXULIN", image: "/loja/px-sh.webp ", price: "£25.00" },
    { product: "SHIRT PXULIN PEACE", image: "/loja/px.webp ", price: "£25.00" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    return product.product.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <section id="store">
      <main className="grid-layout">
        <div className="store-content">
          <Fade
            className="animation"
            cascade
            direction="down"
            duration={800}
            triggerOnce
          >
            <h1>MERCH 店鋪</h1>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Fade>
        </div>
        <div className="store-main">
          <div className="store-cards">
            {filteredProducts.length == 0 ? (
              <div className="no-results">
                <p>No result in your search</p>
              </div>
            ) : (
              filteredProducts.map((item, index) => (
                <Fade
                  className="animation"
                  cascade
                  direction="down"
                  duration={400}
                  delay={index * 300}
                  triggerOnce
                >
                  <div key={item.product} className="card">
                    <img src={item.image} alt="" />
                    <p>{item.product}</p>
                    <br />
                    <p>{item.price}</p>
                  </div>
                </Fade>
              ))
            )}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Store;
