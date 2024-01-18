import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditProduct = ({ edits, handlerProduct }) => {
  const [product, setProduct] = useState(edits);
  function inputImage(e) {
    let newObj = { ...product };
    newObj.image = e.target.value;
    setProduct(newObj);
  }
  function inputName(e) {
    let newObj = { ...product };
    newObj.name = e.target.value;
    setProduct(newObj);
  }
  function inputPrice(e) {
    let newObj = { ...product };
    newObj.price = e.target.value;
    setProduct(newObj);
  }

  function saveChange() {
    handlerProduct(product);
  }
  return (
    <section id="section">
      <div className="container">
        <div className="section">
          <h3>EDIT PRODUCT</h3>
          <input
            onChange={inputImage}
            value={product.image}
            type="text"
            placeholder="photo link URL"
          />
          <input
            onChange={inputName}
            value={product.name}
            type="text"
            placeholder="food name"
          />
          <input
            onChange={inputPrice}
            value={product.price}
            type="text"
            placeholder="price"
          />
          <Link to="/menu">
            <button onClick={saveChange}>save</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EditProduct;
