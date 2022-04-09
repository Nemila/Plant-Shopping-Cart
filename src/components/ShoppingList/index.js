import React from "react";
import { motion } from "framer-motion";
import { plantList } from "../../utils/plantList";
import PlantItem from "../PlantItem";

const container = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 2,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

export default function ShoppingList({ addToCart }) {
  return (
    <div className="shoppingList">
      <div className="wrapper">
        <h3 className="shoppingList-title">Plant List</h3>
        <motion.div
          className="plantContainer"
          variants={container}
          initial="initial"
          animate="animate"
        >
          {plantList.map((plant) => (
            <PlantItem key={plant.id} plant={plant} addToCart={addToCart} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
