// Components
import React, { useState } from "react";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import ShoppingList from "./components/ShoppingList";

function App() {
  let [cart, setCart] = useState([]);
  let [cartOpened, setCartOpened] = useState(false);
  const toggleCart = () => setCartOpened((prev) => !prev);

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

  let resetCart = () => setCart([]);

  return (
    <div className="flex flex-col min-h-screen">
      <Banner toggleCart={toggleCart} />
      <div className="flex flex-grow">
        <Cart
          cart={cart}
          resetCart={resetCart}
          cartOpened={cartOpened}
          toggleCart={toggleCart}
        />
        <div>
          <ShoppingList addToCart={addToCart} />
          <ShoppingList addToCart={addToCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
