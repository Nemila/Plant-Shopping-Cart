import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { MdWaterDrop } from "react-icons/md";
import { FaCartPlus, FaSun } from "react-icons/fa";

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
  let careScale = [[], []];
  useEffect(() => {
    for (let i = 0; i < plant.sun; i++) {
      careScale[0].push(<MdWaterDrop />);
    }
    for (let i = 0; i < plant.water; i++) {
      careScale[1].push(<FaSun />);
    }
  }, []);

  function handleCare(type) {
    let careValue = type === "sun" ? careScale[1].length : careScale[0].length;
    let comment = "";
    if (careValue < 2) {
      comment = "peu";
    } else if (careValue > 2) {
      comment = "beaucoup";
    } else {
      comment = "moyen";
    }
    return comment;
  }

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
      <div className="care-container">
        <div
          className="care-box"
          onClick={() =>
            alert(`Cette plante demande ${handleCare("water")} d'eau`)
          }
        >
          {careScale[0].map((icon) => icon)}
        </div>
        <div
          className="care-box"
          onClick={() =>
            alert(`Cette plante demande ${handleCare("sun")} de soleil`)
          }
        >
          {careScale[1].map((icon) => icon)}
        </div>
      </div>
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
