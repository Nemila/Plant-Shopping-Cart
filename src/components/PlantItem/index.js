import React from "react";
import { motion } from "framer-motion";
import { FaCartPlus } from "react-icons/fa";

const plantItem = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

export default function PlantItem({ plant, addToCart }) {
  return (
    <motion.div
      className="plantItem"
      variants={plantItem}
      whileHover={{ boxShadow: "0 0 5px lightgrey" }}
    >
      <img
        src="https://picsum.photos/250/200"
        alt="plant"
        className="plant-cover"
      />
      <h4>{plant.name}</h4>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => addToCart(plant)}
        className="addBtn"
      >
        Add to cart <FaCartPlus />
      </motion.button>
    </motion.div>
  );
}
