import React, { useEffect } from "react";
import { BsFillCartFill as CartIco } from "react-icons/bs";

export default function Cart({ cart, resetCart, cartOpened, toggleCart }) {
  let total = 0;

  cart.forEach((element) => {
    let acc = element.price * element.quantity;
    total += acc;
  });

  useEffect(() => {
    document.title = `Total: $${total} | La Maison Jungle`;
  }, [total]);

  return (
    <div
      className={`fixed flex top-0 z-50 min-h-screen w-screen px-2 py-4 bg-dark text-white flex-grow flex-col transition-all gap-4 md:max-w-[280px] md:static ${
        cartOpened ? "left-0" : "left-[-100%]"
      }`}
    >
      <div className="text-xl flex items-center gap-4 px-4 py-2 bg-white text-dark rounded-md font-bold">
        <CartIco className="text-2xl" />
        <span>My Cart</span>
      </div>
      <ul className="flex flex-col gap-4">
        {cart.length > 0 ? (
          cart.map((plant) => (
            <li
              key={plant.id}
              className="bg-white text-dark rounded-md p-2 flex gap-1 justify-between"
            >
              <span>
                {plant.name} x {plant.quantity}
              </span>
              <span className="plantPrice">
                ${plant.price * plant.quantity}
              </span>
            </li>
          ))
        ) : (
          <li className="cart-item">
            <p>Empty cart</p>
          </li>
        )}
      </ul>
      <p>Total: ${total}</p>
      <button
        className="bg-danger text-white font-bold rounded-md py-2 shadow-md transition-all outline-none ring-danger ring-offset-2 ring-offset-dark focus-visible:ring-2 hover:scale-95"
        onClick={resetCart}
      >
        Reset
      </button>
      <button
        className="bg-white text-dark font-bold rounded-md py-2 shadow-md transition-all outline-none ring-white ring-offset-2 ring-offset-dark focus-visible:ring-2 hover:scale-95 md:hidden"
        onClick={toggleCart}
      >
        Close
      </button>
    </div>
  );
}
