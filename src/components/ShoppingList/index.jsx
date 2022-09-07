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
    <div className="container mx-auto p-6 flex flex-col gap-2 pt-10">
      <h3 className="font-bold text-xl">Most popular plants</h3>
      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        variants={container}
        initial="initial"
        animate="animate"
      >
        {plantList.map((plant) => (
          <PlantItem key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </motion.div>
    </div>
  );
}
