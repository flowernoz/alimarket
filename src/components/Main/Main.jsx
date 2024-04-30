import React from "react";
import "./css.css";
import Sitebar from "../Sitebar/Sitebar";
// import Cart from "../../pages/cart";
// import EmptyCart from "../../components/emptyCart";
// import Checkout from "../../pages/checkout";
import Navbar from "../Navbar/Navbar";

export default function Main() {
  return (
    <div className="main">
      <Sitebar />
      <Navbar />
      <div className="right"></div>
    </div>
  );
}
