import React from "react";
import { motion } from "framer-motion";
import logoImg from "../../assets/logo.svg";

import { HiMenuAlt3 } from "react-icons/hi";

const bannerVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    delay: 1,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 90,
      when: "beforeChildren",
      damping: 20,
    },
  },
};

const logoVariants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 120,
    },
  },
};

export default function Banner({ toggleCart }) {
  return (
    <motion.div
      className="w-full h-14 shadow-md z-50"
      variants={bannerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container h-full mx-auto flex justify-between items-center px-4">
        <motion.img
          src={logoImg}
          className="w-10"
          alt=""
          variants={logoVariants}
          whileHover={{ rotate: -45 }}
        />
        <h3 className="font-bold text-xl font-[Poppins]">La Maison Jungle</h3>
        <button
          className="text-2xl outline-none md:hidden focus-visible:ring-2 ring-primary rounded-sm"
          onClick={toggleCart}
        >
          <HiMenuAlt3 />
        </button>
      </div>
    </motion.div>
  );
}
