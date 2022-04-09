import React from "react";
import { motion } from "framer-motion";
import logoImg from "../../assets/logo.svg";

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

export default function Banner() {
  return (
    <motion.div
      className="banner"
      variants={bannerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="wrapper">
        <motion.img
          src={logoImg}
          className="banner-logo"
          alt="Plant logo"
          variants={logoVariants}
          whileHover={{ rotate: 360 }}
        />
        <h3>La Maison Jungle</h3>
      </div>
    </motion.div>
  );
}
