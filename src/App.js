import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Orders from "./components/Orders";
import { useState } from "react";
import EditProduct from "./components/EditProduct";

function App() {
  const [data, setData] = useState([]);
  const [orders, setOrders] = useState([]);
  const [edits, setEdits] = useState({});

  function addProduct(newProduct) {
    let data = JSON.parse(localStorage.getItem("food")) || [];
    data.push(newProduct);
    localStorage.setItem("food", JSON.stringify(data));
    readProduct();
  }

  function readProduct() {
    let data = JSON.parse(localStorage.getItem("food")) || [];
    setData(data);
  }
  function deleteProduct(id) {
    let data = JSON.parse(localStorage.getItem("food")) || [];
    let deleteItems = data.filter((el) => el.id !== id);
    localStorage.setItem("food", JSON.stringify(deleteItems));
    readProduct();
  }
  function addToProduct(id) {
    let order = JSON.parse(localStorage.getItem("product_orders")) || [];
    setOrders(orders);
    let data = JSON.parse(localStorage.getItem("food")) || [];
    if (orders.some((item) => item.id === id)) {
      alert("error");
    } else {
      let findItem = data.find((el) => el.id === id);
      orders.push(findItem);
      localStorage.setItem("product_orders", JSON.stringify(findItem));
    }
  }

  function editProduct(index) {
    setEdits(data[index]);
  }

  function handlerProduct(newProduct) {
    let order = JSON.parse(localStorage.getItem("food")) || [];

    let newData = data.map((el) => {
      if (newProduct.id === el.id) {
        return newProduct;
      }
      return el;
    });
    localStorage.setItem("food", JSON.stringify(newData));
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/menu"
          element={
            <Menu
              data={data}
              readProduct={readProduct}
              deleteProduct={deleteProduct}
              addToProduct={addToProduct}
              editProduct={editProduct}
            />
          }
        />
        <Route path="/admin" element={<Admin addProduct={addProduct} />} />
        <Route path="/orders" element={<Orders />} />
        <Route
          path="/edit/:id"
          element={
            <EditProduct edits={edits} handlerProduct={handlerProduct} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
