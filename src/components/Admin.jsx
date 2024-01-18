import React, { useState } from "react";

const Admin = ({ addProduct }) => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function reactProduct() {
    let newProduct = {
      image: image,
      name: name,
      price: price,
      id: Date.now(),
    };
    addProduct(newProduct);
  }

  return (
    <section id="section">
      <div className="container">
        <div className="section">
          <h3>CREATE PRODUCT</h3>
          <input
            onChange={(e) => setImage(e.target.value)}
            type="text"
            placeholder="photo link URL"
          />
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="food name"
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="price"
          />
          <button onClick={reactProduct}>create</button>
        </div>
      </div>
    </section>
  );
};

export default Admin;
