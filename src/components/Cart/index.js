import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { BsFillCartFill as CartIco } from "react-icons/bs";

const cartVariants = {
  initial: {
    x: -300,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1.5,
      damping: 20,
      type: "spring",
      stiffness: 120,
    },
  },
};
const listVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: 0,
    transition: {
      delayChildren: 2,
      staggerChildren: 0.2,
    },
  },
};
const itemVariants = {
  initial: {
    x: -500,
  },
  animate: {
    x: 0,
  },
};

export default function Cart({ cart, resetCart }) {
  let total = 0;

  cart.forEach((element) => {
    let acc = element.price * element.quantity;
    total += acc;
  });

  useEffect(() => {
    document.title = `Total: $${total} | La Maison Jungle`;
  }, [total]);

  return (
    <motion.div
      className="cart"
      variants={cartVariants}
      initial="initial"
      animate="animate"
    >
      <div className="wrapper">
        <h3 className="cart-title">
          <CartIco />
          My Cart
        </h3>
        <motion.ul
          className="cart-list"
          variants={listVariants}
          initial="initial"
          animate="animate"
        >
          {cart.length > 0 ? (
            cart.map((plant) => (
              <motion.li
                className="cart-item"
                key={plant.id}
                variants={itemVariants}
              >
                <p className="plantName">
                  {plant.name} x {plant.quantity}
                </p>
                <p className="plantPrice">${plant.price * plant.quantity}</p>
              </motion.li>
            ))
          ) : (
            <motion.li className="cart-item" variants={itemVariants}>
              <p>Empty cart</p>
            </motion.li>
          )}
        </motion.ul>
        <p>Total: ${total}</p>
        <motion.p
          className="resetBtn"
          initial={{ opacity: 0.8 }}
          whileHover={{ scale: 1.1, opacity: 1 }}
          whileTap={{ scale: 1 }}
          onClick={resetCart}
        >
          Reset my cart
        </motion.p>
      </div>
    </motion.div>
  );
}
