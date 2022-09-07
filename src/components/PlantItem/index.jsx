import React from "react";
import { motion } from "framer-motion";
import { FaCartPlus } from "react-icons/fa";

export default function PlantItem({ plant, addToCart }) {
  return (
    <motion.div className="relative max-w-[325px] h-max rounded-md overflow-hidden bg-white transition-all group cursor-pointer hover:shadow-md">
      <div className="w-full aspect-video overflow-hidden">
        <img
          className="w-full h-full object-cover object-center transition-all group-hover:scale-110"
          src={plant.img}
          alt="plant"
        />
      </div>
      <div className="p-2 flex flex-col gap-2">
        <div className="flex justify-between w-full">
          <h4 className="text-lg font-medium">{plant.name}</h4>
          <p className="text-sm">${plant.price}</p>
        </div>
        <p className="text-sm opacity-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum aliquid
          iste eligendi numquam dolore unde.
        </p>
        <motion.button
          className="text-sm py-2 flex justify-center items-center gap-2 bg-blue text-white rounded-md ring-blue ring-offset-2 ring-offset-white outline-none focus-visible:ring-2"
          whileTap={{ scale: 0.9 }}
          onClick={() => addToCart(plant)}
        >
          <span>Add to cart</span>
          <FaCartPlus />
        </motion.button>
      </div>
    </motion.div>
  );
}
