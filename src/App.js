// Components
import React, { useState } from "react";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import ShoppingList from "./components/ShoppingList";

function App() {
  let [cart, setCart] = useState([]);

  let addToCart = (plant) => {
    let alreadyExist = cart.find((item) => item.name === plant.name);
    if (alreadyExist) {
      let newQuantity = alreadyExist.quantity + 1;
      let newList = cart.filter((item) => item.name !== plant.name);
      setCart([{ ...alreadyExist, quantity: newQuantity }, ...newList]);
    } else {
      setCart([{ ...plant, quantity: 1 }, ...cart]);
    }
  };

  let resetCart = () => {
    setCart([]);
  };

  return (
    <div className="app">
      <Banner />
      <div className="app-body">
        <Cart cart={cart} resetCart={resetCart} />
        <ShoppingList addToCart={addToCart} />
      </div>
    </div>
  );
}

export default App;
