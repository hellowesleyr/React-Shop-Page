// App.js
import { Link, Routes, Route } from "react-router-dom";
import React from "react";
import uniqid from "uniqid";
import Navbar from "./Navbar";
import Checkout from "./Checkout";
import pillow1 from "../img/pillow1.jpg"
import pillow2 from "../img/pillow2.jpg"
import pillow3 from "../img/pillow3.jpg"
import pillow4 from "../img/pillow4.jpg"
import pillow5 from "../img/pillow5.jpg"
import pillow6 from "../img/pillow6.jpg"
import pillow7 from "../img/pillow7.jpg"
import pillow8 from "../img/pillow8.jpg"
import Shop from "./Shop";
import { useState } from "react";
import { useEffect } from "react";
import Home from "./Home";

const App = () => {




  const products = [
    {
      id: uniqid(),
      imgURL: pillow1,
      name: "Shups the Shepard",
      price: 24.99
    },
    {
        id: uniqid(),
        imgURL: pillow2,
        name: "Mountain Matt",
        price: 24.99
      },
      {
        id: uniqid(),
        imgURL: pillow3,
        name: "Freddy Fuzzball",
        price: 24.99
      },
      {
        id: uniqid(),
        imgURL: pillow4,
        name: "Autum Ari",
        price: 24.99
      },
      {
        id: uniqid(),
        imgURL: pillow5,
        name: "Pedro Piper",
        price: 24.99
      },
      {
        id: uniqid(),
        name: "Larry Longpaws",
        imgURL: pillow6,
        price: 24.99
      },
      {
        id: uniqid(),
        imgURL: pillow7,
        name: "Ginger Nut",
        price: 24.99
      },
      {
        id: uniqid(),
        imgURL: pillow8,
        name: "Marcilla",
        price: 24.99
      },
  ];
  const [cart, setCart] = useState([]);
  console.log(uniqid());

  const addToCart = (newItem, quantity) => {
    let alreadyInCart = false;
    const newCart = cart.map((item) => {
      if (item.id === newItem.id) {
          alreadyInCart = true;
        let prevQuantity = item.quantity;
        const updatedItem = {
          ...item,
          quantity: prevQuantity + quantity,
        };
        return updatedItem;
      }
      return item;
    });
    if (alreadyInCart === false) {

    }
    setCart(newCart)
  };

  return (
    <div className="appContainer">
      <Navbar cart = {cart}></Navbar>
      <Routes>
        <Route path="/" element={<Home ></Home>}></Route>
        <Route path="/home" element={<Home ></Home>}></Route>
        <Route path="/shop" element={<Shop products = {products}></Shop>}></Route>
        <Route path="/cart" element={<Checkout ></Checkout>}></Route>

      </Routes>
    </div>
  );
};

export default App;
