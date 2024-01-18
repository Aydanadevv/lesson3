import React from "react";
import logo from "../images/image 2.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <img src={logo} alt="" />

          <nav>
            {" "}
            <Link to="/menu">
              <h3>MENU</h3>
            </Link>
            <Link to="/admin">
              <h3>ADMIN</h3>
            </Link>
            <Link to="orders">
              <h3>ORDERS</h3>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
